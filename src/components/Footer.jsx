export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="navbar-brand-mark">D</span>
          <div>
            <strong>DAN</strong>
            <p>Draper Angel Network  Empowering Angels. Accelerating Founders.</p>
          </div>
        </div>

        <nav className="footer-links">
          <a href="#why-dan">Why DAN</a>
          <a href="#membership">Membership</a>
          <a href="#focus-areas">Focus Areas</a>
          <a href="#community">Community</a>
        </nav>

        <p className="footer-copy">
          Established under DraperU India. &copy; {new Date().getFullYear()} DAN  Draper Angel Network.
        </p>
      </div>
    </footer>
  )
}
