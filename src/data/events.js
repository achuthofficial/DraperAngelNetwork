/* Seed events. Admin-created events are merged over these in DataContext and
   persisted to localStorage, so anything an admin adds shows up in the member
   calendar immediately. */

export const EVENT_TYPES = [
  'Startup Showcase',
  'Masterclass',
  'Networking',
  'Office Hours',
  'Demo Day',
]

export const EVENT_MODES = ['In person', 'Virtual', 'Hybrid']

export const seedEvents = [
  {
    id: 'evt-showcase-nov',
    title: 'November Startup Showcase',
    type: 'Startup Showcase',
    mode: 'Virtual',
    date: '2026-11-14',
    time: '18:00',
    durationMins: 90,
    location: 'Zoom — link sent 24h before',
    host: 'DAN Investment Committee',
    capacity: 120,
    registered: 84,
    summary:
      'Three screened startups pitch live, followed by open investor Q&A. Decks circulate 48 hours in advance.',
    agenda: [
      'Opening and cohort context — 10 min',
      'Three founder pitches, 12 min each with 6 min Q&A',
      'Investor-only debrief — 20 min',
    ],
  },
  {
    id: 'evt-masterclass-valuation',
    title: 'Masterclass: How Early-Stage Valuation Actually Gets Set',
    type: 'Masterclass',
    mode: 'Virtual',
    date: '2026-11-21',
    time: '19:00',
    durationMins: 75,
    location: 'Zoom',
    host: 'DAN Education',
    capacity: 200,
    registered: 137,
    summary:
      'Pre-money vs post-money, why a pre-revenue number is a negotiation rather than a calculation, and how to sanity-check what you are shown.',
    agenda: [
      'Where a seed valuation comes from',
      'Working an example end to end',
      'Questions worth asking a founder',
    ],
  },
  {
    id: 'evt-founders-friday',
    title: "Founder's Friday — Hyderabad",
    type: 'Networking',
    mode: 'In person',
    date: '2026-11-28',
    time: '17:30',
    durationMins: 150,
    location: 'DraperU India, Gachibowli, Hyderabad',
    host: 'DraperU India',
    capacity: 80,
    registered: 61,
    summary:
      'Open house on the Hyderabad campus. Founders, angels and operators, no agenda beyond introductions.',
    agenda: ['Open networking', 'Short founder intros', 'Campus tour'],
  },
  {
    id: 'evt-office-hours-dd',
    title: 'Office Hours: Reading a Due Diligence Pack',
    type: 'Office Hours',
    mode: 'Virtual',
    date: '2026-12-05',
    time: '18:30',
    durationMins: 60,
    location: 'Zoom',
    host: 'DAN Education',
    capacity: 40,
    registered: 22,
    summary:
      'Bring a real data room and walk through it with the group. Aimed squarely at first-time angels.',
    agenda: ['What a data room should contain', 'Live walkthrough', 'Red flags'],
  },
  {
    id: 'evt-demo-day-past',
    title: 'October Startup Showcase',
    type: 'Startup Showcase',
    mode: 'Hybrid',
    date: '2026-10-17',
    time: '18:00',
    durationMins: 90,
    location: 'DraperU India + Zoom',
    host: 'DAN Investment Committee',
    capacity: 120,
    registered: 118,
    summary:
      'Three startups from the October cohort. Recording available to members in the archive.',
    agenda: ['Three founder pitches', 'Investor Q&A', 'Debrief'],
  },
]
