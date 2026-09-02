/* =====================================================================
   Illustrations for the learning briefings.
   ---------------------------------------------------------------------
   Generic, topic-matched artwork rather than photography of the network's
   own events: a briefing about term sheets should show a term sheet, not a
   hackathon. Each illustration is chosen to match its briefing's subject.

   Source: unDraw (undraw.co), fetched via the npm package `undraw-svg`
   v2.0.0 and committed to `public/images/learning/`. unDraw art is free for
   commercial use; the distributing package is MIT, and its notice travels
   with the files — see the README and LICENCE in that directory.

   Every file has been recoloured from unDraw's light-background palette
   into this portal's dark ramp. They are vector, so `w`/`h` below are the
   intrinsic viewBox dimensions and exist only to reserve the box and keep
   layout shift at zero; the artwork itself scales to any size.
   ===================================================================== */

export const IMAGES = {
  /* ---- one per part ---- */
  'part-ground': {
    src: '/images/learning/part-ground.svg',
    w: 744,
    h: 539,
    caption: 'The ground rules — what you are buying and how a round is built.',
  },
  'part-judging': {
    src: '/images/learning/part-judging.svg',
    w: 768,
    h: 468,
    caption: 'Judging a single deal — price it, check it, read the paper.',
  },
  'part-portfolio': {
    src: '/images/learning/part-portfolio.svg',
    w: 960,
    h: 649,
    caption: 'Building a portfolio — sizing, pacing and exits.',
  },
  'part-practice': {
    src: '/images/learning/part-practice.svg',
    w: 759,
    h: 615,
    caption: 'Once you are actually investing — vehicles, rules and aftercare.',
  },

  /* ---- one per briefing ---- */
  'b01': {
    src: '/images/learning/b01-what-is-angel-investing.svg',
    w: 800,
    h: 595,
    caption: 'What an angel investment actually is.',
  },
  'b02': {
    src: '/images/learning/b02-how-startups-raise.svg',
    w: 829,
    h: 588,
    caption: 'A startup putting a funding round together.',
  },
  'b03': {
    src: '/images/learning/b03-equity-cap-tables.svg',
    w: 720,
    h: 700,
    caption: 'Ownership divided into slices — the cap table.',
  },
  'b04': {
    src: '/images/learning/b04-valuation.svg',
    w: 960,
    h: 608,
    caption: 'Working out what a company is worth.',
  },
  'b05': {
    src: '/images/learning/b05-due-diligence.svg',
    w: 798,
    h: 625,
    caption: 'Inspecting an opportunity before committing to it.',
  },
  'b06': {
    src: '/images/learning/b06-term-sheets.svg',
    w: 851,
    h: 528,
    caption: 'Reading the terms on offer.',
  },
  'b07': {
    src: '/images/learning/b07-portfolio-construction.svg',
    w: 799,
    h: 568,
    caption: 'Spreading capital across a portfolio.',
  },
  'b08': {
    src: '/images/learning/b08-exits-and-timelines.svg',
    w: 917,
    h: 601,
    caption: 'The long curve from investment to exit.',
  },
  'b09': {
    src: '/images/learning/b09-making-the-decision.svg',
    w: 894,
    h: 646,
    caption: 'Reaching an informed decision.',
  },
  'b10': {
    src: '/images/learning/b10-syndicates-and-spvs.svg',
    w: 807,
    h: 699,
    caption: 'Investors pooling into a single vehicle.',
  },
  'b11': {
    src: '/images/learning/b11-tax-and-regulation.svg',
    w: 756,
    h: 800,
    caption: 'Taking the structure to a professional.',
  },
  'b12': {
    src: '/images/learning/b12-after-you-invest.svg',
    w: 652,
    h: 551,
    caption: 'Supporting a company after the money has gone in.',
  },
}

export const MODULE_IMAGE = {
  'what-is-angel-investing': 'b01',
  'how-startups-raise': 'b02',
  'equity-cap-tables-dilution': 'b03',
  valuation: 'b04',
  'due-diligence': 'b05',
  'term-sheets': 'b06',
  'portfolio-construction': 'b07',
  'exits-and-timelines': 'b08',
  'making-the-decision': 'b09',
  'syndicates-and-spvs': 'b10',
  'tax-and-regulation': 'b11',
  'after-you-invest': 'b12',
}

export const PART_IMAGE = {
  ground: 'part-ground',
  judging: 'part-judging',
  portfolio: 'part-portfolio',
  practice: 'part-practice',
}

export const imageFor = (slug) => IMAGES[MODULE_IMAGE[slug]] ?? null
export const imageForPart = (partId) => IMAGES[PART_IMAGE[partId]] ?? null
