import { Sparkles, Target, ListChecks, ShieldCheck } from 'lucide-react'
import PageHero from '../components/PageHero'
import { siteConfig } from '../data/siteConfig'

const sections = [
  {
    icon: Sparkles,
    title: 'Who We Are',
    body: `PLACEHOLDER CONTENT — ${siteConfig.companyName} is an event company based in ${siteConfig.country}. This section should describe the company's story, founding, and mission once final content is available.`,
  },
  {
    icon: Target,
    title: 'Our Approach',
    body: 'PLACEHOLDER CONTENT — Describe how the team approaches each event, from initial consultation through to delivery on the day. Replace with your real process once available.',
  },
  {
    icon: ListChecks,
    title: 'Our Services',
    body: 'PLACEHOLDER CONTENT — A short summary of the four core services (Decoration and Styling, Event Planning, Concerts and Live Shows, Sound and Lighting) can go here, linking through to the Services page.',
  },
  {
    icon: ShieldCheck,
    title: 'Why Work With Us',
    body: 'PLACEHOLDER CONTENT — Highlight reasons clients should choose the company. Do not include specific claims, statistics, or client names until they are confirmed.',
  },
]

export default function About() {
  return (
    <div>
      <PageHero
        title="About Us"
        subtitle="Placeholder company introduction — replace with your final content."
      />

      <section className="mx-auto max-w-5xl space-y-12 px-4 py-16 md:px-8">
        {sections.map((section) => (
          <div key={section.title} className="border-l-2 border-brand-red pl-6">
            <div className="mb-2 flex items-center gap-3">
              <section.icon className="text-brand-red" size={24} />
              <h2 className="font-display text-2xl uppercase tracking-wide text-white">
                {section.title}
              </h2>
            </div>
            <p className="leading-relaxed text-white/60">{section.body}</p>
          </div>
        ))}
      </section>
    </div>
  )
}
