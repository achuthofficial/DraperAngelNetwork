import { motion } from 'framer-motion'
import Parallax from './Parallax.jsx'
import CountUp from './CountUp.jsx'
import Reveal from './motion/Reveal.jsx'
import { IconArrowRight } from './icons.jsx'

/* The line of descent, stated as four links so a visitor can see exactly
   how a Silicon Valley firm connects to an angel network in Hyderabad —
   and, importantly, where DAN sits in it. */
const CHAIN = [
  {
    n: '01',
    name: 'Draper Associates',
    place: 'Silicon Valley · 1985',
    note: 'Tim Draper’s firm. Four decades of first cheques, 400+ companies backed.',
  },
  {
    n: '02',
    name: 'Draper University',
    place: 'San Mateo · 2012',
    note: '6,000+ alumni from 104 countries have trained here and launched 2,000+ companies.',
  },
  {
    n: '03',
    name: 'DraperU India',
    place: 'Gachibowli, Hyderabad',
    note: 'At 27,000 sq ft, the largest house in the global Draper network. Founders live and build here.',
  },
  {
    n: '04',
    name: 'DAN',
    place: 'India · Invite-only',
    note: 'The angel network established under DraperU India — the investor side of the same house.',
    isDan: true,
  },
]

const REACH = [
  { countTo: 17, label: 'Countries with a Draper house' },
  { countTo: 104, label: 'Countries represented by alumni' },
  { value: '27,000', label: 'Sq ft of the Hyderabad campus' },
  { value: '1M by 2030', label: 'Entrepreneurs the network aims to enable' },
]

export default function WhatIsDAN() {
  return (
    <section className="section what-is-dan" id="what-is-dan">
      <Parallax className="glow-orb dan-orb" range={90} />
      <Parallax className="glow-orb glow-orb-sm dan-orb-2" range={-55} />

      <div className="container">
        <motion.div
          className="who-head"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <p className="eyebrow">The Line of Descent</p>
          <h2 className="section-title"><Reveal>So what, exactly, is DAN?</Reveal></h2>
          <p className="section-lede" style={{ margin: '0 auto' }}>
            Four links connect a 1985 Silicon Valley firm to an angel network in Hyderabad.
            DAN is the last one &mdash; and the first that was built for Indian investors.
          </p>
        </motion.div>

        <div className="chain">
          {CHAIN.map((c, i) => (
            <motion.div
              className={`chain-link ${c.isDan ? 'is-dan' : ''}`}
              key={c.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="chain-n">{c.n}</span>
              <h3 className="chain-name">{c.name}</h3>
              <span className="chain-place">{c.place}</span>
              <p className="chain-note">{c.note}</p>
              {i < CHAIN.length - 1 && (
                <motion.span
                  className="chain-connector"
                  aria-hidden="true"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
                />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="dan-statement card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <p className="dan-statement-lead">
            DAN is an <span className="gold-text">invite-only community of up to 500 angel
            investors</span>, established under DraperU India.
          </p>
          <p className="dan-statement-body">
            The Draper ecosystem has spent forty years finding founders early and teaching them
            to build. DAN turns that same machinery toward the other side of the table: it takes
            the founders already moving through the Hyderabad house, screens them, and puts
            2&ndash;3 of them in front of members every month &mdash; alongside the education
            needed to judge them properly. You decide, independently, every time.
          </p>
          <div className="dan-statement-actions">
            <a href="#membership" className="btn btn-primary">
              Apply for Membership <IconArrowRight />
            </a>
            <a href="#why-dan" className="btn btn-ghost">Why this gap matters</a>
          </div>
        </motion.div>

        <div className="dan-reach">
          {REACH.map((r, i) => (
            <motion.div
              className="dan-reach-item"
              key={r.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
            >
              <strong className="gold-text">
                {r.countTo != null ? <CountUp to={r.countTo} /> : r.value}
              </strong>
              <span>{r.label}</span>
            </motion.div>
          ))}
        </div>

        <motion.blockquote
          className="commitment-quote card dan-mission-quote"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <svg width="34" height="26" viewBox="0 0 34 26" fill="none" className="quote-mark">
            <path d="M14.3 0C6.4 3.1 0 10.4 0 18.5 0 23 3 26 7 26c3.9 0 6.8-2.9 6.8-6.7 0-3.5-2.3-6-5.6-6.4C9 8.6 12.4 4.7 17 2.6L14.3 0Zm17 0c-7.9 3.1-14.3 10.4-14.3 18.5 0 4.5 3 7.5 7 7.5 3.9 0 6.8-2.9 6.8-6.7 0-3.5-2.3-6-5.6-6.4C26 8.6 29.4 4.7 34 2.6L31.3 0Z" fill="var(--gold)"/>
          </svg>
          <p>Enable 1 million entrepreneurs by 2030.</p>
          <footer>DraperU India Mission</footer>
        </motion.blockquote>
      </div>
    </section>
  )
}
