import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const leadership = [
  {
    name: 'Ms. Sara',
    role: 'Director',
    bio: 'Originally from Viroqua, WI. Has been part of Hometown Preschool since the day it opened in 2003. Earned her administrator\'s credential in 2006. Passionate about making sure every child has a safe and loving start to their education.',
  },
  {
    name: 'Ms. Nicole',
    role: 'Assistant Director',
    bio: 'A native Madisonian with a BS in Elementary Education from UW–Madison. On her third tour of duty at HTP. Also coaches swim for students with disabilities. Passionate about lifting up people whose voices aren\'t always heard.',
  },
  {
    name: 'Ms. Laura',
    role: 'Program Coordinator',
    bio: 'Brings 30 years of childcare experience to Hometown Preschool. Joined HTP in 2017 as the 3–4 year old classroom teacher. A grandmother figure to many — warm, experienced, and deeply committed to every child\'s growth.',
  },
]

const educatorGroups = [
  {
    category: 'Infant Staff',
    staff: [
      { name: 'Ms. Jenn', since: '2022', credential: "Associate's in Early Childhood Education" },
      { name: 'Ms. Kathy', since: '2019', credential: 'BS in Elementary Education' },
    ],
  },
  {
    category: 'Toddler Staff',
    staff: [
      { name: 'Ms. Kailin', since: '2010', credential: 'ECE studies at Madison College' },
      { name: 'Ms. Mary', since: '2019', credential: null },
    ],
  },
  {
    category: 'Preschool Staff',
    staff: [
      { name: 'Ms. Selena', since: 'early 2025', credential: 'Studied at Madison College' },
      { name: 'Ms. Kari', since: '2021', credential: '13th year of teaching early childhood' },
      { name: 'Ms. Eowyn', since: '2023', credential: null },
      { name: 'Ms. Brittney', since: '2017', credential: 'Graduated BYU–Idaho 2014; over a decade with children' },
      { name: 'Ms. Mailia', since: '2018', credential: 'BS in Elementary Education, UW–Madison; 20 years with 3–4 year olds' },
    ],
  },
  {
    category: '4K Staff',
    staff: [
      { name: 'Mr. Jake', since: '2022', credential: 'Studied at Madison College' },
      { name: 'Ms. Luba', since: '2025', credential: 'Studied education in Russia' },
    ],
  },
  {
    category: 'School-Age Staff',
    staff: [
      { name: 'Ms. Mary', since: '2019', credential: null },
    ],
  },
  {
    category: 'Support Staff',
    staff: [
      { name: 'Ms. Megan', since: '2025', credential: 'BA in History, Loyola University' },
      { name: 'Ms. Morgan', since: '2025', credential: 'BA in Criminal Justice, Iowa State University' },
      { name: 'Ms. Cat', since: '2024', credential: 'Kitchen Manager — homemade breakfast, lunch & snack daily' },
      { name: 'Ms. Hunter', since: '2025', credential: null },
      { name: 'Ms. Alice', since: null, credential: null },
    ],
  },
]

