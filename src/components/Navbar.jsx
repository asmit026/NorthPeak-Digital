import { useState } from 'react'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'SERVICES', href: '#services', active: true },
  { label: 'PRICING', href: '#pricing' },
  { label: 'CONTACT', href: '#contact' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev)
  }

  const closeMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className="navbar">
      <nav className="navbar__inner" aria-label="Primary navigation">
        <a href="#" className="navbar__logo text-headline-md" onClick={closeMenu}>
          NORTHPEAK DIGITAL
        </a>

        {/* Desktop links */}
        <ul className="navbar__links navbar__links--desktop" role="list">
          {NAV_LINKS.map(({ label, href, active }) => (
            <li key={label}>
              <a
                href={href}
                className={`text-ui-button uppercase navbar__link ${active ? 'active-nav-bg' : ''}`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar__actions">
          <button className="neo-brutalist-button navbar__cta text-ui-button uppercase">
            GET STARTED
          </button>

          {/* Hamburger toggle button for mobile */}
          <button
            className="navbar__toggle"
            onClick={toggleMobileMenu}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined" aria-hidden="true">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="navbar__mobile-menu">
          <ul className="navbar__mobile-links" role="list">
            {NAV_LINKS.map(({ label, href, active }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={closeMenu}
                  className={`text-headline-md uppercase navbar__mobile-link ${
                    active ? 'navbar__mobile-link--active' : ''
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
