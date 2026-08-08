# Pattaya Rent a Bike - Site

Static marketing site for Pattaya Rent a Bike, rebuilt off Google AI Studio onto
the same Firebase project used by the rest of the Pattaya Rent A Car stack
(`pattaya-rent-a-car-rebuild`).

## Architecture

- Static HTML generated from EJS templates (same pattern as `PRAC-Marketing-Site`).
- Tailwind CSS v4, restyled with PRAC's brand tokens (orange/paper/ink) for
  visual consistency with pattayarentacar.com.
- Deployed to a dedicated Firebase Hosting site (`prac-bike-rental`, target
  `bike-rental`) inside the shared project - not the default hosting site.
- Content (fleet, pricing, FAQs, reviews) lives in `src/data/site.js`,
  verified against the live pattayarentabike.com homepage.

## Getting started

```
npm install
npm run dev     # build + local preview on http://localhost:3000
npm run build   # production build to dist/
```

## Deployment

Pushing to `main` triggers `.github/workflows/firebase-hosting-deploy.yml`,
which builds the site and deploys to the `bike-rental` Hosting target via
the `FIREBASE_SERVICE_ACCOUNT_PATTAYA_RENT_A_CAR_REBUILD` repo secret.

Default URL until domain cutover: https://prac-bike-rental.web.app

## Known follow-ups

- Contact form posts to `/api/contact`, which is not yet wired to a backend.
  A Firebase Cloud Function (`functions/`) needs to be added and referenced
  via a Hosting rewrite in `firebase.json` before the form actually sends
  email. Until then, the form will show a WhatsApp fallback on submit failure.
- Domain cutover (pointing pattayarentabike.com at this site) is a separate,
  explicit step - not done automatically by this deploy.
