const programs = [
  {
    slug: 'butterflies',
    name: 'Butterflies, Bunnies & Hedgies',
    ages: '6 Weeks – 2 Years',
    photo: '/images/gallery-10.jpg',
    illustration: '/images/classrooms/butterflies-bunnies-hedgies.svg',
    color: '#B0A0A8',
    description:
      "Our infant and young toddler program is built on the foundation of gentle care, providing warmth, security, and love during the most formative months of a child's life. Every baby is celebrated here.",
    bullets: [
      'Low teacher-to-child ratios for personalized attention',
      "Routines that follow a baby's natural rhythm",
      'Safe and sensory-rich environments for exploration',
      'Daily updates on feeding, naps, and milestones',
      'Nurturing teachers who celebrate every development',
    ],
  },
  {
    slug: 'foxes',
    name: 'Foxes',
    ages: '2–3 Years',
    photo: '/images/foxes-photo.png',
    illustration: '/images/classrooms/foxes.svg',
    color: '#E8A838',
    description:
      'Toddlers are natural explorers. Our Foxes classroom channels that boundless curiosity into joyful, hands-on learning experiences that build confidence, language, and early social skills.',
    bullets: [
      'Hands-on activities to stimulate learning',
      'Language-rich environments to build vocabulary',
      'Positive guidance through emotions',
      'Creative play and artistic expression',
      'Early social skills development through group activities',
    ],
  },
  {
    slug: 'owls',
    name: 'Owls',
    ages: '3–5 Years',
    photo: '/images/about-1.jpg',
    illustration: '/images/classrooms/owls.svg',
    color: '#8EC5B8',
    description:
      'Our Owls classroom builds a strong, joyful foundation for kindergarten success. Through play-based learning rooted in research, children develop academically, socially, and emotionally.',
    bullets: [
      'Emergent literacy and early math concepts',
      'STEM activities (Science, Technology, Engineering, Math)',
      'Social-emotional learning and conflict resolution',
      'Creative arts, music, and movement',
      'Joyful preparation for kindergarten',
    ],
  },
  {
    slug: 'badgers',
    name: '4K / Badgers',
    ages: '4K + Wraparound Care',
    photo: '/images/about-2.jpg',
    illustration: '/images/classrooms/badgers.svg',
    color: '#2A9D8F',
    description:
      "Our 4K Badgers program bridges the gap between preschool and kindergarten with a comprehensive curriculum and flexible extended care options that work with your family's schedule.",
    bullets: [
      'Comprehensive 4K curriculum',
      'Morning drop-off and afternoon pick-up options',
      'Structured learning time',
      'Extended care that feels like home',
    ],
  },
  {
    slug: 'wildcats',
    name: 'Wildcats',
    ages: 'School-Age Children',
    photo: '/images/gallery-9.jpg',
    illustration: '/images/classrooms/wildcats.svg',
    color: '#3D3D3D',
    description:
      'For elementary-age kids, our Wildcats program provides a safe, fun, and supportive environment after school and during breaks — a place where kids can unwind, explore, and be themselves.',
    bullets: [
      'Transportation from local elementary schools',
      'Homework support and quiet study time',
      'Active play and outdoor adventures',
      'Arts, crafts, and special projects',
      'Full-day care during school breaks and summer',
    ],
  },
]

import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function Programs() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const el = document.querySelector(hash)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [hash])

  return (
    <div>
      {/* Hero */}
      <section style={{ backgroundColor: '#2A9D8F' }} className="py-20 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 style={{ fontFamily: 'Fredoka One, sans-serif', fontWeight: 400, color: '#fff', fontSize: 'clamp(2rem, 5vw, 3.25rem)' }} className="mb-4">
            A Program for Every Child
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.88)', fontSize: 'clamp(1rem, 2vw, 1.2rem)', lineHeight: 1.7 }}>
            From 6 weeks to 12 years — nurturing programs tailored to every stage of development.
          </p>
        </div>
      </section>

      {/* Program sections */}
      {programs.map((prog, i) => {
        const isEven = i % 2 === 0
        return (
          <section
            key={prog.name}
            id={prog.slug}
            style={{ backgroundColor: i % 2 === 0 ? '#FAFAF7' : '#fff' }}
            className="py-16 lg:py-20"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 lg:gap-16 items-center`}>
                {/* Photo placeholder featuring the animal icon */}
                <div className="w-full lg:w-1/2 flex-shrink-0">
                  <div
                    className="rounded-[2rem] flex flex-col items-center justify-center gap-5 px-6"
                    style={{
                      backgroundColor: prog.color + '14',
                      border: `2px dashed ${prog.color}55`,
                      minHeight: 360,
                    }}
                  >
                    <img
                      src={prog.illustration}
                      alt={prog.name}
                      style={{ width: 'clamp(120px, 22vw, 170px)', height: 'clamp(120px, 22vw, 170px)', objectFit: 'contain' }}
                    />
                    <span
                      style={{ color: '#555', fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: 13, letterSpacing: 1, textTransform: 'uppercase' }}
                    >
                      Photo coming soon
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2">
                  <div className="flex items-center gap-4 mb-5">
                    <img
                      src={prog.illustration}
                      alt=""
                      style={{ width: 'clamp(64px, 12vw, 88px)', height: 'clamp(64px, 12vw, 88px)', objectFit: 'contain', flexShrink: 0 }}
                    />
                    <div>
                      <h2
                        style={{ fontFamily: 'Fredoka One, sans-serif', fontWeight: 400, color: '#2C2C2A', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', lineHeight: 1.1 }}
                      >
                        {prog.name}
                      </h2>
                      <p
                        style={{ color: '#666', fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 13, letterSpacing: 1.5, textTransform: 'uppercase', marginTop: 4 }}
                      >
                        {prog.ages}
                      </p>
                    </div>
                  </div>
                  <p style={{ color: '#555', fontSize: 16, lineHeight: 1.75 }} className="mb-6">
                    {prog.description}
                  </p>
                  <ul className="space-y-3">
                    {prog.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3" style={{ fontSize: 15, color: '#444', lineHeight: 1.5 }}>
                        <span
                          className="flex items-center justify-center rounded-full flex-shrink-0"
                          style={{ width: 22, height: 22, marginTop: 1, backgroundColor: prog.color + '22', color: '#555', fontSize: 12, fontWeight: 800 }}
                        >
                          ✓
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )
      })}

      {/* CTA */}
      <section style={{ backgroundColor: '#2A9D8F' }} className="py-16 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 style={{ fontFamily: 'Fredoka One, sans-serif', fontWeight: 400, color: '#fff', fontSize: 'clamp(1.5rem, 3vw, 2rem)' }} className="mb-3">
            Ready to Find the Right Fit?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 16 }} className="mb-8">
            Schedule a tour and see the classrooms for yourself.
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
