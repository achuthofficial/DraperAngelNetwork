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

Twelve briefings in four parts, ~4h30m of reading, 63 checkpoint questions, 99
glossary terms. Written for the audience the network actually serves —
professionals aged roughly 30-60 who are expert in something other than
venture — so the presentation is a **reference in four parts**, not a linear
course:

| Part | Briefings | |
|---|---|---|
| **I — The ground rules** | 01 What angel investing is · 02 How a startup raises money · 03 Equity, cap tables and dilution | 68 min |
| **II — Judging a single deal** | 04 Valuation · 05 Due diligence · 06 Term sheets | 79 min |
| **III — Building a portfolio** | 07 Portfolio construction · 08 Exits and timelines · 09 Making the decision | 68 min |
| **IV — Once you are actually investing** | 10 Syndicates and SPVs · 11 Indian tax and regulation · 12 Being useful after you invest | 55 min |

Each part is enterable on its own — someone who already raises or invests can
go straight to Part II. Presentation decisions follow from the audience:

- **Prose is set in Source Serif 4 at ~18px / 1.78 at 82% ink**, against the
  15px sans / 58% used for dashboard chrome. Fraunces stays on headings: it is
  a display serif, lovely at 40px and tiring at body size. These are
  fifteen-minute reads and presbyopia starts around 40.
- **Nothing is gamified.** No completion percentage, no streak, no score out of
  twelve. Progress is recorded and shown as a bookmark ("you have read 4 of
  12, your place is saved"), never as a grade to chase.
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
  answer is presented as the point of the exercise. Correct answers are spread
  evenly across the four positions, so guessing one letter scores 25%.
- **A print stylesheet** ships, because this reader prints briefings.

### Photography

Each briefing carries one photograph from the DraperU India house, and each
part a band image; `src/data/imagery.js` holds the registry. Captions are the
factual descriptions of what each photograph shows, carried over verbatim from
the source posts — never rewritten to match the briefing they sit above. The
images are context, not illustration.

The three advisory-council portraits are deliberately excluded: they show named
individuals, one a serving public official, and a face above a briefing implies
that person authored or endorses it. Hero images open in a native `<dialog>`
lightbox, so Escape, focus handling and inertness come from the platform;
intrinsic dimensions are recorded on every `<img>`, and measured CLS on the
index is 0.000.

Content is educational only and carries a standing disclaimer. Briefing 11
deliberately quotes **no** tax rates or thresholds: Indian rules change with
each Finance Act, so it names the durable structures and the questions to put
to a chartered accountant instead.

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
