import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useData } from '../../context/DataContext.jsx'
import {
  modules,
  totalMinutes,
  totalCheckpoints,
  TRACK_INTRO,
  DISCLAIMER,
} from '../../data/learning.js'
import { IconArrowRight, IconCheck, IconClock } from '../../components/icons.jsx'

export default function LearnIndex() {
  const { progress, resetProgress } = useData()
  const done = modules.filter((m) => progress[m.slug]?.completed).length
  const pct = Math.round((done / modules.length) * 100)
  const nextSlug = modules.find((m) => !progress[m.slug]?.completed)?.slug

  return (
    <>
      <header className="portal-head">
        <p className="eyebrow">Learning track</p>
        <h1 className="portal-title">Angel investing, from zero</h1>
        <p className="portal-lede">{TRACK_INTRO}</p>
      </header>

      <div className="portal-track-bar">
        <div className="portal-track-bar-meta">
          <span>
            <strong>
              {done}/{modules.length}
            </strong>{' '}
            modules complete
          </span>
          <span>
            <IconClock /> {totalMinutes} min total
          </span>
          <span>{totalCheckpoints} checkpoint questions</span>
        </div>
        <div className="portal-track-progress">
          <span style={{ width: `${pct}%` }} />
        </div>
        <div className="portal-track-actions">
          {nextSlug ? (
            <Link to={`/portal/learn/${nextSlug}`} className="btn btn-primary btn-sm">
              {done === 0 ? 'Start Module 01' : 'Continue'} <IconArrowRight />
            </Link>
          ) : (
            <span className="portal-track-done">
              <IconCheck /> Track complete
            </span>
          )}
          {done > 0 && (
            <button className="portal-reset" onClick={resetProgress}>
              Reset progress
            </button>
          )}
        </div>
      </div>

      <ol className="portal-module-list">
        {modules.map((m, i) => {
          const rec = progress[m.slug]
          const complete = rec?.completed
          const locked = false // the track is linear by design, not by lock
          return (
            <motion.li
              key={m.slug}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: Math.min(i, 9) * 0.04 }}
            >
              <Link
                to={`/portal/learn/${m.slug}`}
                className={`portal-module ${complete ? 'is-complete' : ''} ${locked ? 'is-locked' : ''}`}
              >
                <span className="portal-module-num">
                  {complete ? <IconCheck /> : m.num}
                </span>

                <span className="portal-module-body">
                  <strong>{m.title}</strong>
                  <span className="portal-module-summary">{m.summary}</span>
                  <span className="portal-module-outcome">
                    After this you can: {m.outcome}
                  </span>
                </span>

                <span className="portal-module-side">
                  <span className="portal-module-time">
                    <IconClock /> {m.minutes} min
                  </span>
                  {complete && rec.total > 0 && (
                    <span className="portal-module-score">
                      {rec.score}/{rec.total} correct
                    </span>
                  )}
                  <IconArrowRight />
                </span>
              </Link>
            </motion.li>
          )
        })}
      </ol>

      <p className="portal-disclaimer">{DISCLAIMER}</p>
    </>
  )
}
