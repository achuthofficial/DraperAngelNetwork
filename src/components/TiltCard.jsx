import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

export default function TiltCard({ children, className = '', maxTilt = 10, glare = true, style }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const glareOpacity = useSpring(0, { stiffness: 220, damping: 26 })

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [maxTilt, -maxTilt]), { stiffness: 200, damping: 20 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-maxTilt, maxTilt]), { stiffness: 200, damping: 20 })
  const glareX = useTransform(x, [-0.5, 0.5], ['0%', '100%'])
  const glareY = useTransform(y, [-0.5, 0.5], ['0%', '100%'])

  function handleMove(e) {
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  function handleEnter() {
    glareOpacity.set(1)
  }

  function handleLeave() {
    x.set(0)
    y.set(0)
    glareOpacity.set(0)
  }

  return (
    <motion.div
      ref={ref}
      className={`tilt-card ${className}`}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', ...style }}
      onMouseMove={handleMove}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {glare && (
        <motion.div
          className="tilt-card-glare"
          style={{
            opacity: glareOpacity,
            background: useTransform(
              [glareX, glareY],
              ([gx, gy]) => `radial-gradient(circle at ${gx} ${gy}, rgba(212,175,55,0.28), transparent 60%)`
            ),
          }}
        />
      )}
      <div className="tilt-card-inner">{children}</div>
    </motion.div>
  )
}
