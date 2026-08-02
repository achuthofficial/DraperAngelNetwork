import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion'
import TiltCard from './TiltCard.jsx'
import Parallax from './Parallax.jsx'
import Reveal from './motion/Reveal.jsx'
import GapBridge from './GapBridge.jsx'
import { IconLayers, IconCoins, IconRare, IconArrowRight } from './icons.jsx'

const STATS = [
  { icon: IconLayers, value: '1000s', label: 'Of promising startups looking to raise capital, every year' },
  { icon: IconCoins, value: '₹5L–₹50L', label: 'The capital gap between an idea and institutional funding' },
  { icon: IconRare, value: 'Few', label: 'Active angels willing to back founders this early' },
]

export default function WhyDAN() {
  const spotRef = useRef(null)
  const reduceMotion = useReducedMotion()
  const mx = useMotionValue(50)
  const my = useMotionValue(50)
  const sx = useSpring(mx, { stiffness: 40, damping: 22 })
  const sy = useSpring(my, { stiffness: 40, damping: 22 })
  const spotlight = useTransform([sx, sy], ([x, y]) =>
    `radial-gradient(520px circle at ${x}% ${y}%, rgba(var(--c-accent-rgb), 0.14), transparent 70%)`
  )

  function handleSpotMove(e) {
    if (reduceMotion || !spotRef.current) return
    const rect = spotRef.current.getBoundingClientRect()
    mx.set(((e.clientX - rect.left) / rect.width) * 100)
    my.set(((e.clientY - rect.top) / rect.height) * 100)
  }

  return (
    <section className="section why-dan" id="why-dan">
      <Parallax className="glow-orb why-dan-orb" range={90} />
      <Parallax className="glow-orb glow-orb-sm why-dan-orb-2" range={-55} />
      <div className="container">
        <motion.div
          className="why-dan-head"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <p className="eyebrow">The Opportunity</p>
          <h2 className="section-title"><Reveal>Why DAN</Reveal></h2>
          <p className="section-lede">
            Every year, thousands of startups struggle to raise their first ₹5L&ndash;₹50L,
            the capital needed to build, validate and prepare for institutional funding. DAN
            exists to close that gap, and to give members a curated way into India's startup story.
          </p>
        </motion.div>

        <div className="why-dan-stats">
          {STATS.map(({ icon: Icon, value, label }, i) => (
            <div className="why-dan-stat-wrap" key={value}>
              <TiltCard className="stat-card" maxTilt={8}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                >
                  <span className="feature-icon stat-icon"><Icon /></span>
                  <strong className="gold-text">{value}</strong>
                  <span>{label}</span>
                </motion.div>
              </TiltCard>
              {i < STATS.length - 1 && (
                <span className="why-dan-connector" aria-hidden="true">
                  <IconArrowRight />
                </span>
              )}
            </div>
          ))}
        </div>

        <GapBridge />

        <div className="spotlight-wrap" ref={spotRef} onMouseMove={handleSpotMove}>
          <motion.div className="spotlight-bg" style={{ background: spotlight }} aria-hidden="true" />
          <motion.p
            className="why-dan-resolve"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="gold-text">This is where DAN comes in.</span>
          </motion.p>
        </div>
      </div>
    </section>
  )
}
