import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

const MIN_MS = 900
const MAX_MS = 3500

export default function Loader() {
  const reduceMotion = useReducedMotion()
  const [progress, setProgress] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (reduceMotion) {
      setDone(true)
      return
    }

    let raf
    let finished = false
    const start = performance.now()

    function tick(now) {
      const elapsed = now - start
      setProgress(Math.min(92, (elapsed / MIN_MS) * 92))
      if (!finished) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    const fontsReady = document.fonts ? document.fonts.ready : Promise.resolve()
    const safetyNet = new Promise((resolve) => setTimeout(resolve, MAX_MS))

    Promise.race([fontsReady, safetyNet]).then(async () => {
      const elapsed = performance.now() - start
      if (elapsed < MIN_MS) {
        await new Promise((resolve) => setTimeout(resolve, MIN_MS - elapsed))
      }
      finished = true
      cancelAnimationFrame(raf)
      setProgress(100)
      setTimeout(() => setDone(true), 350)
    })

    return () => cancelAnimationFrame(raf)
  }, [reduceMotion])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="loader-mark">DAN</div>
          <div className="loader-bar">
            <div className="loader-bar-fill" style={{ width: `${progress}%` }} />
          </div>
          <div className="loader-readout">LOADING {String(Math.round(progress)).padStart(3, '0')}%</div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
