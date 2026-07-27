import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import ParticleField from '../components/ParticleField.jsx'
import {
  IconInvestor,
  IconFounder,
  IconMember,
  IconMail,
  IconLock,
  IconEye,
  IconEyeOff,
  IconSpinner,
  IconArrowRight,
  IconCheck,
  IconShield,
} from '../components/icons.jsx'

const ROLES = {
  investor: {
    label: 'Investor',
    fullLabel: 'Investor / Angel',
    icon: IconInvestor,
    eyebrow: 'Investor Login',
    tagline: 'Curated deal flow, monthly startup showcases and investor education, all in one place.',
    quote: '“DAN gave me a structured way into India’s startup story.”',
    quoteFooter: 'DAN Investor Member',
    image: '/images/draper/draper-startup-house-stage.jpeg',
    stats: [
      { value: '500', label: 'Investor network cap' },
      { value: '2–3', label: 'Startups showcased monthly' },
    ],
  },
  founder: {
    label: 'Founder',
    fullLabel: 'Founder',
    icon: IconFounder,
    eyebrow: 'Founder Login',
    tagline: 'Track your showcase slot, investor introductions and feedback from operators.',
    quote: '“A warm introduction from DAN moved our raise forward.”',
    quoteFooter: 'DAN Showcased Founder',
    image: '/images/draper/community-portrait.jpeg',
    stats: [
      { value: '700+', label: 'Companies started by alumni' },
      { value: '$950M+', label: 'Raised by the network' },
    ],
  },
  member: {
    label: 'Member',
    fullLabel: 'Member',
    icon: IconMember,
    eyebrow: 'Member Login',
    tagline: 'Sign in to access showcases, deal flow, resources and community updates.',
    quote: '“One of India’s most trusted communities of angel investors.”',
    quoteFooter: 'Our Vision',
    image: '/images/draper/echai-group-photo.jpeg',
    stats: [
      { value: '17', label: 'Countries in the network' },
      { value: '1M by 2030', label: 'Entrepreneurs enabled' },
    ],
  },
}