function EducatorGroup({ category, staff, open, onToggle }) {
  return (
    <div className="rounded-2xl bg-white overflow-hidden" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span style={{ fontFamily: 'Fredoka One, sans-serif', fontWeight: 400, color: '#2C2C2A', fontSize: 'clamp(1.1rem, 2.2vw, 1.4rem)' }}>
          {category}
        </span>
        <ChevronDown
          size={22}
          style={{ color: '#2A9D8F', flexShrink: 0, transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}
        />
      </button>
      {open && (
        <div className="px-6 pb-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
          {staff.map((s) => (
            <div key={s.name} style={{ borderTop: '1px solid #f0f0ee', paddingTop: 14 }}>
              <div style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 16, color: '#2C2C2A' }}>
                {s.name}
              </div>
              {s.since && (
                <div style={{ color: '#2A9D8F', fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: 12, marginTop: 1 }}>
                  Joined Hometown in {s.since}
                </div>
              )}
              {s.credential && (
                <div style={{ color: '#666', fontSize: 13, lineHeight: 1.5, marginTop: 4 }}>{s.credential}</div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Team() {
  const [openGroup, setOpenGroup] = useState(null)

  return (
    <div>
      {/* Hero */}
      <section style={{ backgroundColor: '#2A9D8F' }} className="py-6 text-center flex items-center justify-center min-h-[240px]">
        <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 style={{ fontFamily: 'Fredoka One, sans-serif', fontWeight: 400, color: '#fff', fontSize: 'clamp(2rem, 5vw, 3.25rem)' }} className="mb-4">
            Meet Our Team
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.88)', fontSize: 'clamp(1rem, 2vw, 1.2rem)', lineHeight: 1.7 }}>
            Dedicated, caring, patient, and educated — our staff are what make Hometown Preschool feel like home.
          </p>
        </div>
      </section>

      {/* Leadership */}
      <section style={{ backgroundColor: '#fff' }} className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-stretch">
            {/* Horizontal image */}
            <div className="w-full lg:w-[66%]">
              <div
                className="rounded-2xl overflow-hidden relative w-full h-full"
                style={{ backgroundColor: '#2A9D8F14', minHeight: 340 }}
              >
                <span
                  className="absolute inset-0 flex items-center justify-center text-center px-4"
                  style={{ color: '#2A9D8F', fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 13, letterSpacing: 1, textTransform: 'uppercase' }}
                >
                  IMAGE 16
                </span>
                <img
                  src="/images/team-leadership.jpg"
                  alt="Hometown Preschool leadership team"
                  className="w-full h-full object-cover relative block"
                  style={{ minHeight: 340 }}
                  onError={(e) => { e.target.style.display = 'none' }}
                />
              </div>
            </div>

            {/* Stacked leaders */}
            <div className="w-full lg:w-7/12 flex flex-col">
              {leadership.map((person, i) => (
                <div
                  key={person.name}
                  style={{
                    paddingTop: i === 0 ? 0 : 18,
                    paddingBottom: i === leadership.length - 1 ? 0 : 18,
                    borderTop: i === 0 ? 'none' : '1px solid #ececea',
                  }}
                >
                  <h3 style={{ fontFamily: 'Fredoka One, sans-serif', fontWeight: 400, color: '#2C2C2A', fontSize: 'clamp(1.3rem, 2.5vw, 1.75rem)', lineHeight: 1.15 }}>
                    {person.name}
                  </h3>
                  <div style={{ color: '#2A9D8F', fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 12.5, letterSpacing: 1.5, textTransform: 'uppercase', marginTop: 3, marginBottom: 6 }}>
                    {person.role}
                  </div>
                  <p style={{ color: '#555', fontSize: 15, lineHeight: 1.6 }}>{person.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Teachers */}
      <section style={{ backgroundColor: '#FAFAF7' }} className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 style={{ fontFamily: 'Fredoka One, sans-serif', fontWeight: 400, color: '#2C2C2A', fontSize: 'clamp(1.5rem, 3vw, 2rem)' }} className="mb-10 text-center">
            Our Incredible Educators
          </h2>
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
            {/* Dropdowns on the left */}
            <div className="w-full lg:w-3/5 flex flex-col gap-4">
              {educatorGroups.map((g, i) => (
                <EducatorGroup
                  key={g.category}
                  {...g}
                  open={openGroup === i}
                  onToggle={() => setOpenGroup(openGroup === i ? null : i)}
                />
              ))}
            </div>
            {/* Image placeholder on the right — fixed size, sticky */}
            <div className="w-full lg:w-2/5 lg:sticky lg:top-24">
              <div
                className="rounded-2xl overflow-hidden relative w-full"
                style={{ backgroundColor: '#2A9D8F14', aspectRatio: '4 / 5' }}
              >
                <span
                  className="absolute inset-0 flex items-center justify-center text-center px-4"
                  style={{ color: '#2A9D8F', fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 13, letterSpacing: 1, textTransform: 'uppercase' }}
                >
                  IMAGE 17
                </span>
                <img
                  src="/images/team-educators.jpg"
                  alt="Hometown Preschool educators"
                  className="w-full h-full object-cover relative block"
                  onError={(e) => { e.target.style.display = 'none' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* CTA */}
      <section style={{ backgroundColor: '#2A9D8F' }} className="py-16 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 style={{ fontFamily: 'Fredoka One, sans-serif', fontWeight: 400, color: '#fff', fontSize: 'clamp(1.5rem, 3vw, 2rem)' }} className="mb-3">
            Come Meet Us in Person
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 16 }} className="mb-8">
            The best way to know our team is to visit. Schedule a tour today.
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
