import { motion } from 'framer-motion'
import Parallax from './Parallax.jsx'

const STEPS = [
  { n: '01', title: 'Apply', desc: 'Share your background, professional profile and investment interests.' },
  { n: '02', title: 'Screening', desc: 'DAN reviews every application to keep the network curated and high-trust.' },
  { n: '03', title: 'Membership', desc: 'Approved members complete onboarding and the annual membership payment.' },
  { n: '04', title: 'Discover', desc: 'Attend curated founder pitches, showcases and investor-education sessions.' },
  { n: '05', title: 'Decide Independently', desc: "Evaluate each opportunity on your own terms — DAN never decides for you." },
]

export default function HowItWorks() {
  return (
    <section className="section how-it-works">
      <Parallax className="glow-orb how-orb" range={85} />
      <div className="container">
        <motion.div
          className="who-head"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <p className="eyebrow">How It Works</p>
          <h2 className="section-title">Your path to membership</h2>
          <p className="section-lede" style={{ margin: '0 auto' }}>
            A simple, five-step journey from application to independent investment decisions.
          </p>
        </motion.div>

        <div className="steps-grid">
          {STEPS.map(({ n, title, desc }, i) => (
            <motion.div
              className="step-card card"
              key={n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span className="step-index">{n}</span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
