// Homepage instant quote (components/quote-builder.ejs).
// Asks the pricing engine for the live price of the selected bike and dates. When the
// next tier (7 or 30 days) is cheaper per day, offers to stretch the rental to it.
// If the live quote fails, falls back to the build-time rates (labelled as an estimate).
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('booking-form');
    if (!form || form.dataset.quote !== '1') return;

    const API = 'https://app.pattayarentacar.com/api/public/quote';
    const TIERS = [7, 30];      // rate tiers the engine prices (3-day rate applies below 7)
    const MONTHLY_FROM = 31;    // engine redirects 31+ days to "contact us"
    const copy = JSON.parse(form.dataset.copy);
    const bikes = Array.from(form.querySelectorAll('.qb-bike'));
    const elSummary = document.getElementById('qb-summary');
    const elRate = document.getElementById('qb-rate');
    const elTotal = document.getElementById('qb-total');
    const elNudge = document.getElementById('qb-nudge');
    const elCtaLabel = document.getElementById('qb-cta-label');
    const elFrom = document.getElementById('dp-input-pickup');
    const elTo = document.getElementById('dp-input-return');

    const baht = n => '฿' + Math.round(n).toLocaleString('en-US');
    const fill = (s, vars) => s.replace(/\{(\w+)\}/g, (_, k) => vars[k]);
    const dayCount = (a, b) => Math.round((new Date(b + 'T00:00:00Z') - new Date(a + 'T00:00:00Z')) / 86400000);
    const addDays = (iso, n) => new Date(Date.parse(iso + 'T00:00:00Z') + n * 86400000).toISOString().slice(0, 10);
    const daysLabel = n => n + ' ' + (n === 1 ? copy.day : copy.days);
    const selected = () => bikes.find(b => b.classList.contains('is-selected')) || bikes[0];

    const cache = {};
    async function liveQuote(cls, from, to) {
        const key = [cls, from, to].join('|');
        if (!cache[key]) {
            cache[key] = fetch(`${API}?class=${encodeURIComponent(cls)}&from=${from}&to=${to}`)
                .then(r => (r.ok ? r.json() : null))
                .then(q => (q && q.quotable && Number.isFinite(q.totalPrice) ? q : null))
                .catch(() => null);
        }
        return cache[key];
    }

    // Build-time fallback: the 3-, 7- and 30-day rates baked into the page.
    function estimate(bike, days) {
        if (!bike.dataset.rates) return null;
        const r = JSON.parse(bike.dataset.rates);
        const perDay = days >= 30 ? r[30] : days >= 7 ? r[7] : r[3];
        return perDay ? { perDay, totalPrice: perDay * days, estimate: true } : null;
    }

    let seq = 0;
    async function update() {
        const bike = selected();
        const from = elFrom.value, to = elTo.value;
        if (!from || !to) return;
        const days = dayCount(from, to);
        const run = ++seq;
        form.dataset.bike = bike.dataset.slug;
        elCtaLabel.textContent = fill(copy.cta, { bike: bike.dataset.short });
        elSummary.textContent = bike.dataset.name + ' · ' + daysLabel(days);
        elNudge.classList.add('hidden');
        // Tile prices follow the chosen rental length (build-time rates).
        bikes.forEach(b => {
            const e = estimate(b, Math.min(days, 30));
            if (e) b.querySelector('.qb-price').textContent = baht(e.perDay) + copy.perDay;
        });

        if (days >= MONTHLY_FROM) {
            elRate.innerHTML = `<a href="${form.dataset.monthlyHref}" class="underline">${copy.monthly}</a>`;
            elTotal.textContent = '–';
            return;
        }

        elRate.textContent = copy.loading;
        elTotal.classList.add('opacity-40');
        const next = TIERS.find(t => t > days);
        const [live, liveNext] = await Promise.all([
            liveQuote(bike.dataset.class, from, to),
            next ? liveQuote(bike.dataset.class, from, addDays(from, next)) : null,
        ]);
        if (run !== seq) return; // a newer selection has started

        const q = live || estimate(bike, days);
        elTotal.classList.remove('opacity-40');
        if (!q) {
            elRate.textContent = copy.confirmNext;
            elTotal.textContent = '–';
            return;
        }
        elRate.textContent = (q.estimate ? copy.approx + ' ' : '') + baht(q.perDay) + copy.perDay;
        elTotal.textContent = (q.estimate ? '~' : '') + baht(q.totalPrice);

        // Nudge: same source as the main price (live, or both estimates), only when the next tier is cheaper per day.
        const n = liveNext || (q.estimate && next ? estimate(bike, next) : null);
        if (n && n.perDay < q.perDay) {
            elNudge.dataset.days = next;
            elNudge.innerHTML = fill(copy.nudge, {
                days: next,
                rate: baht(n.perDay),
                extra: baht(Math.max(0, n.totalPrice - q.totalPrice)),
                more: next - days,
            }) + ` <span class="font-black text-primary whitespace-nowrap">${fill(copy.nudgeCta, { days: next })} &rarr;</span>`;
            elNudge.classList.remove('hidden');
        }
    }

    bikes.forEach(b => b.addEventListener('click', () => {
        bikes.forEach(x => { x.classList.toggle('is-selected', x === b); x.setAttribute('aria-checked', x === b ? 'true' : 'false'); });
        update();
    }));
    elNudge.addEventListener('click', () => {
        const days = +elNudge.dataset.days;
        if (typeof gtag === 'function') gtag('event', 'quote_extend', { days: days, bike: selected().dataset.slug });
        form.dispatchEvent(new CustomEvent('dp:set-length', { detail: { days } }));
    });
    form.addEventListener('dp:change', update);
    update();
});
