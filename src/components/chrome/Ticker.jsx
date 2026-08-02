import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const ITEMS = [
  { eyebrow: 'Fund status', headline: 'Founding cohort — 25 seats, first 25 members get 25% off' },
  { eyebrow: 'Now open', headline: 'Applications for the next showcase cycle are open' },
  { eyebrow: 'DraperU India', headline: 'DAN is established under the DraperU India ecosystem' },
]

export default function Ticker() {
  const [i, setI] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % ITEMS.length), 6000)
    return () => clearInterval(id)
  }, [])

  const item = ITEMS[i]

  return (
    <a href="#membership" className="ticker">
      <div className="ticker-inner">
        <span className="ticker-dot" aria-hidden="true" />
        <AnimatePresence mode="wait">
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.4 }}
            style={{ display: 'inline-flex', gap: 10 }}
          >
            <span className="ticker-eyebrow">{item.eyebrow}</span>
            <span className="ticker-headline">{item.headline}</span>
          </motion.span>
        </AnimatePresence>
        <span className="ticker-arrow" aria-hidden="true">&rarr;</span>
      </div>
    </a>
  )
}
