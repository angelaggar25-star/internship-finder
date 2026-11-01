'use client'

import { StarIcon } from '@heroicons/react/24/solid'

const Testimonials = () => {
  const sectionStyle: React.CSSProperties = {
    paddingTop: '4rem',
    paddingBottom: '4rem',
    backgroundColor: '#f9fafb',
  }

  const containerStyle: React.CSSProperties = {
    maxWidth: '80rem',
    margin: '0 auto',
    padding: '0 1rem',
  }

  const centerStyle: React.CSSProperties = {
    textAlign: 'center',
    marginBottom: '3rem',
  }

  const h2Style: React.CSSProperties = {
    fontSize: '1.875rem',
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: '1rem',
  }

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
  }

  const testimonials = [
    { name: 'Sarah Johnson', role: 'Computer Science', company: 'Google', quote: 'The AI matching system found me an internship at Google that perfectly aligned with my skills!' },
    { name: 'Michael Chen', role: 'Business Analytics', company: 'Goldman Sachs', quote: 'I was matched with three amazing finance internships within 24 hours. The platform exceeded my expectations!' },
    { name: 'Jessica Williams', role: 'Design Student', company: 'Adobe', quote: 'As an international student, finding internships was challenging. This platform made it so much easier!' },
    { name: 'David Martinez', role: 'Engineering', company: 'Tesla', quote: 'The personalized recommendations helped me discover opportunities I wouldn\'t have found on my own.' },
  ]

  const cardStyle: React.CSSProperties = {
    backgroundColor: 'white',
    borderRadius: '1rem',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    border: '1px solid #e5e7eb',
    padding: '2rem',
  }

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <div style={centerStyle}>
          <h2 style={h2Style}>Student Success Stories</h2>
          <p style={{ color: '#4b5563', maxWidth: '42rem', margin: '0 auto' }}>
            Hear from students who found their dream internships through our platform
          </p>
        </div>

        <div style={gridStyle}>
          {testimonials.map((test, idx) => (
            <div key={idx} style={cardStyle}>
              <p style={{ color: '#4b5563', marginBottom: '1.5rem', fontStyle: 'italic' }}>"{test.quote}"</p>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} width={20} height={20} style={{ color: '#fbbf24', fill: 'currentColor' }} />
                ))}
              </div>
              <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '1rem' }}>
                <div style={{ fontWeight: 'bold', color: '#111827' }}>{test.name}</div>
                <div style={{ color: '#4b5563', fontSize: '0.875rem' }}>{test.role}</div>
                <div style={{ color: '#059669', fontWeight: '500', fontSize: '0.875rem' }}>Placed at {test.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials