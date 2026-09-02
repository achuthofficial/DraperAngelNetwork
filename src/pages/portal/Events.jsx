import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useAuth } from '../../context/AuthContext.jsx'
import { useData } from '../../context/DataContext.jsx'
import { EVENT_TYPES, EVENT_MODES } from '../../data/events.js'
import {
  IconPlus,
  IconTrash,
  IconClock,
  IconPin,
  IconCheck,
  IconCalendar,
} from '../../components/icons.jsx'

const todayISO = () => new Date().toISOString().slice(0, 10)

const fmtLong = (iso) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString('en-IN', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

const dayNum = (iso) => new Date(`${iso}T00:00:00`).getDate()
const monthAbbr = (iso) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString('en-IN', { month: 'short' }).toUpperCase()

/* ---------------------------------------------------------------- form --- */
const EMPTY = {
  title: '',
  type: EVENT_TYPES[0],
  mode: EVENT_MODES[1],
  date: '',
  time: '18:00',
  durationMins: 90,
  location: '',
  host: 'DAN',
  capacity: 100,
  summary: '',
  agenda: ['', '', ''],
}

function EventForm({ onCreate, onCancel }) {
  const [form, setForm] = useState(EMPTY)
  const [error, setError] = useState('')

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const setAgenda = (i) => (e) =>
    setForm((f) => {
      const agenda = [...f.agenda]
      agenda[i] = e.target.value
      return { ...f, agenda }
    })

  function submit(e) {
    e.preventDefault()
    if (!form.title.trim()) return setError('Give the event a title.')
    if (!form.date) return setError('Pick a date.')
    if (form.date < todayISO()) return setError('That date is in the past.')
    if (!form.summary.trim()) return setError('Add a one-line summary members will read.')

    setError('')
    onCreate({
      ...form,
      title: form.title.trim(),
      summary: form.summary.trim(),
      location: form.location.trim() || (form.mode === 'Virtual' ? 'Zoom' : 'TBC'),
      capacity: Number(form.capacity) || 0,
      durationMins: Number(form.durationMins) || 60,
    })
    setForm(EMPTY)
  }

  return (
    <motion.form
      className="portal-form"
      onSubmit={submit}
      noValidate
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <div className="portal-form-inner">
        <h2>Publish a new event</h2>
        <p className="portal-form-note">
          Members see this in their calendar as soon as you publish it.
        </p>

        <div className="portal-field portal-field-wide">
          <label htmlFor="ev-title">Title</label>
          <input
            id="ev-title"
            value={form.title}
            onChange={set('title')}
            placeholder="December Startup Showcase"
          />
        </div>

        <div className="portal-field">
          <label htmlFor="ev-type">Type</label>
          <select id="ev-type" value={form.type} onChange={set('type')}>
            {EVENT_TYPES.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>

        <div className="portal-field">
          <label htmlFor="ev-mode">Mode</label>
          <select id="ev-mode" value={form.mode} onChange={set('mode')}>
            {EVENT_MODES.map((m) => (
              <option key={m}>{m}</option>
            ))}
          </select>
        </div>

        <div className="portal-field">
          <label htmlFor="ev-date">Date</label>
          <input id="ev-date" type="date" min={todayISO()} value={form.date} onChange={set('date')} />
        </div>

        <div className="portal-field">
          <label htmlFor="ev-time">Start time</label>
          <input id="ev-time" type="time" value={form.time} onChange={set('time')} />
        </div>

        <div className="portal-field">
          <label htmlFor="ev-dur">Duration (min)</label>
          <input id="ev-dur" type="number" min="15" step="15" value={form.durationMins} onChange={set('durationMins')} />
        </div>

        <div className="portal-field">
          <label htmlFor="ev-cap">Capacity</label>
          <input id="ev-cap" type="number" min="1" value={form.capacity} onChange={set('capacity')} />
        </div>

        <div className="portal-field portal-field-wide">
          <label htmlFor="ev-loc">Location or link</label>
          <input
            id="ev-loc"
            value={form.location}
            onChange={set('location')}
            placeholder={form.mode === 'Virtual' ? 'Zoom — link sent 24h before' : 'DraperU India, Gachibowli'}
          />
        </div>

        <div className="portal-field portal-field-wide">
          <label htmlFor="ev-host">Host</label>
          <input id="ev-host" value={form.host} onChange={set('host')} />
        </div>

        <div className="portal-field portal-field-wide">
          <label htmlFor="ev-sum">Summary</label>
          <textarea
            id="ev-sum"
            rows={2}
            value={form.summary}
            onChange={set('summary')}
            placeholder="What happens, and who it is for."
          />
        </div>

        <fieldset className="portal-field portal-field-wide">
          <legend>Agenda (optional)</legend>
          {form.agenda.map((line, i) => (
            <input
              key={i}
              value={line}
              onChange={setAgenda(i)}
              placeholder={`Agenda item ${i + 1}`}
              aria-label={`Agenda item ${i + 1}`}
            />
          ))}
        </fieldset>

        {error && <p className="portal-form-error">{error}</p>}

        <div className="portal-form-actions">
          <button type="button" className="btn btn-ghost btn-sm" onClick={onCancel}>
            Cancel
          </button>
          <button type="submit" className="btn btn-primary btn-sm">
            Publish event
          </button>
        </div>
      </div>
    </motion.form>
  )
}

/* ---------------------------------------------------------------- card --- */
function EventCard({ event, isAdmin, isPast, registered, onRsvp, onDelete }) {
  const full = event.capacity > 0 && event.registered >= event.capacity

  return (
    <motion.article
      className={`portal-event ${isPast ? 'is-past' : ''}`}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      layout
    >
      <div className="portal-event-date">
        <strong>{dayNum(event.date)}</strong>
        <small>{monthAbbr(event.date)}</small>
      </div>

      <div className="portal-event-body">
        <div className="portal-event-tags">
          <span className="portal-tag-pill">{event.type}</span>
          <span className="portal-tag-pill is-quiet">{event.mode}</span>
          {event.createdByAdmin && <span className="portal-tag-pill is-new">Newly added</span>}
        </div>

        <h3>{event.title}</h3>
        <p className="portal-event-summary">{event.summary}</p>

        <ul className="portal-event-meta">
          <li>
            <IconCalendar /> {fmtLong(event.date)}
          </li>
          <li>
            <IconClock /> {event.time} · {event.durationMins} min
          </li>
          <li>
            <IconPin /> {event.location}
          </li>
        </ul>

        {event.agenda?.length > 0 && (
          <details className="portal-event-agenda">
            <summary>Agenda</summary>
            <ul>
              {event.agenda.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </ul>
          </details>
        )}
      </div>

      <div className="portal-event-side">
        <span className="portal-event-count">
          <strong>{event.registered}</strong>
          {event.capacity > 0 && <small>of {event.capacity} seats</small>}
        </span>
        {event.capacity > 0 && (
          <div className="portal-event-bar">
            <span style={{ width: `${Math.min(100, (event.registered / event.capacity) * 100)}%` }} />
          </div>
        )}
        <span className="portal-event-host">Hosted by {event.host}</span>

        {isAdmin ? (
          <button className="portal-danger-btn" onClick={() => onDelete(event.id)}>
            <IconTrash /> Remove
          </button>
        ) : isPast ? (
          <span className="portal-event-closed">Completed</span>
        ) : (
          <button
            className={`btn btn-sm ${registered ? 'btn-ghost' : 'btn-primary'}`}
            onClick={() => onRsvp(event.id)}
            disabled={full && !registered}
          >
            {registered ? (
              <>
                <IconCheck /> Registered
              </>
            ) : full ? (
              'Full'
            ) : (
              'Register'
            )}
          </button>
        )}
      </div>
    </motion.article>
  )
}

/* ---------------------------------------------------------------- page --- */
export default function Events() {
  const { role } = useAuth()
  const { upcomingEvents, pastEvents, addEvent, removeEvent, rsvps, toggleRsvp } = useData()
  const isAdmin = role === 'admin'
  const [showForm, setShowForm] = useState(false)
  const [tab, setTab] = useState('upcoming')

  const list = tab === 'upcoming' ? upcomingEvents : pastEvents

  return (
    <>
      <header className="portal-head">
        <p className="eyebrow">{isAdmin ? 'Administrator' : 'Members'}</p>
        <h1 className="portal-title">Events</h1>
        <p className="portal-lede">
          {isAdmin
            ? 'Publish and manage the network calendar. Everything here is visible to every member.'
            : 'Showcases, masterclasses and gatherings published by the DAN team. Register to reserve a seat.'}
        </p>
      </header>

      <div className="portal-toolbar">
        <div className="portal-filter-row" role="tablist" aria-label="Event period">
          <button
            role="tab"
            aria-selected={tab === 'upcoming'}
            className={`portal-chip ${tab === 'upcoming' ? 'is-active' : ''}`}
            onClick={() => setTab('upcoming')}
          >
            Upcoming <em>{upcomingEvents.length}</em>
          </button>
          <button
            role="tab"
            aria-selected={tab === 'past'}
            className={`portal-chip ${tab === 'past' ? 'is-active' : ''}`}
            onClick={() => setTab('past')}
          >
            Past <em>{pastEvents.length}</em>
          </button>
        </div>

        {isAdmin && (
          <button className="btn btn-primary btn-sm" onClick={() => setShowForm((v) => !v)}>
            <IconPlus /> {showForm ? 'Close' : 'Add event'}
          </button>
        )}
      </div>

      <AnimatePresence initial={false}>
        {isAdmin && showForm && (
          <EventForm
            onCreate={(draft) => {
              addEvent(draft)
              setShowForm(false)
              setTab('upcoming')
            }}
            onCancel={() => setShowForm(false)}
          />
        )}
      </AnimatePresence>

      {list.length === 0 ? (
        <p className="portal-empty portal-empty-block">
          {tab === 'upcoming'
            ? isAdmin
              ? 'Nothing scheduled. Use “Add event” to publish the first one.'
              : 'No upcoming events right now. Check back shortly.'
            : 'No past events yet.'}
        </p>
      ) : (
        <div className="portal-event-list">
          <AnimatePresence initial={false}>
            {list.map((e) => (
              <EventCard
                key={e.id}
                event={e}
                isAdmin={isAdmin}
                isPast={tab === 'past'}
                registered={rsvps.includes(e.id)}
                onRsvp={toggleRsvp}
                onDelete={removeEvent}
              />
            ))}
          </AnimatePresence>
        </div>
      )}
    </>
  )
}
