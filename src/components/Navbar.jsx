import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/programs', label: 'Programs' },
  { to: '/about', label: 'About' },
  { to: '/team', label: 'Our Team' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <header
      style={{
        background: '#FAFAF7',
        borderBottom: '5px solid #E8A838',
        boxShadow: scrolled ? '0 2px 12px rgba(0,0,0,0.15)' : 'none',
        overflow: 'visible',
      }}
      className="sticky top-0 z-50 transition-shadow duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16" style={{ alignItems: 'flex-start' }}>
          {/* Logo */}
          <Link to="/" className="flex group" style={{ alignSelf: 'flex-start', alignItems: 'center', gap: 2 }}>
            <img
              src="/images/HTP owl no bg.png"
              alt="Hometown Preschool owl logo"
              style={{ height: 90, display: 'block', flexShrink: 0 }}
              className="object-contain owl-logo"
            />
            <div style={{ alignSelf: 'flex-start', paddingTop: 4 }}>
              <div style={{ fontFamily: 'Fredoka One, sans-serif', color: '#2A9D8F', fontWeight: 400, fontSize: 28, lineHeight: 1.1 }}>
                Hometown
              </div>
              <div style={{ fontFamily: 'Fredoka One, sans-serif', color: '#2A9D8F', fontWeight: 400, fontSize: 20, lineHeight: 1.1, letterSpacing: '0.04em' }} className="uppercase">
                Preschool
              </div>
            </div>
          </Link>

          {/* Desktop nav — hidden until it comfortably fits */}
          <nav className="hidden lg:flex items-center gap-1 whitespace-nowrap" style={{ height: 64 }}>
            {links.map(({ to, label }) => {
              const active = location.pathname === to
              return (
                <Link
                  key={to}
                  to={to}
                  style={{
                    color: '#3D3D3D',
                    fontFamily: 'Nunito, sans-serif',
                    fontWeight: active ? 900 : 800,
                    fontSize: 17,
                    textDecoration: active ? 'underline' : 'none',
                    textUnderlineOffset: 4,
                  }}
                  className="px-3 py-2 rounded-lg transition-colors hover:opacity-75"
                >
                  {label}
                </Link>
              )
            })}
            <Link
              to="/contact"
              style={{
                backgroundColor: '#E8A838',
                color: '#2C2C2A',
                fontFamily: 'Nunito, sans-serif',
                fontWeight: 700,
                fontSize: 15,
              }}
              className="ml-3 px-5 py-2 rounded-full hover:opacity-90 transition-opacity shadow-sm"
            >
              Schedule a Tour
            </Link>
          </nav>

          {/* Mobile hamburger — hidden on desktop */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden flex items-center justify-center"
            style={{
              height: 64,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: 26,
              color: '#2A9D8F',
              padding: '0 4px',
            }}
            aria-label="Toggle menu"
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div
          className="lg:hidden"
          style={{ background: '#fff', borderTop: '1px solid #e8e8e4', width: '100%' }}
        >
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              style={{
                display: 'block',
                padding: '14px 24px',
                fontFamily: 'Nunito, sans-serif',
                fontWeight: 700,
                fontSize: 17,
                color: '#2A9D8F',
                textDecoration: 'none',
                borderBottom: '1px solid #f0f0ee',
              }}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
