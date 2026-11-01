'use client'

import { ArrowRightIcon, EnvelopeIcon } from '@heroicons/react/24/solid'

const CTASection = () => {
  const sectionStyle: React.CSSProperties = {
    paddingTop: '4rem',
    paddingBottom: '4rem',
    background: 'linear-gradient(to bottom right, #1f2937, #111827)',
  }

  const containerStyle: React.CSSProperties = {
    maxWidth: '80rem',
    margin: '0 auto',
    padding: '0 1rem',
    textAlign: 'center',
  }

  const h2Style: React.CSSProperties = {
    fontSize: '2.25rem',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '1.5rem',
  }

  const pStyle: React.CSSProperties = {
    fontSize: '1.25rem',
    color: '#d1d5db',
    marginBottom: '2.5rem',
    maxWidth: '42rem',
    margin: '0 auto 2.5rem',
  }

  const formStyle: React.CSSProperties = {
    maxWidth: '32rem',
    margin: '0 auto 3rem',
    display: 'flex',
    gap: '1rem',
    flexDirection: 'column',
  }

  const inputStyle: React.CSSProperties = {
    padding: '0.75rem 1rem',
    borderRadius: '0.5rem',
    backgroundColor: 'rgba(255,255,255,0.1)',
    border: '1px solid rgba(255,255,255,0.2)',
    color: 'white',
    fontSize: '1rem',
    transition: 'all 0.2s',
  }

  const buttonStyle: React.CSSProperties = {
    backgroundColor: '#2563eb',
    color: 'white',
    padding: '0.75rem 1rem',
    borderRadius: '0.5rem',
    fontWeight: '500',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
  }

  const featuresGridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '2rem',
    maxWidth: '48rem',
    margin: '2rem auto',
  }

  const featureStyle: React.CSSProperties = {
    textAlign: 'center',
  }

  const featureIconStyle: React.CSSProperties = {
    width: '48px',
    height: '48px',
    backgroundColor: '#2563eb',
    borderRadius: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 1rem',
    color: 'white',
    fontWeight: 'bold',
  }

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={h2Style}>Ready to Launch Your Career?</h2>
        <p style={pStyle}>
          Join thousands of students who have accelerated their careers with our AI-powered internship platform.
        </p>

        <div style={formStyle}>
          <div style={{ position: 'relative' }}>
            <input
              type="email"
              placeholder="Enter your email"
              style={inputStyle}
              onFocus={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'
              }}
              onBlur={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
              }}
            />
          </div>
          <button style={buttonStyle} onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1d4ed8')} onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#2563eb')}>
            <span>Get Started Free</span>
            <ArrowRightIcon width={20} height={20} />
          </button>
          <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>
            No credit card required • Free forever for students
          </p>
        </div>

        <div style={featuresGridStyle}>
          <div style={featureStyle}>
            <div style={featureIconStyle}>✓</div>
            <h4 style={{ color: 'white', fontWeight: '600', marginBottom: '0.5rem' }}>Free for Students</h4>
            <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>No hidden fees</p>
          </div>
          <div style={featureStyle}>
            <div style={featureIconStyle}>AI</div>
            <h4 style={{ color: 'white', fontWeight: '600', marginBottom: '0.5rem' }}>AI-Powered</h4>
            <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>Smart matching</p>
          </div>
          <div style={featureStyle}>
            <div style={featureIconStyle}>24/7</div>
            <h4 style={{ color: 'white', fontWeight: '600', marginBottom: '0.5rem' }}>24/7 Support</h4>
            <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>Always here</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection