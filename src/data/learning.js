/* =====================================================================
   DAN Learning Track — Angel Investing from zero
   ---------------------------------------------------------------------
   Written for someone who has never bought a share of a private company.
   The nine modules run in order: each one assumes only what came before
   it. The final module is the decision framework that ties the rest
   together, so a member who finishes the track can read a deck, ask the
   right questions, and size a cheque deliberately rather than by feel.

   Every module carries a `checkpoint` — comprehension questions with a
   written explanation for each answer — so "I read it" and "I understood
   it" are not the same signal.

   Figures use the ₹5L–₹50L early-stage band the marketing site already
   cites. Nothing here is investment advice; see DISCLAIMER below.
   ===================================================================== */

export const DISCLAIMER =
  'This track is educational. It is not investment, legal or tax advice, and it is not a recommendation to invest in anything. Rules — especially tax and securities regulation — change. Verify anything that affects a real decision with a qualified professional.'

export const TRACK_INTRO =
  'Nine modules, roughly two and a half hours of reading. Start at the top: each one assumes only what came before it. By the end you should be able to read a pitch deck, tell a good term sheet from a bad one, and decide how much to put in without guessing.'

export const modules = [
  /* ---------------------------------------------------------------- 01 */
  {
    slug: 'what-is-angel-investing',
    num: '01',
    title: 'What angel investing actually is',
    minutes: 12,
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
    ],
    terms: [
      ['Angel investor', 'An individual investing personal money into early-stage private companies.'],
      ['Private company', 'A company whose shares are not traded on a public exchange.'],
      ['Illiquid', 'Cannot readily be converted to cash. Almost all angel holdings are illiquid.'],
      ['Traction', 'Evidence that customers actually want the product — users, revenue, retention, repeat usage.'],
    ],
    checkpoint: [
      {
        q: 'What is the single most likely outcome of one individual angel investment?',
        options: [
          'A modest return, slightly ahead of a fixed deposit',
          'A total loss of the amount invested',
          'A 10× return within three years',
          'A return roughly matching the Nifty 50',
        ],
        answer: 1,
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
    ],
  },

  /* ---------------------------------------------------------------- 02 */
  {
    slug: 'how-startups-raise',
    num: '02',
    title: 'How a startup raises money',
    minutes: 15,
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
    ],
    terms: [
      ['CCPS', 'Compulsorily convertible preference shares — the standard priced-round instrument in India.'],
      ['CCD', 'Compulsorily convertible debenture — a common Indian convertible instrument.'],
      ['SAFE', 'Simple Agreement for Future Equity. Money now, shares later, at the next round\'s price.'],
      ['Valuation cap', 'The maximum valuation at which a convertible converts. Protects the early investor.'],
      ['Discount', 'The percentage below the next round price at which a convertible converts. Typically 15–25%.'],
      ['Lead investor', 'The investor who negotiates the round\'s terms and usually writes the largest cheque.'],
      ['Carry', "A fund manager's share of the profits, commonly 20%."],
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
          'Negotiates the round\'s terms, which the other investors then accept',
          'Takes a board seat as a legal requirement',
          'Introduces the company to its customers',
        ],
        answer: 1,
        why: 'The lead sets the terms and usually writes the biggest cheque. If you are following, your job is to judge whether those terms — and the lead — are acceptable.',
      },
    ],
  },

  /* ---------------------------------------------------------------- 03 */
  {
    slug: 'equity-cap-tables-dilution',
    num: '03',
    title: 'Equity, cap tables and dilution',
    minutes: 18,
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
    ],
    terms: [
      ['Cap table', 'The register of who owns what in a company.'],
      ['Pre-money', 'What the company is agreed to be worth before the new money goes in.'],
      ['Post-money', 'Pre-money plus the amount raised. Your ownership divides into this number.'],
      ['Dilution', 'The fall in your ownership percentage when new shares are issued.'],
      ['ESOP pool', 'Shares set aside for employees, usually 10–15%.'],
      ['Fully diluted', 'A share count including everything that could convert into shares.'],
    ],
    checkpoint: [
      {
        q: 'You invest ₹5,00,000 in a round with a ₹9,50,00,000 pre-money valuation raising ₹50,00,000. What do you own?',
        options: ['0.53%', '0.50%', '5.00%', '0.05%'],
        answer: 1,
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
          'Pre-money means existing shareholders absorb the dilution alone',
          'Post-money pools are not permitted in India',
          'It determines the vesting schedule',
        ],
        answer: 1,
        why: 'A pre-money pool dilutes only the existing holders — you — before the new investor buys in. A post-money pool spreads that dilution across everyone including the incoming investor.',
      },
    ],
  },

  /* ---------------------------------------------------------------- 04 */
  {
    slug: 'valuation',
    num: '04',
    title: 'Valuation: where the number comes from',
    minutes: 15,
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
    ],
    terms: [
      ['Valuation', 'The agreed worth of the company, used to calculate what a cheque buys.'],
      ['Comparable', 'A similar recent deal used as a pricing reference.'],
      ['Runway', 'How many months the company can operate on the cash it holds.'],
      ['DCF', 'Discounted cash flow — a valuation method that needs cash flows, which early startups lack.'],
    ],
    checkpoint: [
      {
        q: 'A founder shows you a ten-year DCF justifying a ₹40Cr pre-revenue valuation. How should you read it?',
        options: [
          'As solid evidence — DCF is the rigorous method',
          'As a statement of their assumptions, not of the company\'s value',
          'As grounds to walk away immediately',
          'As a legal requirement for the round',
        ],
        answer: 1,
        why: 'A DCF on a company with no revenue simply outputs whatever growth assumptions were fed into it. It tells you how the founder thinks, which is useful, but it is not evidence of value.',
      },
      {
        q: 'What is the "return test"?',
        options: [
          'Checking whether the founder has returned capital before',
          'Working out what the company must be worth at exit for your cheque to return the multiple you need',
          'Comparing the valuation to the Nifty',
          'Confirming the round is oversubscribed',
        ],
        answer: 1,
        why: 'You start from the multiple you need, account for future dilution, and derive the required exit value. If that number is implausible for the market, the entry price is too high.',
      },
    ],
  },

  /* ---------------------------------------------------------------- 05 */
  {
    slug: 'due-diligence',
    num: '05',
    title: 'Due diligence: what to actually check',
    minutes: 20,
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
    ],
    terms: [
      ['Due diligence', 'Structured verification of an opportunity before investing.'],
      ['Founder–market fit', 'The specific reason these founders are well-suited to this problem.'],
      ['Cohort retention', 'What share of users acquired in a given month are still active later.'],
      ['GMV', 'Gross merchandise value — total transaction volume. It is not revenue.'],
      ['Vesting', 'Earning equity over time, so someone who leaves early does not keep it all.'],
    ],
    checkpoint: [
      {
        q: 'A founder says "we have no competitors." What is the most reasonable reading?',
        options: [
          'A genuine moat and a strong buy signal',
          'Either the market has not been researched, or nobody wants the product',
          'They hold a patent',
          'They are first to market and will stay there',
        ],
        answer: 1,
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
        options: ['Total signups', 'Cohort retention', 'Social media followers', 'Press coverage'],
        answer: 1,
        why: 'Signups measure marketing. Retention measures whether the product is worth returning to — the only one of these that is hard to manufacture.',
      },
    ],
  },

  /* ---------------------------------------------------------------- 06 */
  {
    slug: 'term-sheets',
    num: '06',
    title: 'Term sheets: the clauses that matter',
    minutes: 18,
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
          'Unusually aggressive — worth asking why it is there',
          'A benefit to the founders',
          'A legal requirement for preference shares',
        ],
        answer: 1,
        why: 'Broad-based weighted average is the norm. Full ratchet reprices all earlier shares to the new low price and can devastate founders and earlier investors in a down round.',
      },
    ],
  },

  /* ---------------------------------------------------------------- 07 */
  {
    slug: 'portfolio-construction',
    num: '07',
    title: 'Portfolio construction and the power law',
    minutes: 16,
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
    ],
    terms: [
      ['Power law', 'A distribution where a very small number of outcomes dominate the total.'],
      ['Follow-on', 'A further investment into a company you already hold.'],
      ['Reserves', 'Capital deliberately held back for follow-ons.'],
      ['Vintage', 'The year a portfolio was deployed. Market conditions make vintages differ substantially.'],
      ['Write-off', 'An investment marked down to zero.'],
    ],
    checkpoint: [
      {
        q: 'Why is a five-investment angel portfolio considered too concentrated?',
        options: [
          'SEBI requires a minimum of ten',
          'Returns are driven by rare outliers, so too few positions likely misses them entirely',
          'Diligence costs are higher per deal',
          'Founders prefer larger syndicates',
        ],
        answer: 1,
        why: 'If roughly one in twenty produces the return, five positions gives you a poor chance of holding one. Enough shots is a structural requirement, not a preference.',
      },
      {
        q: 'What are reserves for?',
        options: [
          'Covering management fees',
          'Following on into the companies that are working',
          'Rescuing companies that are failing',
          'Paying tax on gains',
        ],
        answer: 1,
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
    ],
  },

  /* ---------------------------------------------------------------- 08 */
  {
    slug: 'exits-and-timelines',
    num: '08',
    title: 'Exits, liquidity and realistic timelines',
    minutes: 13,
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
    ],
    terms: [
      ['Exit', 'An event that converts your shareholding into cash or a liquid asset.'],
      ['Secondary', 'Selling existing shares to another investor rather than the company issuing new ones.'],
      ['Escrow', 'Part of an acquisition price held back to cover post-closing claims.'],
      ['Earn-out', 'Consideration paid later, contingent on the company hitting targets.'],
      ['Down round', 'A financing at a lower valuation than the previous one.'],
    ],
    checkpoint: [
      {
        q: 'What is the most frequent outcome for an early-stage investment, by count?',
        options: ['IPO', 'Acquisition', 'Write-off', 'Secondary sale'],
        answer: 2,
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
          'As expected — failures resolve early while winners take much longer to mature',
          'As a reason to stop investing',
          'As a reason to double down on the weakest companies',
        ],
        answer: 1,
        why: 'The J-curve is structural. Losses surface in the first two to three years; the outcomes that pay for them need seven to ten. Year three is too early to read.',
      },
    ],
  },

  /* ---------------------------------------------------------------- 09 */
  {
    slug: 'making-the-decision',
    num: '09',
    title: 'Making the decision',
    minutes: 14,
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
    ],
    terms: [
      ['Pre-mortem', 'Imagining the failure in advance to surface risks while you can still act on them.'],
      ['Sunk cost', 'Effort already spent, which should not influence a forward-looking decision.'],
      ['Mark', 'The value at which you carry a holding in your own records.'],
    ],
    checkpoint: [
      {
        q: 'When should you decide your cheque size?',
        options: [
          'When you see a company you love',
          'In advance, as part of an allocation plan, before reviewing any specific deal',
          'After the term sheet is signed',
          'Whatever the lead suggests',
        ],
        answer: 1,
        why: 'Sizing decided while excited about a specific company is how portfolios become concentrated. Set the rules first; then each deal is judged on whether it fits them.',
      },
      {
        q: 'You have spent twenty hours on diligence and found real problems. What follows?',
        options: [
          'Invest — the work is already sunk',
          'Invest a smaller amount to recognise the effort',
          'Decline; work already done is not a reason to proceed',
          'Ask the founder to lower the valuation to compensate',
        ],
        answer: 2,
        why: 'This is the sunk-cost trap. The hours are gone either way. The only live question is whether this is a good investment from this point forward.',
      },
      {
        q: 'What is a pre-mortem?',
        options: [
          'A valuation method for pre-revenue companies',
          'Writing the story of how this investment failed, before investing',
          'A legal review preceding the term sheet',
          'The diligence a founder runs on an investor',
        ],
        answer: 1,
        why: 'Imagining the failure in advance surfaces risks while you can still act on them — and if the failure story writes itself while the success story does not, you have your answer.',
      },
    ],
  },
]

export const findModule = (slug) => modules.find((m) => m.slug === slug)
export const moduleIndex = (slug) => modules.findIndex((m) => m.slug === slug)
export const totalMinutes = modules.reduce((sum, m) => sum + m.minutes, 0)
export const totalCheckpoints = modules.reduce((sum, m) => sum + m.checkpoint.length, 0)
