import { motion } from 'framer-motion'
import { IconCheck, IconArrowRight } from './icons.jsx'

const GROUPS = [
  {
    label: 'Capital & Ownership',
    people: ['NRIs', 'HNIs', 'Family Offices', 'Entrepreneurs', 'Founders'],
  },
  {
    label: 'Operators & Experts',
    people: ['CXOs', 'Senior Professionals', 'Corporate Execs', 'Tech Leaders', 'Doctors'],
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.045 } },
}
const item = {
  hidden: { opacity: 0, y: 14, scale: 0.94 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: [0.2, 0.8, 0.2, 1] } },
}

export default function WhoShouldJoin() {
  return (
    <section className="section who-should-join">
      <div className="glow-orb who-orb" />
      <div className="container who-grid">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <p className="eyebrow">Who Should Join</p>
          <h2 className="section-title">Built for India's decision-makers</h2>
          <p className="section-lede">
            DAN brings together the people who write cheques and the people who've built
            companies  often the same person twice over. If you carry capital, credibility
            or hard-won operating experience, there's a seat for you at the table.
          </p>
          <a href="#membership" className="btn btn-ghost who-cta">
            Check Your Fit <IconArrowRight />
          </a>
        </motion.div>

        <div className="who-panel card">
          {GROUPS.map((group) => (
            <div className="who-group" key={group.label}>
              <span className="who-group-label">{group.label}</span>
              <motion.div
                className="pill-grid"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
              >
                {group.people.map((label) => (
                  <motion.span
                    key={label}
                    className="pill"
                    variants={item}
                    whileHover={{ y: -3, borderColor: 'var(--gold)' }}
                  >
                    <IconCheck className="pill-check" /> {label}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
