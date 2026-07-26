import { motion } from 'framer-motion'
import Parallax from './Parallax.jsx'
import { IconCheck, IconArrowRight } from './icons.jsx'

const PERKS = [
  'Founding Member designation',
  'Invitation to the private DAN launch gathering',
  'Priority access to limited-capacity pitch sessions',
  'Founding Member profile in the DAN community directory',
  'One private angel-investing orientation session',
  'Recognition at the annual DAN gathering',
]

export default function FoundingMember() {
  return (
    <section className="section founding-member" id="founding-member">
      <Parallax className="glow-orb founding-orb" range={80} />
      <div className="container">
        <motion.div
          className="founding-panel card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <p className="eyebrow">Limited to the First 25 Members</p>
          <h2 className="section-title">
            Become a <span className="gold-text">Founding Member</span>
          </h2>
          <p className="section-lede" style={{ margin: '0 auto 30px' }}>
            DAN's founding cohort shapes the community from day one, a distinction that isn't
            offered again once the network is live.
          </p>

          <ul className="founding-perks">
            {PERKS.map((p) => (
              <li key={p}><IconCheck className="trust-check" /> {p}</li>
            ))}
          </ul>

          <div className="founding-cta-wrap">
            <a href="#membership" className="btn btn-primary">
              Apply for Founding Membership <IconArrowRight />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
