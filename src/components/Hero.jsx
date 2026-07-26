import './Hero.css'
import { LuTerminal } from "react-icons/lu";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      {/* Background Decoration */}
      <div className="hero__decoration" aria-hidden="true">
        <LuTerminal size={300} />
      </div>

      <div className="hero__content">
        <span className="hero__badge text-label-mono uppercase">
          EST. 2026 / DIGITAL CRAFTSMANSHIP
        </span>

        <h1 id="hero-heading" className="hero__heading">
          NORTHPEAK DIGITAL: <br />
          <mark className="hero__highlight">BUILD DIFFERENT.</mark>
        </h1>

        <div className="hero__actions">
          <button className="neo-brutalist-button hero__cta text-headline-md uppercase">
            START A PROJECT
          </button>
          <p className="hero__tagline text-body-lg">
            We don&apos;t do &quot;minimalist soft gradients.&quot; We build high-impact
            digital systems that command attention and drive conversions.
          </p>
        </div>
      </div>
    </section>
  )
}
