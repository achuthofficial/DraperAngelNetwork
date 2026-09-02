import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { seedEvents } from '../data/events.js'
import { seedFounders } from '../data/founders.js'

const DataContext = createContext(null)

const EVENTS_KEY = 'dan.events'
const FOUNDERS_KEY = 'dan.founders'
const PROGRESS_KEY = 'dan.progress'
const RSVP_KEY = 'dan.rsvps'

function load(key, fallback) {
  try {
    const raw = localStorage.getItem(key)
    if (!raw) return fallback
    const parsed = JSON.parse(raw)
    return Array.isArray(fallback) ? (Array.isArray(parsed) ? parsed : fallback) : parsed
  } catch {
    return fallback
  }
}

function save(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {
    /* storage blocked — this session's changes stay in memory */
  }
}

/** Local midnight, so "today" is not shifted by the UTC boundary. */
function startOfToday() {
  const d = new Date()
  d.setHours(0, 0, 0, 0)
  return d
}

export const isUpcoming = (event) => new Date(`${event.date}T23:59:59`) >= startOfToday()

/**
 * Everything the portal reads and writes. There is no backend, so state lives
 * in localStorage — which is enough for the one property that matters here:
 * an event an admin adds is immediately visible in the member calendar,
 * because both views read the same store.
 */
export function DataProvider({ children }) {
  const [events, setEvents] = useState(() => load(EVENTS_KEY, seedEvents))
  const [founders, setFounders] = useState(() => load(FOUNDERS_KEY, seedFounders))
  const [progress, setProgress] = useState(() => load(PROGRESS_KEY, {}))
  const [rsvps, setRsvps] = useState(() => load(RSVP_KEY, []))

  useEffect(() => save(EVENTS_KEY, events), [events])
  useEffect(() => save(FOUNDERS_KEY, founders), [founders])
  useEffect(() => save(PROGRESS_KEY, progress), [progress])
  useEffect(() => save(RSVP_KEY, rsvps), [rsvps])

  /* ---- events ---- */
  const addEvent = useCallback((draft) => {
    const event = {
      ...draft,
      id: `evt-${Date.now().toString(36)}`,
      registered: 0,
      createdByAdmin: true,
      agenda: draft.agenda?.filter(Boolean) ?? [],
    }
    setEvents((list) => [event, ...list])
    return event
  }, [])

  const updateEvent = useCallback((id, patch) => {
    setEvents((list) => list.map((e) => (e.id === id ? { ...e, ...patch } : e)))
  }, [])

  const removeEvent = useCallback((id) => {
    setEvents((list) => list.filter((e) => e.id !== id))
    setRsvps((list) => list.filter((r) => r !== id))
  }, [])

  const toggleRsvp = useCallback((id) => {
    setRsvps((list) => (list.includes(id) ? list.filter((r) => r !== id) : [...list, id]))
    setEvents((list) =>
      list.map((e) =>
        e.id === id
          ? { ...e, registered: Math.max(0, e.registered + (rsvps.includes(id) ? -1 : 1)) }
          : e,
      ),
    )
  }, [rsvps])

  /* ---- founders ---- */
  const setFounderStatus = useCallback((id, status) => {
    setFounders((list) => list.map((f) => (f.id === id ? { ...f, status } : f)))
  }, [])

  /* ---- learning progress ----
     progress[slug] = { completed: bool, score: n, total: n, at: iso } */
  const completeModule = useCallback((slug, score, total) => {
    setProgress((p) => ({
      ...p,
      [slug]: { completed: true, score, total, at: new Date().toISOString() },
    }))
  }, [])

  const resetProgress = useCallback(() => setProgress({}), [])

  const derived = useMemo(() => {
    const sorted = [...events].sort((a, b) => a.date.localeCompare(b.date))
    return {
      upcomingEvents: sorted.filter(isUpcoming),
      pastEvents: sorted.filter((e) => !isUpcoming(e)).reverse(),
    }
  }, [events])

  const value = useMemo(
    () => ({
      events,
      ...derived,
      addEvent,
      updateEvent,
      removeEvent,
      rsvps,
      toggleRsvp,
      founders,
      setFounderStatus,
      progress,
      completeModule,
      resetProgress,
    }),
    [
      events,
      derived,
      addEvent,
      updateEvent,
      removeEvent,
      rsvps,
      toggleRsvp,
      founders,
      setFounderStatus,
      progress,
      completeModule,
      resetProgress,
    ],
  )

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}

export function useData() {
  const ctx = useContext(DataContext)
  if (!ctx) throw new Error('useData must be used inside a DataProvider')
  return ctx
}
