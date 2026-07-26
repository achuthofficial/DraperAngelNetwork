import { motion } from 'framer-motion'
import TiltCard from './TiltCard.jsx'
import { IconCompass, IconShowcase, IconBook, IconNetwork, IconShield } from './icons.jsx'

const FEATURES = [
  {
    icon: IconCompass,
    title: 'Curated Startup Access',
    desc: 'Screened idea-stage and early-stage startups from across India, evaluated before reaching the network.',
  },
  {
    icon: IconShowcase,
    title: 'Monthly Startup Showcases',
    desc: '2–3 startups every month  founder pitches, product demos and live investor Q&A.',
  },
  {
    icon: IconBook,
    title: 'Investor Education',
    desc: 'Sessions on evaluation, due diligence, valuations, term sheets, cap tables and SAFE notes.',
  },
  {
    icon: IconNetwork,
    title: 'Access to Ecosystem Leaders',
    desc: 'Direct interaction with founders, VCs, mentors and the wider DraperU India network.',
  },
  {
    icon: IconShield,
    title: 'A Trusted Community',
    desc: 'Belong to an active network of entrepreneurs, investors, founders and industry leaders.',
  },
]

export default function Features() {
  return (
    <section className="section features">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <p className="eyebrow">Membership Benefits</p>
          <h2 className="section-title">What members receive</h2>
        </motion.div>

        <div className="features-grid">
          {FEATURES.map(({ icon: Icon, title, desc }, i) => (
            <TiltCard key={title} className="feature-card" maxTilt={7}>
              <motion.div
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              >
                <span className="feature-icon"><Icon /></span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </motion.div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}
