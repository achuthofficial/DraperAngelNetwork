import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { IconBook, IconShowcase, IconCoins } from './icons.jsx'
import Reveal from './motion/Reveal.jsx'
import Parallax from './Parallax.jsx'

const PILLARS = [
  {
    icon: IconBook,
    title: 'Learn',
    desc: 'Understand angel investing through expert-led sessions on valuation, due diligence, term sheets, portfolio construction and exits.',
  },
  {
    icon: IconShowcase,
    title: 'Access',
    desc: 'Meet 2–3 curated startups every month through live private pitch sessions and recorded presentations.',
  },
  {
    icon: IconCoins,
    title: 'Invest',
    desc: 'Evaluate opportunities independently, participate in syndicates where available, and connect directly with founders and fellow investors.',
  },
]

function useIsDesktop(breakpoint = 900) {
  const [isDesktop, setIsDesktop] = useState(
    typeof window === 'undefined' ? true : window.innerWidth >= breakpoint
  )
  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${breakpoint}px)`)
    const update = () => setIsDesktop(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [breakpoint])
  return isDesktop
}

function PillarCard({ icon: Icon, title, desc, index, progress }) {
  // sequential arrival — Learn, then Access, then Invest each get their own window
  const start = 0.08 + index * 0.16
  const end = start + 0.4

  const y = useTransform(progress, [start, end], ['16%', '0%'])
  const rotateX = useTransform(progress, [start, end], [14, 0])
  const opacity = useTransform(progress, [start, start + 0.15], [0, 1])
  const numeralOpacity = useTransform(progress, [start, start + 0.15], [0, 0.16])

  return (
    <div className="pillar-plane-slot">
      <motion.span className="pillar-ghost-num" style={{ opacity: numeralOpacity }} aria-hidden="true">
        {`0${index + 1}`}
      </motion.span>
      <motion.div className="pillar-plane-card card" style={{ y, rotateX, opacity }}>
        <span className="pillar-index">{`0${index + 1}`}</span>
        <span className="feature-icon"><Icon /></span>
        <h3>{title}</h3>
        <p>{desc}</p>
      </motion.div>
    </div>
  )
}

function PillarsStatic() {
  return (
    <section className="section pillars">
      <Parallax className="glow-orb pillars-orb" range={90} />
      <div className="container">
        <div className="who-head">
          <p className="eyebrow">What DAN Is</p>
          <h2 className="section-title"><Reveal>A curated angel network, not another startup community</Reveal></h2>
          <p className="section-lede" style={{ margin: '0 auto' }}>
            DAN gives serious investors a structured way to learn, access and participate in India's early-stage ecosystem.
          </p>
        </div>
        <div className="pillars-grid">
          {PILLARS.map(({ icon: Icon, title, desc }, i) => (
            <div className="pillar-card card" key={title}>
              <span className="pillar-index">{`0${i + 1}`}</span>
              <span className="feature-icon"><Icon /></span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
        <p className="pillars-disclaimer">
          Membership provides curated access and education. It does not guarantee investment allocation or returns.
        </p>
      </div>
    </section>
  )
}

export default function Pillars() {
  const wrapRef = useRef(null)
  const reduceMotion = useReducedMotion()
  const isDesktop = useIsDesktop()
  const { scrollYProgress } = useScroll({ target: wrapRef, offset: ['start start', 'end end'] })

  const bgScale = useTransform(scrollYProgress, [0, 1], [1.15, 1])
  const bgBrightness = useTransform(scrollYProgress, [0, 1], [0.55, 0.9])
  const bgFilter = useTransform(bgBrightness, (v) => `brightness(${v})`)
  const titleY = useTransform(scrollYProgress, [0.65, 0.88], ['110%', '0%'])
  const titleOpacity = useTransform(scrollYProgress, [0.65, 0.75], [0, 1])
  const cueOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0])
  const threadProgress = useTransform(scrollYProgress, [0.12, 0.8], [0, 1])
  const threadClip = useTransform(threadProgress, (v) => `inset(0 ${(1 - v) * 100}% 0 0)`)

  if (reduceMotion || !isDesktop) {
    return <PillarsStatic />
  }

  return (
    <section className="section pillars-pin-section">
      <div className="pillars-pin-wrap" ref={wrapRef}>
        <div className="pillars-pin-inner">
          <motion.div className="pillars-pin-bg" style={{ scale: bgScale, filter: bgFilter }}>
            <img
              src="/images/draper/india-codex-stage.jpeg"
              alt="Founders and investors gathered for a live demo on the DraperU India campus"
            />
            <div className="pillars-pin-scrim" />
          </motion.div>

          <motion.span className="pillars-pin-cue" style={{ opacity: cueOpacity }}>
            [ Scroll to progress ]
          </motion.span>

          <div className="pillars-plane">
            <div className="pillars-thread-rule" aria-hidden="true" />
            <motion.div className="pillars-thread-fill" style={{ clipPath: threadClip }} aria-hidden="true" />
            {PILLARS.map((p, i) => (
              <PillarCard key={p.title} {...p} index={i} progress={scrollYProgress} />
            ))}
          </div>

          <div className="pillars-pin-titlewrap">
            <p className="eyebrow" style={{ justifyContent: 'center' }}>What DAN Is</p>
            <motion.h2 className="section-title pillars-pin-title" style={{ opacity: titleOpacity }}>
              <span className="reveal-mask">
                <motion.span className="reveal-mask-inner" style={{ y: titleY }}>
                  A curated angel network, not another startup community
                </motion.span>
              </span>
            </motion.h2>
          </div>
        </div>
      </div>

      <div className="container">
        <p className="pillars-disclaimer">
          Membership provides curated access and education. It does not guarantee investment allocation or returns.
        </p>
      </div>
    </section>
  )
}
