'use client'

import { ArrowRightIcon, SparklesIcon } from '@heroicons/react/24/solid'

const HeroSection = () => {
  const sectionStyle: React.CSSProperties = {
    position: 'relative',
    overflow: 'hidden',
    background: 'linear-gradient(to bottom right, #eff6ff, #f0f9ff)',
    paddingTop: '96px',
    paddingBottom: '96px',
  }

  const containerStyle: React.CSSProperties = {
    maxWidth: '80rem',
    margin: '0 auto',
    padding: '0 1rem',
    position: 'relative',
  }

  const centerStyle: React.CSSProperties = {
    textAlign: 'center',
  }

  const badgeStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    backgroundColor: '#dbeafe',
    color: '#0c4a6e',
    padding: '0.5rem 1rem',
    borderRadius: '9999px',
    marginBottom: '1.5rem',
    fontSize: '0.875rem',
    fontWeight: '500',
  }

  const h1Style: React.CSSProperties = {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: '1.5rem',
    lineHeight: '1.2',
  }

  const highlightStyle: React.CSSProperties = {
    backgroundImage: 'linear-gradient(to right, #2563eb, #1e40af)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  }

  const pStyle: React.CSSProperties = {
    fontSize: '1.25rem',
    color: '#4b5563',
    marginBottom: '2.5rem',
    maxWidth: '48rem',
    margin: '0 auto 2.5rem',
  }

  const buttonsStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    justifyContent: 'center',
  }

  const primaryButtonStyle: React.CSSProperties = {
    backgroundColor: '#2563eb',
    color: 'white',
    fontSize: '1.125rem',
    padding: '1rem 2rem',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 'bold',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    transition: 'background-color 0.2s',
  }

  const secondaryButtonStyle: React.CSSProperties = {
    backgroundColor: 'white',
    color: '#1f2937',
    border: '1px solid #d1d5db',
    fontSize: '1.125rem',
    padding: '1rem 2rem',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '500',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.2s',
  }

  const statsStyle: React.CSSProperties = {
    marginTop: '5rem',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '2rem',
  }

  const statItemStyle: React.CSSProperties = {
    textAlign: 'center',
  }

  const statNumberStyle: React.CSSProperties = {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#1d4ed8',
  }

  const statLabelStyle: React.CSSProperties = {
    color: '#4b5563',
    marginTop: '0.5rem',
  }

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <div style={centerStyle}>
          <div style={badgeStyle}>
            <SparklesIcon width={16} height={16} />
            <span>Powered by TinyFish AI</span>
          </div>

          <h1 style={h1Style}>
            Find Your Perfect <span style={highlightStyle}>Internship</span>
          </h1>

          <p style={pStyle}>
            AI-powered internship matching platform that connects students with amazing opportunities. Get personalized recommendations based on your skills, interests, and career goals.
          </p>

          <div style={buttonsStyle}>
            <button style={primaryButtonStyle} onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1d4ed8')} onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#2563eb')}>
              <span>Start Finding Internships</span>
              <ArrowRightIcon width={20} height={20} />
            </button>
            <button style={secondaryButtonStyle} onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f3f4f6')} onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'white')}>
              How It Works
            </button>
          </div>
        </div>

        {/* Stats */}
        <div style={statsStyle}>
          <div style={statItemStyle}>
            <div style={statNumberStyle}>10,000+</div>
            <div style={statLabelStyle}>Active Internships</div>
          </div>
          <div style={statItemStyle}>
            <div style={statNumberStyle}>5,000+</div>
            <div style={statLabelStyle}>Companies Hiring</div>
          </div>
          <div style={statItemStyle}>
            <div style={statNumberStyle}>95%</div>
            <div style={statLabelStyle}>Match Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection