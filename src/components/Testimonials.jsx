import './Testimonials.css'

const TESTIMONIALS = [
  {
    quote:
      "NORTHPEAK DELIVERED A PRODUCT THAT WASN'T JUST FUNCTIONAL, IT WAS DEVASTATINGLY EFFECTIVE.",
    cite: 'CTO, NEXUS TECHNOLOGIES',
    align: 'left',
  },
  {
    quote:
      'THEY REJECTED EVERY GENERIC SUGGESTION WE HAD AND GAVE US EXACTLY WHAT WE ACTUALLY NEEDED.',
    cite: 'FOUNDER, SHIFT AI',
    align: 'right',
  },
]

export default function Testimonials() {
  return (
    <section className="testimonials" aria-labelledby="testimonials-heading">
      <header className="testimonials__header">
        <h2 id="testimonials-heading" className="testimonials__title text-headline-lg-mobile uppercase">
          FEEDBACK
        </h2>
      </header>

      <div className="testimonials__list">
        {TESTIMONIALS.map(({ quote, cite, align }, i) => (
          <figure
            key={i}
            className={`testimonials__item testimonials__item--${i === 0 ? 'first' : 'rest'}`}
          >
            <div className={`testimonials__inner testimonials__inner--${align}`}>
              <blockquote className="testimonials__quote text-headline-lg-mobile uppercase">
                &ldquo;{quote}&rdquo;
              </blockquote>
              <figcaption className="testimonials__cite text-label-mono">
                — {cite}
              </figcaption>
            </div>
          </figure>
        ))}
      </div>
    </section>
  )
}
