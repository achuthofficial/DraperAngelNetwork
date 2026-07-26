import { motion } from 'framer-motion'
import TiltCard from './TiltCard.jsx'
import { IconLayers, IconCoins, IconRare, IconArrowRight } from './icons.jsx'

const STATS = [
  { icon: IconLayers, value: '1000s', label: 'Of promising startups looking to raise capital, every year' },
  { icon: IconCoins, value: '₹5L–₹50L', label: 'The capital gap between an idea and institutional funding' },
  { icon: IconRare, value: 'Few', label: 'Active angels willing to back founders this early' },
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
            Every year, thousands of startups struggle to raise their first ₹5L&ndash;₹50L,
            the capital needed to build, validate and prepare for institutional funding. DAN
            exists to close that gap, and to give members a curated way into India's startup story.
          </p>
        </motion.div>

        <div className="why-dan-stats">
          {STATS.map(({ icon: Icon, value, label }, i) => (
            <div className="why-dan-stat-wrap" key={value}>
              <TiltCard className="stat-card" maxTilt={8}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                >
                  <span className="feature-icon stat-icon"><Icon /></span>
                  <strong className="gold-text">{value}</strong>
                  <span>{label}</span>
                </motion.div>
              </TiltCard>
              {i < STATS.length - 1 && (
                <span className="why-dan-connector" aria-hidden="true">
                  <IconArrowRight />
                </span>
              )}
            </div>
          ))}
        </div>

        <motion.p
          className="why-dan-resolve"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <span className="gold-text">This is where DAN comes in.</span>
        </motion.p>
      </div>
    </section>
  )
}
