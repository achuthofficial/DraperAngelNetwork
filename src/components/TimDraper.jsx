import { useState } from 'react'
import { motion } from 'framer-motion'
import Parallax from './Parallax.jsx'
import Reveal from './motion/Reveal.jsx'

/* Every fact below is sourced from draper.vc (Tim Draper's own firm page
   and its History page). Nothing here is inferred — if a date could not be
   verified it is stated as a generation rather than invented. */
const MILESTONES = [
  { year: '1985', label: 'Founded Draper Associates', note: 'Started on a $6M SBA loan.' },
  { year: '1995', label: 'Co-founded DFJ', note: 'Draper Fisher Jurvetson.' },
  { year: '2012', label: 'Founded Draper University', note: 'San Mateo, California.' },
  { year: '2014', label: 'Bought 29,657 bitcoin', note: 'At the US Marshals auction. Never sold.' },
]

const GENERATIONS = [
  {
    n: '01',
    era: 'First generation · 1957',
    name: 'Gen. William H. Draper Jr.',
    note: "Raised Silicon Valley's first venture capital fund.",
  },
  {
    n: '02',
    era: 'Second generation',
    name: 'William H. Draper III',
    note: 'Built Sutter Hill Ventures into an institution.',
  },
  {
    n: '03',
    era: 'Third generation · 1985',
    name: 'Tim Draper',
    note: 'Draper Associates, DFJ, and Draper University.',
  },
  {
    n: '04',
    era: 'Fourth generation · today',
    name: 'Jesse, Adam & Billy Draper',
    note: 'Halogen Ventures, Boost VC and Path Ventures.',
  },
]

/* The portrait is a slot, not a hard dependency. If the file is absent the
   plate degrades to a typographic panel rather than a broken image — the
   section reads correctly either way. */
function Portrait() {
  const [failed, setFailed] = useState(false)

  return (
    <div className="draper-portrait">
      <div className="draper-portrait-frame">
        {failed ? (
          <div className="draper-portrait-fallback" aria-hidden="true">
            <span className="draper-portrait-monogram">TD</span>
            <span className="draper-portrait-fallback-note">Portrait pending</span>
          </div>
        ) : (
          <img
            src="/images/draper/tim-draper.jpg"
            alt="Tim Draper, founding partner of Draper Associates"
            loading="lazy"
            onError={() => setFailed(true)}
          />
        )}
        <span className="draper-portrait-rule" aria-hidden="true" />
      </div>
      <figcaption className="draper-portrait-caption">
        <span>Tim Draper</span>
        <span>Founding Partner, Draper Associates</span>
      </figcaption>
    </div>
  )
}

export default function TimDraper() {
  const [activeGen, setActiveGen] = useState(2)

  return (
    <section className="section tim-draper" id="tim-draper">
      <Parallax className="glow-orb tim-draper-orb" range={90} />

      <div className="container">
        <div className="tim-draper-grid">
          <motion.div
            className="tim-draper-media"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <Portrait />
          </motion.div>

          <motion.div
            className="tim-draper-body"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <p className="eyebrow">The Name Behind the Network</p>
            <h2 className="section-title">
              <Reveal>Who is <span className="gold-text">Tim Draper</span>?</Reveal>
            </h2>

            <p className="section-lede">
              A third-generation venture capitalist, and the grandson of the man who raised
              Silicon Valley&rsquo;s first venture fund in 1957. Tim Draper founded Draper
              Associates in 1985, co-founded DFJ in 1995, and wrote early cheques to Hotmail,
              Skype, Baidu, Tesla, SpaceX, Twitch, Coinbase and Robinhood.
            </p>

            <p className="tim-draper-para">
              In 1996 he backed a free email startup and told its founders to add one line to
              the bottom of every message they sent: <em>&ldquo;PS: I love you. Get your free
              email at Hotmail.&rdquo;</em> Microsoft bought the company for $400 million, and
              viral marketing had a name. In 2012 he founded Draper University to teach that
              same instinct to founders directly &mdash; the institution DAN traces back to.
            </p>

            <ul className="tim-draper-milestones">
              {MILESTONES.map((m, i) => (
                <motion.li
                  key={m.year}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <span className="tim-draper-milestone-year">{m.year}</span>
                  <span className="tim-draper-milestone-body">
                    <strong>{m.label}</strong>
                    <span>{m.note}</span>
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* ---- four generations of the same job ---- */}
        <motion.div
          className="lineage"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
          onMouseLeave={() => setActiveGen(2)}
        >
          <div className="lineage-head">
            <span className="lineage-head-label">Four generations of venture capital</span>
            <span className="lineage-head-meta">Est. 1957</span>
          </div>

          <div className="lineage-track">
            <span className="lineage-rule" aria-hidden="true" />
            {GENERATIONS.map((g, i) => (
              <motion.div
                key={g.n}
                className={`lineage-node ${activeGen === i ? 'is-active' : ''}`}
                onMouseEnter={() => setActiveGen(i)}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="lineage-dot" aria-hidden="true" />
                <span className="lineage-era">{g.era}</span>
                <strong className="lineage-name">{g.name}</strong>
                <span className="lineage-note">{g.note}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
