import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'

export default function Parallax({ className, style, range = 120, as = 'div', children }) {
  const ref = useRef(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [range, -range])
  const MotionTag = motion[as]

  return (
    <MotionTag ref={ref} className={className} style={{ ...style, y }}>
      {children}
    </MotionTag>
  )
}
