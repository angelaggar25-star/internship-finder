'use client'

import { AcademicCapIcon } from '@heroicons/react/24/outline'

const Footer = () => {
  const footerStyle: React.CSSProperties = {
    backgroundColor: '#111827',
    color: 'white',
    paddingTop: '3rem',
    paddingBottom: '3rem',
  }

  const containerStyle: React.CSSProperties = {
    maxWidth: '80rem',
    margin: '0 auto',
    padding: '0 1rem',
  }

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    marginBottom: '3rem',
  }

  const columnStyle: React.CSSProperties = {
    marginBottom: '1rem',
  }

  const h3Style: React.CSSProperties = {
    fontWeight: 'bold',
    fontSize: '1.125rem',
    marginBottom: '1.5rem',
    color: 'white',
  }

  const linkStyle: React.CSSProperties = {
    color: '#9ca3af',
    marginBottom: '0.75rem',
    display: 'block',
    cursor: 'pointer',
    transition: 'color 0.2s',
  }

  const bottomStyle: React.CSSProperties = {
    marginTop: '3rem',
    paddingTop: '2rem',
    borderTop: '1px solid #374151',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '1rem',
  }

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={gridStyle}>
          <div style={columnStyle}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
              <div style={{ height: '40px', width: '40px', backgroundColor: '#2563eb', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <AcademicCapIcon width={24} height={24} style={{ color: 'white' }} />
              </div>
              <span style={{ marginLeft: '0.75rem', fontSize: '1.25rem', fontWeight: 'bold' }}>InternshipFinder</span>
            </div>
            <p style={{ color: '#d1d5db', marginBottom: '1.5rem', maxWidth: '300px' }}>
              AI-powered platform connecting students with amazing internship opportunities.
            </p>
          </div>

          <div style={columnStyle}>
            <h3 style={h3Style}>Quick Links</h3>
            <a href="#" style={linkStyle} onMouseEnter={(e) => (e.currentTarget.style.color = 'white')} onMouseLeave={(e) => (e.currentTarget.style.color = '#9ca3af')}>Home</a>
            <a href="#" style={linkStyle} onMouseEnter={(e) => (e.currentTarget.style.color = 'white')} onMouseLeave={(e) => (e.currentTarget.style.color = '#9ca3af')}>Find Internships</a>
            <a href="#" style={linkStyle} onMouseEnter={(e) => (e.currentTarget.style.color = 'white')} onMouseLeave={(e) => (e.currentTarget.style.color = '#9ca3af')}>Post Internship</a>
            <a href="#" style={linkStyle} onMouseEnter={(e) => (e.currentTarget.style.color = 'white')} onMouseLeave={(e) => (e.currentTarget.style.color = '#9ca3af')}>About Us</a>
          </div>

          <div style={columnStyle}>
            <h3 style={h3Style}>Resources</h3>
            <a href="#" style={linkStyle} onMouseEnter={(e) => (e.currentTarget.style.color = 'white')} onMouseLeave={(e) => (e.currentTarget.style.color = '#9ca3af')}>Blog</a>
            <a href="#" style={linkStyle} onMouseEnter={(e) => (e.currentTarget.style.color = 'white')} onMouseLeave={(e) => (e.currentTarget.style.color = '#9ca3af')}>Career Guides</a>
            <a href="#" style={linkStyle} onMouseEnter={(e) => (e.currentTarget.style.color = 'white')} onMouseLeave={(e) => (e.currentTarget.style.color = '#9ca3af')}>FAQ</a>
          </div>

          <div style={columnStyle}>
            <h3 style={h3Style}>Contact</h3>
            <p style={{ color: '#9ca3af', marginBottom: '0.5rem' }}>support@internshipfinder.com</p>
            <p style={{ color: '#9ca3af', marginBottom: '0.5rem' }}>+1 (555) 123-4567</p>
            <p style={{ color: '#9ca3af' }}>San Francisco, CA</p>
          </div>
        </div>

        <div style={bottomStyle}>
          <div style={{ color: '#9ca3af', fontSize: '0.875rem' }}>© 2024 InternshipFinder. All rights reserved.</div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#" style={{ color: '#9ca3af', fontSize: '0.875rem', cursor: 'pointer' }} onMouseEnter={(e) => (e.currentTarget.style.color = 'white')} onMouseLeave={(e) => (e.currentTarget.style.color = '#9ca3af')}>Privacy Policy</a>
            <a href="#" style={{ color: '#9ca3af', fontSize: '0.875rem', cursor: 'pointer' }} onMouseEnter={(e) => (e.currentTarget.style.color = 'white')} onMouseLeave={(e) => (e.currentTarget.style.color = '#9ca3af')}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer