import { Fragment, useEffect, useMemo, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useData } from '../../context/DataContext.jsx'
import { modules, findModule, moduleIndex, partOf, DISCLAIMER } from '../../data/learning.js'
import { FIGURES } from '../../components/portal/Figures.jsx'
import {
  IconArrowRight,
  IconChevronLeft,
  IconCheck,
  IconClock,
} from '../../components/icons.jsx'

const slugify = (s) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

/* The curriculum uses **bold** inline. Rather than pull in a markdown parser
   for one feature, split on the delimiter and alternate — odd indices are the
   emphasised runs. */
function RichText({ children }) {
  const parts = String(children).split('**')
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? <strong key={i}>{part}</strong> : <Fragment key={i}>{part}</Fragment>,
      )}
    </>
  )
}

/* A worked example is the most valuable thing on the page for this reader, so
   it is set as a proper financial figure — right-aligned tabular numerals,
   its own rule, its own caption. Where the numbers also tell a shape, the
   tagged visual renders above the table; the table always stays, because
   people who invest money check the arithmetic. */
function WorkedExample({ example }) {
  const Visual = example.visual ? FIGURES[example.visual] : null

  return (
    <figure className="lm-example">
      <figcaption>
        <span className="lm-example-tag">Worked example</span>
        {example.title}
      </figcaption>

      {Visual && <Visual />}

      <table>
        <tbody>
          {example.rows.map(([k, v], i) => (
            <tr key={i}>
              <th scope="row">{k}</th>
              <td>{v}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </figure>
  )
}

function Section({ section }) {
  return (
    <section className="lm-section" id={slugify(section.heading)}>
      <h2>{section.heading}</h2>

      {section.body?.map((p, i) => (
        <p key={i}>
          <RichText>{p}</RichText>
        </p>
      ))}

      {section.list && (
        <ul className="lm-list">
          {section.list.map((item, i) => (
            <li key={i}>
              <RichText>{item}</RichText>
            </li>
          ))}
        </ul>
      )}

      {section.example && <WorkedExample example={section.example} />}

      {section.callout && (
        <aside className="lm-callout">
          <span className="lm-callout-label" aria-hidden="true">
            Worth remembering
          </span>
          <p>
            <RichText>{section.callout}</RichText>
          </p>
        </aside>
      )}
    </section>
  )
}

/* Sticky contents. A reader who already knows two of the five sections should
   be able to go straight to the third rather than scroll for it. */
function Contents({ sections, active }) {
  return (
    <nav className="lm-toc" aria-label="On this page">
      <span className="lm-toc-label">On this page</span>
      <ol>
        {sections.map((s) => {
          const id = slugify(s.heading)
          return (
            <li key={id}>
              <a href={`#${id}`} className={active === id ? 'is-active' : ''}>
                {s.heading}
              </a>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

/* ---------------------------------------------------------- checkpoint --- */
function Checkpoint({ module: mod, onComplete, previous }) {
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const score = useMemo(
    () => mod.checkpoint.reduce((n, q, i) => n + (answers[i] === q.answer ? 1 : 0), 0),
    [answers, mod.checkpoint],
  )
  const allAnswered = mod.checkpoint.every((_, i) => answers[i] !== undefined)

  function submit(e) {
    e.preventDefault()
    if (!allAnswered) return
    setSubmitted(true)
    onComplete(score, mod.checkpoint.length)
  }

  return (
    <section className="lm-checkpoint">
      <div className="lm-checkpoint-head">
        <span className="lm-checkpoint-eyebrow">Before you move on</span>
        <h2>Check your judgement</h2>
        <p>
          {submitted
            ? `${score} of ${mod.checkpoint.length}. The reasoning under each answer is the part that matters — it is the argument you would make on a real deal.`
            : `${mod.checkpoint.length} questions on what you just read. Each answer comes with the reasoning behind it.`}
        </p>
        {previous?.completed && !submitted && (
          <p className="lm-checkpoint-prior">
            Last time you answered {previous.score} of {previous.total}.
          </p>
        )}
      </div>

      <form onSubmit={submit}>
        {mod.checkpoint.map((q, qi) => {
          const chosen = answers[qi]
          return (
            <fieldset className="lm-question" key={qi}>
              <legend>
                <span className="lm-question-num">{qi + 1}</span> {q.q}
              </legend>

              {q.options.map((opt, oi) => {
                const isChosen = chosen === oi
                const isCorrect = oi === q.answer
                let state = ''
                if (submitted) {
                  if (isCorrect) state = 'is-correct'
                  else if (isChosen) state = 'is-wrong'
                }
                return (
                  <label key={oi} className={`lm-option ${state} ${isChosen ? 'is-chosen' : ''}`}>
                    <input
                      type="radio"
                      name={`q-${qi}`}
                      checked={isChosen || false}
                      disabled={submitted}
                      onChange={() => setAnswers((a) => ({ ...a, [qi]: oi }))}
                    />
                    <span>{opt}</span>
                    {submitted && isCorrect && <IconCheck />}
                  </label>
                )
              })}

              {submitted && (
                <motion.p
                  className="lm-why"
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <strong>{chosen === q.answer ? 'Correct.' : 'Not quite.'}</strong> {q.why}
                </motion.p>
              )}
            </fieldset>
          )
        })}

        {!submitted && (
          <button type="submit" className="btn btn-primary" disabled={!allAnswered}>
            {allAnswered ? 'Show me the reasoning' : `Answer all ${mod.checkpoint.length} questions`}
          </button>
        )}
      </form>
    </section>
  )
}

/* ---------------------------------------------------------------- page --- */
export default function LearnModule() {
  const { slug } = useParams()
  const { progress, completeModule } = useData()
  const mod = findModule(slug)
  const [active, setActive] = useState('')

  useEffect(() => {
    window.scrollTo({ top: 0 })
    setActive('')
  }, [slug])

  // Scroll-spy for the sticky contents. Rebuilt per module because the
  // section list changes with the route.
  useEffect(() => {
    if (!mod) return
    const ids = mod.sections.map((s) => slugify(s.heading))
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean)
    if (!els.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length) {
          const top = visible.reduce((a, b) =>
            a.boundingClientRect.top < b.boundingClientRect.top ? a : b,
          )
          setActive(top.target.id)
        }
      },
      { rootMargin: '-12% 0px -70% 0px', threshold: [0, 1] },
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [mod, slug])

  if (!mod) return <Navigate to="/portal/learn" replace />

  const i = moduleIndex(slug)
  const prev = modules[i - 1]
  const next = modules[i + 1]
  const record = progress[slug]
  const part = partOf(slug)

  return (
    <article className="lm">
      <Link to="/portal/learn" className="lm-back">
        <IconChevronLeft /> All briefings
      </Link>

      <header className="lm-head">
        <p className="eyebrow lm-kicker">
          {part && (
            <>
              Part {part.numeral} &middot; {part.label} &nbsp;&middot;&nbsp;
            </>
          )}
          Briefing {mod.num}
        </p>
        <h1 className="lm-title">{mod.title}</h1>
        <p className="lm-standfirst">{mod.summary}</p>

        <div className="lm-head-meta">
          <span>
            <IconClock /> {mod.minutes} min read
          </span>
          {record?.completed && (
            <span className="lm-done-flag">
              <IconCheck /> Read
            </span>
          )}
        </div>
      </header>

      {/* The 60-second version, for a reader deciding whether to spend the
          next quarter of an hour on this. */}
      <div className="lm-brief">
        <div className="lm-brief-main">
          <span className="lm-brief-label">In brief</span>
          <p className="lm-brief-outcome">
            By the end of this you will be able to <strong>{mod.outcome}</strong>
          </p>
        </div>
        <div className="lm-brief-covers">
          <span className="lm-brief-label">What it covers</span>
          <ul>
            {mod.sections.map((s) => (
              <li key={s.heading}>
                <a href={`#${slugify(s.heading)}`}>{s.heading}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="lm-layout">
        <Contents sections={mod.sections} active={active} />

        <div className="lm-body">
          {mod.sections.map((s, si) => (
            <Section key={si} section={s} />
          ))}

          {mod.terms?.length > 0 && (
            <section className="lm-terms">
              <h2>The words, defined</h2>
              <dl>
                {mod.terms.map(([term, def]) => (
                  <div key={term}>
                    <dt>{term}</dt>
                    <dd>{def}</dd>
                  </div>
                ))}
              </dl>
            </section>
          )}

          <Checkpoint
            module={mod}
            previous={record}
            onComplete={(score, total) => completeModule(slug, score, total)}
          />

          <nav className="lm-nav" aria-label="Briefing navigation">
            {prev ? (
              <Link to={`/portal/learn/${prev.slug}`} className="lm-nav-link">
                <span className="lm-nav-dir">
                  <IconChevronLeft /> Previous
                </span>
                <strong>{prev.title}</strong>
              </Link>
            ) : (
              <span />
            )}

            {next ? (
              <Link to={`/portal/learn/${next.slug}`} className="lm-nav-link is-next">
                <span className="lm-nav-dir">
                  Next <IconArrowRight />
                </span>
                <strong>{next.title}</strong>
              </Link>
            ) : (
              <Link to="/portal/learn" className="lm-nav-link is-next">
                <span className="lm-nav-dir">
                  Finish <IconArrowRight />
                </span>
                <strong>Back to all briefings</strong>
              </Link>
            )}
          </nav>

          <p className="portal-disclaimer">{DISCLAIMER}</p>
        </div>
      </div>
    </article>
  )
}
