import './Pricing.css'

const TIERS = [
  {
    name: 'STARTER',
    price: '$2.5K',
    features: ['Core Strategy Session', 'Single Landing Page', 'Basic Analytics', '1 Revision Round'],
    cta: 'CHOOSE STARTER',
    variant: 'default',
  },
  {
    name: 'PRO',
    price: '$7.5K',
    badge: 'MOST POPULAR',
    features: [
      'Comprehensive Growth Plan',
      'Full Multi-Page Platform',
      'Advanced Tech Stack',
      'Weekly Data Reports',
      'Unlimited Revisions',
    ],
    cta: 'GO PRO NOW',
    variant: 'featured',
  },
  {
    name: 'ELITE',
    price: '$15K+',
    features: [
      'Dedicated Design Team',
      'Custom Web Application',
      'Full Market Domination',
      '24/7 Priority Support',
    ],
    cta: 'CONTACT SALES',
    variant: 'default',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="pricing" aria-labelledby="pricing-heading">
      <header className="pricing__header">
        <h2 id="pricing-heading" className="pricing__title text-headline-lg-mobile uppercase">
          Select Your Tier
        </h2>
        <p className="pricing__subtitle text-label-mono">NO HIDDEN FEES. JUST RESULTS.</p>
      </header>

      <div className="pricing__grid">
        {TIERS.map((tier) => (
          <article
            key={tier.name}
            className={`neo-brutalist-card pricing__card pricing__card--${tier.variant}`}
          >
            {tier.badge && (
              <span className="pricing__badge text-label-mono uppercase">{tier.badge}</span>
            )}

            <h3 className="pricing__tier-name text-label-mono text-headline-md">{tier.name}</h3>

            <p className="pricing__price">
              {tier.price}<span className="pricing__period">/mo</span>
            </p>

            <ul className="pricing__features" role="list">
              {tier.features.map((feat) => (
                <li key={feat} className="pricing__feature text-body-md uppercase">
                  {feat}
                </li>
              ))}
            </ul>

            <button
              className={`pricing__cta pricing__cta--${tier.variant} text-ui-button uppercase`}
            >
              {tier.cta}
            </button>
          </article>
        ))}
      </div>
    </section>
  )
}
