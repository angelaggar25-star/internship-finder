'use client'

import { useState } from 'react'
import { MagnifyingGlassIcon, MapPinIcon, BriefcaseIcon, AcademicCapIcon } from '@heroicons/react/24/outline'

const SearchSection = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [location, setLocation] = useState('')

  const sectionStyle: React.CSSProperties = {
    paddingTop: '4rem',
    paddingBottom: '4rem',
    backgroundColor: 'white',
  }

  const containerStyle: React.CSSProperties = {
    maxWidth: '80rem',
    margin: '0 auto',
    padding: '0 1rem',
  }

  const titleStyle: React.CSSProperties = {
    textAlign: 'center',
    marginBottom: '3rem',
  }

  const h2Style: React.CSSProperties = {
    fontSize: '1.875rem',
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: '1rem',
  }

  const formStyle: React.CSSProperties = {
    maxWidth: '80rem',
    margin: '0 auto',
    backgroundColor: 'white',
    borderRadius: '1rem',
    boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
    border: '1px solid #e5e7eb',
    padding: '1.5rem',
  }

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1rem',
    marginBottom: '1.5rem',
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.5rem 1rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.5rem',
    fontSize: '1rem',
    transition: 'all 0.2s',
  }

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#374151',
    marginBottom: '0.5rem',
  }

  const buttonStyle: React.CSSProperties = {
    backgroundColor: '#2563eb',
    color: 'white',
    padding: '0.75rem 1rem',
    borderRadius: '0.5rem',
    fontSize: '1rem',
    fontWeight: '500',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
    marginTop: '1rem',
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Searching:', { searchTerm, location })
  }

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <div style={titleStyle}>
          <h2 style={h2Style}>Find Internships That Match Your Goals</h2>
          <p style={{ color: '#4b5563', maxWidth: '42rem', margin: '0 auto' }}>
            Use our AI-powered search to find internships tailored to your skills and career aspirations.
          </p>
        </div>

        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <form onSubmit={handleSearch} style={formStyle}>
            <div style={gridStyle}>
              <div>
                <label style={labelStyle}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <MagnifyingGlassIcon width={16} height={16} />
                    <span>Search Internships</span>
                  </div>
                </label>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Software Developer, Data Analyst..."
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <MapPinIcon width={16} height={16} />
                    <span>Location</span>
                  </div>
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Remote, New York, London..."
                  style={inputStyle}
                />
              </div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <button
                type="submit"
                style={{ ...buttonStyle, width: '100%', maxWidth: '200px' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1d4ed8')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#2563eb')}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                  <MagnifyingGlassIcon width={20} height={20} />
                  <span>Search</span>
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default SearchSection