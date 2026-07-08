import { useState } from 'react'

const testimonials = [
  {
    quote: "From the moment we walked through the doors, we knew Hometown Preschool was something special. Our daughters have flourished here, surrounded by teachers who truly care about their happiness and growth.",
    family: 'The Colstad Family',
    bg: '#FDF6E9',
    rotate: -2.5,
    offset: 0,
  },
  {
    quote: "We love Hometown Preschool! Over the past five years, both of my boys have attended, and it has been a wonderful experience. The staff is fantastic. I always know my boys are well cared for and having fun while they are in their care.",
    family: 'The Chatham Family',
    bg: '#EAF5F2',
    rotate: 1.5,
    offset: 32,
  },
  {
    quote: "We have had such a wonderful experience at Hometown Preschool with both our kids. From day one, the teachers and staff have created a warm, welcoming environment where our kids feel safe, supported, and genuinely excited to learn each day. It's clear how much care and intention goes into everything they do.",
    family: 'The Woods Family',
    bg: '#F6EFF1',
    rotate: -1.5,
    offset: 12,
  },
]

const traditions = [
  {
    title: 'Thanksgiving Dinner',
    body: "Every November, families gather around long tables for a Thanksgiving meal cooked from scratch in our own kitchen. Children help set the tables and welcome their grown-ups, turning an ordinary school day into a shared celebration of gratitude.",
    images: [{ src: '/images/event-thanksgiving.jpg', alt: 'Families sharing Thanksgiving dinner at Hometown Preschool', n: 7 }],
  },
  {
    title: 'Christmas Program',
    body: "Weeks of practice come together on one joyful night. Our children take the stage to sing for a room full of proud parents, grandparents, and siblings — a little nervous, a lot excited, and unforgettable every single year.",
    images: [
      { src: '/images/event-christmas-1.jpg', alt: 'Children performing at the Hometown Preschool Christmas program', n: 8 },
      { src: '/images/event-christmas-2.jpg', alt: 'Families watching the Hometown Preschool Christmas program', n: 9 },
    ],
  },
  {
    title: '4K Graduation',
    body: "For our oldest friends, 4K graduation marks a big step toward kindergarten. Caps, certificates, and a few happy tears send them off ready — and remind us just how far they've grown while they've been with us.",
    images: [{ src: '/images/event-graduation.jpg', alt: '4K graduates at Hometown Preschool', n: 10 }],
  },
]

function TraditionImage({ src, alt, height = 340, label = 'Photo coming soon' }) {
  return (
    <div
      className="rounded-2xl overflow-hidden relative w-full"
      style={{ backgroundColor: '#8EC5B820', minHeight: height }}
    >
      <span
        className="absolute inset-0 flex items-center justify-center text-center px-4"
        style={{ color: '#2A9D8F', fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 14, letterSpacing: 1 }}
      >
        {label}
      </span>
      <img
        src={src}
        alt={alt}
        className="w-full object-cover relative"
        style={{ height, boxShadow: '0 4px 30px rgba(0,0,0,0.1)' }}
        onError={(e) => { e.target.style.display = 'none' }}
      />
    </div>
  )
}

function Polaroid({ src, alt, rotate = 0, height = 320, label = 'Photo coming soon' }) {
  return (
    <div
      className="relative bg-white transition-transform duration-300 hover:!rotate-0 hover:z-10"
      style={{
        padding: 12,
        paddingBottom: 22,
        borderRadius: 2,
        boxShadow: '0 16px 34px rgba(0,0,0,0.18)',
        transform: `rotate(${rotate}deg)`,
      }}
    >
      {/* washi tape */}
      <span
        className="absolute left-1/2 -translate-x-1/2"
        style={{ top: -10, width: 76, height: 22, backgroundColor: 'rgba(142,197,184,0.55)', transform: 'translateX(-50%) rotate(-3deg)', boxShadow: '0 1px 2px rgba(0,0,0,0.12)' }}
      />
      <div
        className="relative overflow-hidden"
        style={{ backgroundColor: '#8EC5B820', minHeight: height }}
      >
        <span
          className="absolute inset-0 flex items-center justify-center text-center px-4"
          style={{ color: '#2A9D8F', fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 13, letterSpacing: 1 }}
        >
          {label}
        </span>
        <img
          src={src}
          alt={alt}
          className="w-full object-cover relative block"
          style={{ height }}
          onError={(e) => { e.target.style.display = 'none' }}
        />
      </div>
    </div>
  )
}

