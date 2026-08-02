import { motion, useReducedMotion } from 'framer-motion'

/**
 * Line-mask reveal: wraps heading/manifesto content in an overflow-hidden
 * box and translates it up from below, once.
 * The h2/h3/p passed in via `as` stays the real semantic element.
 *
 * The viewport trigger lives on the OUTER (always fully visible) box, not
 * the inner text — the inner element starts translated out of its own
 * clipped box, so an IntersectionObserver on it sees zero visible area and
 * can never report "in view." The outer box propagates "hidden"/"show" down
 * to the inner element via Framer Motion's variant system instead.
 *
 * `immediate` fires on mount instead of on scroll-into-view — required for
 * anything visible above the fold at page load.
 */
const outerVariants = {
  hidden: {},
  show: {},
}
const innerVariants = {
  hidden: { y: '110%' },
  show: ({ delay }) => ({
    y: '0%',
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay },
  }),
}

export default function Reveal({ children, delay = 0, className = '', as: Tag = 'span', immediate = false }) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return <Tag className={className}>{children}</Tag>
  }

  const Outer = motion[Tag] || motion.span
  const triggerProps = immediate
    ? { animate: 'show' }
    : { whileInView: 'show', viewport: { once: true, amount: 0.3 } }

  return (
    <Outer className={`reveal-mask ${className}`} variants={outerVariants} initial="hidden" {...triggerProps}>
      <motion.span className="reveal-mask-inner" custom={{ delay }} variants={innerVariants}>
        {children}
      </motion.span>
    </Outer>
  )
}
