import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext.jsx'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle dark and light theme"
      aria-pressed={isDark}
    >
      <motion.span
        className="theme-toggle-track"
        animate={{ backgroundColor: isDark ? 'rgba(212,175,55,0.15)' : 'rgba(169,130,31,0.15)' }}
      >
        <motion.span
          className="theme-toggle-thumb"
          animate={{ x: isDark ? 0 : 24, rotate: isDark ? 0 : 180 }}
          transition={{ type: 'spring', stiffness: 400, damping: 28 }}
        >
          {isDark ? (
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none">
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" fill="#0a0f1e" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none">
              <circle cx="12" cy="12" r="4.5" fill="#0a0f1e" />
              <g stroke="#0a0f1e" strokeWidth="1.6" strokeLinecap="round">
                <path d="M12 2v2.4M12 19.6V22M4.4 4.4l1.7 1.7M17.9 17.9l1.7 1.7M2 12h2.4M19.6 12H22M4.4 19.6l1.7-1.7M17.9 6.1l1.7-1.7" />
              </g>
            </svg>
          )}
        </motion.span>
      </motion.span>
    </button>
  )
}
