import { useEffect, useState } from 'react'
import { motion, animate, useScroll } from 'framer-motion'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    return scrollYProgress.on('change', (v) => setVisible(v > 0.15))
  }, [scrollYProgress])

  function handleClick() {
    animate(window.scrollY, 0, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => window.scrollTo(0, v),
    })
  }

  if (!visible) return null

  return (
    <motion.button
      className="back-to-top"
      onClick={handleClick}
      aria-label="Back to top"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.3 }}
    >
      <span>Back to top</span>
    </motion.button>
  )
}
