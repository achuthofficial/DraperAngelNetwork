# DraperU India — Website Build Prompt

Build a **four-page** site for **DraperU India**, a 27,000 sq ft founder house in Gachibowli, Hyderabad — the largest Draper Startup House in the world. It is not a coworking floor and not a hotel. People live in it, work in it, and run events in it, around the clock. The site's one job is to make 27,000 sq ft *feel* like 27,000 sq ft, and to make a stranger want to walk in.

Tone: warm, informal, slightly irreverent, community-first. The brand's own word is **house**, never "facility" or "campus." Their line is *"We invite you to our humble abode tucked in Gachibowli."* Their mission is *"Enable 1 million entrepreneurs by 2030."* Do not make this read like a corporate accelerator. Think a film title sequence for a place that never turns the lights off — not a SaaS landing page.

**Stack:** **Vite + React 18 + TypeScript**, **React Router v6**, Tailwind, Framer Motion, GSAP ScrollTrigger for the pinned sequences, Lenis for smooth scroll. No Next.js, no SSR framework.

---

## Pages & routing

Four routes, four links in the nav. The wordmark also returns to `/`.

| Route | Nav label | Carries |
|---|---|---|
| `/` | **The House** | Hero, ecosystem strip, the four-chapter house scroll, the film, the three doors |
| `/programs` | **Programs** | Draper Founder Program, 10-day residential cohort, workshops & masterclasses, apply flow |
| `/events` | **Events** | Upcoming calendar, past highlights, hackathons & pitch nights, partners |
| `/stay` | **Stay** | Coworking memberships, room types, rates, book-a-bed flow |

The home page is the full arc and stands alone — someone who lands on `/` and scrolls to the bottom has the whole story. The other three are the depth behind chapters 02, 03 and 04 of the house scroll, and each of those chapters ends with a link into its page.

**Routing details that will bite if you skip them:**

- Wrap routes in `<AnimatePresence mode="wait">` for page transitions: 400ms fade with a 12px rise, `cubic-bezier(0.16, 1, 0.3, 1)`. No slide, no wipe, no page-curl.
- Scroll to top on every route change *before* the entering page mounts, and call `lenis.scrollTo(0, { immediate: true })` — Lenis does not reset itself.
- **Kill every GSAP ScrollTrigger on unmount.** Use `gsap.context()` scoped to each page's root ref and call `ctx.revert()` in the cleanup. Orphaned pins in a SPA are the single most common way this build breaks: you navigate away, come back, and the hero is stuck 200vh down the page.
- Call `ScrollTrigger.refresh()` after the entering page's images and fonts have settled, not on mount.
- Prefetch route chunks on nav-link hover. Code-split with `React.lazy` per page and give each a poster-frame-coloured suspense fallback, never a spinner.

**Share meta needs a build step.** A Vite SPA ships one `index.html`, so WhatsApp and LinkedIn crawlers will scrape the same Open Graph tags for every route — which breaks the shareable-film requirement. Fix it with **`vite-react-ssg`** (or `vite-plugin-prerender`) to prerender all four routes to static HTML at build time, and manage per-route `<head>` with `react-helmet-async`. Verify with the LinkedIn Post Inspector and WhatsApp before launch; do not assume it works.

---

# PAGE 1 · The House — `/`

## 1. Hero — the wordmark you look through

Full-viewport section, pinned for ~200vh of scroll. A silent, looping, autoplaying background video of the house fills the frame: coworking floor, the terrace at dusk, people mid-conversation, the rooftop coffee shop, lights on at 2am. Muted, `playsInline`, `loop`, no controls, no music, no audio track at all — it must never fight the sound-on film further down the page.

The signature move: the wordmark **DRAPERU** is set enormous across the viewport — 22vw, tight tracking, cut edge to edge — and the video plays *through* the letterforms via `background-clip: text` (SVG mask fallback for Safari/Firefox edge cases). Outside the letters, the frame is near-black. You are literally looking into the house through its name.

As you scroll the pin:
- **0–40%** — the wordmark tracks out from -0.04em to 0.12em and scales down; the video mask expands past the letterforms.
- **40–75%** — the mask dissolves entirely; video goes full-bleed with a bottom-weighted scrim so type stays legible. The headline resolves in: **"27,000 sq ft. Nobody goes home."**
- **75–100%** — a thin data strip settles along the bottom edge, set in mono, hairline rules between cells: `27,000 SQ FT` · `87 ROOMS` · `17 COUNTRIES` · `OPEN 24/7` · a **live Hyderabad clock (IST, ticking seconds)**. The clock is not decoration — it is the argument. The house is open right now.

