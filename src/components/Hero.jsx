import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import ParticleField from './ParticleField.jsx'

export default function Hero() {
  const sectionRef = useRef(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })

  const mediaY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, 140])
  const sceneY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, 70])
  const contentY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, 110])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])

  return (
    <section className="hero" id="top" ref={sectionRef}>
      <motion.div className="hero-media" style={{ y: mediaY }}>
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
      </motion.div>

      <motion.div className="hero-scene" style={{ y: sceneY }}>
        <ParticleField />
      </motion.div>

      <motion.div className="container hero-content" style={{ y: contentY, opacity: contentOpacity }}>
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          India's Curated Angel Network
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
          Back India's Next Generation of Founders
        </motion.p>

        <motion.p
          className="hero-desc"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.62 }}
        >
          Join an invite-only network of up to 500 investors  HNIs, NRIs, family offices and
          operators  gaining curated startup access, investor education and connections
          across the Draper ecosystem.
        </motion.p>

        <motion.p
          className="hero-pricing-line"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          <strong>₹50,000</strong> annual membership <span className="dot-sep">•</span> Founding memberships limited to 25
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.78 }}
        >
          <a href="#membership" className="btn btn-primary">Apply for Membership</a>
          <a href="#get-started" className="btn btn-ghost">Submit Your Startup</a>
        </motion.div>

        <motion.div
          className="hero-stats"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div><strong>500</strong><span>Investor network cap</span></div>
          <div><strong>2&ndash;3</strong><span>Startups showcased monthly</span></div>
          <div><strong>₹5L&ndash;₹50L</strong><span>Funding gap we close</span></div>
        </motion.div>
      </motion.div>

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
