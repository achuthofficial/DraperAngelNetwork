import { motion } from 'framer-motion'
import TiltCard from './TiltCard.jsx'
import { IconCompass, IconShowcase, IconBook, IconNetwork, IconShield, IconArrowRight } from './icons.jsx'

const PRIMARY = [
  {
    icon: IconCompass,
    title: 'Curated Startup Access',
    desc: 'Screened idea-stage and early-stage startups from across India, evaluated before reaching the network.',
  },
  {
    icon: IconShowcase,
    title: 'Monthly Startup Showcases',
    desc: '2–3 startups every month, founder pitches, product demos and live investor Q&A.',
  },
]

const SECONDARY = [
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
          className="who-head"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <p className="eyebrow">Membership Benefits</p>
          <h2 className="section-title">What members receive</h2>
          <p className="section-lede" style={{ margin: '0 auto' }}>
            Everything a member needs to evaluate, invest and stay connected, from day one.
          </p>
        </motion.div>

        <div className="features-grid-primary">
          {PRIMARY.map(({ icon: Icon, title, desc }, i) => (
            <TiltCard key={title} className="feature-card feature-card-primary" maxTilt={6}>
              <motion.div
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <span className="feature-index">{`0${i + 1}`}</span>
                <span className="feature-icon"><Icon /></span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </motion.div>
            </TiltCard>
          ))}
        </div>

        <div className="features-grid">
          {SECONDARY.map(({ icon: Icon, title, desc }, i) => (
            <TiltCard key={title} className="feature-card" maxTilt={7}>
              <motion.div
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <span className="feature-index">{`0${i + 3}`}</span>
                <span className="feature-icon"><Icon /></span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </motion.div>
            </TiltCard>
          ))}
        </div>

        <motion.a
          href="#membership"
          className="features-more-link"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          See full membership pricing <IconArrowRight />
        </motion.a>
      </div>
    </section>
  )
}
