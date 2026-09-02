/* =====================================================================
   DAN Learning Track — Angel Investing from zero
   ---------------------------------------------------------------------
   Written for someone who has never bought a share of a private company.
   Twelve briefings in four parts. Each assumes only what came before it,
   but every part is written to stand on its own, because readers arrive
   knowing very different amounts. Briefing 09 is the decision framework
   that ties the first three parts together; Part IV covers the practical
   layer a member meets once they are actually investing.

   Every module carries a `checkpoint` — comprehension questions with a
   written explanation for each answer — so "I read it" and "I understood
   it" are not the same signal.

   Figures use the ₹5L–₹50L early-stage band the marketing site already
   cites. Nothing here is investment advice; see DISCLAIMER below.
   ===================================================================== */

export const DISCLAIMER =
  'This track is educational. It is not investment, legal or tax advice, and it is not a recommendation to invest in anything. Rules — especially tax and securities regulation — change. Verify anything that affects a real decision with a qualified professional.'

export const TRACK_INTRO =
  'Twelve briefings in four parts, roughly four and a half hours of reading. Start at the top if you are new: each one assumes only what came before it. By the end you should be able to read a pitch deck, tell a good term sheet from a bad one, size a cheque without guessing, and know what to ask your accountant before any of it.'

/* The briefings group into four parts. Members arrive knowing very
   different amounts — a family-office principal may already know Part I
   cold and want Part II — so the track is presented as named parts that
   can be entered independently, not a linear 1-of-12 course. */
export const PARTS = [
  {
    id: 'ground',
    numeral: 'I',
    label: 'The ground rules',
    blurb: 'What you are buying, how a round is put together, and what your slice actually means.',
    slugs: ['what-is-angel-investing', 'how-startups-raise', 'equity-cap-tables-dilution'],
  },
  {
    id: 'judging',
    numeral: 'II',
    label: 'Judging a single deal',
    blurb: 'The three things you do to one opportunity: price it, check it, and read the paper.',
    slugs: ['valuation', 'due-diligence', 'term-sheets'],
  },
  {
    id: 'portfolio',
    numeral: 'III',
    label: 'Building a portfolio',
    blurb: 'Sizing, pacing and exiting — the decisions that determine the result far more than any single deal.',
    slugs: ['portfolio-construction', 'exits-and-timelines', 'making-the-decision'],
  },
  {
    id: 'practice',
    numeral: 'IV',
    label: 'Once you are actually investing',
    blurb: 'The practical layer: pooled vehicles and their fees, the Indian tax and regulatory shape, and how to be useful to a company after the money has gone in.',
    slugs: [
      'syndicates-and-spvs',
      'tax-and-regulation',
      'after-you-invest',
    ],
  },
]

