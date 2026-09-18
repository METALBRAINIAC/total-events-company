import { useState, type FormEvent } from 'react'
import { AlertTriangle } from 'lucide-react'
import PageHero from '../components/PageHero'
import { services } from '../data/siteConfig'

export default function BookEvent() {
  const [submitted, setSubmitted] = useState(false)

  // Form submission is NOT connected to anything yet.
  // When ready to go live, replace handleSubmit with a real
  // integration (e.g. an API call, an email service like
  // Formspree/EmailJS, or your own backend endpoint).
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div>
      <PageHero
        title="Book an Event"
        subtitle="Tell us about your event and we'll get back to you."
      />

      <section className="mx-auto max-w-3xl px-4 py-16 md:px-8">
        <div className="mb-8 flex items-start gap-3 rounded-md border border-yellow-500/30 bg-yellow-500/10 p-4 text-sm text-yellow-200">
          <AlertTriangle size={20} className="mt-0.5 shrink-0" />
          <p>
            This form does not send anywhere yet. Submission functionality (email, database, or
            booking system) can be connected later — for now the form only shows a confirmation
            message on your screen.
          </p>
        </div>

        {submitted ? (
          <div className="rounded-md border border-brand-red/40 bg-brand-charcoal p-8 text-center">
            <h2 className="font-display text-2xl uppercase text-white">Thank You</h2>
            <p className="mt-2 text-white/60">
              This is a placeholder confirmation. Once submission is connected, a real enquiry
              would be sent to the team from here.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid gap-6 sm:grid-cols-2">
            <Field label="Full Name" name="fullName" required />
            <Field label="Company or Organisation" name="company" />
            <Field label="Phone Number" name="phone" type="tel" required />
            <Field label="Email Address" name="email" type="email" required />
            <Field label="Event Type" name="eventType" placeholder="e.g. Wedding, Corporate, Concert" required />
            <Field label="Preferred Event Date" name="eventDate" type="date" />
            <Field label="Event Location" name="eventLocation" className="sm:col-span-2" />
            <Field
              label="Estimated Number of Guests"
              name="guestCount"
              type="number"
              min={1}
            />

            <div className="sm:col-span-2">
              <label className="mb-2 block text-sm font-medium text-white/80">
                Services Required
              </label>
              <div className="grid gap-2 sm:grid-cols-2">
                {services.map((service) => (
                  <label
                    key={service.id}
                    className="flex items-center gap-2 rounded-md border border-white/10 bg-brand-charcoal px-3 py-2 text-sm text-white/70"
                  >
                    <input
                      type="checkbox"
                      name="servicesRequired"
                      value={service.title}
                      className="accent-brand-red"
                    />
                    {service.title}
                  </label>
                ))}
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-white/80">
                Additional Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full rounded-md border border-white/10 bg-brand-charcoal px-4 py-3 text-white placeholder-white/30 outline-none transition-colors focus:border-brand-red"
                placeholder="Tell us more about your event..."
              />
            </div>

            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full rounded-md bg-brand-red px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-all duration-200 hover:bg-brand-redDark hover:shadow-lg hover:shadow-brand-red/30 sm:w-auto"
              >
                Submit Enquiry
              </button>
            </div>
          </form>
        )}
      </section>
    </div>
  )
}

interface FieldProps {
  label: string
  name: string
  type?: string
  required?: boolean
  placeholder?: string
  className?: string
  min?: number
}

function Field({ label, name, type = 'text', required, placeholder, className, min }: FieldProps) {
  return (
    <div className={className}>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-white/80">
        {label}
        {required && <span className="text-brand-red"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        min={min}
        className="w-full rounded-md border border-white/10 bg-brand-charcoal px-4 py-3 text-white placeholder-white/30 outline-none transition-colors focus:border-brand-red"
      />
    </div>
  )
}
