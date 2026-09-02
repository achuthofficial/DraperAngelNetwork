import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import TiltCard from './TiltCard.jsx'
import { IconInvestor, IconFounder, IconMember, IconCheck, IconArrowRight } from './icons.jsx'
import Reveal from './motion/Reveal.jsx'

const PATHS = [
  {
    icon: IconInvestor,
    tag: 'For NRIs, HNIs, Family Offices & Professionals',
    title: 'Join as an Investor / Angel',
    desc: 'Get curated access to screened startups, monthly showcases and investor education sessions.',
    highlights: ['Curated deal flow', 'Monthly startup showcases', 'Investor education sessions'],
    cta: 'Apply as an Investor',
    loginRole: 'investor',
    loginLabel: 'Already applied? Sign in',
  },
  {
    icon: IconFounder,
    tag: 'For idea-stage to seed-stage founders',
    title: 'Join as a Founder',
    desc: 'Pitch your startup to a curated network of angels, HNIs, family offices and ecosystem leaders.',
    highlights: ['A founder showcase slot', 'Warm investor introductions', 'Feedback from operators'],
    cta: 'Apply as a Founder',
    loginRole: 'founder',
    loginLabel: 'Already applied? Sign in',
  },
]

export default function AccessPortal() {
  return (
    <section className="section access-portal" id="get-started">
      <div className="container">
        <motion.div
          className="who-head"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <p className="eyebrow">Get Started</p>
          <h2 className="section-title"><Reveal>Your DAN access portal</Reveal></h2>
          <p className="section-lede" style={{ margin: '0 auto' }}>
            Whichever side of the table you sit on, DAN has a door in.
          </p>
        </motion.div>

        <motion.div
          className="portal-video"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <video autoPlay muted loop playsInline preload="auto">
            <source src="/videos/investor-founder-network.mp4" type="video/mp4" />
          </video>
        </motion.div>

        <div className="portal-grid">
          {PATHS.map(({ icon: Icon, tag, title, desc, highlights, cta, loginRole, loginLabel, loginNote }, i) => (
            <TiltCard key={title} className="portal-card" maxTilt={6}>
              <motion.div
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
              >
                <span className="feature-icon"><Icon /></span>
                <span className="portal-tag">{tag}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
                <ul className="portal-highlights">
                  {highlights.map((h) => (
                    <li key={h}><IconCheck className="portal-check" /> {h}</li>
                  ))}
                </ul>
                <a href="#membership" className="btn btn-primary portal-cta">
                  {cta} <IconArrowRight />
                </a>
                {loginRole ? (
                  <Link to={`/login/${loginRole}`} className="portal-login-link">
                    {loginLabel}
                  </Link>
                ) : (
                  <span className="portal-login-link is-note">{loginNote}</span>
                )}
              </motion.div>
            </TiltCard>
          ))}
        </div>

        <motion.div
          className="member-bar card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="member-bar-info">
            <span className="feature-icon member-bar-icon"><IconMember /></span>
            <div>
              <h3>Already a DAN investor?</h3>
              <p>Sign in to access showcases, deal flow, resources and community updates.</p>
            </div>
          </div>
          <Link to="/login/investor" className="btn btn-ghost member-bar-cta">
            Investor Sign In <IconArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
