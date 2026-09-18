import { Link } from 'react-router-dom'
import { Flower2, CalendarCheck2, Mic2, Speaker } from 'lucide-react'
import ServiceCard from '../components/ServiceCard'
import { siteConfig, services } from '../data/siteConfig'

const iconMap = {
  Flower2,
  CalendarCheck2,
  Mic2,
  Speaker,
}

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-brand-black bg-cinematic-glow text-center">
        {/* Subtle animated accent */}
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute left-1/4 top-1/3 h-64 w-64 animate-pulse rounded-full bg-brand-red/10 blur-3xl" />
          <div className="absolute right-1/4 bottom-1/4 h-72 w-72 animate-pulse rounded-full bg-brand-red/10 blur-3xl [animation-delay:1s]" />
        </div>

        <div className="relative z-10 mx-auto max-w-3xl px-4">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-brand-red">
            {siteConfig.country}
          </p>
          <h1 className="font-display text-5xl uppercase leading-tight tracking-wide text-white md:text-7xl">
            {siteConfig.tagline}
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-white/70 md:text-lg">
            {siteConfig.companyName} provides event planning, decoration and styling, concerts
            and live shows, and sound and lighting services — bringing every event to life from
            start to finish.
            <span className="block mt-2 text-xs uppercase tracking-wide text-white/30">
              (Placeholder text — replace with your final company description)
            </span>
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/book"
              className="w-full rounded-md bg-brand-red px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-all duration-200 hover:bg-brand-redDark hover:shadow-lg hover:shadow-brand-red/30 sm:w-auto"
            >
              Book an Event
            </Link>
            <Link
              to="/services"
              className="w-full rounded-md border border-white/30 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-all duration-200 hover:border-brand-red hover:text-brand-red sm:w-auto"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl uppercase tracking-wide text-white md:text-4xl">
            What We Do
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 bg-brand-red" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap]
            return (
              <ServiceCard
                key={service.id}
                icon={Icon}
                title={service.title}
                description={service.description}
                compact
              />
            )
          })}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="border-t border-white/10 bg-brand-charcoal py-16 text-center">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="font-display text-3xl uppercase tracking-wide text-white md:text-4xl">
            Ready to Plan Your Next Event?
          </h2>
          <p className="mt-4 text-white/60">
            Get in touch and let's start bringing your vision to life.
          </p>
          <Link
            to="/book"
            className="mt-8 inline-block rounded-md bg-brand-red px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-all duration-200 hover:bg-brand-redDark hover:shadow-lg hover:shadow-brand-red/30"
          >
            Book an Event
          </Link>
        </div>
      </section>
    </div>
  )
}
