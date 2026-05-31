import { Link } from 'react-router-dom'

export default function ProgramCard({ name, ages, description, image, borderColor }) {
  return (
    <div
      className="rounded-2xl overflow-hidden bg-white flex flex-col"
      style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.07)', borderTop: `4px solid ${borderColor}` }}
    >
      <div className="p-2">
        <img
          src={image}
          alt={name}
          className="w-full object-contain rounded-xl"
          style={{ height: 160 }}
          onError={(e) => { e.target.style.display = 'none' }}
        />
      </div>
      <div className="px-5 pb-5 flex flex-col flex-1">
        <div className="mb-2">
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold"
            style={{ backgroundColor: borderColor + '20', color: borderColor === '#FAFAF7' ? '#555' : borderColor, fontFamily: 'Nunito, sans-serif' }}
          >
            {ages}
          </span>
        </div>
        <h3 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, color: '#2C2C2A', fontSize: 17 }} className="mb-1">
          {name}
        </h3>
        <p style={{ color: '#666', fontSize: 14, lineHeight: 1.6 }} className="flex-1 mb-4">
          {description}
        </p>
        <Link
          to="/programs"
          style={{ color: '#2A9D8F', fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: 14 }}
          className="hover:underline"
        >
          Learn More →
        </Link>
      </div>
    </div>
  )
}
