import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Parallax from './Parallax.jsx'
import { IconLinkedIn, IconArrowRight } from './icons.jsx'
import Reveal from './motion/Reveal.jsx'

const LINKEDIN_URL = 'https://www.linkedin.com/company/draperuindia/'

// Real DraperU India LinkedIn posts. Individual post permalinks aren't
// publicly reachable without a logged-in session, so every card opens the
// company page — swap in direct post URLs here if/when they're available.
const POSTS = [
  {
    tag: 'Advisory Council',
    caption: 'Welcoming Jayesh Ranjan, Special Chief Secretary to the Government of Telangana, to the DraperU India Advisory Council.',
    image: '/images/draper/advisory-jayesh-ranjan.jpeg',
  },
  {
    tag: 'Advisory Council',
    caption: 'Welcoming Mahankali Srinivas Rao (MSR) to the Advisory Council, decades of experience building startup ecosystems.',
    image: '/images/draper/advisory-msr.jpeg',
  },
  {
    tag: 'Advisory Council',
    caption: 'Welcoming Murali Bukkapatnam, Founder & CEO of Volksy Technologies, as an Advisor to DraperU India.',
    image: '/images/draper/advisory-murali-bukkapatnam.jpeg',
  },
  {
    tag: 'Founder Program',
    caption: 'The DraperU Founders Program is back — a 12-day immersive residential founder experience.',
    image: '/images/draper/founders-program-back.jpeg',
  },
  {
    tag: 'Community',
    caption: "Founder's Friday — network, grow, scale with 6,000+ alumni across 104 countries.",
    image: '/images/draper/founders-friday.jpeg',
  },
  {
    tag: 'Hackathons',
    caption: 'India CoDex 2026 — DraperU India as an institution partner for the Cardano hackathon.',
    image: '/images/draper/india-codex-poster.jpeg',
  },
  {
    tag: 'Hackathons',
    caption: 'Builders on the ground at India CoDex 2026, hosted on the DraperU India campus.',
    image: '/images/draper/india-codex-crowd.jpeg',
  },
  {
    tag: 'Hackathons',
    caption: 'Live from the India CoDex stage — teams demoing what they shipped overnight.',
    image: '/images/draper/india-codex-stage.jpeg',
  },
  {
    tag: 'Hackathons',
    caption: 'Gigpoint Hackathon — 200+ builders, a 12-hour sprint, no gatekeeping.',
    image: '/images/draper/gigpoint-hackathon.jpeg',
  },
  {
    tag: 'Workshops',
    caption: "eChai x DraperU India: 'Agentic Claims' — how AI agents are making real-time health insurance possible.",
    image: '/images/draper/echai-health-insurance.jpeg',
  },
  {
    tag: 'Workshops',
    caption: "matriXO's DevAgentic 1.0 — an Agentic AI workshop series hosted at DraperU India.",
    image: '/images/draper/matrixo-devagentic.jpeg',
  },
  {
    tag: 'Community',
    caption: 'Founders and community members after an eChai x DraperU India session.',
    image: '/images/draper/echai-group-photo.jpeg',
  },
  {
    tag: 'Ecosystem',
    caption: "DraperU India's community connecting with Telangana's startup ecosystem leadership.",
    image: '/images/draper/ecosystem-leadership-visit.jpeg',
  },
  {
    tag: 'Community',
    caption: 'On stage at Draper Startup House — DraperU India before the rebrand.',
    image: '/images/draper/draper-startup-house-stage.jpeg',
  },
  {
    tag: 'Community',
    caption: 'The people building the DraperU India community, one founder at a time.',
    image: '/images/draper/community-portrait.jpeg',
  },
]

// Cards are arranged evenly around a full circle and the wheel spins forever —
// a true loop with no reset/seam, unlike a linear marquee. ARC_COUNT is kept
// well below what the radius could pack tightly so cards sit apart, not overlapping.
const ARC_COUNT = 24
const ARC_RADIUS = 1300
const MOBILE_BREAKPOINT = 640

function useIsMobile(breakpoint = MOBILE_BREAKPOINT) {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.innerWidth <= breakpoint
  )
  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${breakpoint}px)`)
    const onChange = () => setIsMobile(mql.matches)
    onChange()
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [breakpoint])
  return isMobile
}

function PostCard({ p }) {
  return (
    <a className="linkedin-card card" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
      <div className="linkedin-card-media">
        <img src={p.image} alt={p.caption} loading="lazy" />
        <span className="linkedin-card-badge"><IconLinkedIn /></span>
      </div>
      <div className="linkedin-card-body">
        <span className="linkedin-card-tag">{p.tag}</span>
        <p>{p.caption}</p>
        <span className="linkedin-card-footer">
          View on LinkedIn <IconArrowRight />
        </span>
      </div>
    </a>
  )
}

export default function DraperEngagement() {
  const loop = Array.from({ length: ARC_COUNT }, (_, i) => POSTS[i % POSTS.length])
  const angleStep = 360 / loop.length
  const reduceMotion = useReducedMotion()
  const isMobile = useIsMobile()
  const linearLoop = [...POSTS, ...POSTS]

  return (
    <section className="section draper-engagement" id="draper-engagement">
      <Parallax className="glow-orb engagement-orb" range={90} />
      <Parallax className="glow-orb glow-orb-sm engagement-orb-2" range={-55} />
      <div className="container">
        <motion.div
          className="who-head"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <p className="eyebrow">From the Community</p>
          <h2 className="section-title"><Reveal>Draper engagement &amp; startup stories</Reveal></h2>
          <p className="section-lede" style={{ margin: '0 auto 26px' }}>
            Straight from the DraperU India LinkedIn — advisory council moments, founder
            programs, hackathons and workshops from inside the house.
          </p>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            <IconLinkedIn /> Follow on LinkedIn
          </a>
        </motion.div>
      </div>

      {isMobile ? (
        <div className={`linkedin-scroller linkedin-scroller-linear${reduceMotion ? ' is-static' : ''}`}>
          <div className="linkedin-track">
            {linearLoop.map((p, i) => (
              <PostCard key={`${p.image}-lin-${i}`} p={p} />
            ))}
          </div>
        </div>
      ) : (
        <div className={`linkedin-scroller${reduceMotion ? ' is-static' : ''}`}>
          <div className="arc-wheel" style={{ '--arc-radius': `${ARC_RADIUS}px` }}>
            {loop.map((p, i) => {
              const angle = i * angleStep
              return (
                <div
                  key={`${p.image}-${i}`}
                  className="arc-slot"
                  style={{ transform: `rotate(${angle}deg) translateY(calc(var(--arc-radius) * -1))` }}
                >
                  <div className="arc-anchor">
                    <PostCard p={p} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </section>
  )
}
