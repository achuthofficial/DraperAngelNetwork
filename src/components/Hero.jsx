import { motion } from 'framer-motion'
import ParticleField from './ParticleField.jsx'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-media">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/videos/hero-meeting.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay" />
        <div className="hero-vignette" />
      </div>

      <div className="hero-scene">
        <ParticleField />
      </div>

      <div className="container hero-content">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          DraperU India Presents
        </motion.p>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <span className="gold-text">DAN</span>
          <span className="hero-title-sub">Draper Angel Network</span>
        </motion.h1>

        <motion.p
          className="hero-tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Empowering Angels. Accelerating Founders.
        </motion.p>

        <motion.p
          className="hero-desc"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.62 }}
        >
          An invite-only angel investment community established under DraperU India  
          bridging the ₹5L &ndash; ₹50L funding gap that stands between an idea and India's next great company.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.74 }}
        >
          <a href="#membership" className="btn btn-primary">Request an Invitation</a>
          <a href="#why-dan" className="btn btn-ghost">Explore DAN</a>
        </motion.div>

        <motion.div
          className="hero-stats"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div><strong>₹5L&ndash;₹50L</strong><span>Funding gap we close</span></div>
          <div><strong>2&ndash;3</strong><span>Startups showcased monthly</span></div>
          <div><strong>Invite&#8209;only</strong><span>Curated member community</span></div>
        </motion.div>
      </div>

      {/* <motion.div
        className="hero-scroll-cue"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
      >
        <span />
      </motion.div> */}
    </section>
  )
}
