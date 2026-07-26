import { useState, useRef } from 'react'
import './Contact.css'

export default function Contact() {
  const [btnText, setBtnText] = useState('SUBMIT REQUEST')
  const formRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    setBtnText('SENDING...')

    setTimeout(() => {
      setBtnText('RECEIVED.')
      formRef.current?.reset()
      setTimeout(() => setBtnText('SUBMIT REQUEST'), 2000)
    }, 1500)
  }

  return (
    <section id="contact" className="contact" aria-labelledby="contact-heading">
      <div className="contact__info">
        <h2 id="contact-heading" className="contact__heading uppercase">
          Ready to <br /> Break the <br /> Mold?
        </h2>
        <p className="contact__blurb text-body-lg">
          Stop settling for template designs. Let&apos; build something that actually leaves a mark.
        </p>
        <address className="contact__address text-label-mono">
          <div className="contact__address-row">
            <a href="mailto:hello@northpeak.digital">HELLO@NORTHPEAK.DIGITAL</a>
          </div>
          <div className="contact__address-row">
            GLOBAL / REMOTE
          </div>
        </address>
      </div>

      <form ref={formRef} className="contact__form" onSubmit={handleSubmit} aria-label="Contact form">
        <div className="contact__field">
          <label htmlFor="contact-name" className="text-label-mono uppercase">NAME</label>
          <input
            id="contact-name"
            className="contact__input text-body-md"
            type="text"
            placeholder="YOUR NAME"
            required
          />
        </div>

        <div className="contact__field">
          <label htmlFor="contact-email" className="text-label-mono uppercase">EMAIL</label>
          <input
            id="contact-email"
            className="contact__input text-body-md"
            type="email"
            placeholder="YOUR@EMAIL.COM"
            required
          />
        </div>

        <div className="contact__field">
          <label htmlFor="contact-scope" className="text-label-mono uppercase">PROJECT SCOPE</label>
          <textarea
            id="contact-scope"
            className="contact__input text-body-md"
            placeholder="DESCRIBE YOUR VISION..."
            rows={4}
          />
        </div>

        <button
          type="submit"
          className="neo-brutalist-button contact__submit text-headline-md uppercase"
        >
          {btnText}
        </button>
      </form>
    </section>
  )
}
