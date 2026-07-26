import { motion } from 'framer-motion'

const FACTS = [
  'Established under DraperU India',
  'Invite-only membership',
  'Pan-India curated deal flow',
  'Monthly founder showcases',
]

export default function AboutStory() {
  return (
    <section className="section about-story">
      <div className="container about-grid">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <p className="eyebrow">About DAN</p>
          <h2 className="section-title">
            Born from DraperU India's <span className="gold-text">founder-first</span> philosophy.
          </h2>

          <ul className="about-facts">
            {FACTS.map((f) => (
              <li key={f}><span className="dot" /> {f}</li>
            ))}
          </ul>

          <a href="#membership" className="btn btn-ghost">Explore Membership</a>
        </motion.div>

        <motion.div
          className="about-video-frame"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <div className="about-video-card">
            <video autoPlay muted loop playsInline preload="auto">
              <source src="/videos/dan-logo-reveal.mp4" type="video/mp4" />
            </video>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