export const modules = [
  /* ---------------------------------------------------------------- 01 */
  {
    slug: 'what-is-angel-investing',
    num: '01',
    title: 'What angel investing actually is',
    minutes: 19,
    summary:
      'Who angels are, what they buy, and why this is a fundamentally different activity from buying listed shares.',
    outcome: 'Explain what you are buying, and what you are risking, in one paragraph.',
    sections: [
      {
        heading: 'The one-sentence version',
        body: [
          'An angel investor puts personal money into a private company at a very early stage, in exchange for a slice of its ownership, hoping that the company becomes worth many times more before it is sold or listed.',
          'Three words in that sentence do a lot of work. **Personal** — this is your own capital, not a fund\'s. **Private** — the shares are not listed, so you cannot sell them whenever you like. **Early** — often before there is meaningful revenue, sometimes before there is a product.',
        ],
      },
      {
        heading: 'Why the role exists at all',
        body: [
          'A company that has just been founded needs money before any institution will look at it. Banks lend against assets and cash flow; a six-month-old startup has neither. Venture funds usually write their first cheque once there is evidence — users, revenue, retention — that the thing works.',
          'That leaves a gap between "we have an idea and two people" and "we have enough traction for a fund to care." In India that gap is roughly ₹5 lakh to ₹50 lakh. Angels fill it. That is the whole job.',
        ],
      },
      {
        heading: 'How this differs from the stock market',
        list: [
          '**Liquidity.** A listed share can be sold in seconds. An angel investment typically cannot be sold at all for years, and sometimes never.',
          '**Information.** A listed company files audited quarterly results. A startup may send you an email update, or may go quiet for six months.',
          '**Price discovery.** A listed share has a price set by thousands of participants. An early-stage valuation is set by negotiation between two parties, and is closer to an opinion than a measurement.',
          '**Distribution of outcomes.** Index returns cluster around an average. Angel returns do not — most investments return nothing and a small number return everything. Module 07 covers what that means for how you invest.',
        ],
      },
      {
        heading: 'The honest risk statement',
        callout:
          'The most likely single outcome for any one early-stage investment is that you lose all of the money you put in. This is not a caveat added for legal reasons — it is the base rate, and every subsequent module is built around it.',
        body: [
          'That fact does not make angel investing irrational. It makes it a portfolio activity rather than a bet-picking activity. One investment that returns 30× can pay for twenty that return zero. But that only works if you actually make twenty, and if you can afford for all of them to fail.',
        ],
      },
      {
        heading: 'Who this suits',
        body: [
          'Angel investing suits someone who has capital they will not need for at least seven to ten years, who can lose that capital entirely without changing how they live, and who finds the work genuinely interesting — because you will do a lot of reading for every cheque you write.',
          'It does not suit money earmarked for a house, a child\'s education, or a retirement you are close to.',
        ],
      },
        {
          heading: 'What your money actually buys',
          body: [
            'When you wire money to a startup you receive a **share certificate** and an entry in the company\'s register of members. That is the whole of it. There is no asset backing the certificate, no interest, no maturity date, and nobody obliged to buy it back from you.',
            'The certificate becomes worth something only if a later buyer wants it — a bigger investor in the next round, an acquirer buying the whole company, or the public market at an IPO. Until one of those happens, your holding has a notional value and no cash value. You cannot spend it, pledge it easily, or draw an income from it.',
          ],
          list: [
            '**You are not lending.** A lender ranks above shareholders and gets paid back first. You rank last.',
            '**You are not a customer.** Liking the product is not the same as the company being a good investment at the price offered.',
            '**You are not in control.** A small angel stake carries almost no ability to direct what the company does next.',
          ],
          callout: 'The single most useful sentence to keep in mind: **you are buying a small, illiquid, junior claim on a company that will probably not exist in seven years.** Everything else in this track is about improving the odds within that reality, not escaping it.',
        },
        {
          heading: 'Where angels sit relative to everyone else',
          body: [
            'It helps to see the whole ladder at once. Money enters a company from several places and each source wants something different, arrives at a different moment, and stands in a different place in the queue when there is money to distribute.',
          ],
          list: [
            '**Founders** — put in time and usually some savings, hold ordinary shares, rank last of all.',
            '**Friends and family** — the first outside cheque, often on no formal terms. A common source of later trouble.',
            '**Angels — you** — the first professional-ish outside money. ₹1L to ₹50L per person, typically for 0.2% to 2%.',
            '**Seed funds** — ₹2Cr to ₹15Cr, want board observer rights and information rights.',
            '**Venture funds** — Series A onward, take board seats, set terms, hold preference shares that pay out before yours.',
            '**Banks and venture debt** — lend rather than buy, rank above every shareholder.',
          ],
        },
        {
          heading: 'Three honest reasons people do this',
          body: [
            'It is worth being clear with yourself about which of these is actually driving you, because they imply different behaviour.',
            '**Financial return.** Legitimate, but it requires the discipline described in Briefing 07: enough positions, sized in advance, held for years. One or two cheques driven by enthusiasm is not an investment strategy, it is a donation with paperwork.',
            '**Access and learning.** Many angels say the real return is seeing thirty companies a year and understanding where an industry is going. That is a genuine benefit, and if it is your main reason you should size your cheques so you can afford to be wrong every time.',
            '**Contribution.** Backing founders in a place you care about, or in a field you spent a career in. Also legitimate — but call it what it is, and do not let it substitute for the diligence in Briefing 05.',
          ],
          callout: 'The failure mode is telling yourself it is the first reason while actually acting on the third. That produces concentrated, emotionally-chosen positions and a bad result on both counts.',
        },
    ],
    terms: [
      ['Angel investor', 'An individual investing personal money into early-stage private companies.'],
      ['Private company', 'A company whose shares are not traded on a public exchange.'],
      ['Illiquid', 'Cannot readily be converted to cash. Almost all angel holdings are illiquid.'],
      ['Traction', 'Evidence that customers actually want the product — users, revenue, retention, repeat usage.'],
        [
          'Illiquid',
          'Not readily convertible to cash. There is no market where you can sell a private company\'s shares on a given Tuesday.',
        ],
        [
          'Ordinary shares',
          'The basic form of ownership. Ranks below preference shares when money is distributed.',
        ],
        [
          'Register of members',
          'The company\'s official list of who owns what. Your name appearing on it is what makes you a shareholder.',
        ],
        [
          'Dry powder',
          'Money you have set aside to invest but not yet deployed.',
        ],
    ],
    checkpoint: [
      {
        q: 'What is the single most likely outcome of one individual angel investment?',
        options: [
          'A total loss of the amount invested',
          'A modest return, slightly ahead of a fixed deposit',
          'A 10× return within three years',
          'A return roughly matching the Nifty 50',
        ],
        answer: 0,
        why: 'Most early-stage companies fail. Angel returns come from a small number of large winners paying for many zeros — which is why it is a portfolio activity, not a stock-picking one.',
      },
      {
        q: 'Why can an angel usually not sell out of an investment when they want to?',
        options: [
          'SEBI prohibits the sale of startup shares',
          'The shares are private, so there is no exchange and no ready buyer',
          'The founder holds the share certificates',
          'A minimum holding period of one year applies',
        ],
        answer: 1,
        why: 'Private shares have no listed market. A sale needs a specific willing buyer and usually the company\'s consent, which is why holdings are described as illiquid.',
      },
        {
          q: 'A founder offers you shares and promises to buy them back at twice the price in three years if things go badly. What should you conclude?',
          options: [
            'It is a sensible downside protection to accept',
            'It converts the investment into a loan, which is safer',
            'It is worth very little — the promise is only as good as a failing company\'s ability to pay',
            'It is standard practice in Indian angel rounds',
          ],
          answer: 2,
          why: 'A buy-back promise from the company or a founder is worth whatever they can pay when you call on it — and if you are calling on it, things have gone badly and they cannot. Treat it as marketing, not protection.',
        },
        {
          q: 'You rank behind lenders and preference shareholders when a company is wound up. What does that mean in practice for a failed startup?',
          options: [
            'You receive a reduced amount, usually 20-40% of your investment',
            'You receive your money before the founders do',
            'Ranking only matters in an acquisition, not a wind-up',
            'You receive whatever is left after everyone else, which is almost always nothing',
          ],
          answer: 3,
          why: 'A failed startup rarely has assets left once creditors and preference holders are paid. Planning around a partial recovery is planning around something that does not usually happen — assume zero.',
        },
        {
          q: 'Which of these is the strongest sign you are investing for the wrong reason?',
          options: [
            'You are putting a much larger cheque into this one than your plan allows, because you believe in the founder',
            'You want to understand a sector you did not work in',
            'You expect to hold for eight years',
            'You know you may lose the entire amount',
          ],
          answer: 0,
          why: 'Breaking your own sizing rule for a specific company is the clearest signal that conviction has replaced process. The other three are all healthy positions to hold.',
        },
    ],
  },

  /* ---------------------------------------------------------------- 02 */
  {
    slug: 'how-startups-raise',
    num: '02',
    title: 'How a startup raises money',
    minutes: 23,
    summary:
      'The funding stages in order, and the three instruments an Indian angel will actually be offered.',
    outcome: 'Recognise which stage a company is at, and what paper you are being asked to sign.',
    sections: [
      {
        heading: 'The stages, in order',
        list: [
          '**Bootstrap / friends and family** — founders\' savings and people who know them personally. No formal round.',
          '**Pre-seed** — first outside money, often ₹25L–₹1.5Cr total. Product may be a prototype. This is where angels are most common.',
          '**Seed** — ₹1.5Cr–₹8Cr. There is a working product and early customers. Angels co-invest alongside seed funds.',
          '**Series A** — ₹15Cr and up, led by an institutional venture fund. Requires real, growing revenue. Angels rarely lead here, but may follow on.',
          '**Series B and beyond** — scaling capital. Angels are typically diluted spectators by now.',
        ],
        body: [
          'These labels are conventions, not rules. A company with unusual traction can raise a "seed" round the size of someone else\'s Series A. Treat the label as a rough signal and look at the evidence underneath it.',
        ],
      },
      {
        heading: 'Instrument 1 — a priced equity round',
        body: [
          'You agree a valuation, you pay money, you receive shares, and your ownership percentage is fixed on the day. In India these are usually **CCPS** (compulsorily convertible preference shares) rather than plain equity, because preference shares can carry protections that ordinary shares cannot.',
          'This is the cleanest instrument: you know exactly what you own the moment the money moves. It is also the slowest and most expensive to paper, which is why very early rounds often avoid it.',
        ],
      },
      {
        heading: 'Instrument 2 — a convertible instrument',
        body: [
          'Sometimes nobody wants to argue about valuation yet — the company is too young for the number to mean anything. So the money goes in now and converts into shares later, at the valuation set by the next real round.',
          'Internationally this is a **SAFE** (Simple Agreement for Future Equity) or a convertible note. In India the common form is a **CCD** (compulsorily convertible debenture) or an India-adapted SAFE, because a pure US SAFE does not map cleanly onto Indian company law.',
        ],
        callout:
          'Two numbers decide whether a convertible is fair to you: the **valuation cap** (the highest valuation at which your money converts — it protects you if the next round prices high) and the **discount** (the percentage below the next round\'s price that you convert at, typically 15–25%). A convertible with neither is a loan to a startup with no upside for taking startup risk. Do not sign one.',
      },
      {
        heading: 'Instrument 3 — a syndicate or pooled vehicle',
        body: [
          'Rather than investing directly, several angels pool money into one vehicle which invests as a single entity. In India this is often an **AIF Category I (Angel Fund)** registered with SEBI.',
          'The advantages are a smaller minimum cheque, professional paperwork and one line on the company\'s cap table instead of forty. The cost is a management fee, usually a share of profits (**carry**), and less direct control over which deals you are in.',
        ],
      },
      {
        heading: 'What "the round" means',
        body: [
          'A round is one financing event with one set of terms. A **lead investor** negotiates those terms and usually takes the largest share; everyone else takes the same paper. If you are not leading, most of your work is deciding whether the lead\'s terms are acceptable — not renegotiating them.',
        ],
      },
        {
          heading: 'What a round actually consists of',
          body: [
            'People say "we are raising a round" as though it were a single event. It is a sequence, and knowing where a company is in that sequence tells you how real the round is.',
          ],
          list: [
            '**Soft circling** — the founder is sounding people out. Nothing is agreed. Many rounds die here.',
            '**A lead is found** — one investor agrees terms and a cheque size. This is the moment the round becomes real, because the lead sets the price everyone else pays.',
            '**A term sheet is signed** — non-binding on almost everything except exclusivity and confidentiality, but it fixes the commercial shape.',
            '**Diligence and documentation** — the shareholders\' agreement and share subscription agreement are drafted. Four to ten weeks in India is normal.',
            '**Closing** — money moves, shares are allotted, filings are made with the Registrar of Companies.',
          ],
          callout: 'If a founder tells you the round is "closing next week" and cannot name the lead or show you a signed term sheet, the round is not closing next week. Urgency without a lead is a pressure tactic, whether or not it is meant as one.',
        },
        {
          heading: 'Who else is on the cap table, and why it matters',
          body: [
            'Before you agree a price, ask for the current shareholding. You are looking for two things: whether the founders still own enough to stay motivated, and whether there is anything unusual sitting in the structure.',
          ],
          list: [
            '**Founder ownership after this round** — below roughly 50% combined at seed stage is a warning. Founders who have been over-diluted early often lose motivation, and later investors will notice the same thing and hesitate.',
            '**A dormant co-founder** — someone who left holding 20% and contributes nothing. This is one of the most common reasons a good company fails to raise its next round.',
            '**Too many tiny holders** — fifty shareholders each holding 0.1% makes every future decision slow and every signature-gathering exercise painful.',
            '**Anyone with unusual rights** — a very early investor with a veto, a guaranteed return, or anti-dilution protection can quietly govern what the company is able to do.',
          ],
        },
        {
          heading: 'Bridge rounds and what they signal',
          body: [
            'A **bridge** is money raised between priced rounds, usually convertible, usually from existing investors. Founders present it as opportunistic. Sometimes it is. More often it means the company did not hit the milestones it needed to raise a proper round and is buying time.',
            'A bridge is not automatically bad — plenty of good companies need one. But it changes the questions you ask: what specifically will be different in six months, is the existing lead participating (if they are not, ask why), and how much runway does this actually buy?',
          ],
          callout: 'The single most informative question about a bridge: **is the largest existing investor putting in their pro-rata share?** They have the most information of anyone. Their absence is the loudest available signal.',
        },
    ],
    terms: [
      ['CCPS', 'Compulsorily convertible preference shares — the standard priced-round instrument in India.'],
      ['CCD', 'Compulsorily convertible debenture — a common Indian convertible instrument.'],
      ['SAFE', 'Simple Agreement for Future Equity. Money now, shares later, at the next round\'s price.'],
      ['Valuation cap', 'The maximum valuation at which a convertible converts. Protects the early investor.'],
      ['Discount', 'The percentage below the next round price at which a convertible converts. Typically 15–25%.'],
      ['Lead investor', 'The investor who negotiates the round\'s terms and usually writes the largest cheque.'],
      ['Carry', "A fund manager's share of the profits, commonly 20%."],
        [
          'Lead investor',
          'The investor who negotiates the terms and price of a round. Everyone else follows on those terms.',
        ],
        [
          'Bridge round',
          'Interim financing between priced rounds, usually convertible, usually to extend runway.',
        ],
        [
          'Pro-rata',
          'The right — and sometimes the practice — of investing enough in a later round to maintain your existing percentage.',
        ],
        [
          'Runway',
          'How many months the company can operate before it runs out of cash at its current burn rate.',
        ],
        [
          'SSA / SHA',
          'Share Subscription Agreement and Shareholders\' Agreement — the two documents that actually bind you, signed after the term sheet.',
        ],
    ],
    checkpoint: [
      {
        q: 'You are offered a convertible with no valuation cap and no discount. What is wrong with it?',
        options: [
          'Nothing — this is the standard structure',
          'You take early-stage risk but convert on the same terms as later, better-informed investors',
          'Convertibles are illegal in India',
          'It converts too quickly',
        ],
        answer: 1,
        why: 'The cap and the discount are what compensate you for going in early and blind. Without either, you carry the earliest risk and receive the same price as whoever comes later with far more information.',
      },
      {
        q: 'What does a lead investor do?',
        options: [
          'Guarantees the other investors against loss',
          'Takes a board seat as a legal requirement',
          'Negotiates the round\'s terms, which the other investors then accept',
          'Introduces the company to its customers',
        ],
        answer: 2,
        why: 'The lead sets the terms and usually writes the biggest cheque. If you are following, your job is to judge whether those terms — and the lead — are acceptable.',
      },
        {
          q: 'A founder says the round is oversubscribed and closing Friday, but cannot tell you who is leading it. What is the most reasonable reading?',
          options: [
            'Normal — leads are often kept confidential',
            'The lead must be a large fund that requires secrecy',
            'It means the valuation will rise before Friday',
            'The round has no lead and the deadline is not real',
          ],
          answer: 3,
          why: 'A lead is the thing that makes a round real, and founders name their lead because it helps them raise. No nameable lead plus a hard deadline is almost always an artificial deadline.',
        },
        {
          q: 'You see a co-founder who left two years ago still holding 22% and doing nothing. Why does this matter to you?',
          options: [
            'Later investors will treat it as a serious problem, which makes the next round harder to raise',
            'It does not — their shares are their own business',
            'It reduces the shares available to you in this round',
            'It means the company cannot legally raise more money',
          ],
          answer: 0,
          why: 'A large dead holding on the cap table is one of the most common reasons a Series A stalls. Your return depends on the next round happening, so anything that makes it harder is your problem too.',
        },
        {
          q: 'The company is raising a bridge and its existing lead investor is not participating. What does that most likely indicate?',
          options: [
            'The lead has run out of fund capacity, which is routine and neutral',
            'The best-informed investor has chosen not to put more money in, which is a significant negative signal',
            'The lead is being generous by leaving room for new investors',
            'Bridges are normally funded only by new investors',
          ],
          answer: 1,
          why: 'The existing lead has board information and years of context. They may genuinely have run out of reserves — so ask — but the default reading of an absent insider is that they have seen something you have not.',
        },
    ],
  },

  /* ---------------------------------------------------------------- 03 */
  {
    slug: 'equity-cap-tables-dilution',
    num: '03',
    title: 'Equity, cap tables and dilution',
    minutes: 26,
    summary:
      'What percentage ownership actually means, and why your slice shrinks every round — worked through with real numbers.',
    outcome: 'Compute your ownership after a round, and know whether dilution has hurt you.',
    sections: [
      {
        heading: 'The cap table',
        body: [
          'A capitalisation table lists every shareholder and how many shares each holds. Percentages come from dividing one holder\'s shares by the total. That is the entire concept — the complexity comes from what happens when the total changes.',
        ],
      },
      {
        heading: 'A worked example',
        example: {
          title: 'Your ₹10,00,000 into a pre-seed round',
          rows: [
            ['Company raises', '₹50,00,000'],
            ['Pre-money valuation', '₹4,50,00,000'],
            ['Post-money valuation', '₹5,00,00,000 (pre-money + amount raised)'],
            ['Round buys', '10% of the company (50L ÷ 5Cr)'],
            ['Your cheque', '₹10,00,000 — one fifth of the round'],
            ['Your ownership', '2.0% (10L ÷ 5Cr)'],
          ],
        },
        body: [
          'Note that your percentage is your money divided by the **post-money** valuation. This is the single most common arithmetic error new angels make: dividing by the pre-money number inflates your apparent stake.',
        ],
      },
      {
        heading: 'Then you get diluted',
        body: [
          'Eighteen months later the company raises a Series A: ₹20Cr at a ₹80Cr pre-money valuation, so ₹100Cr post-money. The new investors buy 20% of the company. Every existing shareholder\'s percentage is multiplied by 0.80.',
          'Your 2.0% becomes 1.6%. You were not consulted and you did nothing wrong. This is normal and it is how the mechanism works.',
        ],
        example: {
          title: 'Dilution is not the same as loss',
        visual: 'dilution',
          rows: [
            ['Before Series A', '2.0% of ₹5Cr = ₹10,00,000'],
            ['After Series A', '1.6% of ₹100Cr = ₹1,60,00,000'],
            ['Percentage', 'Down from 2.0% to 1.6%'],
            ['Value', 'Up 16×'],
          ],
        },
        callout:
          'A smaller slice of a much larger pie is the goal, not the problem. The question is never "was I diluted?" — you always are. It is "did the valuation rise by more than my percentage fell?"',
      },
      {
        heading: 'The ESOP pool, and where it comes from',
        body: [
          'Companies reserve shares to grant employees — typically 10–15% of the company. Watch **when** the pool is created. If a term sheet says the pool is established "pre-money," the dilution comes out of the existing shareholders, including you, before the new investor buys in. If it is created post-money, everyone shares it.',
          'On a ₹5Cr round this difference is worth several lakh to you personally. It is buried in one line of a term sheet and it is worth reading for.',
        ],
      },
      {
        heading: 'Fully diluted, and why it matters',
        body: [
          'A **fully diluted** share count includes everything that could become a share — issued shares, the unallocated ESOP pool, outstanding convertibles, warrants. Always ask for percentages on a fully diluted basis. A percentage quoted on issued shares alone flatters the investor and will quietly shrink later.',
        ],
      },
        {
          heading: 'Pre-money, post-money, and the one mistake everyone makes',
          body: [
            'Almost every arithmetic error made by a new angel comes from dividing by the wrong number. It is worth slowing down here because the mistake is invisible until it costs you.',
            '**Pre-money** is what the company is agreed to be worth before the new money arrives. **Post-money** is pre-money plus the amount raised. Your ownership is always **your cheque divided by post-money** — never by pre-money.',
          ],
          example: {
            title: 'The same deal, computed two ways',
            rows: [
              [
                'Pre-money valuation',
                '₹8,00,00,000',
              ],
              [
                'Amount raised',
                '₹2,00,00,000',
              ],
              [
                'Post-money valuation',
                '₹10,00,00,000',
              ],
              [
                'Your cheque',
                '₹20,00,000',
              ],
              [
                'Correct: 20L ÷ 10Cr (post)',
                '2.00% — what you actually get',
              ],
              [
                'Wrong: 20L ÷ 8Cr (pre)',
                '2.50% — what you think you got',
              ],
            ],
          },
          callout: 'That 0.5 percentage-point gap is a **20% overstatement of your stake**, and it compounds through every projection you build on top of it. When a founder quotes you a valuation, always ask the same follow-up: **"is that pre or post?"** It is a normal question and nobody sensible is offended by it.',
        },
        {
          heading: 'Reading a cap table line by line',
          body: [
            'A cap table is a list of holders and share counts. Ask for it as a spreadsheet, not a screenshot, and read it in this order.',
          ],
          list: [
            '**Total shares outstanding** — the denominator for everything else. Confirm whether it is the issued count or the fully diluted count.',
            '**Founders and their vesting** — unvested founder shares are a risk: a founder leaving early can trigger clawbacks that change everyone\'s percentages.',
            '**The ESOP pool, and whether it is allocated** — an unallocated pool is future dilution sitting in plain sight.',
            '**Convertibles not yet converted** — SAFEs and CCDs from earlier rounds do not show as shares yet, but they will convert and dilute you. Ask for the list and the caps.',
            '**Anyone with anti-dilution protection** — in a down round their percentage is topped up, and the top-up comes out of everyone unprotected. That is you.',
          ],
          callout: 'The number to write down is not your percentage today. It is your percentage **fully diluted, after every outstanding convertible converts and the whole ESOP pool is issued.** That is the honest figure, and it is always smaller than the one on the term sheet.',
        },
        {
          heading: 'When dilution genuinely does hurt you',
          body: [
            'Briefing 03 has argued that dilution is normal. That is true when each round raises the value of the company by more than it reduces your percentage. Two situations break that.',
            'A **down round** — the company raises at a lower valuation than last time. Your percentage falls and the price per share falls with it, so both terms move against you. Worse, protected investors are made whole from the unprotected pool.',
            'A **flat round with a large ESOP top-up** — the valuation is unchanged but a new 15% option pool is created pre-money, so existing holders absorb all of it while the headline price looks stable.',
          ],
          callout: 'The test is one line of arithmetic: **did the value of your holding rise?** Percentage down and value up is a good round. Percentage down and value down is a bad one, whatever anyone calls it.',
        },
    ],
    terms: [
      ['Cap table', 'The register of who owns what in a company.'],
      ['Pre-money', 'What the company is agreed to be worth before the new money goes in.'],
      ['Post-money', 'Pre-money plus the amount raised. Your ownership divides into this number.'],
      ['Dilution', 'The fall in your ownership percentage when new shares are issued.'],
      ['ESOP pool', 'Shares set aside for employees, usually 10–15%.'],
      ['Fully diluted', 'A share count including everything that could convert into shares.'],
        [
          'Down round',
          'A round priced below the previous round\'s valuation. Damaging to percentage and price at once.',
        ],
        [
          'Anti-dilution',
          'A protection that issues extra shares to an investor if a later round prices lower. Paid for by everyone without it.',
        ],
        [
          'Vesting',
          'Shares earned over time rather than owned outright from day one, typically four years with a one-year cliff.',
        ],
        [
          'Share price',
          'Post-money valuation divided by fully diluted shares. The number that tells you whether a round was actually up.',
        ],
    ],
    checkpoint: [
      {
        q: 'You invest ₹5,00,000 in a round with a ₹9,50,00,000 pre-money valuation raising ₹50,00,000. What do you own?',
        options: ['0.50%', '0.53%', '5.00%', '0.05%'],
        answer: 0,
        why: 'Post-money is ₹9.5Cr + ₹50L = ₹10Cr. ₹5,00,000 ÷ ₹10,00,00,000 = 0.50%. Dividing by the pre-money figure would have given 0.53% — the classic overstatement.',
      },
      {
        q: 'Your stake falls from 3% to 2.1% in a round that triples the company\'s valuation. What happened to the value of your holding?',
        options: [
          'It fell, because your percentage fell',
          'It stayed flat',
          'It rose — 2.1% of 3× is more than 3% of 1×',
          'It cannot be determined',
        ],
        answer: 2,
        why: '3% × 1 = 3 units of value; 2.1% × 3 = 6.3 units. You more than doubled. Dilution only hurts when the valuation does not rise enough to outrun it.',
      },
      {
        q: 'Why does it matter whether an ESOP pool is created pre-money or post-money?',
        options: [
          'It changes the tax treatment for employees',
          'Post-money pools are not permitted in India',
          'It determines the vesting schedule',
          'Pre-money means existing shareholders absorb the dilution alone',
        ],
        answer: 3,
        why: 'A pre-money pool dilutes only the existing holders — you — before the new investor buys in. A post-money pool spreads that dilution across everyone including the incoming investor.',
      },
        {
          q: 'A founder says "we are raising ₹2Cr at a ₹10Cr valuation" and you write a ₹20L cheque. What must you clarify before computing your stake?',
          options: [
            'Whether ₹10Cr is the pre-money or the post-money figure',
            'The number of shares outstanding',
            'The founders\' vesting schedule',
            'Whether the round is a priced round or a convertible',
          ],
          answer: 0,
          why: 'If ₹10Cr is post-money you get 2.00%; if it is pre-money the post-money is ₹12Cr and you get 1.67%. Every other calculation depends on resolving this first.',
        },
        {
          q: 'Your stake is 2% on the issued share count, but the company has an unallocated 12% ESOP pool and ₹1Cr of unconverted SAFEs. What is the honest figure to plan on?',
          options: [
            '2% — the other items have not happened yet',
            'Meaningfully below 2%, once the pool is issued and the SAFEs convert',
            'Somewhat above 2%, since convertibles often lapse',
            '2% until the next priced round, then exactly 1%',
          ],
          answer: 1,
          why: 'Both the pool and the convertibles will become shares. Fully diluted is the only figure worth planning around, and it is always lower than the issued-share figure a term sheet tends to quote.',
        },
        {
          q: 'A company raises a flat round but creates a new 15% option pool out of the pre-money. What has actually happened to you?',
          options: [
            'Nothing — the valuation is unchanged',
            'Your percentage is protected because the round is flat',
            'You have been diluted by roughly 15% while the headline price stayed flat',
            'The pool dilutes only the founders',
          ],
          answer: 2,
          why: 'A pool created pre-money is absorbed by existing shareholders before the new money arrives. The headline valuation conceals a real reduction in everyone\'s stake — this is one of the most common quiet costs in a round.',
        },
    ],
  },

  /* ---------------------------------------------------------------- 04 */
  {
    slug: 'valuation',
    num: '04',
    title: 'Valuation: where the number comes from',
    minutes: 23,
    summary:
      'Why an early-stage valuation is negotiated rather than calculated, and how to tell a defensible number from a fashionable one.',
    outcome: 'Sanity-check a proposed valuation and explain, out loud, why it is or is not reasonable.',
    sections: [
      {
        heading: 'It is not a calculation',
        body: [
          'Mature companies are valued off cash flows. A pre-revenue startup has no cash flows, so discounted-cash-flow models produce whatever you assume they will produce. Anyone showing you a ten-year DCF for a seed company is showing you their assumptions, not the company\'s value.',
          'An early-stage valuation is the outcome of a negotiation, constrained by what comparable companies raised recently and by how much the founder is willing to be diluted.',
        ],
      },
      {
        heading: 'The founder\'s arithmetic',
        body: [
          'Founders usually work backwards. They decide how much money they need for the next 18 months, and how much of the company they are willing to sell — customarily 10–20%. Those two numbers imply the valuation.',
        ],
        example: {
          title: 'Backing into a number',
          rows: [
            ['Runway needed', '18 months'],
            ['Cash required', '₹60,00,000'],
            ['Willing to sell', '15%'],
            ['Implied post-money', '₹4,00,00,000 (60L ÷ 0.15)'],
            ['Implied pre-money', '₹3,40,00,000'],
          ],
        },
      },
      {
        heading: 'Four sanity checks',
        list: [
          '**Comparables.** What did companies at this stage, in this sector, in this city raise at in the last twelve months? If this deal is at three times that, ask what justifies it.',
          '**Ownership maths.** After this round, do the founders still own enough to stay motivated for another five years? Founders below roughly 50% after seed often struggle to raise later — investors worry about incentives.',
          '**The return test.** For your cheque to return 10×, what would this company have to be worth at exit? If the answer is "larger than the entire market it sells into," the valuation is too high.',
          '**Dilution runway.** If they raise two or three more rounds at normal dilution, is there anything left for you at exit? Work it forward.',
        ],
      },
      {
        heading: 'The return test, worked',
        example: {
          title: 'Does 10× exist here?',
          rows: [
            ['You invest', '₹10,00,000 at ₹5Cr post-money = 2.0%'],
            ['Dilution over 3 further rounds', 'roughly 0.55× cumulative → ~1.1% at exit'],
            ['For 10× you need', '₹1,00,00,000 back'],
            ['So exit value must be', '₹1Cr ÷ 1.1% ≈ ₹90Cr'],
            ['Question to ask', 'Is a ₹90Cr exit plausible for this company in this market?'],
          ],
        },
        callout:
          'A high valuation does not mean the company is bad. It means your margin for error is thinner and your upside is capped lower. Price is not quality — price is the terms on which you take the risk.',
      },
      {
        heading: 'Where valuations go wrong',
        body: [
          'In hot markets, valuations detach from evidence — everyone is pricing off other recent deals that were themselves priced off other recent deals. Investing at the top of that cycle is survivable if the company is genuinely exceptional and fatal if it is merely good.',
          'The opposite error is real too: refusing a strong company over a 20% valuation difference. On a portfolio where one winner pays for twenty losses, being slightly overpriced on the winner costs you far less than missing it.',
        ],
      },
        {
          heading: 'What actually sets the price at this stage',
          body: [
            'Since there is no revenue to multiply and no cash flow to discount, the number comes from a short list of observable things. Knowing the list lets you argue about the right ones.',
          ],
          list: [
            '**What comparable companies raised recently** — the strongest single input, and the reason founders quote you other people\'s rounds.',
            '**How much the company needs, and how much the founders will sell** — see the worked example above; this backs into a number mechanically.',
            '**Competition for the round** — three interested investors moves the price more than any spreadsheet.',
            '**The founders\' track record** — a second-time founder with an exit behind them prices higher, and largely deserves to.',
            '**The stage of evidence** — an idea prices lower than a prototype, which prices lower than paying customers.',
          ],
          callout: 'Notice that four of the five are about **negotiating position**, not about the business. That is not cynicism, it is the actual mechanism. An early-stage valuation is a negotiated price, and the useful question is never "is this correct?" but **"can this price still produce my required return?"**',
        },
        {
          heading: 'Valuation bands you can sanity-check against',
          body: [
            'These are rough Indian market conventions rather than rules, and they move with the cycle. They are useful as a first filter: a number far outside its band needs an explanation, and sometimes there is a good one.',
          ],
          example: {
            title: 'Typical Indian early-stage bands',
            rows: [
              [
                'Idea, no product',
                '₹1Cr – ₹4Cr pre-money',
              ],
              [
                'Working prototype, no revenue',
                '₹3Cr – ₹8Cr pre-money',
              ],
              [
                'Early revenue, some retention',
                '₹8Cr – ₹25Cr pre-money',
              ],
              [
                'Clear traction, growing monthly',
                '₹25Cr – ₹80Cr pre-money',
              ],
              [
                'Second-time founder with an exit',
                'Add roughly 1.5× to 2× to any band',
              ],
            ],
          },
          callout: 'Use these to ask a question, never to end a conversation. A ₹40Cr pre-money on a prototype is not automatically wrong — but the founder should be able to explain what justifies five times the usual band, and **"another company got it" is not an explanation of value, only of market conditions.**',
        },
        {
          heading: 'What a high price actually costs you',
          body: [
            'Overpaying at the earliest stage does not merely reduce your return. It changes the range of outcomes that can produce any return at all.',
            'At a ₹5Cr post-money, a ₹50Cr exit is a good result for you. At a ₹25Cr post-money, that same ₹50Cr exit barely returns your money after dilution. You have not just paid more — you have eliminated every modest-but-real outcome and made yourself dependent on the company becoming enormous.',
          ],
          callout: 'A high entry price **narrows the set of futures in which you make money.** That is the real cost, and it is invisible on the day you write the cheque.',
        },
    ],
    terms: [
      ['Valuation', 'The agreed worth of the company, used to calculate what a cheque buys.'],
      ['Comparable', 'A similar recent deal used as a pricing reference.'],
      ['Runway', 'How many months the company can operate on the cash it holds.'],
      ['DCF', 'Discounted cash flow — a valuation method that needs cash flows, which early startups lack.'],
        [
          'Comparable',
          'A similar company whose recent round is used as a reference price.',
        ],
        [
          'Entry price',
          'The valuation at which you invested. It sets the bar every future outcome has to clear.',
        ],
        [
          'Up round / down round',
          'A round priced above / below the previous one.',
        ],
        [
          'Priced round',
          'A round with an agreed valuation, as opposed to a convertible that defers the question.',
        ],
    ],
    checkpoint: [
      {
        q: 'A founder shows you a ten-year DCF justifying a ₹40Cr pre-revenue valuation. How should you read it?',
        options: [
          'As solid evidence — DCF is the rigorous method',
          'As grounds to walk away immediately',
          'As a legal requirement for the round',
          'As a statement of their assumptions, not of the company\'s value',
        ],
        answer: 3,
        why: 'A DCF on a company with no revenue simply outputs whatever growth assumptions were fed into it. It tells you how the founder thinks, which is useful, but it is not evidence of value.',
      },
      {
        q: 'What is the "return test"?',
        options: [
          'Working out what the company must be worth at exit for your cheque to return the multiple you need',
          'Checking whether the founder has returned capital before',
          'Comparing the valuation to the Nifty',
          'Confirming the round is oversubscribed',
        ],
        answer: 0,
        why: 'You start from the multiple you need, account for future dilution, and derive the required exit value. If that number is implausible for the market, the entry price is too high.',
      },
        {
          q: 'A founder justifies a ₹40Cr pre-money on a pre-revenue prototype by citing a competitor who raised at ₹45Cr. How should you treat that?',
          options: [
            'As strong evidence — the market has set a price',
            'As information about market conditions, not about this company\'s value',
            'As irrelevant, since comparables never matter',
            'As grounds to offer exactly ₹45Cr to stay competitive',
          ],
          answer: 1,
          why: 'Comparables tell you what the market is paying, which is real and worth knowing. They say nothing about whether this company can produce your required return at that price — which is the only question you are actually deciding.',
        },
        {
          q: 'Why does a high entry price matter more at pre-seed than at Series B?',
          options: [
            'Because pre-seed rounds are larger in absolute terms',
            'Because early valuations are legally capped',
            'Because there is more dilution still to come, so a high entry compounds through more rounds',
            'It does not — the effect is the same at every stage',
          ],
          answer: 2,
          why: 'You will be diluted through every subsequent round. A high price paid early is carried through all of that dilution, so it needs a much larger exit to recover than the same overpayment made later.',
        },
        {
          q: 'You run the return test and find that a 10× requires a ₹400Cr exit in a market whose largest-ever exit was ₹90Cr. What is the correct conclusion?',
          options: [
            'Invest a smaller amount to reduce the risk',
            'Proceed if the founder is exceptional',
            'Ask for anti-dilution protection instead',
            'The price is too high for this opportunity, regardless of how good the company is',
          ],
          answer: 3,
          why: 'The return test is about the price, not the company. If the required exit is outside anything the market has produced, no quality of founder fixes it — the only remedies are a lower price or no investment.',
        },
    ],
  },

  /* ---------------------------------------------------------------- 05 */
  {
    slug: 'due-diligence',
    num: '05',
    title: 'Due diligence: what to actually check',
    minutes: 30,
    summary:
      'A working checklist across team, market, product, traction and paperwork — plus the red flags that should stop a deal.',
    outcome: 'Run a structured review of an opportunity instead of reacting to the pitch.',
    sections: [
      {
        heading: 'What you are trying to establish',
        body: [
          'Diligence is not about proving the company will succeed — you cannot. It is about finding the things that would make you regret investing, before you invest. You are hunting for disqualifiers, not confirmation.',
          'At pre-seed there is little to verify, so weight falls on the team. As traction appears, weight shifts to the numbers.',
        ],
      },
      {
        heading: 'Team — the heaviest weight at the earliest stage',
        list: [
          'Why these specific people for this specific problem? Founder–market fit beats a polished deck.',
          'Have they worked together before? Co-founder breakups are one of the commonest causes of early-stage failure.',
          'Is the equity split between founders sensible, and is it vesting? Unvested founder equity is a serious structural risk.',
          'How do they respond when you challenge them? You want engagement with the substance, not defensiveness.',
          'Reference them. Two calls with people who have worked with the founder tell you more than the entire deck.',
        ],
      },
      {
        heading: 'Market',
        list: [
          'Is the market genuinely large, or is a large adjacent market being borrowed to make a slide look better?',
          'Prefer a bottom-up market size — customers × price — over a top-down "1% of a $50B market" claim.',
          'Why now? What changed recently — regulation, cost curve, behaviour — that makes this possible today and not five years ago?',
          'Who else is doing this? "We have no competitors" almost always means the market has not been researched, or there is no demand.',
        ],
      },
      {
        heading: 'Product and traction',
        list: [
          'Use the product. If you cannot, that itself is information.',
          'Retention over growth. Users who come back matter more than users who signed up once. Ask for a cohort retention chart.',
          'Where does growth come from — paid acquisition, or word of mouth? Paid growth stops when the money stops.',
          'For revenue businesses: what is the gross margin, and is it heading in the right direction?',
          'Concentration: if one customer is 60% of revenue, that is not really a business yet.',
        ],
      },
      {
        heading: 'Paperwork',
        list: [
          'Is the company properly incorporated, with a clean cap table you can actually read?',
          'Is intellectual property assigned to the company, not held personally by a founder or a former contractor?',
          'Any outstanding convertibles, side letters or verbal promises that would change your percentage?',
          'Litigation, tax notices, statutory filings up to date?',
          'Are the numbers in the deck the same as the numbers in the accounts?',
        ],
      },
      {
        heading: 'Red flags',
        callout:
          'Any one of these deserves a direct question. Two or more together is usually a reason to pass: evasiveness about metrics · refusing to let you speak to customers · a cap table already crowded with dead equity · unexplained founder departures · pressure to close "by Friday" · revenue defined creatively (GMV presented as revenue) · no written record of previous fundraising.',
      },
      {
        heading: 'Proportionality',
        body: [
          'Diligence should scale with the cheque. Two weeks of work on a ₹2,00,000 investment is not a good use of your life. But the *questions* stay the same at every size — you just accept thinner answers on smaller cheques.',
        ],
      },
        {
          heading: 'A checklist you can actually work through',
          body: [
            'Diligence goes wrong when it becomes an unbounded reading exercise. Give it a shape: five areas, a handful of questions each, and a written note of what you found. If you cannot answer a question, that is itself a finding.',
          ],
          list: [
            '**Team** — Who has done the hard version of this before? What happens to the company if the technical founder leaves? Are the shares vesting? Have they worked together before?',
            '**Market** — Who is the customer, and what do they do today instead? Is the market growing or is the company taking share in a flat one? What would have to be true for this to be a ₹500Cr business?',
            '**Product and traction** — What is the single number that best shows this is working? Is it growing month on month without paid acquisition? What is retention after 90 days?',
            '**Money** — What is the monthly burn and the runway? What does this round buy in milestones, not months? What is the unit economics on one customer?',
            '**Paperwork** — Is the cap table clean? Is IP assigned to the company rather than to an individual? Any litigation, tax notices, or unpaid statutory dues? Are there prior convertibles?',
          ],
          callout: 'Write your answers down before you decide, not after. **A written note is the only reliable defence against telling yourself a different story once you have already fallen for the company.**',
        },
        {
          heading: 'Reference calls, and how to actually do them',
          body: [
            'The highest-value hour in diligence is usually spent on the phone with someone who is not the founder. Founders will give you references; take them, but treat them as the beginning.',
            'Ask each reference at the end: **"who else should I speak to?"** The second-degree references — the ones the founder did not choose — are where the useful information is.',
          ],
          list: [
            '**A customer** — Would you be upset if this product disappeared tomorrow? What did you use before? What nearly stopped you buying?',
            '**A former colleague** — What is this person like when a project is going badly?',
            '**A co-investor** — What did you find in your own diligence that gave you pause?',
            '**A former employee** — the single most informative call available, and the one people skip.',
          ],
          callout: 'Listen for what is **not** said. A reference who praises energy and vision at length but never mentions judgement or follow-through has told you something specific.',
        },
        {
          heading: 'Proportionate diligence, by cheque size',
          body: [
            'Twenty hours of work on a ₹1L cheque is irrational; the same twenty hours on ₹25L is negligent to skip. Scale the effort.',
          ],
          example: {
            title: 'Roughly how much work is warranted',
            rows: [
              [
                '₹50,000 – ₹2L',
                '2–3 hours: read the deck, one founder call, check the cap table',
              ],
              [
                '₹2L – ₹10L',
                '6–10 hours: add two reference calls and the financial model',
              ],
              [
                '₹10L – ₹25L',
                '15–25 hours: add customer calls, a former employee, legal review of the SHA',
              ],
              [
                'Above ₹25L',
                'Full review, and pay a lawyer to read the documents',
              ],
            ],
          },
        },
        {
          heading: 'When you are following a lead',
          body: [
            'Most angels invest alongside a lead who has done deeper work. That is a real advantage, and it is also where the laziest thinking happens.',
            'Relying on the lead is reasonable **only if you know who they are, what they actually checked, and that they are putting in meaningful money on the same terms as you.** A lead investing a token amount, or on better terms than yours, is not a lead — they are a name being used to make the round look credible.',
          ],
          callout: 'Two questions cover most of it: **"what did your diligence turn up that gave you pause?"** and **"are you investing on identical terms to mine?"** An evasive answer to either is the finding.',
        },
    ],
    terms: [
      ['Due diligence', 'Structured verification of an opportunity before investing.'],
      ['Founder–market fit', 'The specific reason these founders are well-suited to this problem.'],
      ['Cohort retention', 'What share of users acquired in a given month are still active later.'],
      ['GMV', 'Gross merchandise value — total transaction volume. It is not revenue.'],
      ['Vesting', 'Earning equity over time, so someone who leaves early does not keep it all.'],
        [
          'Reference call',
          'A conversation with someone who has worked with, bought from, or invested alongside the founder.',
        ],
        [
          'Burn rate',
          'Net cash consumed per month.',
        ],
        [
          'Retention',
          'The proportion of customers still active after a given period. The clearest evidence that something works.',
        ],
        [
          'Unit economics',
          'What it costs to acquire and serve one customer, against what that customer pays.',
        ],
        [
          'IP assignment',
          'The legal transfer of intellectual property to the company. Its absence is a deal-stopper.',
        ],
    ],
    checkpoint: [
      {
        q: 'A founder says "we have no competitors." What is the most reasonable reading?',
        options: [
          'Either the market has not been researched, or nobody wants the product',
          'A genuine moat and a strong buy signal',
          'They hold a patent',
          'They are first to market and will stay there',
        ],
        answer: 0,
        why: 'Real markets have competition, including the status-quo alternative of doing nothing. The claim usually signals shallow research — or an absence of demand.',
      },
      {
        q: 'Why is unvested founder equity a structural risk?',
        options: [
          'It increases the tax burden on the company',
          'A founder could leave early and keep their full stake, leaving dead equity on the cap table',
          'It prevents the company from raising again',
          'SEBI does not allow it',
        ],
        answer: 1,
        why: 'Without vesting, a founder who leaves after six months retains everything. That dead equity has to be worked around by everyone who stays, and it makes future rounds harder.',
      },
      {
        q: 'Which single metric best indicates that users actually want the product?',
        options: ['Total signups', 'Social media followers', 'Cohort retention', 'Press coverage'],
        answer: 2,
        why: 'Signups measure marketing. Retention measures whether the product is worth returning to — the only one of these that is hard to manufacture.',
      },
        {
          q: 'Which single reference call tends to be the most informative, and is most often skipped?',
          options: [
            'The founder\'s current investor',
            'The company\'s auditor',
            'A former employee',
            'A competitor',
          ],
          answer: 2,
          why: 'A former employee has seen the company from inside, under pressure, and has no stake in the round closing. It is uncomfortable to ask for and consistently the most useful hour available.',
        },
        {
          q: 'You are following a lead investor. Which fact would most undermine your reliance on their diligence?',
          options: [
            'They are a first-time lead',
            'They took six weeks to complete their review',
            'They are based in a different city',
            'They are investing a token amount and on better terms than you',
          ],
          answer: 3,
          why: 'A lead\'s value to you is that their money is at risk on the same terms as yours. Different terms or a token cheque means their incentive is not aligned with yours, and their name is doing work their capital is not.',
        },
        {
          q: 'You discover the core technology was written by the CTO before incorporation and has never been assigned to the company. What is this?',
          options: [
            'A serious defect — the company may not own the thing you are buying',
            'A minor administrative item to fix after closing',
            'Normal, since founders always own their early work',
            'Only relevant if the CTO later leaves',
          ],
          answer: 0,
          why: 'If the IP sits with an individual, the company does not own its principal asset and a departing founder could take it. It is fixable, but it must be fixed before the money moves, not after.',
        },
    ],
  },

  /* ---------------------------------------------------------------- 06 */
  {
    slug: 'term-sheets',
    num: '06',
    title: 'Term sheets: the clauses that matter',
    minutes: 26,
    summary:
      'Economics and control, clause by clause, and which ones are worth negotiating as a small investor.',
    outcome: 'Read a term sheet and identify anything unusual or hostile in it.',
    sections: [
      {
        heading: 'Two categories, and only two',
        body: [
          'Every clause in a term sheet does one of two things: it divides the money (**economics**), or it decides who chooses (**control**). Read it twice, once for each question.',
          'A term sheet is usually non-binding except for confidentiality and exclusivity — but in practice it sets the terms the final documents will follow, so this is where the negotiation happens.',
        ],
      },
      {
        heading: 'Economics',
        list: [
          '**Liquidation preference.** Who gets paid first in a sale. "1× non-participating" is standard and fair: the investor takes either their money back or their percentage, whichever is larger. **Participating** preference means they take their money back *and* their percentage — a double dip. Anything above 1×, or participating, is aggressive.',
          '**Pro-rata rights.** The right to invest again in later rounds to maintain your percentage. Genuinely valuable if the company does well, because it lets you put more money into your winner. Ask for it.',
          '**Anti-dilution.** Protection if the company later raises at a lower valuation. "Broad-based weighted average" is normal. "Full ratchet" is punitive and should make you ask why it is there.',
          '**ESOP pool timing.** Pre-money or post-money — Module 03 covers why the difference costs you real money.',
        ],
      },
      {
        heading: 'Control',
        list: [
          '**Board composition.** Who sits on the board and how seats change over time. As a small angel you will not get a seat; you should still know who does.',
          '**Protective provisions.** A list of actions requiring investor consent — selling the company, issuing new shares, taking on debt. Reasonable in principle; check the list is not so long that the company cannot function.',
          '**Information rights.** Your entitlement to regular financials and updates. Small angels are often left out. Ask to be included; it costs the company nothing and is your only window into the business.',
          '**Drag-along.** If a majority agrees to sell, minority holders must sell too. This is normal and protects everyone from a single holdout blocking an exit.',
          '**Tag-along.** If the founders sell their shares, you can join on the same terms. You want this.',
        ],
      },
      {
        heading: 'Founder terms you should check',
        list: [
          '**Founder vesting** — typically four years with a one-year cliff. Its absence is a red flag.',
          '**Reverse vesting** on already-issued founder shares, so an early departure returns equity to the company.',
          '**Non-compete and IP assignment** — the company should own what it is built on.',
        ],
      },
      {
        heading: 'What is actually negotiable for you',
        callout:
          'If you are writing ₹5L into a ₹1Cr round, you are not renegotiating the liquidation preference. Your realistic asks are: pro-rata rights, information rights, and being on the same paper as the lead — not a worse side agreement. Those three are usually granted if you ask, and almost never offered if you do not.',
      },
      {
        heading: 'The one question to ask the lead',
        body: [
          '"Which terms here did you negotiate, and which came from the founder?" The answer tells you how hard the lead actually worked, and where the pressure points in the deal were. A lead who cannot answer has not done the work you are relying on them to do.',
        ],
      },
        {
          heading: 'A red-flag reference you can read a term sheet against',
          body: [
            'Most term sheets offered to angels in India are unremarkable. The value of knowing the unusual clauses is that you can spot the one document in twenty that is not.',
          ],
          list: [
            '**Participating preference (a "double dip")** — the investor takes their money back *and* their percentage of what remains. On a modest exit this can consume most of the proceeds before ordinary shareholders see anything.',
            '**A liquidation preference above 1×** — a 2× or 3× preference means the company must sell for a large multiple before your ordinary shares are worth anything.',
            '**Full-ratchet anti-dilution** — in a down round the protected investor is repriced all the way to the new price, and the cost falls entirely on the unprotected. Broad-based weighted average is the normal, fairer form.',
            '**A guaranteed return or fixed redemption** — turns the instrument into debt the company probably cannot service, and puts the holder ahead of you.',
            '**Founder vesting absent or already complete** — nothing keeps the founders in the building.',
            '**Drag-along with a low threshold** — a small majority can force you to sell on terms you did not choose.',
          ],
          callout: 'None of these is automatically fatal, and some are normal for a lead taking real risk. What matters is whether **anyone holds a right that you do not, and whether you were told about it.** A term sheet that hides a 2× participating preference in a definitions annexe is telling you about the people, not just the terms.',
        },
        {
          heading: 'Liquidation preference, worked with numbers',
          body: [
            'This is the clause with the largest effect on what you actually receive, and it is almost always glossed over. Here is the same exit under three structures.',
          ],
          example: {
            title: 'A ₹60Cr exit. Investors put in ₹20Cr for 40%',
            rows: [
              [
                'No preference (all ordinary)',
                'Investors take 40% = ₹24Cr. Everyone else ₹36Cr',
              ],
              [
                '1× non-participating',
                'Investors take the greater of ₹20Cr or 40%. They take ₹24Cr',
              ],
              [
                '1× participating',
                'Investors take ₹20Cr back, then 40% of the ₹40Cr left = ₹36Cr total',
              ],
              [
                '2× participating',
                'Investors take ₹40Cr back, then 40% of ₹20Cr = ₹48Cr total',
              ],
              [
                'Left for founders and angels at 2× participating',
                '₹12Cr of a ₹60Cr exit',
              ],
            ],
          },
          callout: 'The exit price did not change in any of those rows. **Only the paperwork changed, and it moved ₹24Cr.** This is why the structure matters as much as the valuation you negotiated.',
        },
        {
          heading: 'What you can realistically ask for',
          body: [
            'As a small angel you will not redraft the document. You can reasonably ask for four things, and you should ask in writing.',
          ],
          list: [
            '**Pro-rata rights** — the right to maintain your percentage in the next round. The single most valuable thing a small investor can obtain, because it lets you put more money into the ones that are working.',
            '**Information rights** — quarterly accounts and a shareholder update. Without this you will learn how your investment is doing from the news.',
            '**Most-favoured-nation on this round** — if someone else in the same round gets better terms, you get them too.',
            '**Tag-along** — if the founders sell, you can sell on the same terms.',
          ],
          callout: 'If you get only one, take **pro-rata.** Briefing 07 explains why: your return depends on concentrating follow-on money into the small number of companies that work, and pro-rata is the mechanism that allows it.',
        },
    ],
    terms: [
      ['Liquidation preference', 'Who gets paid first, and how much, when the company is sold.'],
      ['Participating preference', 'Investor receives their money back AND their ownership share. Aggressive.'],
      ['Pro-rata right', 'The right to invest in later rounds to maintain your percentage.'],
      ['Anti-dilution', 'Protection if a later round prices below this one.'],
      ['Full ratchet', 'The harshest anti-dilution form — repricing all earlier shares to the new lower price.'],
      ['Drag-along', 'Minority holders must join a sale approved by the majority.'],
      ['Tag-along', 'Minority holders may join a sale the founders are making.'],
      ['Cliff', 'A minimum period before any equity vests, usually one year.'],
        [
          'Participating preference',
          'The holder receives their money back and then also shares in the remainder. A "double dip".',
        ],
        [
          'Full ratchet',
          'The most aggressive anti-dilution: the protected investor is repriced entirely to the new, lower price.',
        ],
        [
          'Drag-along',
          'A clause forcing minority holders to join a sale approved by a defined majority.',
        ],
        [
          'Tag-along',
          'The right to join a sale on the same terms when others sell.',
        ],
        [
          'MFN',
          'Most-favoured-nation: you automatically receive any better terms given to another investor in the same round.',
        ],
    ],
    checkpoint: [
      {
        q: 'What does "1× non-participating liquidation preference" mean?',
        options: [
          'The investor gets their money back and then their percentage as well',
          'The investor gets whichever is larger: their money back, or their ownership percentage',
          'The investor is paid last',
          'The investor gets exactly one times their percentage',
        ],
        answer: 1,
        why: 'Non-participating means the investor chooses one or the other, not both. That is the market-standard, founder-fair structure. Participating preference is the double dip.',
      },
      {
        q: 'You are writing a small cheque into a round led by someone else. What is realistic to ask for?',
        options: [
          'A board seat',
          'A lower valuation than the lead',
          'Pro-rata rights, information rights, and the same paper as the lead',
          'A guaranteed return',
        ],
        answer: 2,
        why: 'You will not move the headline economics on a small cheque. Those three are low-cost to the company, commonly granted when asked for, and rarely offered otherwise.',
      },
      {
        q: 'A term sheet includes full-ratchet anti-dilution. How should you read that?',
        options: [
          'Standard market practice',
          'A benefit to the founders',
          'A legal requirement for preference shares',
          'Unusually aggressive — worth asking why it is there',
        ],
        answer: 3,
        why: 'Broad-based weighted average is the norm. Full ratchet reprices all earlier shares to the new low price and can devastate founders and earlier investors in a down round.',
      },
        {
          q: 'A term sheet gives the lead a 2× participating preference. On a modest exit, what is the practical effect on your ordinary shares?',
          options: [
            'The lead takes double their money out first and then still shares the remainder, so ordinary holders may receive almost nothing',
            'Very little — preferences only matter in a wind-up',
            'You are automatically given the same preference',
            'It increases the exit price the acquirer must pay',
          ],
          answer: 0,
          why: 'A 2× participating preference is paid before ordinary shares and then participates again. On a modest exit it can consume most of the proceeds, which is why the structure can matter more than the headline valuation.',
        },
        {
          q: 'Of the four things a small angel can realistically negotiate, which has the greatest long-term effect on returns?',
          options: [
            'Information rights',
            'Pro-rata rights',
            'Most-favoured-nation',
            'Tag-along rights',
          ],
          answer: 1,
          why: 'Returns are driven by concentrating follow-on capital into the few companies that work. Pro-rata is the mechanism that lets you do that; the others are protective rather than value-creating.',
        },
        {
          q: 'You find a 2× participating preference described only in a definitions annexe, never mentioned in conversation. Beyond the economics, what have you learned?',
          options: [
            'Nothing — annexes are where definitions belong',
            'That the lead is inexperienced',
            'Something about how this counterparty handles information you would want to know',
            'That the round is likely to be oversubscribed',
          ],
          answer: 2,
          why: 'The clause itself may be defensible. Not raising it is a data point about the relationship you are entering, and you will be a minority holder in that relationship for years.',
        },
    ],
  },

  /* ---------------------------------------------------------------- 07 */
  {
    slug: 'portfolio-construction',
    num: '07',
    title: 'Portfolio construction and the power law',
    minutes: 25,
    summary:
      'How many investments, how large each cheque, and why one great outcome has to pay for everything else.',
    outcome: 'Set a personal allocation, cheque size and pace before you look at a single deal.',
    sections: [
      {
        heading: 'The power law',
        body: [
          'Angel returns are not normally distributed. In a typical portfolio, roughly half the investments return nothing, most of the rest return something between "your money back" and "twice your money," and one or two — if you are fortunate — return more than everything else combined.',
          'This is not a flaw to be optimised away. It is the structure of the asset class, and every sensible decision about how to invest follows from accepting it.',
        ],
      },
      {
        heading: 'The consequence: you need enough shots',
        body: [
          'If one investment in twenty produces the return, then a portfolio of five is not a portfolio — it is five bets, and the most likely outcome is that none of them is the one. Most experienced angels consider 20–30 investments a reasonable minimum for the distribution to have a chance of working.',
        ],
        callout:
          'This is the number that stops most people. If your total allocation is ₹20,00,000 and you want 20 positions, your cheque is ₹1,00,000 — and many rounds have higher minimums. That arithmetic is precisely why syndicates and angel funds exist.',
      },
      {
        heading: 'Sizing the allocation',
        list: [
          'Decide the total you will commit to this asset class over several years, as a share of investable assets — many advisers suggest keeping illiquid, high-risk allocations modest relative to overall net worth.',
          'Assume the entire allocation goes to zero. If that changes your life, the number is too big.',
          'Divide by your target number of positions to get a cheque size. Do not start with the cheque size.',
          'Hold back reserves. Following on into companies that are working is where a lot of angel return is made — some angels reserve as much as they deploy initially.',
        ],
      },
      {
        heading: 'Pace and time diversification',
        body: [
          'Deploying an entire allocation in a single year concentrates you in one market environment. Investing at the top of a cycle across twenty companies in twelve months is a single bet on that vintage.',
          'Spreading deployment over three to four years diversifies across market conditions, and has the useful side effect of making you slower and more selective.',
        ],
      },
      {
        heading: 'A worked allocation',
        example: {
          title: 'A conservative first-time angel plan',
        visual: 'powerlaw',
          rows: [
            ['Total allocation', '₹40,00,000 over 4 years'],
            ['Initial cheques', '₹1,00,000 × 24 = ₹24,00,000'],
            ['Reserved for follow-ons', '₹16,00,000'],
            ['Pace', '6 investments per year'],
            ['Assumption', 'The full ₹40,00,000 could be lost'],
            ['Expected shape', '~12 write-offs, ~10 modest, 1–2 carrying the portfolio'],
          ],
        },
      },
      {
        heading: 'What not to do',
        list: [
          'Do not concentrate because you are excited. The deal you feel most certain about is not reliably the winner — conviction and outcome are only loosely related at this stage.',
          'Do not average down into a struggling company out of loyalty. Reserve capital belongs with the companies that are working.',
          'Do not count unrealised paper markups as returns. A valuation on a later round is not cash, and it can go to zero.',
        ],
      },
        {
          heading: 'How much of your net worth belongs here',
          body: [
            'This is the decision that matters most, and it is made once rather than deal by deal. The conventional guidance for private, illiquid, high-risk holdings is **5% to 10% of investable net worth**, and less if you are within a few years of needing the money.',
            'Investable net worth means liquid assets: it excludes the house you live in, your emergency reserve, and anything already committed to school fees, a mortgage, or retirement in the near term.',
          ],
          example: {
            title: 'Sizing from the top down',
            rows: [
              [
                'Investable net worth',
                '₹6,00,00,000',
              ],
              [
                'Allocation to angel investing at 7%',
                '₹42,00,000',
              ],
              [
                'Deployed over',
                '4 years',
              ],
              [
                'Initial cheques (60%)',
                '₹25,00,000 → 25 cheques of ₹1,00,000',
              ],
              [
                'Reserved for follow-ons (40%)',
                '₹17,00,000',
              ],
              [
                'Test to apply',
                'If the whole ₹42,00,000 went to zero, would anything in your life change?',
              ],
            ],
          },
          callout: 'If the honest answer to that last row is yes, **the allocation is too large** — reduce it until the answer is no. Angel investing done at a size that can hurt you produces bad decisions under pressure, which is precisely when good ones matter.',
        },
        {
          heading: 'Reserves, and the discipline of using them',
          body: [
            'Setting aside 30-50% of your allocation for follow-ons is standard advice. Following it is where most angels fail, and they fail in a specific direction.',
            'The temptation is to put more money into a company that is struggling, because you have a relationship with the founder and the story for why the next six months will be different is always available. The correct use is the opposite: **follow on into demonstrated winners**, where the evidence has improved since you first invested.',
          ],
          list: [
            '**A good reason to follow on** — revenue has grown consistently, a strong new investor is leading the round, the original thesis is being confirmed.',
            '**A bad reason** — the company will fail without it, you feel responsible, or you want to avoid marking the position down.',
          ],
          callout: 'Write your follow-on rule down before you deploy a rupee, in one sentence, and apply it mechanically. **"I follow on only into companies that have raised a priced round led by a new outside investor"** is a crude rule that works better than judgement made under emotional pressure.',
        },
        {
          heading: 'What a realistic ten-year picture looks like',
          body: [
            'It is worth seeing the whole arc, because the middle years of an angel portfolio are discouraging and people quit during them.',
          ],
          list: [
            '**Years 1-2** — you deploy. Everything looks fine; almost nothing has been tested.',
            '**Years 2-4** — the first failures arrive. This is the hardest period: real losses, no offsetting gains, and your paper value falls below what you put in.',
            '**Years 4-7** — survivors raise larger rounds at higher prices. Paper value recovers, but no cash has returned.',
            '**Years 7-10** — the first real exits, if there are any. This is when a portfolio either works or does not.',
          ],
          callout: 'The **J-curve** is not a risk to be managed; it is the normal shape. An angel who stops after three years because "it is not working" has left before the only part that could have worked.',
        },
    ],
    terms: [
      ['Power law', 'A distribution where a very small number of outcomes dominate the total.'],
      ['Follow-on', 'A further investment into a company you already hold.'],
      ['Reserves', 'Capital deliberately held back for follow-ons.'],
      ['Vintage', 'The year a portfolio was deployed. Market conditions make vintages differ substantially.'],
      ['Write-off', 'An investment marked down to zero.'],
        [
          'Investable net worth',
          'Liquid assets available to invest, excluding your home, emergency reserve and near-term commitments.',
        ],
        [
          'Reserves',
          'Capital held back from initial cheques to follow on into companies that are working.',
        ],
        [
          'J-curve',
          'The shape of a private portfolio\'s value over time: down first as failures land, up later if winners emerge.',
        ],
        [
          'Vintage',
          'The year a set of investments was made. Deploying across several vintages diversifies market conditions.',
        ],
    ],
    checkpoint: [
      {
        q: 'Why is a five-investment angel portfolio considered too concentrated?',
        options: [
          'SEBI requires a minimum of ten',
          'Diligence costs are higher per deal',
          'Founders prefer larger syndicates',
          'Returns are driven by rare outliers, so too few positions likely misses them entirely',
        ],
        answer: 3,
        why: 'If roughly one in twenty produces the return, five positions gives you a poor chance of holding one. Enough shots is a structural requirement, not a preference.',
      },
      {
        q: 'What are reserves for?',
        options: [
          'Following on into the companies that are working',
          'Covering management fees',
          'Rescuing companies that are failing',
          'Paying tax on gains',
        ],
        answer: 0,
        why: 'Follow-on capital should concentrate into demonstrated winners. Using it to prop up failing companies is the commonest way angels turn a bad investment into a worse one.',
      },
      {
        q: 'What is wrong with deploying an entire allocation within one year?',
        options: [
          'It is not permitted under Indian law',
          'It concentrates the whole portfolio in a single market vintage',
          'It reduces the tax deduction available',
          'Founders will not accept it',
        ],
        answer: 1,
        why: 'One year is one set of market conditions and one set of valuations. Spreading deployment over several years diversifies across cycles — and forces more selectivity.',
      },
        {
          q: 'What proportion of investable net worth is conventionally suggested for angel investing?',
          options: [
            '25-30%',
            'Whatever remains after fixed expenses',
            '5-10%',
            'There is no useful guideline',
          ],
          answer: 2,
          why: 'The holding is illiquid, junior and frequently worth nothing. Five to ten per cent of liquid assets keeps a total loss survivable, which is the condition for making unemotional decisions later.',
        },
        {
          q: 'Three years in, your portfolio is worth less on paper than you put in and nothing has exited. What does this most likely mean?',
          options: [
            'You have chosen badly and should stop',
            'You diversified too widely',
            'The valuations are being reported incorrectly',
            'This is the normal shape of the J-curve at year three',
          ],
          answer: 3,
          why: 'Failures resolve quickly and successes resolve slowly, so a portfolio looks its worst in the middle years. Quitting here means absorbing all of the losses and none of the gains.',
        },
        {
          q: 'A company in your portfolio will shut down without a bridge. You have reserves. What does the discipline say?',
          options: [
            'Do not fund it on those grounds; reserves exist for companies where the evidence has improved',
            'Fund it — protecting the existing investment is what reserves are for',
            'Fund half the request as a compromise',
            'Fund it if the founder is someone you know well',
          ],
          answer: 0,
          why: 'Rescue capital is how a small loss becomes a large one. Reserves are meant to concentrate money into demonstrated winners, and "it dies without me" is the clearest signal that the evidence has not improved.',
        },
    ],
  },

  /* ---------------------------------------------------------------- 08 */
  {
    slug: 'exits-and-timelines',
    num: '08',
    title: 'Exits, liquidity and realistic timelines',
    minutes: 21,
    summary:
      'The four ways money actually comes back, and how long each realistically takes.',
    outcome: 'Hold a realistic expectation of when — and whether — you see cash again.',
    sections: [
      {
        heading: 'Four ways out',
        list: [
          '**Acquisition.** Another company buys this one. By far the commonest positive outcome for Indian startups.',
          '**Secondary sale.** You sell your shares to another investor, often during a later round. Increasingly common and the most realistic early liquidity for an angel — but it needs company consent and a willing buyer.',
          '**IPO.** The company lists. Rare, slow, and generally reserved for the largest outcomes.',
          '**Write-off.** The company shuts down or quietly stops operating. This is the most frequent outcome by count.',
        ],
      },
      {
        heading: 'How long it takes',
        body: [
          'Plan for seven to ten years from cheque to liquidity, and treat anything faster as a pleasant surprise. Companies that fail often do so within two to three years — the losses arrive well before the wins, which is psychologically harder than most people expect.',
        ],
        callout:
          'Your portfolio will look terrible for the first several years. The write-offs resolve quickly and the winners take a decade to mature. Judging your performance at year three is judging an incomplete experiment.',
      },
      {
        heading: 'What you actually receive',
        body: [
          'In an acquisition, proceeds are distributed according to the liquidation preferences in Module 06 — preference holders before ordinary shareholders. In a modest exit, preferences can consume most or all of the proceeds, and common holders can receive nothing from a sale that looked like a success in the press.',
          'Some acquisition consideration is paid in the acquirer\'s stock rather than cash, and some is held back in escrow or tied to earn-outs over one to two years. "Acquired for ₹200 crore" and "₹200 crore arrived in bank accounts on the closing date" are rarely the same statement.',
        ],
      },
      {
        heading: 'Tax and regulation, in outline',
        body: [
          'Gains on unlisted Indian shares are taxed as capital gains, with the treatment depending on the holding period and prevailing rules. There are also regimes specific to startup investing — SEBI\'s angel fund framework, DPIIT startup recognition, and the treatment historically referred to as "angel tax," which has been the subject of significant change in recent years.',
        ],
        callout:
          'Tax and securities rules in this area change frequently and materially. Nothing here is tax advice. Before your first cheque, get the current position from a qualified professional — the difference between structures can be substantial.',
      },
        {
          heading: 'Secondaries: the exit most angels actually get',
          body: [
            'The four routes described above are the textbook list. In practice, the most likely liquidity event for an Indian angel over the next decade is a **secondary sale** — selling your shares to another investor rather than waiting for the company to be acquired or listed.',
            'These typically arise when a large new investor wants a bigger stake than the company is issuing, and offers to buy some existing shares. Angels are often given a chance to sell part of their holding.',
          ],
          list: [
            '**You usually cannot initiate one.** It happens when a buyer appears, which is rarely when you want it.',
            '**You will often be asked to sell at a discount** to the round price, because you are selling ordinary shares without the protections the new money is getting.',
            '**Your shareholders\' agreement may restrict it** — rights of first refusal mean existing holders can take the sale from you.',
            '**Partial is normal.** Selling a third and keeping the rest is a common and sensible outcome.',
          ],
          callout: 'When a secondary is offered, the question is not "will this be worth more later?" — it might be. It is **"what proportion of this position do I want to still be holding in five more years?"** Taking your original cost off the table and letting the rest run is a defensible answer that many experienced angels use.',
        },
        {
          heading: 'What actually stops an exit happening',
          body: [
            'A company can be doing perfectly well and still produce nothing for you. It is worth knowing the specific mechanisms.',
          ],
          list: [
            '**It becomes a good small business.** Profitable, growing slowly, no acquirer interested and no reason to sell. Fine for the founders, permanent for you.',
            '**Preference stacks eat the proceeds.** After several rounds of 1× preferences, a modest exit returns the preferred holders and nothing else.',
            '**The founders do not want to sell.** They may be right. You have no ability to make them.',
            '**Nobody can agree a price.** Acquisition talks collapse routinely and often quietly.',
          ],
          callout: 'This is the outcome nobody warns first-time angels about: **not failure, but permanence.** A company that neither dies nor exits, holding your capital indefinitely. It is more common than a total loss and considerably more frustrating.',
        },
    ],
    terms: [
      ['Exit', 'An event that converts your shareholding into cash or a liquid asset.'],
      ['Secondary', 'Selling existing shares to another investor rather than the company issuing new ones.'],
      ['Escrow', 'Part of an acquisition price held back to cover post-closing claims.'],
      ['Earn-out', 'Consideration paid later, contingent on the company hitting targets.'],
      ['Down round', 'A financing at a lower valuation than the previous one.'],
        [
          'Secondary sale',
          'Selling existing shares to another investor rather than receiving proceeds from the company.',
        ],
        [
          'Right of first refusal',
          'A clause letting existing shareholders buy your stake before you can sell it to an outsider.',
        ],
        [
          'Preference stack',
          'The accumulated liquidation preferences of successive rounds, paid before ordinary shares.',
        ],
        [
          'Zombie company',
          'A company that neither fails nor exits, holding investor capital indefinitely.',
        ],
    ],
    checkpoint: [
      {
        q: 'What is the most frequent outcome for an early-stage investment, by count?',
        options: ['IPO', 'Acquisition', 'Secondary sale', 'Write-off'],
        answer: 3,
        why: 'Most startups fail. Acquisitions are the commonest *positive* outcome; write-offs are the commonest outcome overall — which is exactly why portfolio size matters.',
      },
      {
        q: 'A company is acquired for a modest sum. Why might ordinary shareholders receive nothing?',
        options: [
          'Ordinary shares are not transferable',
          'Liquidation preferences pay preference holders first and can absorb the entire amount',
          'The acquirer chooses which shareholders to pay',
          'Capital gains tax consumes the proceeds',
        ],
        answer: 1,
        why: 'Preference holders are paid before ordinary holders. In a small exit the preference stack can consume all of it, leaving common shareholders with nothing despite a headline "successful" sale.',
      },
      {
        q: 'How should you interpret a portfolio that looks poor at year three?',
        options: [
          'As clear evidence of bad selection',
          'As a reason to stop investing',
          'As expected — failures resolve early while winners take much longer to mature',
          'As a reason to double down on the weakest companies',
        ],
        answer: 2,
        why: 'The J-curve is structural. Losses surface in the first two to three years; the outcomes that pay for them need seven to ten. Year three is too early to read.',
      },
        {
          q: 'Which liquidity event is an Indian angel realistically most likely to see first?',
          options: [
            'An IPO',
            'A dividend',
            'A management buy-back',
            'A partial secondary sale during a later round',
          ],
          answer: 3,
          why: 'IPOs are rare and slow, and startups do not pay dividends. Secondaries during a later priced round are by far the most common way angel money actually comes back.',
        },
        {
          q: 'A portfolio company is profitable, growing modestly, and the founders have no wish to sell. What is your position?',
          options: [
            'You may hold an illiquid stake indefinitely with no route to cash',
            'You can require a sale after a set number of years',
            'The company must buy your shares back at fair value',
            'You can convert to debt and demand repayment',
          ],
          answer: 0,
          why: 'A minority holder cannot force a sale. A healthy company with no exit intention is a permanent position — more common than total failure and rarely mentioned to new angels.',
        },
        {
          q: 'You are offered a secondary at a 20% discount to the current round price. What is the most useful way to frame the decision?',
          options: [
            'Refuse — selling below the round price is always value-destroying',
            'Ask what proportion of this position you want to still hold in five years',
            'Sell the entire position, since a discount signals trouble',
            'Wait for an IPO, which will price higher',
          ],
          answer: 1,
          why: 'The discount reflects that you hold ordinary shares without the new money\'s protections; it is normal rather than a signal. The real question is how much longer you want this exposure, and partial sales are a legitimate answer.',
        },
    ],
  },

  /* ---------------------------------------------------------------- 09 */
  {
    slug: 'making-the-decision',
    num: '09',
    title: 'Making the decision',
    minutes: 22,
    summary:
      'Putting the previous eight modules into a repeatable process you can apply to the next deck that lands.',
    outcome: 'Reach a defensible yes or no on a real opportunity, and know why.',
    sections: [
      {
        heading: 'Decide your rules before you see the deal',
        body: [
          'The worst time to decide how much to invest is while you are excited about a specific company. Write down, in advance: your total allocation, your standard cheque size, your target number of positions, the sectors you understand, and the stage you are comfortable at.',
          'Then the question on any individual deal narrows usefully to: does this belong in the portfolio I already decided to build?',
        ],
      },
      {
        heading: 'A four-pass review',
        list: [
          '**Pass 1 — Filter (10 minutes).** Is it in your sector and stage? Is the round structure sane? Is the valuation within an order of magnitude of comparable deals? Most opportunities end here, and that is correct.',
          '**Pass 2 — Substance (2–3 hours).** Team, market, product, traction, per Module 05. Use the product. Take a founder call. Write down the two things that would have to be true for this to be a big outcome.',
          '**Pass 3 — Terms (1 hour).** Read the term sheet against Module 06. Confirm your percentage on a fully diluted basis. Run the return test from Module 04.',
          '**Pass 4 — Portfolio fit (15 minutes).** Does this concentrate you further into something you already hold a lot of? Do you have reserve capital for a follow-on if it works?',
        ],
      },
      {
        heading: 'The pre-mortem',
        body: [
          'Before committing, write two paragraphs: it is three years from now and this investment is worth nothing — what happened? Then: it is seven years from now and it returned 30× — what happened?',
          'If the failure story is easy to write and the success story is vague, that is your answer. This single exercise catches more bad decisions than any amount of spreadsheet work.',
        ],
      },
      {
        heading: 'Reasons that are not reasons',
        callout:
          'Not reasons to invest: the round is closing Friday · a well-known investor is in · the founder is impressive on stage · everyone in the group chat is doing it · you have not made an investment in a while · you already spent twenty hours on diligence, so you feel committed.',
        body: [
          'That last one is the sunk-cost trap and it is the most expensive. Work already done is not a reason to proceed; the only question is whether this is a good investment from here.',
        ],
      },
      {
        heading: 'Saying no well',
        body: [
          'You will decline most things you see. Do it quickly and give a real reason — founders remember both the speed and the honesty, and the ecosystem is small. A fast, clear no is a service to a founder managing their own runway.',
        ],
      },
      {
        heading: 'After you invest',
        list: [
          'Expect updates quarterly. If they stop, ask once, then treat prolonged silence as information.',
          'Be useful when asked and quiet when not. Your value is introductions and judgement, not oversight.',
          'Mark honestly. Carry positions at cost until a priced round says otherwise, and write to zero when a company dies rather than leaving it on the books.',
          'Keep records from day one — share certificates, agreements, bank references. You will need them at exit, possibly a decade later.',
        ],
      },
      {
        heading: 'You are ready when',
        callout:
          'You can state your allocation and cheque size without hesitating · you can explain what you are buying and what could make it worthless · you can read a term sheet and spot a participating preference · you can run the return test in your head · and you can decline a good-sounding deal because it does not fit the portfolio you decided to build.',
      },
        {
          heading: 'A one-page memo you write before deciding',
          body: [
            'Professional investors write an investment memo. You should too, and it need not exceed a page. The purpose is not to persuade anyone — nobody else will read it. It is to force the reasoning into words, where its weaknesses become visible.',
          ],
          list: [
            '**What the company does**, in two sentences a non-specialist would understand.',
            '**Why this could be very large** — the specific mechanism, not "the market is big".',
            '**The three things that must go right**, named individually.',
            '**The single most likely reason this fails.**',
            '**Why the price works** — the return test from Briefing 04, with the arithmetic.',
            '**What I do not know**, and whether I can find out.',
            '**Cheque size, and why that number** — from the plan in Briefing 07, not from enthusiasm.',
          ],
          callout: 'If you cannot fill in "the single most likely reason this fails", you have not done the work yet. **Every investment has one**, and an investor who cannot name it is describing a hope rather than a thesis.',
        },
        {
          heading: 'Revisiting the memo later',
          body: [
            'Date the memo and keep it. Two or three years on it becomes the most valuable document you own as an investor, because it records what you actually believed at the time rather than what you later remember believing.',
            'Read it again when the company raises, struggles, or exits. You are looking for a pattern across your memos, not a verdict on one: are you consistently wrong about markets, or about people? Do you systematically underestimate how long things take? Almost every angel has one recurring error, and it is invisible without the written record.',
          ],
          callout: 'Memory reorganises itself around outcomes. **A dated memo is the only thing that stops you from becoming someone who always knew.**',
        },
        {
          heading: 'A last word on saying yes',
          body: [
            'Nearly all of this track is about restraint: check more, pay less, size smaller, expect failure. That is the right emphasis, because the errors it prevents are the expensive ones.',
            'But the point of an angel network is not to say no elegantly. At some point you back someone, on incomplete information, knowing it will probably not work — because the alternative is not participating at all. The discipline exists so that when you do say yes, it is a decision you can defend on the day, and live with for the eight years that follow.',
          ],
        },
    ],
    terms: [
      ['Pre-mortem', 'Imagining the failure in advance to surface risks while you can still act on them.'],
      ['Sunk cost', 'Effort already spent, which should not influence a forward-looking decision.'],
      ['Mark', 'The value at which you carry a holding in your own records.'],
        [
          'Investment memo',
          'A short written statement of your reasoning, written before you invest and dated.',
        ],
        [
          'Thesis',
          'The specific mechanism by which you expect this company to become very valuable.',
        ],
        [
          'Hindsight bias',
          'The tendency to remember having predicted an outcome you did not predict.',
        ],
    ],
    checkpoint: [
      {
        q: 'When should you decide your cheque size?',
        options: [
          'When you see a company you love',
          'After the term sheet is signed',
          'In advance, as part of an allocation plan, before reviewing any specific deal',
          'Whatever the lead suggests',
        ],
        answer: 2,
        why: 'Sizing decided while excited about a specific company is how portfolios become concentrated. Set the rules first; then each deal is judged on whether it fits them.',
      },
      {
        q: 'You have spent twenty hours on diligence and found real problems. What follows?',
        options: [
          'Invest — the work is already sunk',
          'Invest a smaller amount to recognise the effort',
          'Ask the founder to lower the valuation to compensate',
          'Decline; work already done is not a reason to proceed',
        ],
        answer: 3,
        why: 'This is the sunk-cost trap. The hours are gone either way. The only live question is whether this is a good investment from this point forward.',
      },
      {
        q: 'What is a pre-mortem?',
        options: [
          'Writing the story of how this investment failed, before investing',
          'A valuation method for pre-revenue companies',
          'A legal review preceding the term sheet',
          'The diligence a founder runs on an investor',
        ],
        answer: 0,
        why: 'Imagining the failure in advance surfaces risks while you can still act on them — and if the failure story writes itself while the success story does not, you have your answer.',
      },
        {
          q: 'What is the main purpose of writing a one-page memo before investing?',
          options: [
            'To share your reasoning with the founder',
            'To force the reasoning into words, where its weaknesses become visible',
            'To satisfy a regulatory requirement',
            'To value the company more precisely',
          ],
          answer: 1,
          why: 'A conviction that survives in your head often collapses when written down. Nobody else needs to read the memo — the act of writing it is the whole benefit.',
        },
        {
          q: 'Why does dating and keeping the memo matter years later?',
          options: [
            'It is required for tax filing',
            'It can be shown to future investors',
            'It records what you actually believed, before memory reorganises around the outcome',
            'It establishes your cost basis',
          ],
          answer: 2,
          why: 'Hindsight bias makes you remember having anticipated whatever happened. The dated memo is the only reliable record of your real reasoning, and reading several together reveals your recurring error.',
        },
        {
          q: 'You cannot name the single most likely reason an investment fails. What follows?',
          options: [
            'The opportunity is unusually low-risk',
            'You should invest a smaller amount',
            'You should ask the founder to name it',
            'The work is not finished — every investment has one',
          ],
          answer: 3,
          why: 'Being unable to name the likely failure mode means you have not understood the business well enough to judge it. It is a signal to keep working, not a signal that the risk is absent.',
        },
    ],
  },
  {
    slug: 'syndicates-and-spvs',
    num: '10',
    title: 'Syndicates, SPVs and investing alongside others',
    summary: 'How pooled vehicles actually work, what the lead is paid, and the questions that separate a good syndicate from an expensive one.',
    outcome: 'Read a syndicate\'s terms and work out what you will actually keep after fees.',
    minutes: 20,
    sections: [
      {
        heading: 'Why syndicates exist',
        body: [
          'Most angels cannot write a cheque large enough to matter to a company raising ₹3Cr, and most companies do not want forty separate shareholders on the cap table. A syndicate solves both problems: many small investors pool their money into one vehicle, that vehicle appears on the cap table as a single name, and one person — the lead — negotiates and administers it.',
          'For a first-time angel this is usually the sensible way in. You get access to deals you could not reach alone, someone more experienced has negotiated the terms, and your name is not individually on documents you do not yet know how to read.',
        ],
        callout: 'The trade is real, though: you are paying for that access, you have no direct relationship with the company, and you are relying on someone else\'s judgement. **This briefing is about pricing that trade properly rather than avoiding it.**',
      },
      {
        heading: 'What an SPV actually is',
        body: [
          'The pooled vehicle is usually a **Special Purpose Vehicle** — a company or LLP created for one investment and nothing else. Money goes into the SPV, the SPV buys shares in the startup, and you own units in the SPV rather than shares in the company.',
          'This distinction is the source of most surprises later. You are one step removed from the thing you think you own.',
        ],
        list: [
          '**You are not on the company\'s register of members.** The SPV is. Your rights run against the SPV, not the startup.',
          '**You usually cannot vote on anything.** The lead votes the whole position.',
          '**You cannot sell your unit independently** in most structures, and there is no secondary market for SPV units.',
          '**Information reaches you when the lead sends it,** which may be rarely.',
          '**The SPV has costs of its own** — formation, annual filings, accounting — and they are paid from your money.',
        ],
        callout: 'None of this is improper; it is how the structure works. But **"I invested in that company" and "I own units in an SPV that holds shares in that company" are different sentences**, and the difference shows up when there is money to distribute.',
      },
      {
        heading: 'The fee stack, worked through',
        body: [
          'Syndicate economics are usually quoted as "20% carry", which sounds like one number. There are typically three, and they compound.',
        ],
        example: {
          title: 'A ₹5,00,000 investment into a syndicate that returns 5×',
          rows: [
            [
              'You commit',
              '₹5,00,000',
            ],
            [
              'Upfront setup fee (say 2%)',
              '−₹10,000 — deducted before anything is invested',
            ],
            [
              'Actually invested in the company',
              '₹4,90,000',
            ],
            [
              'Gross proceeds at 5×',
              '₹24,50,000',
            ],
            [
              'Profit',
              '₹19,60,000',
            ],
            [
              'Carry to the lead at 20%',
              '−₹3,92,000',
            ],
            [
              'SPV running costs over 6 years',
              '−₹25,000 (approximate)',
            ],
            [
              'You keep',
              '₹20,33,000 — a 4.07× net, not 5×',
            ],
          ],
        },
        callout: 'A 5× gross became a **4.07× net**. That is not a scandal — the lead did work and took risk, and 20% carry is the market standard. The point is to compute the net figure yourself, because **the return you are quoted is almost never the return you receive.**',
      },
      {
        heading: 'Questions to ask before joining one',
        body: [
          'A good syndicate lead will answer all of these without hesitation, and most will have the answers written down already. Hesitation is itself informative.',
        ],
        list: [
          '**How much are you personally investing in this deal, on the same terms?** A lead with no money at risk is a broker, not a co-investor.',
          '**What is the total fee load — setup, carry, and annual costs?** Ask for it as a single worked example on a specific cheque size.',
          '**Is carry charged per deal or across the portfolio?** Per-deal carry means you pay on every winner while absorbing every loser alone. Portfolio-level carry is meaningfully better for you and rarer.',
          '**Who makes the decision to sell, and when?** Usually the lead, entirely. Confirm it.',
          '**What happens if the lead becomes unavailable?** Many SPVs have no succession plan at all.',
          '**How often will I receive information, and in what form?**',
        ],
        callout: 'The per-deal carry question is the one people miss. If you back ten SPVs from the same lead and one returns 10× while nine go to zero, **you pay carry on the winner and take the nine losses in full.** The lead is paid on a portfolio you were never allowed to hold.',
      },
      {
        heading: 'Syndicate versus direct, honestly',
        body: [
          'Neither is right in general. The choice depends on cheque size, experience and how much administration you are willing to do.',
        ],
        list: [
          '**Syndicate suits you** when your cheques are small, you are new, you want access to competitive rounds, or you have no appetite for paperwork.',
          '**Direct suits you** when your cheques are large enough to be welcome on their own, you want pro-rata rights and information rights in your own name, and you intend to build a relationship with the company.',
          '**A common path** is to start in syndicates for two or three years, learn how deals actually behave, then move to direct investing for the companies you understand best while continuing to use syndicates for reach into sectors you do not.',
        ],
      },
    ],
    terms: [
      [
        'SPV',
        'Special Purpose Vehicle — a company or LLP formed to hold one investment on behalf of several investors.',
      ],
      [
        'Carry',
        'Carried interest: the lead\'s share of the profit, conventionally 20%.',
      ],
      [
        'Setup fee',
        'An upfront charge deducted from your commitment before it is invested.',
      ],
      [
        'Per-deal carry',
        'Carry charged separately on each investment, so losses in other deals do not offset it.',
      ],
      [
        'Syndicate lead',
        'The person who sources the deal, negotiates terms, forms the vehicle and administers it.',
      ],
    ],
    checkpoint: [
      {
        q: 'You invest through an SPV. Whose name appears on the startup\'s register of members?',
        options: [
          'The SPV\'s',
          'Yours, alongside the other syndicate members',
          'The syndicate lead\'s, personally',
          'Both yours and the SPV\'s',
        ],
        answer: 0,
        why: 'The SPV is the shareholder; you hold units in the SPV. Your rights run against the vehicle rather than the company, which is why voting, information and transfer all work differently than they would if you invested directly.',
      },
      {
        q: 'A syndicate quotes "20% carry". Why is the net return on a 5× exit meaningfully below 5×?',
        options: [
          'Because carry is charged on the gross proceeds, not the profit',
          'Because a setup fee, carry on the profit, and ongoing SPV costs all reduce what reaches you',
          'Because SPVs are taxed at a higher rate than direct holdings',
          'It is not — 20% carry has no effect on a 5× outcome',
        ],
        answer: 1,
        why: 'Three separate charges apply: an upfront fee before investment, carry on the profit, and the vehicle\'s running costs over its life. Together they turned 5× gross into roughly 4.07× net in the worked example.',
      },
      {
        q: 'Why is per-deal carry worse for you than portfolio-level carry?',
        options: [
          'The percentage charged is always higher',
          'It is charged annually rather than at exit',
          'You pay carry on each winner while absorbing every loser in full, with no offsetting',
          'It prevents you from following on',
        ],
        answer: 2,
        why: 'Angel returns come from a few winners covering many losses. Per-deal carry pays the lead on each success without netting the failures, so the lead is compensated on a portfolio outcome you personally never received.',
      },
      {
        q: 'A syndicate lead is not investing their own money in the deal. What does that tell you?',
        options: [
          'Nothing — leads are compensated through carry instead',
          'It means the deal is unusually safe',
          'It is required by regulation to avoid a conflict',
          'Their incentive is to close deals rather than to pick good ones',
        ],
        answer: 3,
        why: 'Carry pays only on winners, but setup fees pay on every deal that closes. A lead with no capital at risk earns from volume; a lead investing alongside you on the same terms shares your downside.',
      },
    ],
  },
  {
    slug: 'tax-and-regulation',
    num: '11',
    title: 'Indian tax and regulation, in outline',
    summary: 'The structures and categories an Indian angel meets — written to stay true as rates change, and to tell you exactly what to take to your accountant.',
    outcome: 'Ask your accountant the right questions before you invest, rather than after.',
    minutes: 18,
    sections: [
      {
        heading: 'How to read this briefing',
        body: [
          'Tax rates, exemption thresholds and reporting requirements in India change frequently — often annually with the Finance Act, and sometimes in between. Any briefing that quoted current rates would be wrong within a year and dangerous to rely on.',
          'So this one does something more durable: it names the **categories of rule** that apply to an angel, explains what each one is for, and gives you the specific questions to put to a qualified professional. The structures are stable even when the numbers are not.',
        ],
        callout: 'Nothing here is tax advice, and no figure in it should be relied on for a real decision. **Every item below is a question for your chartered accountant, not an answer from us.** That is the honest position, and acting otherwise would cost you more than it saved.',
      },
      {
        heading: 'The four things that determine your tax position',
        body: [
          'Almost every question an angel has resolves into one of these four. Knowing which one you are asking about makes the conversation with a professional far shorter.',
        ],
        list: [
          '**What you hold** — equity shares, preference shares (CCPS), a convertible debenture (CCD) or units in an SPV. These are taxed differently and the holding period is measured differently.',
          '**How long you held it** — India distinguishes short-term from long-term capital gains, and the qualifying period for unlisted shares differs from listed ones.',
          '**Your residency status** — resident, non-resident or RNOR changes both the rate and the reporting. NRIs additionally face FEMA rules on what they may invest in and how the money must travel.',
          '**The vehicle you used** — investing personally, through an LLP, through a family trust, or through a SEBI-registered AIF each carries a different treatment and a different compliance burden.',
        ],
        callout: 'The single most expensive mistake is choosing the vehicle **after** deciding to invest. The structure has to be set up before the money moves; it cannot usefully be retrofitted, and unwinding it is expensive.',
      },
      {
        heading: 'Things that specifically catch angels out',
        body: [
          'These are the recurring surprises, described structurally so they remain accurate as the detail changes.',
        ],
        list: [
          '**Tax on paper gains you have not received.** Certain structures and events can create a taxable event before any cash reaches you. Ask specifically: "can I owe tax in a year in which I receive nothing?"',
          '**Losses that do not offset the way you expect.** Rules govern which losses can be set against which gains and for how long they carry forward. A write-off is not automatically usable against an unrelated gain.',
          '**Valuation rules on issue of shares.** India has provisions governing the price at which a company may issue shares relative to fair value, with consequences for the company. This affects rounds you participate in.',
          '**Reporting obligations for foreign holdings**, if you invest in an entity incorporated outside India.',
          '**NRI repatriation limits** — the route by which money entered India can restrict how, and how much, may leave.',
        ],
      },
      {
        heading: 'What to take to your accountant',
        body: [
          'Book the conversation before your first investment, not at your first filing. Take this list; it is most of an hour saved.',
        ],
        list: [
          'What vehicle should I invest through, given my residency and how much I intend to deploy?',
          'What is the holding period for the specific instrument I am being offered, and when does the clock start?',
          'Can I be taxed in a year in which I receive no cash? Under what circumstances?',
          'If a company fails, how and when can I claim the loss, and what will you need from me to evidence it?',
          'What records must I keep, and for how long?',
          'If I am an NRI: which route should the money take, and what does that mean for repatriation later?',
          'What changes if I invest via a syndicate SPV rather than directly?',
        ],
        callout: 'Keep a folder from your first cheque: the term sheet, the share certificate, the bank advice showing the money leaving, and the filings. **Reconstructing this six years later, for a company that no longer exists, is close to impossible** — and that is precisely the case where you need it, because that is when you are claiming the loss.',
      },
    ],
    terms: [
      [
        'Capital gain',
        'The profit on disposing of an asset. Treated differently depending on how long it was held.',
      ],
      [
        'CCPS / CCD',
        'Compulsorily convertible preference shares / debentures — the common Indian instruments for early-stage investment.',
      ],
      [
        'FEMA',
        'The Foreign Exchange Management Act, which governs how non-residents may invest in and repatriate money from India.',
      ],
      [
        'RNOR',
        'Resident but Not Ordinarily Resident — a transitional residency status with its own treatment.',
      ],
      [
        'AIF',
        'Alternative Investment Fund — a SEBI-registered pooled vehicle, one of the routes for structured angel investing.',
      ],
    ],
    checkpoint: [
      {
        q: 'Why does this briefing avoid quoting current tax rates?',
        options: [
          'They change frequently, so a quoted rate would become wrong and be dangerous to rely on',
          'Rates are confidential',
          'Rates do not apply to angel investments',
          'They vary by state and cannot be generalised',
        ],
        answer: 0,
        why: 'Indian tax rules change with each Finance Act and sometimes between them. Naming the durable structures and the questions to ask is genuinely useful; quoting a rate that expires is worse than saying nothing.',
      },
      {
        q: 'When should you decide the vehicle you invest through?',
        options: [
          'At the end of the financial year, with your accountant',
          'Before the first investment — it cannot usefully be retrofitted',
          'After the first exit, when the tax position is known',
          'It makes no difference to the outcome',
        ],
        answer: 1,
        why: 'The structure determines treatment from the moment money moves, and unwinding or changing it later is expensive and sometimes impossible. This is the one decision that has to come first.',
      },
      {
        q: 'Which question is most worth asking your accountant before you start?',
        options: [
          'What is the current long-term capital gains rate?',
          'Which sectors perform best after tax?',
          'Can I owe tax in a year in which I receive no cash?',
          'How many investments should I make?',
        ],
        answer: 2,
        why: 'A tax liability arriving in a year with no corresponding cash is the surprise that actually damages people. The rate you can look up; this one depends on your structure and instruments and needs a professional answer.',
      },
      {
        q: 'Why keep documentation from your very first cheque?',
        options: [
          'To provide it to the founder on request',
          'Because SEBI requires annual submission',
          'To calculate carry in a syndicate',
          'Because evidencing a loss years later, for a company that no longer exists, is close to impossible without it',
        ],
        answer: 3,
        why: 'The case where you most need the paperwork is a write-off, and that is exactly the case where the company, its founders and its records have all disappeared. Keep the file from day one.',
      },
    ],
  },
  {
    slug: 'after-you-invest',
    num: '12',
    title: 'Being useful after you invest',
    summary: 'What a good angel actually does across the years that follow — and the well-meant behaviours that damage companies.',
    outcome: 'Support a portfolio company in a way founders value, without becoming a cost to them.',
    minutes: 17,
    sections: [
      {
        heading: 'The asymmetry nobody mentions',
        body: [
          'You have perhaps twenty companies. The founder has one. An hour of your attention is a small part of your month and can be a significant part of their week — which cuts both ways: your help is amplified, and so is your interference.',
          'The most common failure of a well-meaning angel is not neglect. It is being expensive: requesting updates the founder must prepare, offering introductions that take an afternoon to follow up and lead nowhere, and giving confident advice on a business you have spent four hours understanding.',
        ],
        callout: 'The default posture is **available but not demanding.** Answer quickly when asked, offer specifically when you can genuinely help, and otherwise leave them alone to run the company you paid them to run.',
      },
      {
        heading: 'What founders actually value',
        body: [
          'Ask founders what help was useful and the answers are consistent, and narrower than most investors assume.',
        ],
        list: [
          '**A specific introduction you can actually make** — a named person, warm, with context, where you already know they will take the call. Not "I know someone in banking."',
          '**A fast answer to a narrow question** in your area of expertise. If you spent twenty years in logistics, an hour on their logistics problem is worth more than any general advice.',
          '**Help hiring.** Introductions to good people are the scarcest resource an early company has.',
          '**Being a reference** when they raise the next round. A credible existing investor who will take a call from a prospective one is genuinely valuable.',
          '**Not panicking** when a monthly update contains bad news. Founders learn quickly which investors they can tell the truth to, and they route information accordingly.',
        ],
        callout: 'That last one is the real currency. **A founder who can tell you something is going wrong, early, is a founder whose company you can still help.** Investors who react badly to bad news simply stop receiving it, and find out much later.',
      },
      {
        heading: 'The behaviours that cost founders time',
        body: [
          'These are all well-intentioned and all damaging. Most angels do at least one.',
        ],
        list: [
          '**Bespoke reporting requests.** Asking for numbers in your preferred format, separately from the standard update. Multiply by thirty investors.',
          '**Confident strategic advice** on a business you understand at a fraction of the depth the founder does. Offer observations and questions; reserve advice for your actual area.',
          '**Introductions that are really requests.** An introduction the founder must chase, prepare for and follow up on is a task you assigned them, not a favour.',
          '**Pressing for an exit** on your timetable rather than the company\'s.',
          '**Going around the founder** to their team, customers or other investors.',
          '**Contacting them constantly during a crisis**, when their attention is the scarcest resource in the building.',
        ],
      },
      {
        heading: 'Handling the update that says things are bad',
        body: [
          'At some point you will receive an update saying revenue has stalled, a co-founder has left, or there are four months of runway. What you do in the next twenty-four hours determines whether you are useful for the rest of the company\'s life.',
        ],
        list: [
          '**Reply quickly and calmly.** Even a short acknowledgement. Silence after bad news is read as disapproval.',
          '**Ask what would actually help,** rather than proposing a plan. You do not have enough information to have a plan.',
          '**Offer one specific thing** you can do this week, and then do it.',
          '**Do not ask for a call to discuss it** unless they want one. A call is an hour of preparation plus an hour of talking, at the moment they have least of both.',
          '**Say plainly whether you would consider following on,** if asked. An ambiguous answer is worse than a no, because they will plan around a maybe.',
        ],
        callout: 'And be honest with yourself about the reserves decision separately, using the rule you wrote in Briefing 07. **Sympathy is a reason to reply well. It is not a reason to write another cheque.**',
      },
      {
        heading: 'What to do when it ends',
        body: [
          'Most of your positions will end in a shutdown rather than an exit. How you behave in that fortnight is remembered for a long time, in a small ecosystem.',
          'Reply to the email. Thank them. Say something true about what they built. Ask, once, whether there is anything useful you can do — a reference for their next role, an introduction, a call in a month when it is less raw.',
          'Then make sure you get what you need for your own records: the confirmation of the wind-up, the final accounts, and whatever your accountant told you in Briefing 11 they will require to claim the loss.',
        ],
        callout: 'Founders talk to each other, and the best of them fail before they succeed. **How you behave when a company of yours dies is the most reliable advertisement you have** for whether good founders should take your money next time.',
      },
    ],
    terms: [
      [
        'Investor update',
        'A periodic email from the founder covering metrics, progress and problems. Usually monthly or quarterly.',
      ],
      [
        'Information rights',
        'A contractual entitlement to receive accounts and updates. Worth negotiating; not a licence to request bespoke reports.',
      ],
      [
        'Warm introduction',
        'An introduction where you already know the recipient will take the call, made with context.',
      ],
      [
        'Wind-up',
        'The formal closure of a company, after which your shares are worthless and the loss can be evidenced.',
      ],
    ],
    checkpoint: [
      {
        q: 'A portfolio company sends an update saying they have four months of runway and revenue has stalled. What is the best first response?',
        options: [
          'Reply quickly and calmly, ask what would help, and offer one specific thing you can do this week',
          'Request a call to discuss strategy in detail',
          'Wait to see whether the next update improves before responding',
          'Introduce them to several investors immediately',
        ],
        answer: 0,
        why: 'Their scarcest resource right now is attention. A fast, calm reply with one concrete offer helps; a call requesting strategic discussion consumes hours they do not have, and silence reads as disapproval.',
      },
      {
        q: 'Why is "being someone founders can tell bad news to" described as the real currency?',
        options: [
          'Because it entitles you to more frequent reporting',
          'Because founders route information away from investors who react badly, so you find out too late to help',
          'Because it improves your legal position as a shareholder',
          'Because it guarantees pro-rata rights in the next round',
        ],
        answer: 1,
        why: 'Founders quickly learn which investors are safe to be honest with. If you are not one of them you receive a curated version of reality, and by the time you learn the truth the moment to be useful has passed.',
      },
      {
        q: 'Which well-intentioned behaviour is most costly to an early-stage founder?',
        options: [
          'Answering a question within a day',
          'Declining to follow on, and saying so plainly',
          'Asking for the company\'s numbers in your own preferred format, separately from the standard update',
          'Making a warm introduction to someone you know will take the call',
        ],
        answer: 2,
        why: 'Bespoke reporting looks like diligence but is pure overhead, and it multiplies across every investor who asks. The other three are all examples of being useful, including the plain no.',
      },
      {
        q: 'A portfolio company is shutting down. Why does your conduct in that fortnight matter beyond this one investment?',
        options: [
          'It affects the amount of loss you can claim',
          'It determines your ranking among creditors',
          'It is required by the shareholders\' agreement',
          'Founders talk to each other, and the best ones often fail before they succeed',
        ],
        answer: 3,
        why: 'A small ecosystem remembers. The founder whose company just failed may well be running the one you want to back in three years, and they will remember exactly who replied.',
      },
    ],
  },
]

export const findModule = (slug) => modules.find((m) => m.slug === slug)
export const moduleIndex = (slug) => modules.findIndex((m) => m.slug === slug)
export const totalMinutes = modules.reduce((sum, m) => sum + m.minutes, 0)
export const totalCheckpoints = modules.reduce((sum, m) => sum + m.checkpoint.length, 0)

export const partOf = (slug) => PARTS.find((p) => p.slugs.includes(slug))
export const modulesIn = (part) => part.slugs.map((s) => findModule(s)).filter(Boolean)
export const partMinutes = (part) => modulesIn(part).reduce((sum, m) => sum + m.minutes, 0)
