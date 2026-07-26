import { motion } from 'framer-motion'
import TiltCard from './TiltCard.jsx'
import { IconArrowRight, IconCheck } from './icons.jsx'

const INCLUDES = [
  'Startup showcase access',
  'Investor education sessions',
  'Curated deal flow',
  'Community access',
  'Networking events',
  'Investor updates',
]

const TRUST_POINTS = [
  'Invite-only community, curated for quality',
  'No mandatory investment commitment, ever',
  'Established under DraperU India',
]

export default function Membership() {
  return (
    <section className="section membership" id="membership">
      <div className="glow-orb membership-orb" />
      <div className="container membership-grid">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <p className="eyebrow">Membership</p>
          <h2 className="section-title">Join DAN</h2>
          <p className="section-lede" style={{ marginBottom: 26 }}>
            No mandatory investment commitment, every member decides independently whether
            to invest in any opportunity presented. Membership is by invitation only; connect
            with your DAN contact to request one.
          </p>

          <ul className="trust-list">
            {TRUST_POINTS.map((t) => (
              <li key={t}><IconCheck className="trust-check" /> {t}</li>
            ))}
          </ul>
        </motion.div>

        <TiltCard className="pricing-card" maxTilt={6} glare={false}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="pricing-badge"><span className="pricing-badge-dot" /> First 25 Members, 25% off launch offer</div>

            <span className="pricing-label">Annual Membership Fee</span>
            <div className="pricing-row">
              <span className="pricing-strike">₹50,000</span>
              <div className="pricing-amount">
                ₹29,500 <small>+ applicable taxes / year</small>
              </div>
            </div>

            <ul className="pricing-includes">
              {INCLUDES.map((item) => (
                <li key={item}>
                  <IconCheck className="pricing-check" /> {item}
                </li>
              ))}
            </ul>

            <a href="#top" className="btn btn-primary pricing-cta">
              Request an Invitation <IconArrowRight />
            </a>
            <p className="pricing-note">Annual membership fee. No mandatory investment commitment.</p>
          </motion.div>
        </TiltCard>
      </div>
    </section>
  )
}
