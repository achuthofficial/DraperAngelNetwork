import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.2, 0.8, 0.2, 1] } },
}

export default function Commitment() {
  return (
    <section className="section commitment" id="community">
      <div className="glow-orb commitment-orb" />
      <div className="container commitment-grid">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          <p className="eyebrow">Our Commitment</p>
          <h2 className="section-title">
            A transparent, <span className="gold-text">founder-friendly</span> ecosystem.
          </h2>
          <p className="section-lede">
            We are committed to building a transparent, founder-friendly and investor-focused
            ecosystem where quality startups meet informed investors. Together, we aim to create
            more angel investors, support more founders, and strengthen India's innovation ecosystem.
          </p>
        </motion.div>

        <motion.blockquote
          className="commitment-quote card"
          initial={{ opacity: 0, y: 40, rotateX: -8 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <svg width="34" height="26" viewBox="0 0 34 26" fill="none" className="quote-mark">
            <path d="M14.3 0C6.4 3.1 0 10.4 0 18.5 0 23 3 26 7 26c3.9 0 6.8-2.9 6.8-6.7 0-3.5-2.3-6-5.6-6.4C9 8.6 12.4 4.7 17 2.6L14.3 0Zm17 0c-7.9 3.1-14.3 10.4-14.3 18.5 0 4.5 3 7.5 7 7.5 3.9 0 6.8-2.9 6.8-6.7 0-3.5-2.3-6-5.6-6.4C26 8.6 29.4 4.7 34 2.6L31.3 0Z" fill="var(--gold)"/>
          </svg>
          <p>
            To build one of India's most trusted communities of angel investors, while creating
            meaningful opportunities for early-stage founders.
          </p>
          <footer>Our Vision</footer>
        </motion.blockquote>
      </div>
    </section>
  )
}