The video's colour grade shifts with scroll from warm interior lamplight toward cool terrace dusk, so the scroll itself reads as a day passing. Do this as a CSS filter/overlay driven by scroll progress, not as separate video files.

Preload the poster frame first and paint it instantly; the video fades in over it once `canplaythrough` fires. A hero that pops black for 800ms on an Indian mobile network has already failed.

---

## 2. Ecosystem strip — the logo band

Immediately below the pin, a quiet full-width band on a slightly raised surface. Two rows of marks drifting in opposite directions at different speeds (~40s and ~55s linear infinite), pausing on hover, greyscale at 55% opacity, resolving to full colour on hover. Masked with a horizontal gradient so marks fade at both edges rather than being clipped.

Small mono label above, letterspaced uppercase: `COMMUNITY & EVENT PARTNERS`.

Real partners from the storytelling workshop — use these, not placeholders: **Communitie Hyderabad, ReelOnGo, TG10X, Ground Zero, Studlyf, Chitralai, StarBuzz AI**. Second row carries the network line: **Draper University, Draper Associates, Draper Venture Network**, and the 17-country footprint.

One honest constraint: Amazon, Microsoft, Infosys and ICICI are *neighbours in Gachibowli*, not partners. If you surface them at all, put them in a separately labelled row — `IN THE NEIGHBOURHOOD` — never mixed into the partner marquee. Founders read logo walls sceptically and a false implied partnership costs more trust than it buys.

---

## 3. The house — pinned horizontal scroll

The centrepiece. A pinned section where vertical scroll drives a horizontal track through four chapters. This is the "about us" told as a walk through the building, in the order people actually experience it: **arrive → work → gather → build.**

Each chapter is a full-height panel: a large duotone photograph on one side, editorial text on the other, sides alternating. Panels translate at 1× while their images translate at 1.15× inside their frames, so the imagery lags and the whole thing feels like tracking past windows. A thin progress rule runs along the bottom with four tick marks and the chapter name.

**01 · ARRIVE — "A movement, not just a space."**
The origin: Tim Draper founded Draper University in San Mateo in 2012. Karan Bahadur built Tribe Theory on the idea that hospitality is the foundation of an entrepreneurial ecosystem. Draper invested, the network became Draper Startup House, and in January 2021 the team acquired it outright. Now 17 countries, 600–700 founders through the doors every month, rebranded locally to DraperU India. Pull quote, large, in the display serif: *"DSH is a movement, not just a space." — Karan Bahadur*

**02 · WORK — Coworking, stays, 24/7.**
Ground-floor coworking, dedicated desks, 87 rooms across 11 types, dorms through private. Shared kitchen, lockers, rooftop coffee shop, free parking, reception staffed around the clock. Copy in their own voice: *"Come live and co-work with us, get sh*t done 24/7 (if you need)."* Keep the asterisk — it is the brand.

**03 · GATHER — Events & hackathons.**
A near-continuous calendar: recurring terrace events, workshops, masterclasses, hackathons, pitch nights. Anchor on the documented ones — **Summer Carnival 2026** (full-day gathering of founders, startups, creators, students, investors and ecosystem leaders, with a pitch competition that shortlisted **12 startups** to pitch live), and the invite-only **"Building Influence Through Storytelling"** workshop for **~50** selected founders, entrepreneurs and creators. Render these as a small horizontal card rail *inside* the panel — poster image, date, one line, and a `PAST` or `UPCOMING` state chip — so the section can be updated from a CMS without a rebuild.

**04 · BUILD — Programs & funding pathways.**
The **Draper Founder Program**: mentorship, community access, growth opportunities, funding pathways — and notably awarded as a *prize* at pitch competitions, so it is both a programme and a trophy. Name the Summer Carnival 2026 winners who won places: **Krishna Nagpal (Latitude 54)** and **Hamza (Shore Autonomy)**. Then the **10-day residential cohort**: international experts, a live-in founder cohort, culminating in a pitch event, scholarships attached. The live-in format is the differentiator — founders eat, sleep and build in the same building. Say that plainly.

Between chapters 03 and 04, break the pin for one full-bleed counter band: four numbers counting up as they enter view, set in mono at 8vw with hairline rules between — **8,000+** startups in Hyderabad · **75+** incubators & accelerators · **600–700** founders monthly, globally · **1,000,000** entrepreneurs by 2030. The last one is the mission and should land hardest: hold it, then let a single line resolve beneath it — *"Enable 1 million entrepreneurs by 2030."*

