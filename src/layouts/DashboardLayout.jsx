import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useAuth, ROLE_LABELS, isMember } from '../context/AuthContext.jsx'
import { useData } from '../context/DataContext.jsx'
import { modules } from '../data/learning.js'
import {
  IconGauge,
  IconBook,
  IconCalendar,
  IconFounder,
  IconLogOut,
  IconArrowRight,
} from '../components/icons.jsx'

/* Nav is derived from role, so there is exactly one place that decides what a
   role can reach. The route guards in App.jsx enforce the same split — the
   sidebar hides it, the router refuses it. */
function navFor(role) {
  if (role === 'admin') {
    return [
      { key: 'overview', to: '/portal', end: true, label: 'Overview', icon: IconGauge },
      { key: 'founders', to: '/portal/founders', label: 'Founders', icon: IconFounder },
      { key: 'events', to: '/portal/events', label: 'Events', icon: IconCalendar },
    ]
  }
  return [
    { key: 'overview', to: '/portal', end: true, label: 'Overview', icon: IconGauge },
    { key: 'learn', to: '/portal/learn', label: 'Briefings', icon: IconBook },
    { key: 'events', to: '/portal/events', label: 'Events', icon: IconCalendar },
  ]
}

export default function DashboardLayout() {
  const { session, role, signOut } = useAuth()
  const { progress, upcomingEvents, founders } = useData()
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)

  useEffect(() => setOpen(false), [pathname])

  const items = navFor(role)
  const done = modules.filter((m) => progress[m.slug]?.completed).length

  return (
    <div className="portal">
      <button
        className={`portal-scrim ${open ? 'is-open' : ''}`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
        tabIndex={-1}
      />

      <aside className={`portal-sidebar ${open ? 'is-open' : ''}`}>
        <Link to="/" className="portal-brand">
          <span className="navbar-brand-mark">D</span>
          <span className="portal-brand-text">
            <strong>DAN</strong>
            <small>{ROLE_LABELS[role]} Portal</small>
          </span>
        </Link>

        <nav className="portal-nav" aria-label="Portal">
          {items.map(({ key, to, end, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) => `portal-nav-link ${isActive ? 'is-active' : ''}`}
            >
              <Icon />
              <span>{label}</span>
              {key === 'learn' && done > 0 && (
                <em className="portal-nav-badge">
                  {done}/{modules.length}
                </em>
              )}
              {key === 'events' && upcomingEvents.length > 0 && (
                <em className="portal-nav-badge">{upcomingEvents.length}</em>
              )}
              {key === 'founders' && <em className="portal-nav-badge">{founders.length}</em>}
            </NavLink>
          ))}
        </nav>

        {isMember(role) && (
          <div className="portal-side-card">
            <span className="portal-side-card-label">Your briefings</span>
            <p>
              {done === 0
                ? `${modules.length} short briefings on judging an early-stage deal. Start wherever is useful.`
                : done === modules.length
                  ? 'You have read them all. Briefing 09 is the one to revisit before a real decision.'
                  : `You have read ${done} of ${modules.length}. Your place is saved.`}
            </p>
            <Link to="/portal/learn" className="portal-side-card-link">
              {done === 0 ? 'Open the briefings' : 'Pick up where you left off'} <IconArrowRight />
            </Link>
          </div>
        )}

        <div className="portal-user">
          <div className="portal-user-info">
            <strong>{session?.name}</strong>
            <small>{session?.email}</small>
          </div>
          <button
            className="portal-signout"
            onClick={() => {
              signOut()
              navigate('/', { replace: true })
            }}
            aria-label="Sign out"
          >
            <IconLogOut />
          </button>
        </div>
      </aside>

      <div className="portal-main">
        <header className="portal-topbar">
          <button
            className="portal-burger"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle portal navigation"
          >
            <span />
            <span />
            <span />
          </button>
          <span className="portal-topbar-role">{ROLE_LABELS[role]}</span>
          <Link to="/" className="portal-topbar-back">
            Back to site
          </Link>
        </header>

        <motion.main
          key={pathname}
          className="portal-content"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <Outlet />
        </motion.main>
      </div>
    </div>
  )
}
