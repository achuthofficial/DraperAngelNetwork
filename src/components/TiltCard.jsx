import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

const IDLE_X = 28
const IDLE_Y = 18

export default function TiltCard({ children, className = '', maxTilt = 10, glare = true, style }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const glareOpacity = useSpring(0.6, { stiffness: 220, damping: 26 })
  const glarePosX = useSpring(IDLE_X, { stiffness: 160, damping: 24 })
  const glarePosY = useSpring(IDLE_Y, { stiffness: 160, damping: 24 })

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [maxTilt, -maxTilt]), { stiffness: 200, damping: 20 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-maxTilt, maxTilt]), { stiffness: 200, damping: 20 })

  function handleMove(e) {
    const rect = ref.current.getBoundingClientRect()
    const nx = (e.clientX - rect.left) / rect.width - 0.5
    const ny = (e.clientY - rect.top) / rect.height - 0.5
    x.set(nx)
    y.set(ny)
    glarePosX.set((nx + 0.5) * 100)
    glarePosY.set((ny + 0.5) * 100)
  }

  function handleEnter() {
    glareOpacity.set(1)
  }

  function handleLeave() {
    x.set(0)
    y.set(0)
    glareOpacity.set(0.6)
    glarePosX.set(IDLE_X)
    glarePosY.set(IDLE_Y)
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
              [glarePosX, glarePosY],
              ([gx, gy]) => `radial-gradient(circle at ${gx}% ${gy}%, rgba(212,175,55,0.28), transparent 60%)`
            ),
          }}
        />
      )}
      <div className="tilt-card-inner">{children}</div>
    </motion.div>
  )
}
