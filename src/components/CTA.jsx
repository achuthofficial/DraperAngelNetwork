import { motion } from 'framer-motion'
import Parallax from './Parallax.jsx'
import Reveal from './motion/Reveal.jsx'

export default function CTA() {
  return (
    <section className="section cta-section">
      <div className="container">
        <motion.div
          className="cta-panel card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <Parallax className="glow-orb cta-orb" range={70} />
          <Parallax className="glow-orb glow-orb-sm cta-orb-2" range={-45} />
          <p className="eyebrow">Membership is by invitation only</p>
          <h2 className="section-title">
            <Reveal>Ready to <span className="gold-text">empower founders</span> and grow with them?</Reveal>
          </h2>
          <p className="section-lede">
            To request an invitation, connect with your DAN contact. Established under DraperU India.
          </p>
          <div className="hero-actions">
            <a href="#membership" className="btn btn-primary">Apply for Membership</a>
            <a href="#why-dan" className="btn btn-ghost">Learn More</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
