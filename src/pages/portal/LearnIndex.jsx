import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useData } from '../../context/DataContext.jsx'
import {
  modules,
  PARTS,
  modulesIn,
  partMinutes,
  totalMinutes,
  DISCLAIMER,
} from '../../data/learning.js'
import { IconArrowRight, IconCheck, IconClock } from '../../components/icons.jsx'

/* The reader is a working professional in their forties or fifties who may
   already know Part I cold. So this is presented as a reference in three
   parts, each enterable on its own — not a 1-of-9 course with a completion
   bar. Progress is recorded and shown, but quietly: it is a bookmark, not a
   score to chase. */

function PartBlock({ part, index, progress }) {
  const mods = modulesIn(part)
  const read = mods.filter((m) => progress[m.slug]?.completed).length

  return (
    <motion.section
      className="track-part"
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <header className="track-part-head">
        <span className="track-part-numeral" aria-hidden="true">
          {part.numeral}
        </span>
        <div className="track-part-heading">
          <h2>{part.label}</h2>
          <p>{part.blurb}</p>
        </div>
        <span className="track-part-meta">
          <span>
            <IconClock /> {partMinutes(part)} min
          </span>
          <span className={read === mods.length ? 'is-done' : ''}>
            {read} of {mods.length} read
          </span>
        </span>
      </header>

      <ol className="track-modules">
        {mods.map((m) => {
          const rec = progress[m.slug]
          return (
            <li key={m.slug}>
              <Link
                to={`/portal/learn/${m.slug}`}
                className={`track-card ${rec?.completed ? 'is-read' : ''}`}
              >
                <span className="track-card-top">
                  <span className="track-card-num">{m.num}</span>
                  {rec?.completed && (
                    <span className="track-card-read">
                      <IconCheck /> Read
                    </span>
                  )}
                  <span className="track-card-time">
                    <IconClock /> {m.minutes} min
                  </span>
                </span>

                <h3>{m.title}</h3>
                <p className="track-card-summary">{m.summary}</p>

                <span className="track-card-outcome">
                  <span className="track-card-outcome-label">You will be able to</span>
                  {m.outcome}
                </span>

                <span className="track-card-go">
                  {rec?.completed ? 'Read again' : 'Read this'} <IconArrowRight />
                </span>
              </Link>
            </li>
          )
        })}
      </ol>
    </motion.section>
  )
}

export default function LearnIndex() {
  const { progress, resetProgress } = useData()
  const read = modules.filter((m) => progress[m.slug]?.completed).length
  const next = modules.find((m) => !progress[m.slug]?.completed)

  return (
    <>
      <header className="track-head">
        <p className="eyebrow">The DAN briefing</p>
        <h1 className="track-title">
          Everything you need to judge an early-stage deal &mdash; and nothing you don&rsquo;t.
        </h1>
        <p className="track-lede">
          Nine short briefings, written for people who are expert in something else. No
          jargon without a definition, every rule of thumb worked through with real
          rupee figures, and a set of questions at the end of each one so you can tell
          whether it landed.
        </p>

        <div className="track-head-bar">
          <div className="track-head-facts">
            <span>
              <strong>3</strong> parts
            </span>
            <span>
              <strong>9</strong> briefings
            </span>
            <span>
              <strong>{Math.round(totalMinutes / 60)}h {totalMinutes % 60}m</strong> total reading
            </span>
          </div>

          <div className="track-head-actions">
            {next ? (
              <Link to={`/portal/learn/${next.slug}`} className="btn btn-primary">
                {read === 0 ? 'Start with Part I' : `Continue — ${next.num} ${next.title}`}
                <IconArrowRight />
              </Link>
            ) : (
              <span className="track-complete">
                <IconCheck /> You have read all nine
              </span>
            )}
            {read > 0 && (
              <button className="track-reset" onClick={resetProgress}>
                Clear my bookmarks
              </button>
            )}
          </div>
        </div>

        <p className="track-order-note">
          They build on each other, so the order is the fastest route. If you already
          raise or invest, go straight to whichever part is useful &mdash; each one
          stands on its own.
        </p>
      </header>

      {PARTS.map((part, i) => (
        <PartBlock key={part.id} part={part} index={i} progress={progress} />
      ))}

      <p className="portal-disclaimer">{DISCLAIMER}</p>
    </>
  )
}
