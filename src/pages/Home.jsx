import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Clock, Phone, MapPin, Paperclip, X } from 'lucide-react'
import JungleBanner from '../components/JungleBanner'



const whyCards = [
  {
    title: 'Relationships First',
    desc: 'Trust and connection as the foundation for learning.',
  },
  {
    title: 'Every Child Is Unique',
    desc: "Honoring each child's individual interests and developmental pace.",
  },
  {
    title: 'Partners with Families',
    desc: 'Collaborating with parents to create the best environment for growth.',
  },
  {
    title: 'Joyful Learning',
    desc: 'Play-based curriculum that fosters wonder and discovery.',
  },
]

const labelStyle = { fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: 14, color: '#3D3D3D', display: 'block', marginBottom: 6 }
const inputStyle = { width: '100%', padding: '10px 14px', borderRadius: 10, border: '1.5px solid #e0e0db', fontSize: 15, color: '#2C2C2A', fontFamily: 'Inter, sans-serif', backgroundColor: '#fff' }

function ApplyModal({ open, onClose }) {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })
  const [fileName, setFileName] = useState('')
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (open) {
      setForm({ name: '', phone: '', email: '', message: '' })
      setFileName('')
      setSubmitted(false)
    }
  }, [open])

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300"
      style={{ backgroundColor: 'rgba(0,0,0,0.6)', opacity: open ? 1 : 0, pointerEvents: open ? 'auto' : 'none' }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl bg-white max-h-[90vh] overflow-y-auto"
        style={{ boxShadow: '0 25px 70px rgba(0,0,0,0.4)' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          style={{ top: 14, right: 14, width: 38, height: 38, color: '#666' }}
        >
          <X size={20} />
        </button>

        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-6">
              <div style={{ fontSize: 40 }}>🎉</div>
              <h3 style={{ fontFamily: 'Fredoka One, sans-serif', fontWeight: 400, color: '#2A9D8F', fontSize: 24 }} className="mt-2 mb-2">
                Application received!
              </h3>
              <p style={{ color: '#555', lineHeight: 1.6 }} className="mb-6">
                Thanks for your interest in joining Hometown Preschool — we'll review it and reach out soon.
              </p>
              <button
                onClick={onClose}
                style={{ backgroundColor: '#E8A838', color: '#fff', fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: 16 }}
                className="px-8 py-3 rounded-full shadow-md hover:opacity-90 transition-opacity"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              <h3 style={{ fontFamily: 'Fredoka One, sans-serif', fontWeight: 400, color: '#2C2C2A', fontSize: 'clamp(1.5rem, 3vw, 2rem)' }} className="mb-2">
                Join Our Team
              </h3>
              <p style={{ color: '#666', fontSize: 15, lineHeight: 1.6 }} className="mb-6">
                Tell us about yourself and attach your resume — we'd love to hear from you.
              </p>
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }} className="space-y-4">
                <div>
                  <label htmlFor="ap-name" style={labelStyle}>Full Name *</label>
                  <input id="ap-name" type="text" required placeholder="Jane Smith" value={form.name} onChange={set('name')} style={inputStyle} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="ap-phone" style={labelStyle}>Phone</label>
                    <input id="ap-phone" type="tel" placeholder="(608) 000-0000" value={form.phone} onChange={set('phone')} style={inputStyle} />
                  </div>
                  <div>
                    <label htmlFor="ap-email" style={labelStyle}>Email *</label>
                    <input id="ap-email" type="email" required placeholder="jane@email.com" value={form.email} onChange={set('email')} style={inputStyle} />
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>Resume</label>
                  <label
                    className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 transition-colors"
                    style={{ border: '1.5px dashed #cfcfc9', borderRadius: 10, padding: '11px 14px' }}
                  >
                    <Paperclip size={18} style={{ color: '#2A9D8F', flexShrink: 0 }} />
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: fileName ? '#2C2C2A' : '#999', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {fileName || 'Attach a file (PDF, DOC, DOCX)'}
                    </span>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      onChange={(e) => setFileName(e.target.files[0]?.name || '')}
                    />
                  </label>
                </div>
                <div>
                  <label htmlFor="ap-message" style={labelStyle}>Message</label>
                  <textarea
                    id="ap-message"
                    rows={4}
                    placeholder="Tell us a bit about yourself and why you'd like to join…"
                    value={form.message}
                    onChange={set('message')}
                    style={{ ...inputStyle, resize: 'vertical' }}
                  />
                </div>
                <button
                  type="submit"
                  style={{ backgroundColor: '#E8A838', color: '#fff', fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: 17, width: '100%' }}
                  className="py-3 rounded-full shadow-md hover:opacity-90 transition-opacity"
                >
                  Send Application
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  const [applyOpen, setApplyOpen] = useState(false)
  return (
    <div>
      {/* Combined hero + values */}
      <section className="flex flex-col lg:flex-row" style={{ minHeight: 'auto' }}>

        {/* Left: photo */}
        <div className="relative w-full lg:w-1/2 flex min-h-[300px] lg:min-h-[480px]">
          <img
            src="/images/hero-kids.png"
            alt="Two children at Hometown Preschool"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          {/* Gradient blend: photo fades into teal on the right edge */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, transparent 60%, rgba(142,197,184,0.55) 85%, #8EC5B8 100%)' }} />
        </div>

        {/* Right: teal + headline + CTA */}
        <div
          className="w-full lg:w-1/2 flex flex-col justify-center px-4 lg:px-14 py-12 lg:py-16"
          style={{ background: 'linear-gradient(to right, #8EC5B8, #00C9B1)' }}
        >
          <h1
            style={{ fontFamily: 'Fredoka One, sans-serif', fontWeight: 400, color: '#fff', fontSize: 'clamp(1.75rem, 4vw, 3.5rem)', lineHeight: 1.15 }}
            className="mb-4"
          >
            A Place That Feels Like Home
          </h1>
          <p
            style={{ color: 'rgba(255,255,255,0.92)', fontSize: 'clamp(0.95rem, 1.6vw, 1.2rem)', lineHeight: 1.7, maxWidth: 440 }}
            className="mb-8"
          >
            Serving Verona families since 2003 — where every child is known, loved, and celebrated.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              style={{ backgroundColor: '#E8A838', color: '#2C2C2A', fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: 19 }}
              className="px-10 py-4 rounded-full shadow-lg hover:opacity-90 transition-opacity"
            >
              Schedule a Tour
            </Link>
          </div>
        </div>
      </section>

      {/* Info bar */}
      <div style={{ background: '#3D3D3D', borderTop: '1px solid rgba(255,255,255,0.15)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-white">
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 600, fontSize: 15 }}>Mon–Fri, 6:30 AM – 5:30 PM</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={18} />
              <a href="tel:6088485437" className="hover:underline" style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 600, fontSize: 15 }}>
                (608) 848-5437
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              <span style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 600, fontSize: 15 }}>120 Enterprise Dr, Verona, WI</span>
            </div>
          </div>
        </div>
      </div>

      {/* Programs preview — jungle banner */}
      <JungleBanner />

      {/* More Than Childcare — values */}
      <section style={{ background: 'linear-gradient(to right, #8EC5B8, #00C9B1)' }} className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            style={{ fontFamily: 'Fredoka One, sans-serif', fontWeight: 400, color: '#fff', fontSize: 'clamp(1.75rem, 3.5vw, 2.6rem)', lineHeight: 1.2 }}
            className="text-center mb-10 md:mb-14"
          >
            More Than Childcare — It's Family
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyCards.map(({ title, desc }) => (
              <div key={title} style={{ borderTop: '3px solid rgba(255,255,255,0.45)', paddingTop: 16 }}>
                <div style={{ fontFamily: 'Fredoka One, sans-serif', fontWeight: 400, color: '#fff', fontSize: 22, marginBottom: 8, lineHeight: 1.2 }}>
                  {title}
                </div>
                <p style={{ fontFamily: 'Nunito, sans-serif', color: 'rgba(255,255,255,0.85)', fontSize: 16, lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Final CTA */}
      <section style={{ backgroundColor: '#FAFAF7', borderTop: '1px solid #e8e8e4' }} className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-4 md:gap-0">
          {/* Left: families */}
          <div className="text-center flex-1 w-full">
            <h2 style={{ fontFamily: 'Fredoka One, sans-serif', fontWeight: 400, color: '#4A4A45', fontSize: 'clamp(1.375rem, 3.5vw, 2.5rem)' }} className="mb-3">
              Ready to See It for Yourself?
            </h2>
            <p style={{ color: '#666', fontSize: 17, lineHeight: 1.6 }} className="mb-8">
              Schedule a tour and meet our team. We'd love to show you around.
            </p>
            <Link
              to="/contact"
              style={{ backgroundColor: '#E8A838', color: '#2C2C2A', fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: 18 }}
              className="block w-full md:inline-block md:w-auto px-10 py-4 rounded-full shadow-lg hover:opacity-90 transition-opacity"
            >
              Schedule a Tour
            </Link>
          </div>
          {/* Divider */}
          <div style={{ width: 1, alignSelf: 'stretch', backgroundColor: '#e8e8e4', margin: '0 4rem', flexShrink: 0 }} className="hidden md:block" />
          {/* Right: careers */}
          <div className="text-center flex-1 w-full">
            <h2 style={{ fontFamily: 'Fredoka One, sans-serif', fontWeight: 400, color: '#4A4A45', fontSize: 'clamp(1.375rem, 3.5vw, 2.5rem)' }} className="mb-3">
              Want to Join<br />Our Team?
            </h2>
            <p style={{ color: '#666', fontSize: 17, lineHeight: 1.6 }} className="mb-8">
              We're always looking for passionate, caring people to grow with us.
            </p>
            <button
              onClick={() => setApplyOpen(true)}
              style={{ backgroundColor: '#E8A838', color: '#2C2C2A', fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: 18 }}
              className="block w-full md:inline-block md:w-auto px-10 py-4 rounded-full shadow-lg hover:opacity-90 transition-opacity"
            >
              Apply Today
            </button>
          </div>
        </div>
      </section>

      <ApplyModal open={applyOpen} onClose={() => setApplyOpen(false)} />
    </div>
  )
}
