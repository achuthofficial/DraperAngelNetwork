import { motion } from 'framer-motion'
import TiltCard from './TiltCard.jsx'
import { IconInvestor, IconFounder, IconMember, IconArrowRight } from './icons.jsx'

const PORTALS = [
  {
    icon: IconInvestor,
    title: 'Join as an Investor / Angel',
    desc: 'Get curated access to screened startups, monthly showcases and investor education sessions.',
    cta: 'Apply as an Investor',
  },
  {
    icon: IconFounder,
    title: 'Join as a Founder',
    desc: 'Pitch your startup to a curated network of angels, HNIs, family offices and ecosystem leaders.',
    cta: 'Apply as a Founder',
  },
  {
    icon: IconMember,
    title: 'DAN Member Login',
    desc: 'Already a member? Sign in to access showcases, deal flow, resources and community updates.',
    cta: 'Member Login',
  },
]

export default function AccessPortal() {
  return (
    <section className="section access-portal">
      <div className="container">
        <motion.div
          className="who-head"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <p className="eyebrow">Get Started</p>
          <h2 className="section-title">Your DAN access portal</h2>
          <p className="section-lede" style={{ margin: '0 auto' }}>
            Whichever side of the table you sit on, DAN has a door in.
          </p>
        </motion.div>

        <div className="portal-grid">
          {PORTALS.map(({ icon: Icon, title, desc, cta }, i) => (
            <TiltCard key={title} className="portal-card" maxTilt={7}>
              <motion.div
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <span className="feature-icon"><Icon /></span>
                <h3>{title}</h3>
                <p>{desc}</p>
                <a href="#top" className="btn btn-ghost portal-cta">
                  {cta} <IconArrowRight />
                </a>
              </motion.div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}
