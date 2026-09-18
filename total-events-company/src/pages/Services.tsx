import { Flower2, CalendarCheck2, Mic2, Speaker } from 'lucide-react'
import PageHero from '../components/PageHero'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data/siteConfig'

const iconMap = {
  Flower2,
  CalendarCheck2,
  Mic2,
  Speaker,
}

export default function Services() {
  return (
    <div>
      <PageHero
        title="Our Services"
        subtitle="Everything you need to plan, style, and produce a memorable event."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="grid gap-8 sm:grid-cols-2">
          {services.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap]
            return (
              <ServiceCard
                key={service.id}
                icon={Icon}
                title={service.title}
                description={service.description}
              />
            )
          })}
        </div>
      </section>
    </div>
  )
}
