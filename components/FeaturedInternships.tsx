'use client'

const FeaturedInternships = () => {
  const containerStyle: React.CSSProperties = {
    maxWidth: '80rem',
    margin: '0 auto',
    padding: '0 1rem',
  }

  const sectionStyle: React.CSSProperties = {
    paddingTop: '4rem',
    paddingBottom: '4rem',
    backgroundColor: '#f9fafb',
  }

  const headerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '3rem',
  }

  const h2Style: React.CSSProperties = {
    fontSize: '1.875rem',
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: '0.5rem',
  }

  const cardStyle: React.CSSProperties = {
    backgroundColor: 'white',
    borderRadius: '0.75rem',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    border: '1px solid #e5e7eb',
    padding: '1.5rem',
    transition: 'box-shadow 0.3s',
  }

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem',
  }

  const internships = [
    { title: 'Software Engineering Intern', company: 'Tech Innovations Inc.', location: 'Remote', salary: '$5,000 - $7,000/month' },
    { title: 'Data Science Intern', company: 'Data Analytics Corp', location: 'New York, NY', salary: '$4,500 - $6,500/month' },
    { title: 'Marketing Intern', company: 'Creative Minds Agency', location: 'Remote', salary: '$3,500 - $4,500/month' },
    { title: 'Product Design Intern', company: 'Design Studio Pro', location: 'Austin, TX', salary: '$4,000 - $5,500/month' },
  ]

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <div style={headerStyle}>
          <div>
            <h2 style={h2Style}>Featured Internships</h2>
            <p style={{ color: '#4b5563' }}>Hand-picked opportunities from top companies</p>
          </div>
          <a href="#" style={{ color: '#2563eb', fontWeight: '500', textDecoration: 'none' }}>View all →</a>
        </div>

        <div style={gridStyle}>
          {internships.map((internship, index) => (
            <div key={index} style={cardStyle} onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)')} onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)')}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#111827', marginBottom: '0.5rem' }}>{internship.title}</h3>
              <p style={{ color: '#374151', marginBottom: '1rem' }}>{internship.company}</p>
              <p style={{ color: '#4b5563', marginBottom: '0.5rem' }}>{internship.location}</p>
              <p style={{ color: '#059669', fontWeight: '500', marginBottom: '1rem' }}>{internship.salary}</p>
              <button style={{ backgroundColor: '#2563eb', color: 'white', padding: '0.5rem 1rem', borderRadius: '0.5rem', border: 'none', cursor: 'pointer', fontWeight: '500', transition: 'background-color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1d4ed8')} onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#2563eb')}>Apply Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedInternships