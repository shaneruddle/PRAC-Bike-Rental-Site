// Homepage bike finder (components/bike-finder.ejs) and "pick this bike" links.
// Any [data-pick] link selects that bike in the quote card and scrolls to it.
document.addEventListener('DOMContentLoaded', () => {
    const pick = slug => {
        const tile = document.querySelector(`.qb-bike[data-slug="${slug}"]`);
        if (!tile) return false;
        tile.click();
        document.getElementById('search-bikes').scrollIntoView({ behavior: 'smooth', block: 'start' });
        return true;
    };
    document.querySelectorAll('[data-pick]').forEach(a => a.addEventListener('click', e => {
        if (pick(a.dataset.pick)) e.preventDefault();
    }));

    const form = document.getElementById('bf-form');
    if (!form) return;
    const scores = JSON.parse(form.dataset.scores);
    const tiebreak = JSON.parse(form.dataset.tiebreak);
    const opts = Array.from(form.querySelectorAll('.bf-opt'));
    let touched = false;

    function update() {
        const answers = opts.filter(o => o.classList.contains('is-on')).map(o => o.dataset.a);
        const total = slug => answers.reduce((sum, a) => sum + (scores[slug][a] || 0), 0);
        const best = tiebreak.reduce((win, slug) => (total(slug) > total(win) ? slug : win));
        document.querySelectorAll('.bf-result').forEach(r => r.classList.toggle('hidden', r.dataset.slug !== best));
        if (touched && typeof gtag === 'function') gtag('event', 'bike_finder', { answers: answers.join(','), bike: best });
    }

    opts.forEach(o => o.addEventListener('click', () => {
        opts.filter(x => x.dataset.q === o.dataset.q).forEach(x => {
            x.classList.toggle('is-on', x === o);
            x.setAttribute('aria-pressed', x === o ? 'true' : 'false');
        });
        touched = true;
        update();
    }));
    update();
});
