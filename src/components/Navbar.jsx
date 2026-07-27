import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const LINKS = [
  { href: '#why-dan', label: 'Why DAN' },
  { href: '#membership', label: 'Membership' },
  { href: '#founding-member', label: 'Founding Member' },
  { href: '#focus-areas', label: 'Focus Areas' },
  { href: '#community', label: 'Community' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <div className="container navbar-inner">
        <a href="#top" className="navbar-brand">
          <span className="navbar-brand-mark">D</span>
          <span className="navbar-brand-text">
            <strong>DAN</strong>
            <small>Draper Angel Network</small>
          </span>
        </a>

        <nav className="navbar-links">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>

        <div className="navbar-actions">
          <Link to="/login/member" className="navbar-login-link">Log in</Link>
          <a href="#membership" className="btn btn-primary btn-sm">Apply for Membership</a>
          <button className="navbar-burger" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
            <span className={open ? 'open' : ''} />
          </button>
        </div>
      </div>

      {open && (
        <motion.div
          className="navbar-mobile"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
        >
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <Link to="/login/member" onClick={() => setOpen(false)}>Log in</Link>
          <a href="#membership" className="btn btn-primary" onClick={() => setOpen(false)}>Apply for Membership</a>
        </motion.div>
      )}
    </motion.header>
  )
}
