import { motion } from 'framer-motion'

const STAGES = [
  { n: '01', label: 'Idea-stage' },
  { n: '02', label: 'MVP' },
  { n: '03', label: 'Early Revenue' },
  { n: '04', label: 'Pre-Seed' },
  { n: '05', label: 'Seed' },
]

const SECTORS = [
  'AI', 'FinTech', 'HealthTech', 'EdTech', 'ClimateTech', 'DeepTech', 'SaaS',
  'Consumer Tech', 'SpaceTech', 'Defence', 'Agritech', 'Biotech', 'Robotics', 'Enterprise SW',
]

const stepperContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}
const stepperItem = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] } },
}

export default function FocusAreas() {
  const loop = [...SECTORS, ...SECTORS]

  return (
    <section className="section focus-areas" id="focus-areas">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <p className="eyebrow">Focus Areas</p>
          <h2 className="section-title">Where DAN invests attention</h2>
          <p className="section-lede">
            From a napkin sketch to a term sheet. DAN backs founders across every stage
            that matters before institutional capital steps in.
          </p>
        </motion.div>

        <motion.div
          className="stage-stepper"
          variants={stepperContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
          {STAGES.map((s) => (
            <motion.div className="stage-node" key={s.label} variants={stepperItem}>
              <span className="stage-node-index">{s.n}</span>
              <span className="stage-node-label">{s.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="marquee">
        <div className="marquee-track">
          {loop.map((s, i) => (
            <span className="marquee-tag" key={`${s}-${i}`}>{s}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
