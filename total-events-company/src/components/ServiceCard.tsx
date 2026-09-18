import { type LucideIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  compact?: boolean
}

export default function ServiceCard({ icon: Icon, title, description, compact }: ServiceCardProps) {
  return (
    <div className="group flex flex-col rounded-lg border border-white/10 bg-brand-charcoal p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-red/60 hover:shadow-lg hover:shadow-brand-red/10">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-red/10 text-brand-red transition-colors duration-300 group-hover:bg-brand-red group-hover:text-white">
        <Icon size={28} />
      </div>
      <h3 className="mb-2 font-display text-xl uppercase tracking-wide text-white">{title}</h3>
      <p className="mb-4 text-sm leading-relaxed text-white/60">{description}</p>

      {!compact && (
        <>
          {/* PLACEHOLDER PHOTO SLOT — replace this block with a real <img> once photos are available */}
          <div className="mb-4 flex h-40 items-center justify-center rounded-md border border-dashed border-white/20 bg-white/5 text-xs uppercase tracking-wide text-white/30">
            Photo placeholder
          </div>

          <Link
            to="/book"
            className="mt-auto inline-block rounded-md border border-brand-red px-4 py-2 text-center text-sm font-semibold uppercase tracking-wide text-brand-red transition-colors duration-200 hover:bg-brand-red hover:text-white"
          >
            Enquire Now
          </Link>
        </>
      )}
    </div>
  )
}
