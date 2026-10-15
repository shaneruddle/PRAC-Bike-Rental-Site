// Build-time prices from the live pricing engine (the same engine the booking
// site uses). Quotes start 14 days after the build date (Bangkok time), outside
// the engine's short-notice availability window, so they reflect the normal
// seasonal rate rather than a last-minute discount. The site rebuilds daily
// (see .github/workflows/firebase-hosting-deploy.yml) so prices stay current.
//
// If the API can't be reached the build still succeeds and pages simply show
// no prices (same as before this feature).

const API = "https://app.pattayarentacar.com/api/public/quote";
const LEAD_DAYS = 14;
const DURATIONS = [3, 7, 30]; // days: short stay, weekly rate, 30-day rate

const bangkokToday = () => {
  const now = new Date(Date.now() + 7 * 3600 * 1000); // GMT+7
  return new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
};
const iso = (d) => d.toISOString().slice(0, 10);
const addDays = (d, n) => new Date(d.getTime() + n * 86400000);

async function quote(cls, from, to) {
  const url = `${API}?class=${encodeURIComponent(cls)}&from=${from}&to=${to}`;
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 15000);
  try {
    const res = await fetch(url, { signal: ctrl.signal });
    if (!res.ok) return null;
    const q = await res.json();
    return q && q.quotable && Number.isFinite(q.perDay) ? q : null;
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

// Returns { asOf, startDate, byClass: { [class]: { 3: perDay, 7: perDay, 30: perDay, from } } }
// or null when no prices could be fetched.
export async function fetchPrices(classes) {
  const start = addDays(bangkokToday(), LEAD_DAYS);
  const byClass = {};
  for (const cls of [...new Set(classes)]) {
    const rates = {};
    for (const days of DURATIONS) {
      const q = await quote(cls, iso(start), iso(addDays(start, days)));
      if (q) rates[days] = q.perDay;
    }
    const values = Object.values(rates);
    if (values.length) byClass[cls] = { ...rates, from: Math.min(...values) };
  }
  if (!Object.keys(byClass).length) return null;
  return { asOf: iso(bangkokToday()), startDate: iso(start), byClass };
}
