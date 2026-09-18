import { Phone, Mail, MapPin, Facebook, Instagram, Link2 } from 'lucide-react'
import PageHero from '../components/PageHero'
import { siteConfig } from '../data/siteConfig'

const contactItems = [
  { icon: Phone, label: 'Phone', value: siteConfig.phone },
  { icon: Mail, label: 'Email', value: siteConfig.email },
  { icon: MapPin, label: 'Location', value: siteConfig.address },
]

const socialItems = [
  { icon: Facebook, label: 'Facebook', value: siteConfig.social.facebook },
  { icon: Instagram, label: 'Instagram', value: siteConfig.social.instagram },
  // Add more platforms here, e.g. { icon: Youtube, label: 'YouTube', value: 'PLACEHOLDER' }
]

export default function Contact() {
  return (
    <div>
      <PageHero title="Contact Us" subtitle="All details below are placeholders — replace with real information." />

      <section className="mx-auto max-w-4xl px-4 py-16 md:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {contactItems.map((item) => (
            <div
              key={item.label}
              className="flex items-start gap-4 rounded-lg border border-white/10 bg-brand-charcoal p-6"
            >
              <item.icon className="mt-1 text-brand-red" size={22} />
              <div>
                <h3 className="text-sm uppercase tracking-wide text-white/50">{item.label}</h3>
                <p className="mt-1 text-white">{item.value}</p>
              </div>
            </div>
          ))}

          {socialItems.map((item) => (
            <a
              key={item.label}
              href={item.value}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 rounded-lg border border-white/10 bg-brand-charcoal p-6 transition-colors hover:border-brand-red/50"
            >
              <item.icon className="mt-1 text-brand-red" size={22} />
              <div>
                <h3 className="text-sm uppercase tracking-wide text-white/50">{item.label}</h3>
                <p className="mt-1 break-all text-white">{item.value}</p>
              </div>
            </a>
          ))}

          <div className="flex items-start gap-4 rounded-lg border border-dashed border-white/20 bg-brand-charcoal/50 p-6 sm:col-span-2">
            <Link2 className="mt-1 text-white/40" size={22} />
            <div>
              <h3 className="text-sm uppercase tracking-wide text-white/50">
                Other Social Media
              </h3>
              <p className="mt-1 text-white/40">
                Add any additional platforms (TikTok, YouTube, LinkedIn, etc.) in{' '}
                <code className="rounded bg-white/10 px-1 py-0.5 text-xs">
                  src/data/siteConfig.ts
                </code>{' '}
                and list them in{' '}
                <code className="rounded bg-white/10 px-1 py-0.5 text-xs">
                  src/pages/Contact.tsx
                </code>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
