const stats = [
  { value: '20+', label: 'Years serving Verona' },
  { value: '134', label: 'Licensed capacity' },
  { value: '5', label: 'Classroom programs' },
  { value: '1', label: 'Kitchen serving homemade meals daily' },
]

export default function About() {
  return (
    <div>
      {/* Hero — split layout */}
      <section style={{ minHeight: '60vh', display: 'flex' }} className="flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 overflow-hidden" style={{ minHeight: 360 }}>
          <img
            src="/images/gallery-7.jpg"
            alt="Children at Hometown Preschool"
            className="w-full h-full object-cover"
            style={{ minHeight: 360 }}
            onError={(e) => { e.target.style.backgroundColor = '#8EC5B820'; e.target.alt = '' }}
          />
        </div>
        <div
          className="w-full lg:w-1/2 flex items-center px-10 py-16"
          style={{ backgroundColor: '#2A9D8F' }}
        >
          <div>
            <h1
              style={{ fontFamily: 'Fredoka One, sans-serif', fontWeight: 400, color: '#fff', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', lineHeight: 1.2 }}
              className="mb-4"
            >
              Where Little Hearts Grow Big Dreams
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.88)', fontSize: 17, lineHeight: 1.7 }}>
              For over 20 years, Hometown Preschool has been more than a childcare center — it's been a home.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section style={{ backgroundColor: '#FAFAF7' }} className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 style={{ fontFamily: 'Fredoka One, sans-serif', fontWeight: 400, color: '#2C2C2A', fontSize: 'clamp(1.75rem, 3.5vw, 2.25rem)' }} className="mb-6">
            Born From a Simple Belief
          </h2>
          <p style={{ color: '#555', fontSize: 17, lineHeight: 1.8 }}>
            Hometown Preschool was born from a simple belief: child care should feel extraordinary, not ordinary. For over 20 years, we've been creating joyful learning experiences for every age and stage, serving the Verona, WI community since 2003. The center welcomes and accepts children regardless of race, serving infants through school-age children Monday through Friday, 6:30 AM to 5:30 PM.
          </p>
        </div>
      </section>

      {/* Feels Like Home */}
      <section style={{ backgroundColor: '#fff' }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/2">
              <h2
                style={{ fontFamily: 'Fredoka One, sans-serif', fontWeight: 400, color: '#2C2C2A', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', borderLeft: '4px solid #2A9D8F', paddingLeft: 16 }}
                className="mb-5"
              >
                A Place That Actually Feels Like Home
              </h2>
              <p style={{ color: '#555', fontSize: 16, lineHeight: 1.8 }}>
                The kids spend more time here than at home — so we've built a place that reflects that. Our staff treat every child like their own. Families tell us they feel it the moment they walk through the door. Parents go to work without worry, because they know their children are in good hands and surrounded by people who genuinely care.
              </p>
            </div>
            <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden" style={{ boxShadow: '0 4px 30px rgba(0,0,0,0.1)' }}>
              <img
                src="/images/gallery-12.jpg"
                alt="Children playing at Hometown Preschool"
                className="w-full object-cover"
                style={{ height: 380 }}
                onError={(e) => { e.target.style.display = 'none' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ backgroundColor: '#FAFAF7' }} className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="rounded-2xl p-6 text-center bg-white"
                style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
              >
                <div
                  style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900, color: '#2A9D8F', fontSize: 'clamp(2rem, 5vw, 3rem)' }}
                >
                  {value}
                </div>
                <div style={{ color: '#666', fontSize: 14, lineHeight: 1.4, marginTop: 4 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section style={{ backgroundColor: '#2A9D8F' }} className="py-20 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 style={{ fontFamily: 'Fredoka One, sans-serif', fontWeight: 400, color: '#fff', fontSize: 'clamp(1.75rem, 3.5vw, 2.25rem)' }} className="mb-6">
            Our Mission
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.92)', fontSize: 18, lineHeight: 1.8 }}>
            To nurture confident, curious, and compassionate children by building meaningful relationships with families and creating joyful learning experiences.
          </p>
        </div>
      </section>
    </div>
  )
}
