/* =====================================================================
   Photography from the DraperU India house, for the briefings.
   ---------------------------------------------------------------------
   Every caption here is the factual description of what the photograph
   actually shows, carried over verbatim from the LinkedIn posts the images
   came from (see components/DraperEngagement.jsx). They are never rewritten
   to match the briefing they sit above: a photograph of a hackathon is
   captioned as a hackathon, even on the module about term sheets. The
   photography is context — it shows the reader whose house this is — and
   is never presented as an illustration of the topic.

   The three advisory-council portraits are deliberately NOT in this set.
   They are photographs of named individuals, one of them a serving public
   official; placing a face above a briefing implies that person authored or
   endorses its content. Scene photography carries no such implication.

   Intrinsic width/height are recorded so every <img> can reserve its box and
   contribute nothing to layout shift.
   ===================================================================== */

export const IMAGES = {
  'startup-house-stage': {
    src: '/images/draper/draper-startup-house-stage.jpeg',
    w: 1280,
    h: 1706,
    caption: 'On stage at Draper Startup House — DraperU India before the rebrand.',
  },
  'community-portrait': {
    src: '/images/draper/community-portrait.jpeg',
    w: 1280,
    h: 1706,
    caption: 'The people building the DraperU India community, one founder at a time.',
  },
  'founders-program': {
    src: '/images/draper/founders-program-back.jpeg',
    w: 800,
    h: 999,
    caption: 'The DraperU Founders Program — a 12-day immersive residential founder experience.',
  },
  'founders-friday': {
    src: '/images/draper/founders-friday.jpeg',
    w: 800,
    h: 999,
    caption: "Founder's Friday — network, grow, scale with 6,000+ alumni across 104 countries.",
  },
  'devagentic-workshop': {
    src: '/images/draper/matrixo-devagentic.jpeg',
    w: 800,
    h: 567,
    caption: "matriXO's DevAgentic 1.0 — an Agentic AI workshop series hosted at DraperU India.",
  },
  'ecosystem-visit': {
    src: '/images/draper/ecosystem-leadership-visit.jpeg',
    w: 800,
    h: 432,
    caption: "DraperU India's community connecting with Telangana's startup ecosystem leadership.",
  },
  'codex-crowd': {
    src: '/images/draper/india-codex-crowd.jpeg',
    w: 800,
    h: 449,
    caption: 'Builders on the ground at India CoDex 2026, hosted on the DraperU India campus.',
  },
  'codex-stage': {
    src: '/images/draper/india-codex-stage.jpeg',
    w: 1599,
    h: 1200,
    caption: 'Live from the India CoDex stage — teams demoing what they shipped overnight.',
  },
  'health-insurance-workshop': {
    src: '/images/draper/echai-health-insurance.jpeg',
    w: 1080,
    h: 1350,
    caption:
      "eChai x DraperU India: 'Agentic Claims' — how AI agents are making real-time health insurance possible.",
  },
  'gigpoint-hackathon': {
    src: '/images/draper/gigpoint-hackathon.jpeg',
    w: 800,
    h: 450,
    caption: 'Gigpoint Hackathon — 200+ builders, a 12-hour sprint, no gatekeeping.',
  },
  'echai-group': {
    src: '/images/draper/echai-group-photo.jpeg',
    w: 800,
    h: 600,
    caption: 'Founders and community members after an eChai x DraperU India session.',
  },
}

/* One scene per briefing, and one per part. Chosen for tone, not for any
   claimed relationship to the subject matter. */
export const MODULE_IMAGE = {
  'what-is-angel-investing': 'community-portrait',
  'how-startups-raise': 'founders-program',
  'equity-cap-tables-dilution': 'devagentic-workshop',
  valuation: 'ecosystem-visit',
  'due-diligence': 'codex-crowd',
  'term-sheets': 'health-insurance-workshop',
  'portfolio-construction': 'gigpoint-hackathon',
  'exits-and-timelines': 'echai-group',
  'making-the-decision': 'founders-friday',
  /* Part IV reuses scenes from earlier in the set. With twelve briefings and
     eleven usable photographs one repeat is unavoidable; they are placed far
     apart so a reader working through in order does not meet the same image
     twice in a row. */
  'syndicates-and-spvs': 'codex-stage',
  'tax-and-regulation': 'startup-house-stage',
  'after-you-invest': 'devagentic-workshop',
}

export const PART_IMAGE = {
  ground: 'startup-house-stage',
  judging: 'codex-stage',
  portfolio: 'founders-friday',
  practice: 'community-portrait',
}

export const imageFor = (slug) => IMAGES[MODULE_IMAGE[slug]] ?? null
export const imageForPart = (partId) => IMAGES[PART_IMAGE[partId]] ?? null
