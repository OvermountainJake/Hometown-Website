export default function TeamCard({ name, role, since, credential, bio, isLeader }) {
  const initials = name.replace('Ms. ', '').replace('Mr. ', '').charAt(0)

  if (isLeader) {
    return (
      <div
        className="rounded-2xl p-6 bg-white flex flex-col gap-4"
        style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.07)' }}
      >
        <div className="flex items-center gap-4">
          <div
            className="flex-shrink-0 flex items-center justify-center rounded-full text-white text-xl font-bold"
            style={{ width: 56, height: 56, backgroundColor: '#2A9D8F', fontFamily: 'Nunito, sans-serif' }}
          >
            {initials}
          </div>
          <div>
            <div style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 18, color: '#2C2C2A' }}>
              {name}
            </div>
            <div style={{ color: '#2A9D8F', fontSize: 14, fontWeight: 600, fontFamily: 'Nunito, sans-serif' }}>
              {role}
            </div>
          </div>
        </div>
        {bio && (
          <p style={{ color: '#555', fontSize: 14, lineHeight: 1.7 }}>{bio}</p>
        )}
      </div>
    )
  }

  return (
    <div
      className="rounded-xl p-4 bg-white flex items-center gap-3"
      style={{ boxShadow: '0 1px 8px rgba(0,0,0,0.06)' }}
    >
      <div
        className="flex-shrink-0 flex items-center justify-center rounded-full text-white font-bold"
        style={{ width: 44, height: 44, backgroundColor: '#8EC5B8', fontFamily: 'Nunito, sans-serif', fontSize: 16 }}
      >
        {initials}
      </div>
      <div className="flex-1 min-w-0">
        <div style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: 15, color: '#2C2C2A' }}>
          {name}
        </div>
        {since && (
          <div style={{ color: '#888', fontSize: 12 }}>Since {since}</div>
        )}
        {credential && (
          <div style={{ color: '#666', fontSize: 12, lineHeight: 1.4 }} className="mt-0.5 truncate" title={credential}>
            {credential}
          </div>
        )}
      </div>
    </div>
  )
}
