import { useEffect, useRef, useState } from 'react'
import { animate, useInView, useReducedMotion } from 'framer-motion'

export default function CountUp({ to, prefix = '', suffix = '', decimals = 0, duration = 1.8, className, immediate = false }) {
  const ref = useRef(null)
  // immediate: for above-the-fold instances that are visible at mount —
  // waiting on an IntersectionObserver tick there just means it sits at 0
  // for a beat first, not an entrance.
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const reduceMotion = useReducedMotion()
  const [display, setDisplay] = useState(reduceMotion ? to : 0)
  const shouldPlay = immediate || inView

  useEffect(() => {
    if (!shouldPlay || reduceMotion) return
    const controls = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(v),
    })
    return () => controls.stop()
  }, [shouldPlay, to, duration, reduceMotion])

  const formatted = display.toLocaleString('en-IN', {
    maximumFractionDigits: decimals,
    minimumFractionDigits: decimals,
  })

  return (
    <span ref={ref} className={className}>
      {prefix}{formatted}{suffix}
    </span>
  )
}