---

## 4. The film — sound on, made to be shared

A deliberate change of register. Everything above is silent and ambient; this is the one place the site speaks.

Centered, max-width ~1100px, sitting in generous dark space. A 16:9 player with a high-quality poster frame and a single large play control — a thin ring with a triangle, no chrome, no branded skin. Copy above it, small and quiet: `THE HOUSE FILM · 2:40 · SOUND ON`.

Behaviour:
- Loads paused with poster only. Nothing autoplays here.
- One click starts it **with sound**. Custom controls fade in on hover and after 2s of pointer stillness fade out: scrub bar, elapsed/total, volume, captions toggle, fullscreen, picture-in-picture.
- The silent hero video **pauses** the moment this one plays. Two videos running at once is amateur hour.
- Ship a `.vtt` caption track and a visible captions button. Most people will hit this on mute in an office first.
- Adaptive: HLS if you have it, otherwise a 1080p/720p/480p ladder with `preload="none"` and poster-only until interaction.

**The share layer** — this is a requirement, not a nicety:
- A `Share` button beside the play control opens a compact sheet.
- On mobile, invoke the **Web Share API** natively first.
- Fallback sheet gives: **Copy link**, **WhatsApp**, **LinkedIn**, **X**, **Email**, and a **Copy link at current time** option that appends `?t=<seconds>` and deep-links the player to that timestamp on load.
- `Copy link` swaps to `Copied` for 2s with no toast, no layout shift.
- Full Open Graph and Twitter card meta on the page: `og:video`, `og:image` pointing at the poster, title and description written for a shared link, not for a search engine.

---

## 5. Three doors

Directly after the film, before the footer. Three panels edge to edge, full-height on desktop, stacked on mobile — equal weight, no "recommended" badge, no pricing table. Each is a whole surface that responds: on hover the panel's background image saturates and lifts imperceptibly, a hairline rule draws left to right beneath the label, and the arrow advances.

- **Join as a founder** — Apply to the Draper Founder Program or the 10-day residential cohort. Mentorship, community, funding pathways.
- **Join as an investor** — Meet the pipeline. Judge a pitch night, back a cohort, plug into the Draper Venture Network.
- **Book a bed** — From dorms to private rooms. A night, a month, or as long as it takes. *(This is the third door: the brief is explicit that founders and travellers are two audiences through one entrance, so the third CTA should serve the stay side rather than being a generic "Contact us." If a partnerships door is needed instead, swap in "Partner with us" — but do not ship all four; three is the composition.)*

Each opens a modal with a short form — name, email, one context field, one free-text field — that posts to a configurable endpoint. Inline validation, a real success state, and a real error state that says what went wrong and how to fix it. `Apply` produces `Applied`, not `Submitted`.

Keep **Apply** and **Book a bed** persistent in the header chrome — from the moment the hero pin ends on `/`, and from first paint on every other route — so neither audience ever has to hunt for their door.

---

# PAGE 2 · Programs — `/programs`

Quieter than home by design. Interior pages are for people who have already decided to read.

**Masthead.** Half-viewport, no video. A single duotone still of a cohort mid-pitch, a mono eyebrow `PROGRAMS`, and a display headline: **"Founders eat, sleep and build in the same building."** One paragraph beneath at 58% pearl.

**Draper Founder Program.** The flagship. Full-width editorial block — mentorship, community access, startup growth opportunities, funding pathways. Make the unusual bit explicit and give it its own pull-out with an amber rule: places in DFP are **awarded as prizes at pitch competitions**, so it is a programme and a trophy at once. Name the Summer Carnival 2026 winners who took places — **Krishna Nagpal (Latitude 54)** and **Hamza (Shore Autonomy)** — as small cards with startup name, founder, and the event they won it at.

**Residential Cohort.** 10 days, live-in, international experts, culminating in a pitch event, scholarships attached. Render the ten days as a vertical timeline with hairline rules and mono day numbers `D1`–`D10` — this is a real sequence, so numbering earns its place here in a way it does not elsewhere on the site.

**Workshops & Masterclasses.** A compact list, not cards. Rows with date, title, format, and capacity, separated by hairlines. The storytelling workshop is the template: invite-only, ~50 selected founders, storytelling as strategic advantage, personal branding, content, community-building.

