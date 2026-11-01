'use client'

import { UsersIcon, BuildingOfficeIcon, TrophyIcon, ChartBarIcon } from '@heroicons/react/24/outline'

const StatsSection = () => {
  const sectionStyle: React.CSSProperties = {
    paddingTop: '4rem',
    paddingBottom: '4rem',
    background: 'linear-gradient(to right, #2563eb, #1e40af)',
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
    color: 'white',
    marginBottom: '1rem',
  }

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '2rem',
  }

  const statCardStyle: React.CSSProperties = {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: '1rem',
    padding: '2rem',
    textAlign: 'center',
    border: '1px solid rgba(255,255,255,0.2)',
    backdropFilter: 'blur(10px)',
  }

  const statNumberStyle: React.CSSProperties = {
    fontSize: '2.25rem',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '0.5rem',
  }

  const statLabelStyle: React.CSSProperties = {
    color: 'rgba(255,255,255,0.8)',
    fontWeight: '500',
  }

  const stats = [
    { icon: UsersIcon, value: '25,000+', label: 'Students Placed' },
    { icon: BuildingOfficeIcon, value: '5,000+', label: 'Partner Companies' },
    { icon: TrophyIcon, value: '95%', label: 'Success Rate' },
    { icon: ChartBarIcon, value: '4.8/5', label: 'Student Rating' },
  ]

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <div style={centerStyle}>
          <h2 style={h2Style}>Trusted by Students & Companies</h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', maxWidth: '42rem', margin: '0 auto' }}>
            Our platform has successfully connected thousands of students with amazing internship opportunities
          </p>
        </div>

        <div style={gridStyle}>
          {stats.map((stat, idx) => (
            <div key={idx} style={statCardStyle}>
              <div style={{ width: '64px', height: '64px', backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                <stat.icon width={32} height={32} style={{ color: 'white' }} />
              </div>
              <div style={statNumberStyle}>{stat.value}</div>
              <div style={statLabelStyle}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection