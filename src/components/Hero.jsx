import { useRef } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from 'framer-motion'
import Reveal from './motion/Reveal.jsx'
import { IconArrowRight } from './icons.jsx'

/* The Draper Associates shield — the real mark, four chevron bands.
   Geometry is Draper's own; the treatment is the reference newsroom plate's:
   one gradient standing in for the flat #D2D7EB fill.

   gradientUnits="userSpaceOnUse" is what makes this work. Left on the
   default objectBoundingBox, each band would get its own 0→100% ramp and the
   four would read as separate pieces. Pinned to user space, all four share a
   single light source across the whole mark — which is what the reference
   plate actually shows. */
function DraperShield() {
  return (
    <svg viewBox="0 0 190 207" className="hero-mark-svg" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="dan-shield-face" gradientUnits="userSpaceOnUse" x1="8" y1="-10" x2="176" y2="207">
          <stop offset="0%" stopColor="#f6f7fc" />
          <stop offset="32%" stopColor="#ced4ea" />
          <stop offset="66%" stopColor="#959dc2" />
          <stop offset="100%" stopColor="#5a6188" />
        </linearGradient>
      </defs>
      <g fill="url(#dan-shield-face)">
        <path d="M93.5697 159.101L50.696 170.667C65.6533 187.565 80.7133 198.789 90.5668 205.286C93.2614 207.067 96.7439 207.067 99.4385 205.286C109.281 198.789 124.329 187.577 139.287 170.701L96.173 159.101C95.3167 158.873 94.426 158.873 93.5697 159.101Z" />
        <path d="M96.5104 152.492L143.928 165.245C153.325 153.839 162.459 140.126 170.007 123.856L95.9281 103.932C95.2316 103.738 94.4894 103.738 93.7815 103.932L19.9656 123.844C27.5127 140.103 36.6355 153.805 46.0323 165.211L93.1992 152.492C93.7359 152.343 94.2953 152.275 94.8547 152.275C95.4142 152.275 95.9738 152.343 96.5104 152.492Z" />
        <path d="M93.8811 46.5669L3.5437 70.6927C5.93002 84.9193 10.1661 100.995 17.3136 117.86L93.2075 97.3875C93.7442 97.239 94.3036 97.1705 94.8631 97.1705C95.4225 97.1705 95.9821 97.239 96.5187 97.3875L172.675 117.871C179.823 101.018 184.059 84.9307 186.445 70.7041L95.845 46.5669C95.2056 46.3957 94.532 46.3957 93.8926 46.5669" />
        <path d="M94.8572 39.8366C95.4053 39.8366 95.9648 39.9051 96.5015 40.0536L187.421 64.2707C188.951 52.9214 189.317 42.9537 189.134 35.0183C189.054 31.5702 186.77 28.5673 183.482 27.5283L97.4377 0.376787C95.8506 -0.125596 94.1493 -0.125596 92.5622 0.376787L6.5179 27.5283C3.20674 28.5673 0.946079 31.6044 0.866154 35.0754C0.68347 42.9993 1.04884 52.9442 2.57882 64.2707L93.2246 40.0536C93.7612 39.9166 94.3092 39.8366 94.8687 39.8366" />
      </g>
    </svg>
  )
}

export default function Hero() {
  const sectionRef = useRef(null)
  const reduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })

  /* Differential parallax: the mark drifts a third as far as the copy, so
     the two planes separate as you leave the section. */
  const markY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, 80])
  const markScale = useTransform(scrollYProgress, [0, 1], reduceMotion ? [1, 1] : [1, 1.05])
  const leadY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, 210])
  const leadOpacity = useTransform(scrollYProgress, [0, 0.62], [1, 0])

  /* Pointer parallax on the mark only — the type never moves under the
     cursor, which is what keeps this composed rather than reactive. */
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const smx = useSpring(mx, { stiffness: 50, damping: 22, mass: 0.6 })
  const smy = useSpring(my, { stiffness: 50, damping: 22, mass: 0.6 })
  const markX = useTransform(smx, [-0.5, 0.5], reduceMotion ? [0, 0] : [18, -18])
  const markShiftY = useTransform(smy, [-0.5, 0.5], reduceMotion ? [0, 0] : [12, -12])

  function handlePointerMove(e) {
    if (reduceMotion || e.pointerType === 'touch' || !sectionRef.current) return
    const rect = sectionRef.current.getBoundingClientRect()
    mx.set((e.clientX - rect.left) / rect.width - 0.5)
    my.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  function handlePointerLeave() {
    mx.set(0)
    my.set(0)
  }

  return (
    <section
      className="hero"
      id="top"
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {/* ---- ground: indigo wash + hairline grid ---- */}
      <div className="hero-ground" aria-hidden="true">
        <div className="hero-ground-grid" />
        <div className="hero-ground-lift" />
      </div>

      {/* ---- the mark ---- */}
      <motion.div
        className="hero-mark"
        style={{ y: markY, x: markX, scale: markScale }}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        aria-hidden="true"
      >
        <motion.div className="hero-mark-inner" style={{ y: markShiftY }}>
          <DraperShield />
        </motion.div>
      </motion.div>

      {/* ---- the lead ---- */}
      <motion.div className="container hero-inner" style={{ y: leadY, opacity: leadOpacity }}>
        <motion.p
          className="eyebrow hero-eyebrow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          India&rsquo;s Curated Angel Network
        </motion.p>

        <h1 className="hero-title">
          <Reveal as="span" immediate delay={0.3}>Back India&rsquo;s</Reveal>
          <Reveal as="span" immediate delay={0.4}>next generation</Reveal>
          <Reveal as="span" immediate delay={0.5}>
            of <em>founders</em>
          </Reveal>
        </h1>

        <motion.p
          className="hero-desc"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.72 }}
        >
          An invite-only network of up to 500 investors &mdash; HNIs, NRIs, family offices and
          operators &mdash; established under DraperU India.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.84 }}
        >
          <a href="#membership" className="btn btn-primary">
            Apply for Membership <IconArrowRight />
          </a>
          <a href="#get-started" className="btn btn-ghost">Submit Your Startup</a>
        </motion.div>

        <motion.a
          href="#tim-draper"
          className="hero-cue"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          <span className="hero-cue-line" aria-hidden="true" />
          Scroll
        </motion.a>
      </motion.div>
    </section>
  )
}
