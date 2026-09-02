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

## The briefings

Nine briefings in three parts, ~2h21m of reading, 24 checkpoint questions, 47
glossary terms. Written for the audience the network actually serves —
professionals aged roughly 30-60 who are expert in something other than
venture — so the presentation is a **reference in three parts**, not a linear
course:

| Part | Briefings | |
|---|---|---|
| **I — The ground rules** | 01 What angel investing is · 02 How a startup raises money · 03 Equity, cap tables and dilution | 45 min |
| **II — Judging a single deal** | 04 Valuation · 05 Due diligence · 06 Term sheets | 53 min |
| **III — Building a portfolio** | 07 Portfolio construction · 08 Exits and timelines · 09 Making the decision | 43 min |

Each part is enterable on its own — someone who already raises or invests can
go straight to Part II. Presentation decisions follow from the audience:

- **Body copy is set at ~17px / 1.8 line-height at 82% ink**, against the 15px /
  58% used for dashboard chrome. These are fifteen-minute reads and presbyopia
  starts around 40.
- **Nothing is gamified.** No completion percentage, no streak, no score out of
  nine. Progress is recorded and shown as a bookmark ("you have read 4 of 9,
  your place is saved"), never as a grade to chase.
- **Every briefing opens with an "In brief" panel** — the outcome in one line
  plus a jump list of what it covers — so a reader can decide in fifteen seconds
  whether to spend the next quarter of an hour.
- **A sticky contents column** tracks the reader's position on desktop (hidden
  below 1180px, where the brief panel's jump list serves the same purpose).
- **Worked examples are set as financial figures**, and the two that carry a
  shape also render it: a before/after pair for dilution, and a 24-square unit
  chart for the power law. The source table always stays on the page beside the
  visual — this audience checks the arithmetic. Figure colour is one hue in
  three ordinal steps, validated for monotone lightness, step separation and
  contrast against the card surface.
- **The checkpoint is framed as judgement, not examination** ("Check your
  judgement" / "Show me the reasoning"), and the written explanation under each
  answer is presented as the point of the exercise.
- **A print stylesheet** ships, because this reader prints briefings.

Content is educational only and carries a standing disclaimer. Tax and
securities rules referenced in Briefing 08 change frequently — they are written
at a deliberately stable level with an instruction to verify.

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
