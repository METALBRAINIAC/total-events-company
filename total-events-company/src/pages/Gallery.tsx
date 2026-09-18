import PageHero from '../components/PageHero'
import GalleryCard from '../components/GalleryCard'
import { galleryCategories } from '../data/siteConfig'

export default function Gallery() {
  return (
    <div>
      <PageHero
        title="Gallery"
        subtitle="Photos will be added here soon — every card below is a placeholder."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryCategories.map((category) => (
            <GalleryCard key={category} category={category} />
          ))}
        </div>
      </section>
    </div>
  )
}
