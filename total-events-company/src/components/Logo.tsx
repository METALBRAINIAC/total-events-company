import logoImg from '../assets/logo.png'

interface LogoProps {
  className?: string
}

/**
 * The logo file has black text on a transparent background, so it needs a
 * light backing to stay readable against the site's dark background. If you
 * later get a white/reversed version of the logo made for dark backgrounds,
 * you can simplify this back down to a plain <img> tag.
 */
export default function Logo({ className = 'h-9 md:h-11' }: LogoProps) {
  return (
    <span className="inline-flex items-center rounded-md bg-white px-3 py-1.5">
      <img src={logoImg} alt="Total Event Co. logo" className={`w-auto object-contain ${className}`} />
    </span>
  )
}
