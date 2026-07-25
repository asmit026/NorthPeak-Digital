import './Services.css'

const SERVICES = [
  {
    num: '01',
    icon: 'strategy',
    title: 'STRATEGY',
    desc: "Deep-dive market analysis and architectural roadmaps. We define the 'Why' before the 'How'.",
  },
  {
    num: '02',
    icon: 'code',
    title: 'DEV',
    desc: 'Hardened, scalable infrastructure built with modern stacks. Clean code, zero bloat, maximum performance.',
    variant: 'highlight',
  },
  {
    num: '03',
    icon: 'brush',
    title: 'DESIGN',
    desc: "Brutal aesthetics meet precise UI engineering. Designs that don't just look good—they work.",
  },
  {
    num: '04',
    icon: 'trending_up',
    title: 'GROWTH',
    desc: 'Aggressive optimization strategies to scale your user base and revenue through data-backed moves.',
  },
  {
    num: '05',
    icon: 'edit_note',
    title: 'CONTENT',
    desc: 'High-impact narrative design and visual storytelling that positions your brand as a market leader.',
  },
  {
    num: '06',
    icon: 'database',
    title: 'DATA',
    desc: 'Custom analytics and business intelligence pipelines to see what your competitors are missing.',
    variant: 'dark',
    iconStyle: { fontVariationSettings: "'FILL' 1" },
  },
]

export default function Services() {
  return (
    <section id="services" className="services" aria-labelledby="services-heading">
      <header className="services__header">
        <h2 id="services-heading" className="services__title text-headline-lg-mobile uppercase">
          Core Competencies
        </h2>
        <div className="services__accent-bar" aria-hidden="true" />
      </header>

      <div className="services__grid">
        {SERVICES.map((svc) => (
          <article
            key={svc.num}
            className={`neo-brutalist-card services__card services__card--${svc.variant || 'default'}`}
          >
            <div className="services__card-header">
              <span className={`text-label-mono text-headline-md services__card-num services__card-num--${svc.variant || 'default'}`}>
                {svc.num}
              </span>
              <span
                className={`material-symbols-outlined services__card-icon services__card-icon--${svc.variant || 'default'}`}
                aria-hidden="true"
                style={svc.iconStyle}
              >
                {svc.icon}
              </span>
            </div>
            <h3 className="text-headline-md uppercase">{svc.title}</h3>
            <p className={`text-body-md services__card-desc services__card-desc--${svc.variant || 'default'}`}>
              {svc.desc}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
