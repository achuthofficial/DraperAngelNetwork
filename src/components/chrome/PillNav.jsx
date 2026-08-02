import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const LINKS = [
  { href: '#why-dan', label: 'Why DAN' },
  { href: '#membership', label: 'Membership' },
  { href: '#founding-member', label: 'Founding' },
  { href: '#focus-areas', label: 'Focus' },
  { href: '#community', label: 'Community' },
]

export default function PillNav() {
  const [hidden, setHidden] = useState(false)
  const [active, setActive] = useState('')
  const lastY = useRef(0)

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY
      const delta = y - lastY.current
      if (Math.abs(delta) > 40) {
        setHidden(delta > 0 && y > 200)
        lastY.current = y
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const targets = LINKS.map((l) => document.querySelector(l.href)).filter(Boolean)
    if (!targets.length) return
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length) {
          const top = visible.reduce((a, b) => (a.intersectionRatio > b.intersectionRatio ? a : b))
          setActive(`#${top.target.id}`)
        }
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    )
    targets.forEach((t) => observer.observe(t))
    return () => observer.disconnect()
  }, [])

  return (
    <motion.nav
      className="pill-nav"
      animate={{ y: hidden ? 120 : 0, opacity: hidden ? 0 : 1 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      aria-label="Section navigation"
    >
      <a href="#top" className="pill-nav-mark">DAN</a>
      {LINKS.map((l) => (
        <a key={l.href} href={l.href} className={active === l.href ? 'active' : ''}>
          {l.label}
        </a>
      ))}
    </motion.nav>
  )
}
