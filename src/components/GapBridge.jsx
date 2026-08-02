import { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform, useReducedMotion } from 'framer-motion'

const PLANK_COUNT = 16

export default function GapBridge() {
  const ref = useRef(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.9', 'end 0.55'] })
  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 26, restDelta: 0.001 })
  const progress = reduceMotion ? 1 : smooth

  const fillWidth = useTransform(progress, [0, 1], ['0%', '100%'])
  const markerLeft = useTransform(progress, [0, 1], ['0%', '100%'])
  const fillClip = useTransform(progress, (v) => `inset(0 ${(1 - v) * 100}% 0 0)`)

  return (
    <div className="gap-bridge" ref={ref}>
      <div className="gap-bridge-labels">
        <span className="gap-bridge-figure">
          <strong>&#8377;5L</strong>
          <small>idea stage</small>
        </span>
        <span className="gap-bridge-caption">the capital gap DAN closes</span>
        <span className="gap-bridge-figure gap-bridge-figure-right">
          <strong>&#8377;50L</strong>
          <small>institutional-ready</small>
        </span>
      </div>

      <div className="gap-bridge-track">
        <div className="gap-bridge-rule" />
        <motion.div className="gap-bridge-fill-line" style={{ width: fillWidth }} />

        <div className="gap-bridge-planks" aria-hidden="true">
          {Array.from({ length: PLANK_COUNT }).map((_, i) => <span key={i} />)}
        </div>
        <motion.div className="gap-bridge-planks gap-bridge-planks-lit" style={{ clipPath: fillClip }} aria-hidden="true">
          {Array.from({ length: PLANK_COUNT }).map((_, i) => <span key={i} />)}
        </motion.div>

        <motion.span className="gap-bridge-marker" style={{ left: markerLeft }} aria-hidden="true" />
      </div>
    </div>
  )
}
