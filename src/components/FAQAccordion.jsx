import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'What ages do you accept?',
    a: 'Children from 6 weeks old through school age, including infants, toddlers, preschoolers, and after-school care for elementary-age children.',
  },
  {
    q: 'What are your hours?',
    a: 'Monday through Friday, 6:30 AM to 5:30 PM. Closed weekends and major holidays.',
  },
  {
    q: 'Do you offer tours?',
    a: 'Yes — prospective families are encouraged to schedule a tour to see the facility and meet our staff.',
  },
  {
    q: 'What is your teacher-to-child ratio?',
    a: 'We maintain low ratios that meet or exceed state requirements, ensuring personalized attention for every child.',
  },
  {
    q: 'Do you provide meals?',
    a: 'Yes. Our kitchen manager Ms. Cat prepares and serves homemade breakfast, lunch, and an afternoon snack each day.',
  },
  {
    q: 'How do I enroll?',
    a: 'Contact us to schedule a tour and discuss availability. Our staff will guide you through the enrollment process step by step.',
  },
]

function FAQItem({ q, a, open, onToggle }) {
  return (
    <div
      style={{ borderBottom: '1px solid #e8e8e4' }}
      className="py-4"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left gap-4"
      >
        <span style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: 16, color: '#2C2C2A' }}>
          {q}
        </span>
        <ChevronDown
          size={20}
          style={{ color: '#2A9D8F', flexShrink: 0, transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}
        />
      </button>
      {open && (
        <p style={{ color: '#555', fontSize: 15, lineHeight: 1.7, marginTop: 12 }}>
          {a}
        </p>
      )}
    </div>
  )
}

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div>
      {faqs.map((faq, i) => (
        <FAQItem
          key={i}
          q={faq.q}
          a={faq.a}
          open={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </div>
  )
}
