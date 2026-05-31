import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{ background: '#4A4A45', color: '#fff' }} className="mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/HTP owl no bg.png"
                alt="Hometown Preschool"
                style={{ height: 48, filter: 'brightness(0) invert(1)' }}
                className="object-contain"
              />
              <div>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 18, color: '#8EC5B8' }}>
                  Hometown
                </div>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: 14, color: '#ccc', letterSpacing: '0.05em' }} className="uppercase">
                  Preschool
                </div>
              </div>
            </div>
            <p style={{ color: '#bbb', fontSize: 14, lineHeight: 1.7 }}>
              Serving Verona families since 2003 — where every child is known, loved, and celebrated.
            </p>
          </div>

          {/* Contact info */}
          <div>
            <h3 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: 16, color: '#8EC5B8', marginBottom: 16 }}>
              Contact Us
            </h3>
            <div className="space-y-3" style={{ fontSize: 14, color: '#ccc' }}>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" style={{ color: '#8EC5B8' }} />
                <span>120 Enterprise Dr., Verona, WI 53593</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} style={{ color: '#8EC5B8' }} />
                <a href="tel:6088485437" className="hover:text-white transition-colors">(608) 848-5437</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} style={{ color: '#8EC5B8' }} />
                <a href="mailto:admin@hometownpreschool.com" className="hover:text-white transition-colors">
                  admin@hometownpreschool.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Clock size={16} className="mt-0.5 flex-shrink-0" style={{ color: '#8EC5B8' }} />
                <span>Mon–Fri, 6:30 AM – 5:30 PM</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: 16, color: '#8EC5B8', marginBottom: 16 }}>
              Quick Links
            </h3>
            <div className="space-y-2" style={{ fontSize: 14 }}>
              {[
                { to: '/', label: 'Home' },
                { to: '/programs', label: 'Programs' },
                { to: '/about', label: 'About Us' },
                { to: '/team', label: 'Our Team' },
                { to: '/contact', label: 'Contact & Tours' },
              ].map(({ to, label }) => (
                <div key={to}>
                  <Link to={to} style={{ color: '#ccc' }} className="hover:text-white transition-colors">
                    {label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          style={{ borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: 40, paddingTop: 24, fontSize: 13, color: '#888' }}
          className="text-center"
        >
          © {new Date().getFullYear()} Hometown Preschool. All rights reserved. · 120 Enterprise Dr., Verona, WI 53593
        </div>
      </div>
    </footer>
  )
}
