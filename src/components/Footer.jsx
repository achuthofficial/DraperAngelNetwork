import { motion } from 'framer-motion'
import { IconArrowUp } from './icons.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          className="footer-top"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div className="footer-brand-col">
            <a href="#top" className="footer-brand">
              <span className="navbar-brand-mark">D</span>
              <div>
                <strong>DAN</strong>
                <p>Draper Angel Network</p>
              </div>
            </a>
            <p className="footer-tagline">Empowering Angels. Accelerating Founders.</p>
            <p className="footer-desc">
              An invite-only angel investment community established under DraperU India,
              bridging the early-stage funding gap in India's startup ecosystem.
            </p>
          </div>

          <div className="footer-links-col">
            <span className="footer-col-label">Explore</span>
            <nav className="footer-links">
              <a href="#why-dan">Why DAN</a>
              <a href="#membership">Membership</a>
              <a href="#focus-areas">Focus Areas</a>
              <a href="#community">Community</a>
            </nav>
          </div>

          <div className="footer-links-col">
            <span className="footer-col-label">Get Started</span>
            <nav className="footer-links">
              <a href="#get-started">Join as an Investor</a>
              <a href="#get-started">Join as a Founder</a>
              <a href="#get-started">Member Login</a>
            </nav>
          </div>

          <div className="footer-cta-col">
            <span className="footer-col-label">Request an Invitation</span>
            <p className="footer-cta-note">
              Membership is by invitation only. Connect with your DAN contact to get started.
            </p>
            <a href="#membership" className="btn btn-primary btn-sm footer-cta-btn">
              Request an Invitation
            </a>
          </div>
        </motion.div>

        <div className="footer-bottom">
          <p className="footer-copy">
            Established under DraperU India. &copy; {new Date().getFullYear()} DAN, Draper Angel Network.
          </p>
          <a href="#top" className="footer-top-link">
            Back to top <IconArrowUp />
          </a>
        </div>
      </div>
    </footer>
  )
}