export default function About() {
  const [lightbox, setLightbox] = useState(null)

  return (
    <div>
      {/* Hero — centered text + placeholder row */}
      <section style={{ backgroundColor: '#2A9D8F' }} className="py-6 flex items-center justify-center min-h-[240px]">
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            style={{ fontFamily: 'Fredoka One, sans-serif', fontWeight: 400, color: '#fff', fontSize: 'clamp(1.75rem, 5vw, 3rem)', lineHeight: 1.2 }}
            className="mb-5"
          >
            Where Little Hearts Grow Big Dreams
          </h1>
          <div className="max-w-2xl mx-auto">
            <p
              style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, letterSpacing: 1, textTransform: 'uppercase', color: '#E8A838', fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}
              className="mb-3"
            >
              Our Mission
            </p>
            <p style={{ color: 'rgba(255,255,255,0.88)', fontSize: 18, lineHeight: 1.7 }}>
              To nurture confident, curious, and compassionate children by building meaningful relationships with families and creating joyful learning experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story + hero photo row */}
      <section style={{ backgroundColor: '#fff' }} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 style={{ fontFamily: 'Fredoka One, sans-serif', fontWeight: 400, fontSize: 'clamp(1.75rem, 3.5vw, 2.25rem)', color: '#2A9D8F' }} className="mb-6">
              Born From a Simple Belief
            </h2>
            <p style={{ color: '#555', fontSize: 17, lineHeight: 1.8 }}>
              Hometown Preschool was born from a simple belief: child care should feel extraordinary, not ordinary. For over 20 years, we've been creating joyful learning experiences for every age and stage, serving the Verona, WI community since 2003. The center welcomes and accepts children regardless of race, serving infants through school-age children Monday through Friday, 6:30 AM to 5:30 PM.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div
                key={n}
                className="cursor-pointer"
                onClick={() => setLightbox(n)}
              >
                <TraditionImage src={`/images/hero-${n}.jpg`} alt="" height={200} label={`IMAGE ${n}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox — click a photo to enlarge, click backdrop or × to close */}
      <div
        className="fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300"
        style={{ backgroundColor: 'rgba(0,0,0,0.65)', opacity: lightbox ? 1 : 0, pointerEvents: lightbox ? 'auto' : 'none' }}
        onClick={() => setLightbox(null)}
      >
        <button
          onClick={() => setLightbox(null)}
          aria-label="Close"
          className="absolute flex items-center justify-center rounded-full hover:opacity-80 transition-opacity"
          style={{ top: 20, right: 24, width: 44, height: 44, color: '#fff', fontSize: 28, lineHeight: 1, backgroundColor: 'rgba(255,255,255,0.15)' }}
        >
          ×
        </button>
        <div
          className="rounded-2xl overflow-hidden relative transition-transform duration-300 ease-out"
          style={{
            width: 'min(720px, 88vw)',
            height: 'min(500px, 70vh)',
            backgroundColor: '#8EC5B820',
            boxShadow: '0 25px 70px rgba(0,0,0,0.55)',
            transform: lightbox ? 'scale(1)' : 'scale(0.85)',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <span
            className="absolute inset-0 flex items-center justify-center text-center px-4"
            style={{ color: '#2A9D8F', fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 18, letterSpacing: 1 }}
          >
            {lightbox ? `IMAGE ${lightbox}` : 'Photo coming soon'}
          </span>
          {lightbox && (
            <img
              src={`/images/hero-${lightbox}.jpg`}
              alt=""
              className="w-full h-full object-cover relative"
              onError={(e) => { e.target.style.display = 'none' }}
            />
          )}
        </div>
      </div>

      {/* Testimonials — notes pinned to the wall */}
      <section style={{ backgroundColor: '#FAFAF7' }} className="py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 style={{ fontFamily: 'Fredoka One, sans-serif', fontWeight: 400, color: '#2C2C2A', fontSize: 'clamp(1.75rem, 3.5vw, 2.25rem)' }}>
              Notes From Our Families
            </h2>
          </div>
          <div className="flex flex-col md:flex-row md:items-start justify-center gap-8 md:gap-6">
            {testimonials.map(({ quote, family, bg, rotate, offset }) => (
              <div
                key={family}
                className="relative w-full md:w-1/3 p-7 pt-9 transition-transform duration-300 hover:!rotate-0 hover:!translate-y-0"
                style={{
                  backgroundColor: bg,
                  borderRadius: 4,
                  transform: `rotate(${rotate}deg) translateY(${offset}px)`,
                  boxShadow: '0 10px 24px rgba(0,0,0,0.10)',
                }}
              >
                {/* pin */}
                <span
                  className="absolute left-1/2 -translate-x-1/2 rounded-full"
                  style={{ top: -8, width: 16, height: 16, backgroundColor: '#E8A838', boxShadow: 'inset 0 -2px 3px rgba(0,0,0,0.25), 0 2px 4px rgba(0,0,0,0.3)' }}
                />
                <p style={{ color: '#4A4A45', fontSize: 15.5, lineHeight: 1.8 }}>
                  {quote}
                </p>
                <p
                  style={{ fontFamily: 'Caveat, Nunito, cursive', fontWeight: 700, color: '#2A9D8F', fontSize: 24, lineHeight: 1 }}
                  className="mt-5"
                >
                  {family}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Traditions */}
      <section style={{ backgroundColor: '#FAFAF7' }} className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 style={{ fontFamily: 'Fredoka One, sans-serif', fontWeight: 400, color: '#2C2C2A', fontSize: 'clamp(1.75rem, 3.5vw, 2.25rem)' }} className="mb-4">
              The Moments We Look Forward To
            </h2>
            <p style={{ color: '#555', fontSize: 17, lineHeight: 1.7, maxWidth: 640 }} className="mx-auto">
              A few traditions bring our whole community together year after year.
            </p>
          </div>

          <div className="flex flex-col gap-20">
            {traditions.map(({ title, body, images }, i) => (
              <div
                key={title}
                className={`flex flex-col gap-10 lg:gap-16 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
              >
                <div className="w-full lg:w-1/2 flex justify-center">
                  {images.length === 1 ? (
                    <div className="w-full max-w-sm">
                      <Polaroid src={images[0].src} alt={images[0].alt} rotate={i % 2 === 1 ? 2.5 : -2.5} height={340} label={`IMAGE ${images[0].n}`} />
                    </div>
                  ) : (
                    <div className="flex justify-center items-start">
                      <div className="w-40 sm:w-48 md:w-56" style={{ marginRight: -20, zIndex: 2 }}>
                        <Polaroid src={images[0].src} alt={images[0].alt} rotate={-5} height={200} label={`IMAGE ${images[0].n}`} />
                      </div>
                      <div className="w-40 sm:w-48 md:w-56" style={{ marginTop: 40, zIndex: 1 }}>
                        <Polaroid src={images[1].src} alt={images[1].alt} rotate={5} height={200} label={`IMAGE ${images[1].n}`} />
                      </div>
                    </div>
                  )}
                </div>
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                  <h3
                    style={{ fontFamily: 'Caveat, cursive', fontWeight: 700, color: '#2A9D8F', fontSize: 'clamp(2.25rem, 4vw, 3rem)', lineHeight: 1.05 }}
                    className="mb-3"
                  >
                    {title}
                  </h3>
                  <p style={{ color: '#555', fontSize: 16, lineHeight: 1.85 }}>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#2A9D8F' }} className="py-16 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 style={{ fontFamily: 'Fredoka One, sans-serif', fontWeight: 400, color: '#fff', fontSize: 'clamp(1.5rem, 3vw, 2rem)' }} className="mb-3">
            Come See What Makes Us Home
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 16 }} className="mb-8">
            Schedule a tour and feel the difference for yourself.
          </p>
          <a
            href="/contact"
            style={{ backgroundColor: '#E8A838', color: '#fff', fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: 17 }}
            className="inline-block px-8 py-3 rounded-full shadow-lg hover:opacity-90 transition-opacity"
          >
            Schedule a Tour
          </a>
        </div>
      </section>
    </div>
  )
}
