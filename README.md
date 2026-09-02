# DAN — Draper Angel Network

Marketing site plus a signed-in portal for the Draper Angel Network.

**Stack:** React 18 · Vite 5 · React Router 7 · Framer Motion 11 · three/@react-three (login visual only)

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # → dist/
```

Deployed on Vercel; `vercel.json` rewrites every path to `/index.html` so SPA
deep links resolve.

---

## Structure

```
src/
├── components/          marketing sections + chrome + shared icons
├── context/
│   ├── AuthContext.jsx  demo session (role, name, email) → localStorage
│   └── DataContext.jsx  events, founders, learning progress → localStorage
├── data/
│   ├── learning.js      the nine-module angel-investing curriculum
│   ├── events.js        seed events
│   └── founders.js      seed founder pipeline
├── layouts/
│   └── DashboardLayout.jsx   portal shell — role-aware sidebar
├── pages/
│   ├── Home.jsx         the marketing spine (16 sections)
│   ├── LoginPage.jsx    investor / founder / admin
│   └── portal/          Overview · Founders · Events · LearnIndex · LearnModule
├── index.css            marketing styles + design tokens
└── portal.css           portal styles (reuses the same tokens)
```

---

## Roles and routes

| Route | Investor | Founder | Admin |
|---|:--:|:--:|:--:|
| `/portal` overview | ● | ● | ● (network view) |
| `/portal/learn` learning track | ● | ● | — |
| `/portal/events` | register | register | **publish / remove** |
| `/portal/founders` | — | — | ● |

Sign in at `/login/investor`, `/login/founder` or `/login/admin`. Any
credentials that pass form validation are accepted — there is no backend.
**Sign-up** stays a request ("we'll be in touch"), because DAN accounts are
invite-curated; **sign-in** opens the portal.

Guards live in `App.jsx` (`RequireRole`) and the sidebar derives its items from
the same role, so a member who types an admin URL is redirected rather than
shown a dead end.

---

## The learning track

Nine modules, ~141 minutes, 24 checkpoint questions, 47 glossary terms. Written
for someone who has never bought a share of a private company, running in order
so each module assumes only what came before it:

1. What angel investing actually is
2. How a startup raises money — stages, SAFE/CCD/CCPS, syndicates
3. Equity, cap tables and dilution — worked with real numbers
4. Valuation — where the number comes from, and the return test
5. Due diligence — a working checklist and the red flags
6. Term sheets — the clauses that matter, and what a small cheque can negotiate
7. Portfolio construction and the power law
8. Exits, liquidity and realistic timelines
9. Making the decision — the four-pass review and the pre-mortem

Each module ends with a checkpoint that scores answers and explains **why** each
one is right, so "read it" and "understood it" are separate signals. Progress
and scores persist per browser and drive the sidebar progress card.

Content is educational only and carries a standing disclaimer. Tax and
securities rules referenced in Module 08 change frequently — they are written at
a deliberately stable level with an instruction to verify.

---

## Data and persistence

There is no backend. `DataContext` seeds from `src/data/` and persists to
localStorage, which gives the one property that matters: **an event an admin
publishes is immediately visible in every member's calendar**, because both
views read the same store. Clearing site data resets to the seeds.

---

## Known items

- The bundle is ~1.28 MB (369 kB gzipped), dominated by `three` / `@react-three`
  which is used only by `ParticleField` on the login visual. A `React.lazy`
  boundary there would cut most of it from the initial load.
- `AboutStory.jsx`, `DraperNetwork.jsx` and `VideoShowcase.jsx` are built but
  not mounted in `Home.jsx`.