**Apply.** Full-bleed amber-ruled band with the application form inline on the page — not a modal here, since this is the page people arrive at ready to act. Programme selector, name, email, startup/stage, one free-text field.

---

# PAGE 3 · Events — `/events`

The campus runs a near-continuous calendar, so this page should feel *busy* in a way the rest of the site refuses to. This is the one place density is correct.

**Upcoming.** A stacked list, newest first, driven entirely from config. Each row: date block in mono on the left (`14 / JUN`), title, one-line description, format chip (`TERRACE` · `WORKSHOP` · `PITCH NIGHT` · `HACKATHON` · `CARNIVAL`), and an RSVP link. Hover raises the row's background a single step and draws an amber hairline beneath it. Empty state, if nothing is scheduled, reads: *"Nothing on the calendar this week. That's rare — check back."*

**Past highlights.** A masonry-free, two-column editorial grid with real weight given to the two documented events: **Summer Carnival 2026** (founders, startups, creators, students, investors and ecosystem leaders; startup showcases, networking, interactive activities, and a pitch competition that shortlisted **12 startups** to pitch live before judges) and **"Building Influence Through Storytelling"** (July 2026, invite-only, ~50 selected founders and creators). Each gets a photo, a date, three paragraphs, and an outcome line.

**The terrace.** One full-bleed band, no text over it except a single line at the bottom edge: *"Most of it happens on the roof."* The terrace is where the events run and where the coffee shop is — give it the money shot it deserves.

**Partners.** Reuse the ecosystem strip component from home, static rather than drifting, with the same honest separation between partners and neighbours.

---

# PAGE 4 · Stay — `/stay`

Two audiences on one page: people renting a desk and people renting a bed. Split the page cleanly rather than blending them.

**Coworking.** Tailored workspaces and flexible memberships that adapt to your journey — from early-stage founders to scaling teams. Tiers as three plain columns with hairline separators, no shadows, no "most popular" badge: hot desk, dedicated desk, team room. Dedicated desks from ~₹7,999/month — mark this one clearly as an unverified third-party figure in config. Note 24/7 access and the ground-floor coworking area, which reviews single out as calm.

**Rooms.** 87 rooms across 11 types, dorms through private. A horizontal type-selector rail — mixed dorm, female dorm, private, family — that swaps a large image and a spec list beneath it: occupancy, bathroom arrangement, AC, desk, wardrobe, balcony where applicable. Rates from ~$13/night on OTA channels.

**What's in the house.** A dense mono list under a single label, no icons: shared kitchen · lockers & storage · laundry · rooftop coffee shop · café & canteen · games room · lounge · free on-site parking · free Wi-Fi throughout · continental breakfast · luggage storage · elevator · reception staffed 24/7.

**The fine print.** Set this honestly and in plain type, not buried: check-in 2:00 PM, check-out 11:00 AM. Guests must be 18+; under-18s only with a parent or guardian. Photo ID at check-in. No bachelor/bachelorette parties. Separate, non-attached washrooms — repeatedly the thing guests praise most, so state it as a feature rather than hiding it.

**Book a bed.** Booking widget or a handoff to whichever engine they use, plus a direct-enquiry fallback with dates, room type, and nights.

---

# GLOBAL · Footer

Minimal. Address (Rajiv Gandhi Nagar, Gachibowli, Hyderabad, Telangana 500032), phone (+91 95502 85533), email, a small embedded map or static map image at 17.4425257, 78.3584968, transit line (`Metro: Blue Line — Raidurg / Madhapur · Bus: GPRA Quarters Entrance, 300 m`), social links, `OPEN 24/7`, and the wordmark reduced to a small mark. A single hairline rule above it. Nothing else.

---

## Art direction

**Palette.** Ink black `#0B0B0C` base. Warm lamp amber `#E8A54B` as the primary accent — used for rules, live indicators, active states, and the CTA arrows only. Dusk indigo `#1B2740` as the secondary surface for raised bands, which lets the page shift warm→cool as you descend and gives the 24/7 story a visual mechanism. Pearl off-white `#F2EEE6` for text at 92% and 58% opacity (Hyderabad is the City of Pearls — the warm white is doing work, not defaulting). Muted sage `#6E7A63` for the plant-and-terrace notes, sparingly.

The amber is the light left on in the window. Never use it for large fills, never gradient it, never glow it.

**Type.** Display: **Bricolage Grotesque** — variable, slightly irregular, a face with a builder's hand rather than a foundry's polish. Set headlines tight and large. Body: **Inter Tight** at generous line-height for the editorial columns. Utility: **JetBrains Mono** for all numerals, labels, timestamps, the clock, and the eyebrow tags — uppercase, 0.18em tracking, 11–12px. The mono is the through-line: this is a house full of people who ship.

