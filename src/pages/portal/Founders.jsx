import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { useData } from '../../context/DataContext.jsx'
import { FOUNDER_STATUS } from '../../data/founders.js'

const STATUS_TONE = {
  Screening: 'is-neutral',
  Shortlisted: 'is-gold',
  Showcased: 'is-good',
  Declined: 'is-muted',
}

const lakh = (n) => `₹${(n / 100000).toFixed(n % 100000 === 0 ? 0 : 1)}L`

const fmtDate = (iso) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })

export default function Founders() {
  const { founders, setFounderStatus } = useData()
  const [status, setStatus] = useState('All')
  const [query, setQuery] = useState('')

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase()
    return founders.filter((f) => {
      const statusOk = status === 'All' || f.status === status
      const queryOk =
        !q ||
        f.name.toLowerCase().includes(q) ||
        f.startup.toLowerCase().includes(q) ||
        f.sector.toLowerCase().includes(q) ||
        f.city.toLowerCase().includes(q)
      return statusOk && queryOk
    })
  }, [founders, status, query])

  return (
    <>
      <header className="portal-head">
        <p className="eyebrow">Administrator</p>
        <h1 className="portal-title">Founder directory</h1>
        <p className="portal-lede">
          Every founder who has applied to present to the network. Move a founder through
          the pipeline by changing their status &mdash; the change is saved immediately.
        </p>
      </header>

      <div className="portal-toolbar">
        <div className="portal-filter-row" role="tablist" aria-label="Filter by status">
          {['All', ...FOUNDER_STATUS].map((s) => (
            <button
              key={s}
              role="tab"
              aria-selected={status === s}
              className={`portal-chip ${status === s ? 'is-active' : ''}`}
              onClick={() => setStatus(s)}
            >
              {s}
              <em>
                {s === 'All'
                  ? founders.length
                  : founders.filter((f) => f.status === s).length}
              </em>
            </button>
          ))}
        </div>

        <label className="portal-search">
          <span className="sr-only">Search founders</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search name, startup, sector or city"
          />
        </label>
      </div>

      {rows.length === 0 ? (
        <p className="portal-empty portal-empty-block">
          No founders match this filter.
        </p>
      ) : (
        <div className="portal-table-wrap">
          <table className="portal-table">
            <thead>
              <tr>
                <th>Founder</th>
                <th>Sector</th>
                <th>Stage</th>
                <th>Ask</th>
                <th>Applied</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((f, i) => (
                <motion.tr
                  key={f.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: Math.min(i, 8) * 0.03 }}
                >
                  <td>
                    <strong className="portal-table-primary">{f.startup}</strong>
                    <span className="portal-table-sub">
                      {f.name} · {f.city}
                    </span>
                    <span className="portal-table-note">{f.oneLiner}</span>
                  </td>
                  <td>{f.sector}</td>
                  <td>{f.stage}</td>
                  <td className="portal-num">{lakh(f.ask)}</td>
                  <td className="portal-num">{fmtDate(f.applied)}</td>
                  <td>
                    <label className="sr-only" htmlFor={`status-${f.id}`}>
                      Status for {f.startup}
                    </label>
                    <select
                      id={`status-${f.id}`}
                      className={`portal-status ${STATUS_TONE[f.status]}`}
                      value={f.status}
                      onChange={(e) => setFounderStatus(f.id, e.target.value)}
                    >
                      {FOUNDER_STATUS.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <p className="portal-footnote">
        Showing {rows.length} of {founders.length} founders. This is prototype data held in
        your browser; nothing is sent anywhere.
      </p>
    </>
  )
}
