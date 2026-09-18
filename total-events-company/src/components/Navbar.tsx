import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About Us' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/book', label: 'Book an Event' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 text-sm tracking-wide uppercase transition-colors duration-200 hover:text-brand-red ${
      isActive ? 'text-brand-red' : 'text-white/90'
    }`

  return (
    <header className="sticky top-0 z-50 bg-brand-black/95 backdrop-blur border-b border-white/10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <Link to="/" onClick={() => setOpen(false)} aria-label="Total Event Co. home">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex md:items-center md:gap-1">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClasses} end={link.to === '/'}>
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/book"
            className="ml-4 rounded-md bg-brand-red px-5 py-2 text-sm font-semibold uppercase tracking-wide text-white transition-colors duration-200 hover:bg-brand-redDark"
          >
            Book an Event
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="text-white md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile nav panel */}
      {open && (
        <div className="border-t border-white/10 bg-brand-black md:hidden">
          <div className="flex flex-col px-4 py-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setOpen(false)}
                className={linkClasses}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
