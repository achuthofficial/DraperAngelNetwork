/* =====================================================================
   Worked-example figures for the learning track.
   ---------------------------------------------------------------------
   Two of the modules carry numbers that a table alone buries. These render
   the same figures visually, and the source table is always shown beside
   them — this audience checks arithmetic, so the numbers stay on the page
   rather than being replaced by a picture of themselves.

   Colour is one hue in three ordinal steps (--viz-1..3), validated against
   the portal card surface for monotone lightness, step separation and
   contrast. Encoding is never colour-alone: every mark is direct-labelled
   and every group is named in the legend.
   ===================================================================== */

/* Two measures on different scales (a percentage and a rupee amount) never
   share an axis. Each gets its own pair of bars and its own unit, so the
   only comparison the eye can make is the correct one: before vs after,
   within one measure. */
function BeforeAfter({ label, unit, before, after, format }) {
  const max = Math.max(before.value, after.value)
  const pct = (v) => `${Math.max(2, (v / max) * 100)}%`

  return (
    <div className="viz-ba">
      <span className="viz-ba-label">
        {label} <em>{unit}</em>
      </span>

      {[before, after].map((d, i) => (
        <div className="viz-ba-row" key={d.label}>
          <span className="viz-ba-when">{d.label}</span>
          <span className="viz-ba-track">
            <span
              className={`viz-ba-bar ${i === 1 ? 'is-after' : ''}`}
              style={{ width: pct(d.value) }}
              title={`${d.label}: ${format(d.value)}`}
            />
          </span>
          <span className="viz-ba-value">{format(d.value)}</span>
        </div>
      ))}
    </div>
  )
}

export function DilutionFigure() {
  const inr = (n) =>
    n >= 10000000 ? `₹${(n / 10000000).toFixed(1)}Cr` : `₹${Math.round(n / 100000)}L`

  return (
    <div className="viz">
      <BeforeAfter
        label="Your stake"
        unit="% of the company"
        before={{ label: 'Before Series A', value: 2.0 }}
        after={{ label: 'After Series A', value: 1.6 }}
        format={(v) => `${v.toFixed(1)}%`}
      />
      <BeforeAfter
        label="What it is worth"
        unit="rupees"
        before={{ label: 'Before Series A', value: 1000000 }}
        after={{ label: 'After Series A', value: 16000000 }}
        format={inr}
      />
      <p className="viz-note">
        A smaller slice of a very much larger company. The percentage fell by a fifth;
        the value rose <strong>16×</strong>. Dilution only costs you when the round
        that caused it fails to grow the company.
      </p>
    </div>
  )
}

/* 24 cheques, one square each. A unit chart rather than a bar chart because
   the point is not the height of a bar — it is that most of the squares are
   dead, and you cannot know in advance which ones. */
const OUTCOMES = [
  { n: 12, key: 'loss', label: 'Written off', note: 'Return nothing' },
  { n: 10, key: 'modest', label: 'Modest', note: 'Return some or a little more' },
  { n: 2, key: 'carry', label: 'Carry the portfolio', note: 'Pay for all of the above' },
]

export function PowerLawFigure() {
  const cells = OUTCOMES.flatMap((o, gi) =>
    Array.from({ length: o.n }, (_, i) => ({ ...o, gi, i })),
  )
  const total = cells.length

  return (
    <div className="viz">
      <span className="viz-ba-label">
        A 24-cheque portfolio <em>expected shape</em>
      </span>

      <div className="viz-waffle" role="img"
        aria-label="Twenty-four investments: twelve written off, ten modest, two carrying the portfolio.">
        {cells.map((c) => (
          <span
            key={`${c.key}-${c.i}`}
            className={`viz-cell is-${c.key}`}
            title={`${c.label} — ${c.note}`}
          />
        ))}
      </div>

      <ul className="viz-legend">
        {OUTCOMES.map((o) => (
          <li key={o.key}>
            <span className={`viz-swatch is-${o.key}`} aria-hidden="true" />
            <strong>{o.n}</strong>
            <span className="viz-legend-label">{o.label}</span>
            <span className="viz-legend-note">{o.note}</span>
          </li>
        ))}
      </ul>

      <p className="viz-note">
        {OUTCOMES[0].n} of {total} return nothing — and you cannot tell in advance which
        ones. That is the whole argument for spreading a fixed allocation across enough
        cheques rather than concentrating it in the two you feel best about.
      </p>
    </div>
  )
}

export const FIGURES = {
  dilution: DilutionFigure,
  powerlaw: PowerLawFigure,
}
