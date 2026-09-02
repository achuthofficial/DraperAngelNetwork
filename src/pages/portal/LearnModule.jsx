import { Fragment, useEffect, useMemo, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useData } from '../../context/DataContext.jsx'
import { modules, findModule, moduleIndex, DISCLAIMER } from '../../data/learning.js'
import {
  IconArrowRight,
  IconChevronLeft,
  IconCheck,
  IconClock,
} from '../../components/icons.jsx'

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

function Section({ section }) {
  return (
    <section className="lm-section">
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

      {section.example && (
        <figure className="lm-example">
          <figcaption>{section.example.title}</figcaption>
          <table>
            <tbody>
              {section.example.rows.map(([k, v], i) => (
                <tr key={i}>
                  <th scope="row">{k}</th>
                  <td>{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </figure>
      )}

      {section.callout && (
        <aside className="lm-callout">
          <RichText>{section.callout}</RichText>
        </aside>
      )}
    </section>
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
        <h2>Checkpoint</h2>
        <p>
          {submitted
            ? `You scored ${score} of ${mod.checkpoint.length}. Explanations are below each question.`
            : 'Answer these before moving on. Reading and understanding are not the same thing.'}
        </p>
        {previous?.completed && !submitted && (
          <p className="lm-checkpoint-prior">
            Previously answered {previous.score}/{previous.total}.
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
            {allAnswered ? 'Check answers' : `Answer all ${mod.checkpoint.length} questions`}
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

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [slug])

  if (!mod) return <Navigate to="/portal/learn" replace />

  const i = moduleIndex(slug)
  const prev = modules[i - 1]
  const next = modules[i + 1]
  const record = progress[slug]

  return (
    <article className="lm">
      <Link to="/portal/learn" className="lm-back">
        <IconChevronLeft /> All modules
      </Link>

      <header className="lm-head">
        <p className="eyebrow">
          Module {mod.num} of {String(modules.length).padStart(2, '0')}
        </p>
        <h1 className="portal-title">{mod.title}</h1>
        <p className="portal-lede">{mod.summary}</p>
        <div className="lm-head-meta">
          <span>
            <IconClock /> {mod.minutes} min read
          </span>
          <span className="lm-outcome">
            <strong>Outcome:</strong> {mod.outcome}
          </span>
          {record?.completed && (
            <span className="lm-done-flag">
              <IconCheck /> Completed
            </span>
          )}
        </div>
      </header>

      <div className="lm-body">
        {mod.sections.map((s, si) => (
          <Section key={si} section={s} />
        ))}
      </div>

      {mod.terms?.length > 0 && (
        <section className="lm-terms">
          <h2>Terms from this module</h2>
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

      <nav className="lm-nav" aria-label="Module navigation">
        {prev ? (
          <Link to={`/portal/learn/${prev.slug}`} className="lm-nav-link">
            <span className="lm-nav-dir">
              <IconChevronLeft /> Previous
            </span>
            <strong>
              {prev.num} · {prev.title}
            </strong>
          </Link>
        ) : (
          <span />
        )}

        {next ? (
          <Link to={`/portal/learn/${next.slug}`} className="lm-nav-link is-next">
            <span className="lm-nav-dir">
              Next <IconArrowRight />
            </span>
            <strong>
              {next.num} · {next.title}
            </strong>
          </Link>
        ) : (
          <Link to="/portal/learn" className="lm-nav-link is-next">
            <span className="lm-nav-dir">
              Finish <IconArrowRight />
            </span>
            <strong>Back to the track</strong>
          </Link>
        )}
      </nav>

      <p className="portal-disclaimer">{DISCLAIMER}</p>
    </article>
  )
}
