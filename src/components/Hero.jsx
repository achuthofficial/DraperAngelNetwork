import { useRef } from 'react'
import { motion, useScroll, useTransform, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'
import ParticleField from './ParticleField.jsx'
import CountUp from './CountUp.jsx'
import Reveal from './motion/Reveal.jsx'

export default function Hero() {
  const sectionRef = useRef(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })

  /* Differential parallax: the video (background) barely moves — the
     copy over it scrolls away much faster. The gap between the two rates
     is the effect, not the motion itself. */
  const mediaY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, 60])
  const sceneY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, 40])
  const contentY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, 220])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0])

  const mouseX = useMotionValue(0)
  const mouseXSpring = useSpring(mouseX, { stiffness: 60, damping: 20 })
  const sceneX = useTransform(mouseXSpring, [-0.5, 0.5], reduceMotion ? [0, 0] : [-24, 24])

  function handleHeroMouseMove(e) {
    if (reduceMotion || !sectionRef.current) return
    const rect = sectionRef.current.getBoundingClientRect()
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5)
  }

  return (
    <section className="hero" id="top" ref={sectionRef} onMouseMove={handleHeroMouseMove}>
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

      <motion.div className="hero-scene" style={{ y: sceneY, x: sceneX }}>
        <ParticleField />
      </motion.div>

      <motion.div className="container hero-content" style={{ y: contentY, opacity: contentOpacity }}>
        <p className="eyebrow"><Reveal immediate delay={0.1}>India's Curated Angel Network</Reveal></p>

        <h1 className="hero-title">
          <Reveal as="span" immediate delay={0.2}><span className="gold-text">DAN</span></Reveal>
          <Reveal as="span" className="hero-title-sub" immediate delay={0.3}>Draper Angel Network</Reveal>
        </h1>

        <p className="hero-tagline"><Reveal immediate delay={0.38}>Back India's Next Generation of Founders</Reveal></p>

        <motion.p
          className="hero-desc"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Join an invite-only network of up to 500 investors  HNIs, NRIs, family offices and
          operators  gaining curated startup access, investor education and connections
          across the Draper ecosystem.
        </motion.p>

        <motion.p
          className="hero-pricing-line"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
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
          <div><strong><CountUp to={500} immediate /></strong><span>Investor network cap</span></div>
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
