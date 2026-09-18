import { Link } from 'react-router-dom'
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react'
import Logo from './Logo'
import { siteConfig } from '../data/siteConfig'

const footerLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About Us' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/book', label: 'Book an Event' },
  { to: '/contact', label: 'Contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-brand-black">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-3 md:px-8">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-white/60">
            {siteConfig.companyName} — {siteConfig.tagline}. Based in {siteConfig.country}.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-red">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm text-white/70">
            {footerLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="transition-colors hover:text-brand-red">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-red">
            Get In Touch
          </h3>
          <ul className="space-y-2 text-sm text-white/70">
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-brand-red" /> {siteConfig.phone}
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-brand-red" /> {siteConfig.email}
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} className="text-brand-red" /> {siteConfig.address}
            </li>
          </ul>
          <div className="mt-4 flex gap-4">
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Total Event Co. on Facebook"
              className="text-white/70 transition-colors hover:text-brand-red"
            >
              <Facebook size={20} />
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Total Event Co. on Instagram"
              className="text-white/70 transition-colors hover:text-brand-red"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-white/40">
        © {year} {siteConfig.companyName}. All rights reserved. (Placeholder footer text — edit freely.)
      </div>
    </footer>
  )
}
