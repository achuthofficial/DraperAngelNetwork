import { useState } from 'react'
import { motion } from 'framer-motion'
import Parallax from './Parallax.jsx'
import CountUp from './CountUp.jsx'
import Reveal from './motion/Reveal.jsx'

/* Figures as published by Draper Associates on draper.vc. */
const SCALE = [
  { countTo: 400, suffix: '+', label: 'Companies backed' },
  { countTo: 40, suffix: '+', label: 'Years of investing' },
  { value: '$2.3B', label: 'Assets under management' },
  { countTo: 60, suffix: '+', label: 'Unicorns and above' },
]

/* Outcomes verified on draper.vc. Where a first-cheque year could not be
   confirmed the cell carries the sector instead of a guessed date. */
const PORTFOLIO = [
  {
    name: 'Hotmail',
    meta: '1996',
    outcome: 'Acquired by Microsoft for $400M. Its "PS: I love you" footer invented viral marketing.',
  },
  {
    name: 'Baidu',
    meta: '2001',
    outcome: '$9M for a 28% stake in what became China’s dominant search engine.',
  },
  {
    name: 'Skype',
    meta: 'Communications',
    outcome: 'A 10% stake. eBay paid $4.1B for the company; Microsoft later paid $8.5B.',
  },
  {
    name: 'Tesla',
    meta: '2006',
    outcome: 'Series C through DFJ, Series D through Draper Associates. Roughly a 30× return.',
  },
  {
    name: 'SpaceX',
    meta: 'Space',
    outcome: 'A seed investor in the company now flying the majority of the world’s orbital launches.',
  },
  {
    name: 'Twitch',
    meta: 'Media',
    outcome: 'Acquired by Amazon for $970M.',
  },
  {
    name: 'Coinbase',
    meta: '2021',
    outcome: 'Led investments before it went public on Nasdaq.',
  },
  {
    name: 'And more',
    meta: 'Portfolio',
    outcome: 'Robinhood, Cruise, Carta, Webflow, Ledger and Tezos, among 400+ others.',
  },
]

export default function DraperTrackRecord() {
  const [activeRow, setActiveRow] = useState(0)

  return (
    <section className="section track-record" id="track-record">
      <Parallax className="glow-orb track-orb" range={95} />
      <Parallax className="glow-orb glow-orb-sm track-orb-2" range={-55} />

      <div className="container">
        <motion.div
          className="who-head"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <p className="eyebrow">The Track Record</p>
          <h2 className="section-title"><Reveal>What Draper has backed</Reveal></h2>
          <p className="section-lede" style={{ margin: '0 auto' }}>
            Draper Associates has spent four decades writing the first cheque &mdash; the one
            written before the world agrees. This is the record that stands behind the
            Draper name DAN carries.
          </p>
        </motion.div>

        {/* ---- scale ---- */}
        <div className="track-scale">
          {SCALE.map((s, i) => (
            <motion.div
              className="track-scale-item"
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: i * 0.09 }}
            >
              <strong className="gold-text">
                {s.countTo != null ? <CountUp to={s.countTo} suffix={s.suffix} /> : s.value}
              </strong>
              <span>{s.label}</span>
            </motion.div>
          ))}
        </div>

        {/* ---- the ledger ---- */}
        <motion.div
          className="ledger"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8 }}
        >
          <div className="ledger-head">
            <span>Selected portfolio</span>
            <span>Outcome</span>
          </div>

          <ul className="ledger-rows">
            {PORTFOLIO.map((p, i) => (
              <motion.li
                key={p.name}
                className={`ledger-row ${activeRow === i ? 'is-active' : ''}`}
                onMouseEnter={() => setActiveRow(i)}
                onFocus={() => setActiveRow(i)}
                tabIndex={0}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: Math.min(i, 5) * 0.06 }}
              >
                <span className="ledger-index">{String(i + 1).padStart(2, '0')}</span>
                <strong className="ledger-name">{p.name}</strong>
                <span className="ledger-outcome">{p.outcome}</span>
                <span className="ledger-meta">{p.meta}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <p className="track-disclaimer">
          Draper Associates&rsquo; portfolio and outcomes are shown as ecosystem context. They
          are not DAN offerings, are not available to DAN members, and are not an indication of
          any DAN member&rsquo;s results. Startup investing carries substantial risk, including
          total loss of capital.
        </p>
      </div>
    </section>
  )
}
