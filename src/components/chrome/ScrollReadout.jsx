import { useEffect, useState } from 'react'
import { useScroll, useSpring } from 'framer-motion'

export default function ScrollReadout() {
  const { scrollYProgress } = useScroll()
  const smooth = useSpring(scrollYProgress, { stiffness: 200, damping: 40, restDelta: 0.001 })
  const [pct, setPct] = useState(0)

  useEffect(() => {
    return smooth.on('change', (v) => setPct(Math.min(100, Math.max(0, Math.round(v * 100)))))
  }, [smooth])

  return (
    <div className="scroll-readout" aria-hidden="true">
      SCROLL {String(pct).padStart(3, '0')}%
    </div>
  )
}
