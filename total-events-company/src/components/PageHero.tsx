interface PageHeroProps {
  title: string
  subtitle?: string
}

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-brand-black bg-cinematic-glow py-20 text-center">
      <div className="mx-auto max-w-3xl px-4">
        <h1 className="font-display text-4xl uppercase tracking-wide text-white md:text-6xl">
          {title}
        </h1>
        {subtitle && <p className="mt-4 text-white/60 md:text-lg">{subtitle}</p>}
        <div className="mx-auto mt-6 h-1 w-20 bg-brand-red" />
      </div>
    </section>
  )
}
