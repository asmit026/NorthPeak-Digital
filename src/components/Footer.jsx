import './Footer.css'

const SOCIAL_LINKS = [
  { label: 'INSTAGRAM', href: '#', highlighted: true },
  { label: 'LINKEDIN', href: '#' },
  { label: 'GITHUB', href: '#' },
  { label: 'TWITTER', href: '#' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__brand text-display">NORTHPEAK</p>

      <nav className="footer__social" aria-label="Social media links">
        <ul className="footer__social-list" role="list">
          {SOCIAL_LINKS.map(({ label, href, highlighted }) => (
            <li key={label}>
              <a
                href={href}
                className={`footer__social-link text-headline-lg-mobile uppercase ${highlighted ? 'footer__social-link--highlighted' : ''}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="footer__bottom">
        <small className="footer__copy text-label-mono">
          ©2026 NORTHPEAK DIGITAL. BUILT DIFFERENT.
        </small>
        <p className="footer__training text-label-mono">
          Built for{' '}
          <a
            href="https://digitalheroesco.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__training-link"
          >
            Digital Heroes
          </a>{' '}
          Training Task
        </p>
      </div>
    </footer>
  )
}
