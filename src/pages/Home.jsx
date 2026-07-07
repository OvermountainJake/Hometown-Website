import { Link } from 'react-router-dom'
import { Clock, Phone, MapPin } from 'lucide-react'
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

export default function Home() {
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
            <Link
              to="/contact"
              style={{ backgroundColor: '#E8A838', color: '#2C2C2A', fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: 18 }}
              className="block w-full md:inline-block md:w-auto px-10 py-4 rounded-full shadow-lg hover:opacity-90 transition-opacity"
            >
              Apply Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
