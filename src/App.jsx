import { useState } from 'react'
import * as FM from 'framer-motion'
import emailjs from '@emailjs/browser'
import './App.css'

const CONTACT_EMAIL = 'info@crystalpropertysolutions.ca'
const CONTACT_PHONE = '+1 (647) 550-4388'
const CONTACT_PHONE_TEL = '+16475504388'
const FACEBOOK_URL = '#'
const INSTAGRAM_URL = '#'

const EMAILJS_PUBLIC_KEY = 'V8t6YRLgGtQf6gznL'
const EMAILJS_SERVICE_ID = 'service_7p3rgrn'
const EMAILJS_TEMPLATE_ID = 'template_g2o0cmk'

/** WhatsApp: country code + number, digits only (no + or spaces). */
const WHATSAPP_NUMBER = '16475504388'

const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  'Hi — I would like to ask about Crystal Property Solutions.',
)}`

const sectionReveal = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.12 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
}

const servicesItemReveal = {
  hidden: { opacity: 0, y: 18 },
  show: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
      delay: index * 0.06,
    },
  }),
}

const navLinks = [
  { href: '#why', label: 'Why choose us' },
  { href: '#services', label: 'Our services' },
  { href: '#quality', label: 'Quality promise' },
  { href: '#contact', label: 'Contact us' },
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="site">
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="header">
        <div className="header__inner">
          <a className="brand" href="#top" id="top">
            <span className="brand__mark">
              <img
                src="/logo.png"
                alt="Crystal Property Solutions"
                width={686}
                height={330}
                decoding="async"
                fetchPriority="high"
                className="brand__logo"
              />
            </span>
          </a>

          <button
            type="button"
            className={`nav-toggle ${menuOpen ? 'nav-toggle--open' : ''}`}
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="sr-only">Menu</span>
            <span className="nav-toggle__bar" />
            <span className="nav-toggle__bar" />
            <span className="nav-toggle__bar" />
          </button>

          <nav
            id="site-nav"
            className={`nav ${menuOpen ? 'nav--open' : ''}`}
            aria-label="Primary"
          >
            <div className="nav__cluster">
              <ul className="nav__list">
                {navLinks.map(({ href, label }) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="nav__link"
                      onClick={() => setMenuOpen(false)}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </header>

      <main id="main">
        <FM.motion.section
          className="hero"
          aria-labelledby="hero-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero__bg" aria-hidden />
          <div className="hero__inner">
            <div className="hero__intro">
              <p className="hero__eyebrow">Crystal Property Solutions</p>
              <span className="hero__rule" aria-hidden />
              <h1 id="hero-title" className="hero__title">
                Crystal-Clear Care for Every Property
              </h1>
              <p className="hero__lead">
                Complete property care from window cleaning and lawn care to
                pressure washing, garbage bin sanitization, and junk removal
                delivered with reliability, transparency, and attention to
                every detail.
              </p>
            </div>
            <div className="hero__actions">
              <FM.motion.a
                className="btn btn--primary hero__cta"
                href="#services"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 320, damping: 24 }}
              >
                <span className="hero__cta-text">Explore services</span>
                <svg
                  className="hero__cta-icon"
                  viewBox="0 0 24 24"
                  width={20}
                  height={20}
                  aria-hidden={true}
                >
                  <path
                    fill="currentColor"
                    d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"
                  />
                </svg>
              </FM.motion.a>
            </div>
          </div>
        </FM.motion.section>

        <FM.motion.section
          id="why"
          className="section section--alt"
          {...sectionReveal}
        >
          <div className="container">
            <header className="section__head">
              <h2 className="section__title">Why choose Crystal Property Solutions</h2>
              <p className="section__intro">
                We combine careful workmanship with respectful service—so your
                property looks its best without the hassle.
              </p>
            </header>
            <ul className="grid grid--why">
              <li className="card card--facet">
                <h3 className="card__title">Reliable scheduling</h3>
                <p>
                  Clear arrival windows and updates, so you always know what to
                  expect.
                </p>
              </li>
              <li className="card card--facet">
                <h3 className="card__title">Detail-focused team</h3>
                <p>
                  We treat finishes, glass, and planting with the same care we
                  would at home.
                </p>
              </li>
              <li className="card card--facet">
                <h3 className="card__title">Flexible scope</h3>
                <p>
                  From one-off visits to regular maintenance, we adapt as your
                  needs change.
                </p>
              </li>
              <li className="card card--facet">
                <h3 className="card__title">Transparent communication</h3>
                <p>
                  Honest recommendations—no upsells you do not need.
                </p>
              </li>
            </ul>
          </div>
        </FM.motion.section>

        <FM.motion.section id="services" className="section" {...sectionReveal}>
          <div className="container">
            <header className="section__head">
              <h2 className="section__title">Our services</h2>
              <p className="section__intro">
                Reliable cleaning and outdoor care services tailored for your
                home or property.
              </p>
            </header>
            <ul className="grid grid--services">
              <FM.motion.li
                className="service-card service-card--photo service-card--garden"
                custom={0}
                variants={servicesItemReveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
              >
                <div className="service-card__media">
                  <img
                    className="service-card__img"
                    src="/service-garden.jpg"
                    alt="Person using a trimmer to cut grass and neaten a garden edge"
                    width={1200}
                    height={1804}
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 640px) 100vw, (max-width: 1100px) 45vw, 360px"
                  />
                </div>
                <h3 className="service-card__title">Lawn mowing</h3>
                <p>
                  Regular mowing and edge trimming to keep your yard neat and
                  presentable.
                </p>
              </FM.motion.li>
              <FM.motion.li
                className="service-card service-card--photo service-card--mirror"
                custom={1}
                variants={servicesItemReveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
              >
                <div className="service-card__media">
                  <img
                    className="service-card__img"
                    src="/service-mirror.jpg"
                    alt="Streak-free mirror and glass—clean, clear surfaces after professional cleaning"
                    width={912}
                    height={563}
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 640px) 100vw, (max-width: 1100px) 45vw, 360px"
                  />
                </div>
                <h3 className="service-card__title">Window cleaning</h3>
                <p>
                  Streak-free window cleaning for clear views and a brighter
                  home.
                </p>
              </FM.motion.li>
              <FM.motion.li
                className="service-card service-card--photo service-card--bin"
                custom={2}
                variants={servicesItemReveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
              >
                <div className="service-card__media">
                  <img
                    className="service-card__img"
                    src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1200&q=80"
                    alt="Clean outdoor garbage bins after pressure rinsing"
                    width={1200}
                    height={800}
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 640px) 100vw, (max-width: 1100px) 45vw, 360px"
                  />
                </div>
                <h3 className="service-card__title">Garbage bin cleaning</h3>
                <p>
                  Deep clean and deodorising for household and commercial bins.
                </p>
              </FM.motion.li>
              <FM.motion.li
                className="service-card service-card--photo service-card--pressure"
                custom={3}
                variants={servicesItemReveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
              >
                <div className="service-card__media">
                  <img
                    className="service-card__img"
                    src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80"
                    alt="Pressure washing a driveway surface"
                    width={1200}
                    height={800}
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 640px) 100vw, (max-width: 1100px) 45vw, 360px"
                  />
                </div>
                <h3 className="service-card__title">Pressure washing</h3>
                <p>
                  Pressure washing for driveways, patios, and exterior surfaces.
                </p>
              </FM.motion.li>
              <FM.motion.li
                className="service-card service-card--photo service-card--junk"
                custom={4}
                variants={servicesItemReveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
              >
                <div className="service-card__media">
                  <img
                    className="service-card__img"
                    src="/service-junk.png"
                    alt="Team loading unwanted furniture for junk removal"
                    width={1200}
                    height={800}
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 640px) 100vw, (max-width: 1100px) 45vw, 360px"
                  />
                </div>
                <h3 className="service-card__title">Junk removal</h3>
                <p>
                  Fast pickup and responsible disposal of unwanted household
                  items.
                </p>
              </FM.motion.li>
            </ul>
          </div>
        </FM.motion.section>

        <FM.motion.section
          id="quality"
          className="section section--alt"
          {...sectionReveal}
        >
          <div className="container container--split">
            <div>
              <header className="section__head section__head--left">
                <h2 className="section__title">Quality promise</h2>
                <p className="section__intro">
                  Your property deserves consistent standards—here is what we
                  stand behind on every visit.
                </p>
              </header>
            </div>
            <ul className="promise-list">
              <li>
                <strong>Respect for your space</strong>
                <span>Careful setup, clean work areas, and tidy handover.</span>
              </li>
              <li>
                <strong>Right tools &amp; products</strong>
                <span>
                  Glass and garden work matched to surfaces and season.
                </span>
              </li>
              <li>
                <strong>Follow-up on concerns</strong>
                <span>
                  If something misses the mark, we work with you to make it
                  right.
                </span>
              </li>
              <li>
                <strong>Safety first</strong>
                <span>
                  Sensible precautions for ladders, equipment, and outdoor
                  conditions.
                </span>
              </li>
            </ul>
          </div>
        </FM.motion.section>

        <FM.motion.section
          id="contact"
          className="section section--contact"
          {...sectionReveal}
        >
          <div className="container container--contact">
            <header className="contact-section__head">
              <h2 className="section__title">Contact us</h2>
              <p className="section__intro contact-section__intro">
                Ready to book or ask a question? We typically reply within one
                business day.
              </p>
            </header>

            <div className="contact-grid">
              <div className="contact-card contact-card--form">
                <h3 className="contact-card__title">Send us a Message</h3>
                <ContactForm />
              </div>

              <aside className="contact-card contact-card--info">
                <h3 className="contact-card__title">Contact Info</h3>
                <ul className="contact-info">
                  <li className="contact-info__item">
                    <span className="contact-info__icon-wrap" aria-hidden>
                      <svg
                        className="contact-info__icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </span>
                    <div className="contact-info__body">
                      <span className="contact-info__label">Email</span>
                      <a
                        className="contact-info__value contact-info__link"
                        href={`mailto:${CONTACT_EMAIL}`}
                      >
                        {CONTACT_EMAIL}
                      </a>
                    </div>
                  </li>
                  <li className="contact-info__item">
                    <span className="contact-info__icon-wrap" aria-hidden>
                      <svg
                        className="contact-info__icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </span>
                    <div className="contact-info__body">
                      <span className="contact-info__label">Phone</span>
                      <a
                        className="contact-info__value contact-info__link"
                        href={`tel:${CONTACT_PHONE_TEL}`}
                      >
                        {CONTACT_PHONE}
                      </a>
                    </div>
                  </li>
                  <li className="contact-info__item">
                    <span className="contact-info__icon-wrap" aria-hidden>
                      <svg
                        className="contact-info__icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </span>
                    <div className="contact-info__body">
                      <span className="contact-info__label">Address</span>
                      <span className="contact-info__value contact-info__value--multiline">
                        7181 Madiera Rd, Mississauga, ON L4T 3A7
                      </span>
                    </div>
                  </li>
                  <li className="contact-info__item">
                    <span className="contact-info__icon-wrap" aria-hidden>
                      <svg
                        className="contact-info__icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </span>
                    <div className="contact-info__body">
                      <span className="contact-info__label">Business Hours</span>
                      <span className="contact-info__value contact-info__value--multiline">
                        Monday – Sunday: 7:00 AM – 9:00 PM
                      </span>
                    </div>
                  </li>
                </ul>
              </aside>
            </div>
          </div>
        </FM.motion.section>
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <div className="footer__brand">
            <div className="footer__logo-wrap">
              <img
                src="/logo.png"
                alt="Crystal Property Solutions"
                width={686}
                height={330}
                decoding="async"
                className="footer__logo"
              />
            </div>
            <p className="footer__tag">
              Crystal Property Solutions
              <br />
              Crystal-Clear Care for Every Property
            </p>
          </div>
          <div className="footer__meta">
            <p>
              © {new Date().getFullYear()} Crystal Property Solutions. All rights
              reserved.
            </p>
            <p className="footer__small">
              Contact:{" "}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> ·{" "}
              <a href={`tel:${CONTACT_PHONE_TEL}`}>{CONTACT_PHONE}</a>
            </p>
            <p className="footer__small footer__hours">
              Hours: Monday – Sunday: 7:00 AM – 9:00 PM
            </p>

            <div className="footer__social" aria-label="Social links">
              <span className="footer__social-label">Follow us</span>
              <a
                className="footer__social-link"
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                className="footer__social-link"
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M17.5 6.5h.01"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      <a
        className="whatsapp-fab"
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <svg
          className="whatsapp-fab__icon"
          viewBox="0 0 24 24"
          aria-hidden={true}
          focusable="false"
        >
          <path
            fill="currentColor"
            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.148-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
          />
        </svg>
      </a>
    </div>
  )
}

function ContactForm() {
  const [status, setStatus] = useState('idle')

  async function handleSubmit(e) {
    e.preventDefault()
    if (!EMAILJS_TEMPLATE_ID) {
      setStatus('missing_template')
      return
    }

    setStatus('sending')
    const form = e.target
    const data = new FormData(form)
    const name = data.get('name')?.toString().trim() || 'Client'
    const fromEmail = data.get('email')?.toString().trim()
    const message = data.get('message')?.toString().trim() || ''

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: name,
          reply_to: fromEmail,
          message,
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      )
      form.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="field field--name">
        <label htmlFor="name">Full Name</label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Your name"
          required
        />
      </div>
      <div className="field field--email">
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          required
        />
      </div>
      <div className="field field--message">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={6}
          placeholder="Tell us about your property, preferred times, or any access notes…"
        />
      </div>
      <div className="contact-form__actions">
        <button type="submit" className="btn btn--primary contact-form__submit">
          {status === 'sending' ? 'Sending…' : 'Submit'}
        </button>
        {status === 'sent' && (
          <p className="form-note" role="status">
            Message sent. We’ll get back to you soon.
          </p>
        )}
        {status === 'missing_template' && (
          <p className="form-note" role="status">
            Email sending is not configured yet (missing EmailJS Template ID).
          </p>
        )}
        {status === 'error' && (
          <p className="form-note" role="status">
            Something went wrong sending your message. Please email us directly
            at {CONTACT_EMAIL}.
          </p>
        )}
      </div>
    </form>
  )
}
