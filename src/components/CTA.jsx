import { motion } from 'framer-motion'

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
          <div className="glow-orb cta-orb" />
          <p className="eyebrow">Membership is by invitation only</p>
          <h2 className="section-title">
            Ready to <span className="gold-text">empower founders</span> and grow with them?
          </h2>
          <p className="section-lede">
            To request an invitation, connect with your DAN contact. Established under DraperU India.
          </p>
          <div className="hero-actions">
            <a href="#membership" className="btn btn-primary">Request an Invitation</a>
            <a href="#why-dan" className="btn btn-ghost">Learn More</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
