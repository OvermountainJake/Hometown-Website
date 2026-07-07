import { useState } from 'react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import FAQAccordion from '../components/FAQAccordion'

const ageOptions = [
  'Infant (6 wks–1 yr)',
  '2 years',
  '3–5 years',
  '4K wraparound',
  'School age',
  'Summer camp only',
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', age: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim() || !form.email.includes('@')) e.email = 'Valid email is required'
    if (!form.age) e.age = "Child's age is required"
    return e
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    const e = validate()
    if (Object.keys(e).length > 0) {
      setErrors(e)
      return
    }
    setSubmitted(true)
  }

  const field = (label, name, type = 'text', placeholder = '') => (
    <div>
      <label
        htmlFor={name}
        style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: 14, color: '#3D3D3D', display: 'block', marginBottom: 6 }}
      >
        {label}
      </label>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        value={form[name]}
        onChange={(e) => { setForm({ ...form, [name]: e.target.value }); setErrors({ ...errors, [name]: '' }) }}
        style={{
          width: '100%',
          padding: '10px 14px',
          borderRadius: 10,
          border: errors[name] ? '1.5px solid #e05' : '1.5px solid #e0e0db',
          fontSize: 15,
          color: '#2C2C2A',
          outline: 'none',
          fontFamily: 'Inter, sans-serif',
          backgroundColor: '#fff',
        }}
      />
      {errors[name] && <p style={{ color: '#e05', fontSize: 12, marginTop: 4 }}>{errors[name]}</p>}
    </div>
  )

  return (
    <div>
      {/* Hero */}
      <section style={{ backgroundColor: '#2A9D8F' }} className="py-6 text-center flex items-center justify-center min-h-[240px]">
        <div className="w-full max-w-2xl mx-auto px-4">
          <h1 style={{ fontFamily: 'Fredoka One, sans-serif', fontWeight: 400, color: '#fff', fontSize: 'clamp(2rem, 5vw, 3rem)' }} className="mb-3">
            Get in Touch
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.88)', fontSize: 17, lineHeight: 1.6 }}>
            We'd love to hear from you — whether you're ready to enroll or just want to learn more.
          </p>
        </div>
      </section>

      {/* Two-column: contact + form */}
      <section style={{ backgroundColor: '#FAFAF7' }} className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Contact info + map */}
            <div className="w-full lg:w-5/12">
              <div
                className="rounded-2xl p-6 bg-white mb-6"
                style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.07)' }}
              >
                <h2 style={{ fontFamily: 'Fredoka One, sans-serif', fontWeight: 400, color: '#2C2C2A', fontSize: 20 }} className="mb-5">
                  Contact Information
                </h2>
                <div className="space-y-4" style={{ fontSize: 15 }}>
                  <div className="flex items-start gap-3">
                    <MapPin size={20} style={{ color: '#2A9D8F', flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <div style={{ fontWeight: 600, color: '#2C2C2A' }}>Address</div>
                      <div style={{ color: '#555' }}>120 Enterprise Dr., Verona, WI 53593</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone size={20} style={{ color: '#2A9D8F', flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <div style={{ fontWeight: 600, color: '#2C2C2A' }}>Phone</div>
                      <a href="tel:6088485437" style={{ color: '#2A9D8F' }} className="hover:underline">(608) 848-5437</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail size={20} style={{ color: '#2A9D8F', flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <div style={{ fontWeight: 600, color: '#2C2C2A' }}>Email</div>
                      <a href="mailto:admin@hometownpreschool.com" style={{ color: '#2A9D8F' }} className="hover:underline">
                        admin@hometownpreschool.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock size={20} style={{ color: '#2A9D8F', flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <div style={{ fontWeight: 600, color: '#2C2C2A' }}>Hours</div>
                      <div style={{ color: '#555' }}>Monday–Friday, 6:30 AM – 5:30 PM</div>
                      <div style={{ color: '#888', fontSize: 13 }}>Closed weekends and major holidays</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps embed */}
              <div className="rounded-2xl overflow-hidden" style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.07)' }}>
                <iframe
                  title="Hometown Preschool location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2916.9!2d-89.534!3d42.989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8806a6f9b2a99999%3A0x1!2s120+Enterprise+Dr%2C+Verona%2C+WI+53593!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="260"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Contact form */}
            <div className="w-full lg:w-7/12">
              <div
                className="rounded-2xl p-8 bg-white"
                style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.07)' }}
              >
                <h2 style={{ fontFamily: 'Fredoka One, sans-serif', fontWeight: 400, color: '#2C2C2A', fontSize: 20 }} className="mb-6">
                  Schedule a Tour or Ask a Question
                </h2>

                {submitted ? (
                  <div
                    className="rounded-xl p-6 text-center"
                    style={{ backgroundColor: '#2A9D8F15', border: '1.5px solid #2A9D8F40' }}
                  >
                    <div style={{ fontSize: 40 }}>🎉</div>
                    <h3 style={{ fontFamily: 'Fredoka One, sans-serif', fontWeight: 400, color: '#2A9D8F', fontSize: 22 }} className="mt-2 mb-2">
                      Thanks! We'll be in touch soon.
                    </h3>
                    <p style={{ color: '#555' }}>Our team will reach out within one business day.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {field('Full Name *', 'name', 'text', 'Jane Smith')}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {field('Phone', 'phone', 'tel', '(608) 000-0000')}
                      {field('Email *', 'email', 'email', 'jane@email.com')}
                    </div>

                    {/* Age dropdown */}
                    <div>
                      <label
                        htmlFor="age"
                        style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: 14, color: '#3D3D3D', display: 'block', marginBottom: 6 }}
                      >
                        Child's Age *
                      </label>
                      <select
                        id="age"
                        value={form.age}
                        onChange={(e) => { setForm({ ...form, age: e.target.value }); setErrors({ ...errors, age: '' }) }}
                        style={{
                          width: '100%',
                          padding: '10px 14px',
                          borderRadius: 10,
                          border: errors.age ? '1.5px solid #e05' : '1.5px solid #e0e0db',
                          fontSize: 15,
                          color: form.age ? '#2C2C2A' : '#999',
                          fontFamily: 'Inter, sans-serif',
                          backgroundColor: '#fff',
                          appearance: 'none',
                        }}
                      >
                        <option value="">Select age range…</option>
                        {ageOptions.map((o) => (
                          <option key={o} value={o}>{o}</option>
                        ))}
                      </select>
                      {errors.age && <p style={{ color: '#e05', fontSize: 12, marginTop: 4 }}>{errors.age}</p>}
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: 14, color: '#3D3D3D', display: 'block', marginBottom: 6 }}
                      >
                        Message (optional)
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        placeholder="Any questions or details you'd like to share…"
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '10px 14px',
                          borderRadius: 10,
                          border: '1.5px solid #e0e0db',
                          fontSize: 15,
                          color: '#2C2C2A',
                          fontFamily: 'Inter, sans-serif',
                          resize: 'vertical',
                          backgroundColor: '#fff',
                        }}
                      />
                    </div>

                    <button
                      type="submit"
                      style={{ backgroundColor: '#E8A838', color: '#fff', fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: 17, width: '100%' }}
                      className="py-3 rounded-full shadow-md hover:opacity-90 transition-opacity"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: '#fff' }} className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 style={{ fontFamily: 'Fredoka One, sans-serif', fontWeight: 400, color: '#2C2C2A', fontSize: 'clamp(1.5rem, 3vw, 2rem)' }} className="mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <FAQAccordion />
        </div>
      </section>
    </div>
  )
}
