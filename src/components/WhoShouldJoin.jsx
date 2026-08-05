import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { IconCheck, IconArrowRight } from './icons.jsx'
import Parallax from './Parallax.jsx'
import Reveal from './motion/Reveal.jsx'

const GROUPS = [
  {
    label: 'Capital & Ownership',
    people: ['NRIs', 'HNIs', 'Family Offices', 'Entrepreneurs', 'Founders'],
  },
  {
    label: 'Operators & Experts',
    people: ['CXOs', 'Senior Professionals', 'Corporate Execs', 'Tech Leaders', 'Doctors'],
  },
  {
    label: 'Investor Experience',
    people: ['Existing Angel Investors', 'First-Time Angels'],
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.045 } },
}
const item = {
  hidden: { opacity: 0, y: 14, scale: 0.94 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function WhoShouldJoin() {
  const reduceMotion = useReducedMotion()
  const [activeCaption, setActiveCaption] = useState(null)

  return (
    <section className="section who-should-join">
      <Parallax className="glow-orb who-orb" range={95} />
      <Parallax className="glow-orb glow-orb-sm who-orb-2" range={-50} />
      <div className="container who-grid">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <p className="eyebrow">Who Should Join</p>
          <h2 className="section-title"><Reveal>Built for India's decision-makers</Reveal></h2>
          <p className="section-lede">
            DAN brings together the people who write cheques and the people who've built
            companies  often the same person twice over. If you carry capital, credibility
            or hard-won operating experience, there's a seat for you at the table.
          </p>
          <a href="#membership" className="btn btn-ghost who-cta">
            Check Your Fit <IconArrowRight />
          </a>
          <p className="who-qualifier">
            Membership is designed for individuals who understand that startup investing is
            high-risk, illiquid and long-term.
          </p>
        </motion.div>

        <div className="who-panel card">
          <div className="who-panel-photo">
            <img
              src="/images/draper/echai-group-photo.jpeg"
              alt="Founders and community members at a DraperU India session"
              loading="lazy"
            />
          </div>
          {GROUPS.map((group) => (
            <div className="who-group" key={group.label}>
              <span className="who-group-label">{group.label}</span>
              <motion.div
                className="pill-grid constellation"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
              >
                {group.people.map((label) => {
                  const key = `${group.label}-${label}`
                  return (
                    <motion.span
                      key={key}
                      className="pill constellation-item"
                      variants={item}
                      whileHover={reduceMotion ? undefined : { y: -4, scale: 1.06 }}
                      whileFocus={reduceMotion ? undefined : { y: -4, scale: 1.06 }}
                      onMouseEnter={() => setActiveCaption(key)}
                      onMouseLeave={() => setActiveCaption(null)}
                      onFocus={() => setActiveCaption(key)}
                      onBlur={() => setActiveCaption(null)}
                      tabIndex={0}
                    >
                      <IconCheck className="pill-check" /> {label}
                      {activeCaption === key && (
                        <motion.span
                          className="constellation-caption"
                          initial={{ opacity: 0, y: 4 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          {group.label}
                        </motion.span>
                      )}
                    </motion.span>
                  )
                })}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
