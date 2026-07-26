import { motion } from 'framer-motion'
import TiltCard from './TiltCard.jsx'

const STATS = [
  { value: '₹5L–₹50L', label: 'The capital gap between an idea and institutional funding' },
  { value: '1000s', label: 'Of promising startups struggling to raise it, every year' },
  { value: 'Few', label: 'Active angels willing to back founders this early' },
]

export default function WhyDAN() {
  return (
    <section className="section why-dan" id="why-dan">
      <div className="container">
        <motion.div
          className="why-dan-head"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <p className="eyebrow">The Opportunity</p>
          <h2 className="section-title">Why DAN</h2>
          <p className="section-lede">
            Every year, thousands of startups struggle to raise their first ₹5L&ndash;₹50L  the
            capital needed to build, validate and prepare for institutional funding. DAN exists
            to close that gap, and to give members a curated way into India's startup story.
          </p>
        </motion.div>

        <div className="why-dan-stats">
          {STATS.map((s, i) => (
            <TiltCard key={s.value} className="stat-card" maxTilt={8}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
              >
                <strong className="gold-text">{s.value}</strong>
                <span>{s.label}</span>
              </motion.div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}
