import { motion } from 'framer-motion'
import TiltCard from './TiltCard.jsx'
import Parallax from './Parallax.jsx'
import CountUp from './CountUp.jsx'
import { IconCompass, IconGlobe, IconTarget, IconShowcase } from './icons.jsx'
import Reveal from './motion/Reveal.jsx'

const STATS = [
  { icon: IconCompass, value: '2012', label: 'Draper University founded by Tim Draper' },
  { icon: IconGlobe, countTo: 17, label: 'Countries with a Draper Startup House campus' },
  { icon: IconShowcase, value: 'Hyderabad', label: "Home to one of DraperU India's largest live-in founder campuses" },
  { icon: IconTarget, value: '1M by 2030', label: 'Entrepreneurs the network aims to enable' },
]

export default function DraperNetwork() {
  return (
    <section className="section draper-network" id="draper-network">
      <Parallax className="glow-orb draper-orb" range={95} />
      <Parallax className="glow-orb glow-orb-sm draper-orb-2" range={-55} />
      <div className="container">
        <motion.div
          className="who-head"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <p className="eyebrow">The Draper Network</p>
          <h2 className="section-title"><Reveal>Backed by a global founder movement</Reveal></h2>
          <p className="section-lede" style={{ margin: '0 auto' }}>
            DAN sits inside DraperU India, the Hyderabad campus of the global Draper Startup
            House network and part of Tim Draper's Draper University lineage. The same
            ecosystem that trains, houses and connects founders worldwide is the one DAN gives
            its members a seat inside.
          </p>
        </motion.div>

        <div className="draper-stats">
          {STATS.map(({ icon: Icon, value, countTo, label }, i) => (
            <TiltCard key={label} className="stat-card draper-stat-card" maxTilt={8}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <span className="feature-icon stat-icon"><Icon /></span>
                <strong className="gold-text">
                  {countTo != null ? <CountUp to={countTo} /> : value}
                </strong>
                <span>{label}</span>
              </motion.div>
            </TiltCard>
          ))}
        </div>

        <motion.blockquote
          className="commitment-quote card draper-quote"
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
