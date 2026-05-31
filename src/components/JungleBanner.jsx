import { Link } from 'react-router-dom'
import './JungleBanner.css'

const animals = [
  {
    slug: 'butterflies',
    src: '/images/classrooms/butterflies-bunnies-hedgies.svg',
    alt: 'Butterflies, Bunnies & Hedgies',
    name: 'Butterflies, Bunnies & Hedgies',
    age: '6 weeks – 2 years',
    desc: "Gentle care, warmth and love. Low ratios, daily updates, routines that follow your baby's natural rhythm.",
    size: 138,
  },
  {
    slug: 'foxes',
    src: '/images/classrooms/foxes.svg',
    alt: 'Foxes',
    name: 'Foxes',
    age: '2 – 3 years',
    desc: 'Channels toddler curiosity into joyful learning. Creative play, hands-on activities, early social skills.',
    size: 108,
  },
  {
    slug: 'owls',
    src: '/images/classrooms/owls.svg',
    alt: 'Owls',
    name: 'Owls',
    age: '3 – 5 years',
    desc: 'Kindergarten readiness through literacy, STEM, social-emotional learning and creative arts.',
  },
  {
    slug: 'badgers',
    src: '/images/classrooms/badgers.svg',
    alt: '4K / Badgers',
    name: '4K / Badgers',
    age: '4K wraparound',
    desc: 'Bridges preschool and 4K with full curriculum, morning drop-off and afternoon pick-up options.',
    size: 102,
  },
  {
    slug: 'wildcats',
    src: '/images/classrooms/wildcats.svg',
    alt: 'Wildcats',
    name: 'Wildcats',
    age: 'School age',
    desc: 'After-school care with homework help, outdoor adventures, arts and full-day care on school breaks.',
    size: 102,
  },
]

export default function JungleBanner() {
  return (
    <div className="animal-banner">
      <h2 className="animal-banner-heading">A Classroom for Every Stage</h2>
      <div className="animal-row">
        {animals.map((a) => (
          <Link to={`/programs#${a.slug}`} className="animal-col" key={a.name} style={{ textDecoration: 'none' }}>
            <div className="animal-img-wrap">
              <img src={a.src} alt={a.alt} width={a.size || 120} height={a.size || 120} style={{ objectFit: 'contain' }} />
            </div>
            <div className="animal-room-name">{a.name}</div>
            <div className="animal-age">{a.age}</div>
            <div className="animal-desc">{a.desc}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