**Surfaces.** No cards with drop shadows. No glassmorphism. No neon. No gradient text. Depth comes from hairline rules at 8% pearl, from real photography, and from generous negative space. Border radius: 2px or none. If it looks like a dashboard, start over.

**Photography.** Warm, inhabited, slightly imperfect. People in frame in every environmental shot — an empty 27,000 sq ft render contradicts the entire brand. Grade toward tungsten indoors and toward blue on the terrace. No cold grey-glass architectural viz.

---

## Navigation

Fixed, whisper-thin. Wordmark left, linking to `/`. Four `NavLink`s right — `The House`, `Programs`, `Events`, `Stay` — with the active route marked by a 1px amber underline that animates between links using a Framer Motion `layoutId`, so the indicator slides rather than cuts.

Transparent over the hero on `/`; on every other route it starts solid from first paint. Once the hero pin releases (or immediately, off-home), it gains a 1px bottom border at 10% pearl, `backdrop-blur-sm` over an 85% ink background, and the two persistent CTAs slide in from the right.

Mobile: a full-screen overlay menu, links stacked large in the display face, staggered 60ms apart, CTAs pinned to the bottom edge. The overlay must close on route change — a menu that stays open after navigation is the classic React Router bug here.

---

## Motion

Slow and eased. 0.8–1.2s on entrances, `cubic-bezier(0.16, 1, 0.3, 1)`. Never bouncy, never springy, no `ease-in-out` defaults. Text reveals as whole lines with a clip mask, not letter by letter — letter-by-letter is a tell. Stagger siblings at 80ms. Every scroll-triggered element animates once and stays; nothing re-animates on scroll-up.

---

## Responsive, performance, accessibility

Mobile is the primary target — the audience is on Indian mobile networks in a tech city. Budget aggressively.

- On mobile the pinned horizontal track becomes a vertically stacked sequence with the same four chapters and the same copy; do not try to preserve the horizontal gesture on a phone.
- The hero masked-text effect degrades to a full-bleed video with the wordmark laid over it at 14vw.
- Hero video: separate portrait crop for mobile, ≤2.5MB, H.264 + WebM, and a static poster on `saveData` or `2g`/`3g` connections.
- Lazy-load everything below the fold with native `loading="lazy"` plus `decoding="async"`. Generate responsive AVIF/WebP `srcset` at build time with **`vite-imagetools`** and always set real `sizes`, `width` and `height` — Vite gives you none of this for free, and unsized images are where your CLS budget goes.
- Fonts self-hosted in `public/fonts`, subset, `font-display: swap`, `<link rel="preload">` for the display face only.
- Route chunks code-split via `React.lazy`; keep the initial JS bundle under 180KB gzipped excluding the video. Run `rollup-plugin-visualizer` before you ship — GSAP and Framer Motion together will quietly blow this if you import broadly instead of per-module.
- Targets: LCP under 2.5s on a mid-range Android over 4G, CLS under 0.1, no long task over 200ms during scroll.
- **`prefers-reduced-motion`**: no pins, no parallax, no marquee, no counters — replace with static compositions and simple opacity fades. All content remains reachable and readable.
- Full keyboard path with visible focus rings in amber. The video player is keyboard-operable. Modals trap focus and close on Escape. Semantic landmarks throughout, alt text on every image, and the live clock in an `aria-live="off"` region so it doesn't spam screen readers.

---

## Content handling

Every unverified figure goes in a single `src/content/site.config.ts` file with a comment marking it unconfirmed — square footage, the "largest in the world" claim, room count, pricing, cohort dates, scholarship values, distances. These are compiled from public sources, not client-supplied, and they go stale fastest. Do not hardcode them into components.

Do not invent testimonials. If a review section is built, it takes real themes — affordability against quality, "great place to meet enthusiastic entrepreneurs," clean dorms with real storage, calm despite a young crowd — and it does not build a wall of five-star pulls. This audience reads reviews. Honest positioning ("we're a working house, not a hotel") reads better than polish.

---

## Do not

Ship stock startup imagery, a hero gradient mesh, a bento grid, glassmorphic cards, an acid-green accent, animated blob backgrounds, a "Trusted by" bar of unaffiliated logos, autoplay audio anywhere, a cookie banner that blocks the hero, or the word "revolutionize."
