import { motion } from 'framer-motion'
import Parallax from './Parallax.jsx'
import { IconBook, IconShowcase, IconCoins } from './icons.jsx'

const PILLARS = [
  {
    icon: IconBook,
    title: 'Learn',
    desc: 'Understand angel investing through expert-led sessions on valuation, due diligence, term sheets, portfolio construction and exits.',
  },
  {
    icon: IconShowcase,
    title: 'Access',
    desc: 'Meet 2–3 curated startups every month through live private pitch sessions and recorded presentations.',
  },
  {
    icon: IconCoins,
    title: 'Invest',
    desc: 'Evaluate opportunities independently, participate in syndicates where available, and connect directly with founders and fellow investors.',
  },
]

export default function Pillars() {
  return (
    <section className="section pillars">
      <Parallax className="glow-orb pillars-orb" range={90} />
      <div className="container">
        <motion.div
          className="who-head"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <p className="eyebrow">What DAN Is</p>
          <h2 className="section-title">A curated angel network, not another startup community</h2>
          <p className="section-lede" style={{ margin: '0 auto' }}>
            DAN gives serious investors a structured way to learn, access and participate in India's early-stage ecosystem.
          </p>
        </motion.div>

        <motion.div
          className="pillars-photo"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/images/draper/india-codex-stage.jpeg"
            alt="Founders and investors gathered for a live demo on the DraperU India campus"
            loading="lazy"
          />
        </motion.div>

        <div className="pillars-grid">
          {PILLARS.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              className="pillar-card card"
              key={title}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
            >
              <span className="pillar-index">{`0${i + 1}`}</span>
              <span className="feature-icon"><Icon /></span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="pillars-disclaimer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Membership provides curated access and education. It does not guarantee investment allocation or returns.
        </motion.p>
      </div>
    </section>
  )
}
