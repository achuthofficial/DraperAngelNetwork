import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useAuth } from '../../context/AuthContext.jsx'
import { useData } from '../../context/DataContext.jsx'
import { modules, totalMinutes } from '../../data/learning.js'
import { IconArrowRight, IconCalendar, IconPin, IconClock } from '../../components/icons.jsx'

function Stat({ value, label, hint }) {
  return (
    <div className="portal-stat">
      <strong>{value}</strong>
      <span>{label}</span>
      {hint && <small>{hint}</small>}
    </div>
  )
}

function NextEvents({ events, limit = 3 }) {
  if (!events.length) {
    return <p className="portal-empty">No upcoming events scheduled.</p>
  }
  return (
    <ul className="portal-mini-events">
      {events.slice(0, limit).map((e) => (
        <li key={e.id}>
          <span className="portal-mini-date">
            <strong>{new Date(`${e.date}T00:00:00`).getDate()}</strong>
            <small>
              {new Date(`${e.date}T00:00:00`)
                .toLocaleDateString('en-IN', { month: 'short' })
                .toUpperCase()}
            </small>
          </span>
          <span className="portal-mini-body">
            <strong>{e.title}</strong>
            <small>
              <IconClock /> {e.time} · <IconPin /> {e.mode}
            </small>
          </span>
        </li>
      ))}
    </ul>
  )
}

/* -------------------------------------------------------------- admin --- */
function AdminOverview() {
  const { founders, upcomingEvents, pastEvents, events } = useData()
  const screening = founders.filter((f) => f.status === 'Screening').length
  const shortlisted = founders.filter((f) => f.status === 'Shortlisted').length

  return (
    <>
      <header className="portal-head">
        <p className="eyebrow">Administrator</p>
        <h1 className="portal-title">Network overview</h1>
        <p className="portal-lede">
          Founder pipeline and the event calendar. Anything you publish here appears in
          every member&rsquo;s portal immediately.
        </p>
      </header>

      <div className="portal-stats">
        <Stat value={founders.length} label="Founders in pipeline" hint={`${screening} awaiting screening`} />
        <Stat value={shortlisted} label="Shortlisted" hint="Ready for a showcase slot" />
        <Stat value={upcomingEvents.length} label="Upcoming events" hint={`${pastEvents.length} completed`} />
        <Stat
          value={events.reduce((n, e) => n + e.registered, 0)}
          label="Total registrations"
          hint="Across all events"
        />
      </div>

      <div className="portal-grid-2">
        <section className="portal-panel">
          <div className="portal-panel-head">
            <h2>Next up</h2>
            <Link to="/portal/events" className="portal-link">
              Manage events <IconArrowRight />
            </Link>
          </div>
          <NextEvents events={upcomingEvents} />
        </section>

        <section className="portal-panel">
          <div className="portal-panel-head">
            <h2>Awaiting screening</h2>
            <Link to="/portal/founders" className="portal-link">
              Founder directory <IconArrowRight />
            </Link>
          </div>
          {screening === 0 ? (
            <p className="portal-empty">Pipeline clear — nothing awaiting review.</p>
          ) : (
            <ul className="portal-mini-list">
              {founders
                .filter((f) => f.status === 'Screening')
                .slice(0, 4)
                .map((f) => (
                  <li key={f.id}>
                    <strong>{f.startup}</strong>
                    <span>
                      {f.name} · {f.sector} · {f.stage}
                    </span>
                  </li>
                ))}
            </ul>
          )}
        </section>
      </div>
    </>
  )
}

/* ------------------------------------------------------------- member --- */
function MemberOverview() {
  const { session, role } = useAuth()
  const { progress, upcomingEvents, rsvps } = useData()

  const done = modules.filter((m) => progress[m.slug]?.completed).length
  const next = modules.find((m) => !progress[m.slug]?.completed)
  const pct = Math.round((done / modules.length) * 100)

  const scored = modules
    .filter((m) => progress[m.slug]?.completed)
    .reduce(
      (acc, m) => {
        acc.score += progress[m.slug].score
        acc.total += progress[m.slug].total
        return acc
      },
      { score: 0, total: 0 },
    )

  return (
    <>
      <header className="portal-head">
        <p className="eyebrow">{role === 'founder' ? 'Founder' : 'Investor'} portal</p>
        <h1 className="portal-title">
          Welcome back, <span className="gold-text">{session?.name?.split(' ')[0]}</span>
        </h1>
        <p className="portal-lede">
          {done === 0
            ? 'Start with the learning track. Nine modules, written from zero — by the end you will be able to read a deck, judge a term sheet, and size a cheque deliberately.'
            : done === modules.length
              ? 'You have completed the track. The decision framework in Module 09 is the one to revisit before any real cheque.'
              : `You are ${pct}% through the learning track. Pick up where you left off.`}
        </p>
      </header>

      <div className="portal-stats">
        <Stat value={`${done}/${modules.length}`} label="Modules completed" hint={`${pct}% of the track`} />
        <Stat
          value={scored.total ? `${Math.round((scored.score / scored.total) * 100)}%` : '—'}
          label="Checkpoint accuracy"
          hint={scored.total ? `${scored.score} of ${scored.total} correct` : 'No checkpoints yet'}
        />
        <Stat value={upcomingEvents.length} label="Upcoming events" hint={`${rsvps.length} registered`} />
        <Stat value={`${totalMinutes}m`} label="Track length" hint="Total reading time" />
      </div>

      <div className="portal-grid-2">
        <section className="portal-panel portal-panel-feature">
          <div className="portal-panel-head">
            <h2>{done === 0 ? 'Start here' : 'Continue the track'}</h2>
          </div>

          {next ? (
            <motion.div
              className="portal-next-module"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <span className="portal-next-num">{next.num}</span>
              <h3>{next.title}</h3>
              <p>{next.summary}</p>
              <p className="portal-next-outcome">
                <strong>After this you can:</strong> {next.outcome}
              </p>
              <Link to={`/portal/learn/${next.slug}`} className="btn btn-primary">
                {done === 0 ? 'Begin Module 01' : `Open Module ${next.num}`} <IconArrowRight />
              </Link>
            </motion.div>
          ) : (
            <div className="portal-next-module">
              <h3>Track complete</h3>
              <p>
                You have worked through all nine modules. Module 09 holds the four-pass
                review and the pre-mortem — worth re-reading before any real decision.
              </p>
              <Link to="/portal/learn/making-the-decision" className="btn btn-ghost">
                Revisit the decision framework <IconArrowRight />
              </Link>
            </div>
          )}
        </section>

        <section className="portal-panel">
          <div className="portal-panel-head">
            <h2>
              <IconCalendar /> Upcoming events
            </h2>
            <Link to="/portal/events" className="portal-link">
              All events <IconArrowRight />
            </Link>
          </div>
          <NextEvents events={upcomingEvents} />
        </section>
      </div>
    </>
  )
}

export default function Overview() {
  const { role } = useAuth()
  return role === 'admin' ? <AdminOverview /> : <MemberOverview />
}
