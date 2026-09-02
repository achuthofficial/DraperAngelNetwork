import { useState } from 'react'
import { Link, Navigate, useLocation, useNavigate, useParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import ParticleField from '../components/ParticleField.jsx'
import { useAuth } from '../context/AuthContext.jsx'
import {
  IconInvestor,
  IconFounder,
  IconShield,
  IconMail,
  IconLock,
  IconUser,
  IconGoogle,
  IconEye,
  IconEyeOff,
  IconSpinner,
  IconArrowRight,
  IconCheck,
} from '../components/icons.jsx'

/* Two roles only. `canSignUp` is the single switch that decides whether the
   panel offers a register mode at all — admin accounts are provisioned, never
   self-served, so that surface simply does not exist for them. */
const ROLES = {
  investor: {
    label: 'Investor',
    fullLabel: 'Investor',
    icon: IconInvestor,
    eyebrow: 'Investor Access',
    canSignUp: true,
    allowGoogle: true,
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
    eyebrow: 'Founder Access',
    canSignUp: true,
    allowGoogle: true,
    tagline: 'Learn how angel funding actually works, and see every showcase and session on the DAN calendar.',
    quote: '“Understanding how investors decide changed how we raised.”',
    quoteFooter: 'DraperU India Founder',
    image: '/images/draper/founders-friday.jpeg',
    stats: [
      { value: '9', label: 'Learning modules' },
      { value: '2–3', label: 'Startups showcased monthly' },
    ],
  },
  admin: {
    label: 'Admin',
    fullLabel: 'Administrator',
    icon: IconShield,
    eyebrow: 'Administrator Access',
    canSignUp: false,
    allowGoogle: false,
    tagline: 'Manage members, showcase slots, deal flow and applications for the DAN network.',
    quote: '“Restricted access. Administrator accounts are issued by the DAN team.”',
    quoteFooter: 'DAN Operations',
    image: '/images/draper/india-codex-stage.jpeg',
    stats: [
      { value: '17', label: 'Countries in the network' },
      { value: '1M by 2030', label: 'Entrepreneurs enabled' },
    ],
  },
}

export default function LoginPage() {
  const { role } = useParams()
  const { isAuthed } = useAuth()
  const [mode, setMode] = useState('signin') // signin | signup

  // Already signed in — no reason to show the form again.
  if (isAuthed) return <Navigate to="/portal" replace />

  if (!ROLES[role]) {
    return <Navigate to="/login/investor" replace />
  }

  const config = ROLES[role]
  const Icon = config.icon
  // Guards the URL as well as the UI: /login/admin can never land in signup.
  const activeMode = config.canSignUp ? mode : 'signin'

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
              {activeMode === 'signup' ? (
                <>Join as an <span className="gold-text">{config.fullLabel}</span></>
              ) : (
                <>Welcome back, <span className="gold-text">{config.fullLabel}</span></>
              )}
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
              <Link
                key={key}
                to={`/login/${key}`}
                className="auth-role-pill"
                onClick={() => setMode('signin')}
              >
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
                key={`${role}-${activeMode}`}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
              >
                <p className="eyebrow">{config.eyebrow}</p>
                <h2 className="section-title auth-form-title">
                  {activeMode === 'signup' ? 'Create your account' : 'Sign in to your account'}
                </h2>
                <p className="section-lede auth-form-lede">
                  {activeMode === 'signup'
                    ? 'Register to request access to showcases, deal flow and investor education.'
                    : `Enter your details below to access the ${config.label.toLowerCase()} portal.`}
                </p>

                {config.allowGoogle && (
                  <>
                    <button type="button" className="auth-google">
                      <IconGoogle />
                      {activeMode === 'signup' ? 'Sign up with Google' : 'Continue with Google'}
                    </button>
                    <div className="auth-divider"><span>or</span></div>
                  </>
                )}

                <AuthForm role={role} mode={activeMode} roleLabel={config.label} />
              </motion.div>
            </AnimatePresence>
          </div>

          {config.canSignUp ? (
            <p className="auth-apply-note">
              {activeMode === 'signin' ? (
                <>
                  Don&rsquo;t have an account?{' '}
                  <button type="button" className="auth-mode-link" onClick={() => setMode('signup')}>
                    Sign up
                  </button>
                </>
              ) : (
                <>
                  Already have an account?{' '}
                  <button type="button" className="auth-mode-link" onClick={() => setMode('signin')}>
                    Sign in
                  </button>
                </>
              )}
            </p>
          ) : (
            <p className="auth-apply-note">
              Administrator accounts are issued by the DAN team. There is no self sign-up.
            </p>
          )}

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

function AuthForm({ role, mode, roleLabel }) {
  const { signIn } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const [showPassword, setShowPassword] = useState(false)
  const [status, setStatus] = useState('idle') // idle | loading | success
  const [error, setError] = useState('')
  const [showReset, setShowReset] = useState(false)
  const isSignUp = mode === 'signup'
  const isAdmin = role === 'admin'

  function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    const email = form.email.value.trim()
    const password = form.password.value

    if (isSignUp && !form.name.value.trim()) {
      setError('Enter your full name.')
      return
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError('Enter a valid email address.')
      return
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters.')
      return
    }
    if (isSignUp && password !== form.confirm.value) {
      setError('Passwords do not match.')
      return
    }

    setError('')
    setStatus('loading')

    /* Sign-up stays a request — DAN accounts are invite-curated, so the
       honest outcome is "we'll be in touch." Sign-in opens the portal. */
    setTimeout(() => {
      if (isSignUp) {
        setStatus('success')
        return
      }
      signIn({ role, email, name: email.split('@')[0].replace(/[._-]+/g, ' ') })
      navigate(location.state?.from?.pathname || '/portal', { replace: true })
    }, 900)
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
        <h3>{isSignUp ? 'Registration received' : 'Request received'}</h3>
        <p>
          {isAdmin
            ? 'Administrator sign-in is verified by the DAN team. You will be redirected once your credentials are confirmed.'
            : `DAN membership is invite-curated, so accounts are activated by our team. We’ll email you ${roleLabel.toLowerCase()} portal access shortly.`}
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
      {isSignUp && (
        <motion.label className="auth-field" variants={fieldVariants}>
          <span>Full name</span>
          <div className="auth-input-wrap">
            <span className="auth-input-icon"><IconUser /></span>
            <input type="text" name="name" placeholder="Your full name" autoComplete="name" />
          </div>
        </motion.label>
      )}

      <motion.label className="auth-field" variants={fieldVariants}>
        <span>Email address</span>
        <div className="auth-input-wrap">
          <span className="auth-input-icon"><IconMail /></span>
          <input
            type="email"
            name="email"
            placeholder={isAdmin ? 'admin@dan.vc' : 'you@company.com'}
            autoComplete="email"
          />
        </div>
      </motion.label>

      <motion.label className="auth-field" variants={fieldVariants}>
        <span>Password</span>
        <div className="auth-input-wrap">
          <span className="auth-input-icon"><IconLock /></span>
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder={isSignUp ? 'At least 8 characters' : 'Enter your password'}
            autoComplete={isSignUp ? 'new-password' : 'current-password'}
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

      {isSignUp && (
        <motion.label className="auth-field" variants={fieldVariants}>
          <span>Confirm password</span>
          <div className="auth-input-wrap">
            <span className="auth-input-icon"><IconLock /></span>
            <input
              type={showPassword ? 'text' : 'password'}
              name="confirm"
              placeholder="Re-enter your password"
              autoComplete="new-password"
            />
          </div>
        </motion.label>
      )}

      {!isSignUp && (
        <motion.div className="auth-form-row" variants={fieldVariants}>
          <label className="auth-checkbox">
            <input type="checkbox" name="remember" />
            <span>Remember me</span>
          </label>
          <button
            type="button"
            className="auth-forgot"
            onClick={() => setShowReset((v) => !v)}
          >
            Forgot password?
          </button>
        </motion.div>
      )}

      {showReset && !isSignUp && (
        <motion.p
          className="auth-reset-note"
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          Password resets are handled by the DAN team. Reach out to your DAN contact and
          we&rsquo;ll reissue your credentials.
        </motion.p>
      )}

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
          <>
            {isSignUp ? 'Create Account' : isAdmin ? 'Sign in as Admin' : 'Sign In'}
            <IconArrowRight />
          </>
        )}
      </motion.button>

      {isSignUp && (
        <motion.p className="auth-terms" variants={fieldVariants}>
          By creating an account you agree that DAN membership is invite-curated and does not
          constitute investment advice or a guarantee of allocation.
        </motion.p>
      )}
    </motion.form>
  )
}
