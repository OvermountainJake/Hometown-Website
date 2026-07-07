import TeamCard from '../components/TeamCard'

const leadership = [
  {
    name: 'Ms. Sara',
    role: 'Director',
    bio: 'Originally from Viroqua, WI. Has been part of Hometown Preschool since the day it opened in 2003. Earned her administrator\'s credential in 2006. Passionate about making sure every child has a safe and loving start to their education.',
  },
  {
    name: 'Ms. Laura',
    role: 'Assistant Director',
    bio: 'Brings 30 years of childcare experience to Hometown Preschool. Joined HTP in 2017 as the 3–4 year old classroom teacher. A grandmother figure to many — warm, experienced, and deeply committed to every child\'s growth.',
  },
  {
    name: 'Ms. Nicole',
    role: 'Administrative Support',
    bio: 'A native Madisonian with a BS in Elementary Education from UW–Madison. On her third tour of duty at HTP. Also coaches swim for students with disabilities. Passionate about lifting up people whose voices aren\'t always heard.',
  },
]

const teachers = [
  { name: 'Ms. Jenn', since: '2022', credential: "Associate's in Early Childhood Education" },
  { name: 'Ms. Jenny', since: 'January 2025', credential: 'Third year of teaching early childhood' },
  { name: 'Ms. Kari', since: '2021', credential: '13th year of teaching early childhood' },
  { name: 'Ms. Kathy', since: '2019', credential: 'BS in Elementary Education' },
  { name: 'Ms. Brittney', since: '2017', credential: 'Graduated BYU–Idaho 2014; over a decade with children' },
  { name: 'Ms. Mailia', since: '2018', credential: 'BS in Elementary Education, UW–Madison; 20 years with 3–4 year olds' },
  { name: 'Ms. Selena', since: 'early 2025', credential: 'Studied at Madison College' },
  { name: 'Ms. Eowyn', since: '2023', credential: null },
  { name: 'Mr. Jake', since: '2022', credential: 'Studied at Madison College' },
  { name: 'Ms. Luba', since: '2025', credential: 'Studied education in Russia' },
  { name: 'Ms. Mary', since: '2019', credential: null },
  { name: 'Ms. Kailin', since: '2010', credential: 'ECE studies at Madison College' },
  { name: 'Ms. Hunter', since: '2025', credential: null },
  { name: 'Ms. Leah', since: '2020', credential: 'AA in Applied Science, NICC' },
  { name: 'Ms. Megan', since: '2025', credential: 'BA in History, Loyola University' },
  { name: 'Ms. Morgan', since: '2025', credential: 'BA in Criminal Justice, Iowa State University' },
]

const support = [
  { name: 'Ms. Cat', role: 'Kitchen Manager', since: '2024', note: 'Prepares homemade breakfast, lunch, and afternoon snack daily.' },
]

export default function Team() {
  return (
    <div>
      {/* Hero */}
      <section style={{ backgroundColor: '#2A9D8F' }} className="py-16 text-center flex items-center justify-center min-h-[320px]">
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
          <h2 style={{ fontFamily: 'Fredoka One, sans-serif', fontWeight: 400, color: '#2C2C2A', fontSize: 'clamp(1.5rem, 3vw, 2rem)' }} className="mb-8 text-center">
            Leadership
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {leadership.map((person) => (
              <TeamCard key={person.name} {...person} isLeader />
            ))}
          </div>
        </div>
      </section>

      {/* Teachers */}
      <section style={{ backgroundColor: '#FAFAF7' }} className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 style={{ fontFamily: 'Fredoka One, sans-serif', fontWeight: 400, color: '#2C2C2A', fontSize: 'clamp(1.5rem, 3vw, 2rem)' }} className="mb-8 text-center">
            Our Teachers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {teachers.map((t) => (
              <TeamCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* Support staff */}
      <section style={{ backgroundColor: '#fff' }} className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 style={{ fontFamily: 'Fredoka One, sans-serif', fontWeight: 400, color: '#2C2C2A', fontSize: 'clamp(1.5rem, 3vw, 2rem)' }} className="mb-8 text-center">
            Support Staff
          </h2>
          <div className="max-w-md mx-auto">
            {support.map((s) => (
              <div
                key={s.name}
                className="rounded-2xl p-6 bg-white flex items-start gap-4"
                style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.07)' }}
              >
                <div
                  className="flex-shrink-0 flex items-center justify-center rounded-full text-white font-bold"
                  style={{ width: 48, height: 48, backgroundColor: '#E8A838', fontFamily: 'Nunito, sans-serif', fontSize: 18 }}
                >
                  {s.name.replace('Ms. ', '').charAt(0)}
                </div>
                <div>
                  <div style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 17, color: '#2C2C2A' }}>{s.name}</div>
                  <div style={{ color: '#E8A838', fontSize: 13, fontWeight: 600, fontFamily: 'Nunito, sans-serif' }}>{s.role} · Since {s.since}</div>
                  <p style={{ color: '#666', fontSize: 14, lineHeight: 1.6, marginTop: 6 }}>{s.note}</p>
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
