import { ImageOff } from 'lucide-react'

interface GalleryCardProps {
  category: string
}

/**
 * PLACEHOLDER GALLERY CARD
 * To swap in a real photo later:
 *   1. Put the image file in src/assets/gallery/
 *   2. Import it: import photo from '../assets/gallery/wedding-1.jpg'
 *   3. Replace the placeholder <div> below with:
 *        <img src={photo} alt="Description of the photo" className="h-64 w-full object-cover" />
 */
export default function GalleryCard({ category }: GalleryCardProps) {
  return (
    <div className="group overflow-hidden rounded-lg border border-white/10 bg-brand-charcoal">
      <div className="flex h-64 w-full flex-col items-center justify-center gap-2 bg-white/5 text-white/30 transition-colors duration-300 group-hover:bg-white/10">
        <ImageOff size={32} />
        <span className="text-xs uppercase tracking-wide">Photo placeholder</span>
      </div>
      <div className="border-t border-white/10 px-4 py-3">
        <h3 className="font-display text-lg uppercase tracking-wide text-white">{category}</h3>
      </div>
    </div>
  )
}