export default function LoginPage() {
  const { role } = useParams()

  if (!ROLES[role]) {
    return <Navigate to="/login/member" replace />
  }

  const config = ROLES[role]
  const Icon = config.icon

  return (
    <div className="auth-page">
      <div className="auth-visual">
        <div className="auth-visual-media">
          <img src={config.image} alt="" />
        </div>
        <div className="auth-visual-scene">
          <ParticleField />
        </div>
        <div className="glow-orb auth-orb" />
        <div className="glow-orb glow-orb-sm auth-orb-2" />

        <Link to="/" className="auth-brand">
          <span className="navbar-brand-mark">D</span>
          <span className="navbar-brand-text">
            <strong>DAN</strong>
            <small>Draper Angel Network</small>
          </span>
        </Link>

        <AnimatePresence mode="wait">
          <motion.div
            key={role}
            className="auth-visual-body"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <span className="feature-icon auth-visual-icon"><Icon /></span>
            <h1 className="section-title">
              Welcome back, <span className="gold-text">{config.fullLabel}</span>
            </h1>
            <p className="section-lede">{config.tagline}</p>

            <div className="auth-visual-stats">
              {config.stats.map((s) => (
                <div key={s.label}>
                  <strong className="gold-text">{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.blockquote
            key={role}
            className="commitment-quote auth-visual-quote"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <svg width="30" height="22" viewBox="0 0 34 26" fill="none" className="quote-mark">
              <path d="M14.3 0C6.4 3.1 0 10.4 0 18.5 0 23 3 26 7 26c3.9 0 6.8-2.9 6.8-6.7 0-3.5-2.3-6-5.6-6.4C9 8.6 12.4 4.7 17 2.6L14.3 0Zm17 0c-7.9 3.1-14.3 10.4-14.3 18.5 0 4.5 3 7.5 7 7.5 3.9 0 6.8-2.9 6.8-6.7 0-3.5-2.3-6-5.6-6.4C26 8.6 29.4 4.7 34 2.6L31.3 0Z" fill="var(--gold)"/>
            </svg>
            <p>{config.quote}</p>
            <footer>{config.quoteFooter}</footer>
          </motion.blockquote>
        </AnimatePresence>
      </div>

      <div className="auth-form-panel">
        <Link to="/" className="auth-back">
          &larr; Back to DAN
        </Link>

        <div className="auth-form-wrap">
          <div className="auth-role-switch">
            {Object.entries(ROLES).map(([key, r]) => (
              <Link key={key} to={`/login/${key}`} className="auth-role-pill">
                {key === role && (
                  <motion.span
                    layoutId="auth-role-pill-bg"
                    className="auth-role-pill-bg"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
                <span className={`auth-role-pill-label ${key === role ? 'active' : ''}`}>{r.label}</span>
              </Link>
            ))}
          </div>

          <div className="auth-form-card card">
            <AnimatePresence mode="wait">
              <motion.div
                key={role}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
              >
                <p className="eyebrow">{config.eyebrow}</p>
                <h2 className="section-title auth-form-title">Sign in to your account</h2>
                <p className="section-lede auth-form-lede">
                  Enter your details below to access the {config.label.toLowerCase()} portal.
                </p>

                <LoginForm roleLabel={config.label} />
              </motion.div>
            </AnimatePresence>
          </div>

          <p className="auth-apply-note">
            Don&rsquo;t have access yet?{' '}
            <Link to="/#membership">Apply for membership</Link>
          </p>

          <div className="auth-trust-row">
            <span><IconShield /> Invite-curated network</span>
            <span><IconCheck /> No spam, ever</span>
          </div>
        </div>
      </div>
    </div>
  )
}

const fieldVariants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.2, 0.8, 0.2, 1] } },
}

function LoginForm({ roleLabel }) {
  const [showPassword, setShowPassword] = useState(false)
  const [status, setStatus] = useState('idle') // idle | loading | success
  const [error, setError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    const email = form.email.value.trim()
    const password = form.password.value

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError('Enter a valid email address.')
      return
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters.')
      return
    }

    setError('')
    setStatus('loading')
    setTimeout(() => setStatus('success'), 1100)
  }

  if (status === 'success') {
    return (
      <motion.div
        className="auth-success"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="auth-success-icon"><IconCheck /></span>
        <h3>Request received</h3>
        <p>
          DAN membership is invite-curated, so accounts are activated by our team. We&rsquo;ll
          email you {roleLabel.toLowerCase()} portal access shortly.
        </p>
      </motion.div>
    )
  }

  return (
    <motion.form
      className="auth-form"
      onSubmit={handleSubmit}
      noValidate
      initial="hidden"
      animate="show"
      variants={{ show: { transition: { staggerChildren: 0.07 } } }}
    >
      <motion.label className="auth-field" variants={fieldVariants}>
        <span>Email address</span>
        <div className="auth-input-wrap">
          <span className="auth-input-icon"><IconMail /></span>
          <input type="email" name="email" placeholder="you@company.com" autoComplete="email" />
        </div>
      </motion.label>

      <motion.label className="auth-field" variants={fieldVariants}>
        <span>Password</span>
        <div className="auth-input-wrap">
          <span className="auth-input-icon"><IconLock /></span>
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Enter your password"
            autoComplete="current-password"
          />
          <button
            type="button"
            className="auth-password-toggle"
            onClick={() => setShowPassword((s) => !s)}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? <IconEyeOff /> : <IconEye />}
          </button>
        </div>
      </motion.label>

      <motion.div className="auth-form-row" variants={fieldVariants}>
        <label className="auth-checkbox">
          <input type="checkbox" name="remember" />
          <span>Remember me</span>
        </label>
        <a href="#forgot-password" className="auth-forgot">Forgot password?</a>
      </motion.div>

      {error && <p className="auth-error">{error}</p>}

      <motion.button
        type="submit"
        className="btn btn-primary auth-submit"
        disabled={status === 'loading'}
        variants={fieldVariants}
      >
        {status === 'loading' ? (
          <span className="auth-spinner"><IconSpinner /></span>
        ) : (
          <>Sign In <IconArrowRight /></>
        )}
      </motion.button>
    </motion.form>
  )
}
