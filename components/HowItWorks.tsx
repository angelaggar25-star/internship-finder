'use client'

import { UserCircleIcon, MagnifyingGlassIcon, DocumentCheckIcon, BriefcaseIcon } from '@heroicons/react/24/outline'

const HowItWorks = () => {
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

  const centerStyle: React.CSSProperties = {
    textAlign: 'center',
    marginBottom: '4rem',
  }

  const h2Style: React.CSSProperties = {
    fontSize: '1.875rem',
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: '1rem',
  }

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '2rem',
  }

  const stepStyle: React.CSSProperties = {
    textAlign: 'center',
  }

  const iconStyle: React.CSSProperties = {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 1.5rem',
    backgroundColor: '#dbeafe',
    color: '#0369a1',
  }

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <div style={centerStyle}>
          <h2 style={h2Style}>How It Works</h2>
          <p style={{ color: '#4b5563', maxWidth: '42rem', margin: '0 auto' }}>
            Our AI-powered platform makes finding the perfect internship simple and efficient
          </p>
        </div>

        <div style={gridStyle}>
          {[
            { icon: UserCircleIcon, title: 'Create Your Profile', desc: 'Build a comprehensive profile with your skills and interests' },
            { icon: MagnifyingGlassIcon, title: 'AI Matching', desc: 'Our TinyFish AI analyzes and matches you with opportunities' },
            { icon: DocumentCheckIcon, title: 'Apply & Track', desc: 'Apply with one click and track your applications' },
            { icon: BriefcaseIcon, title: 'Get Hired', desc: 'Begin your internship journey with support' },
          ].map((step, idx) => (
            <div key={idx} style={stepStyle}>
              <div style={{ ...iconStyle, backgroundColor: ['#dbeafe', '#f3e8ff', '#dcfce7', '#fed7aa'][idx], color: ['#0369a1', '#7c3aed', '#16a34a', '#b45309'][idx] }}>
                <step.icon width={40} height={40} />
              </div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#111827', marginBottom: '0.5rem' }}>{step.title}</h3>
              <p style={{ color: '#4b5563', fontSize: '0.875rem' }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks