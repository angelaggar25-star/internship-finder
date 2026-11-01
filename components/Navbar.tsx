'use client'

import { useState } from 'react'
import { MagnifyingGlassIcon, UserCircleIcon, BellIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navStyle: React.CSSProperties = {
    position: 'sticky',
    top: 0,
    zIndex: 50,
    backgroundColor: '#ffffff',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    borderBottom: '1px solid #e5e7eb',
  }

  const containerStyle: React.CSSProperties = {
    maxWidth: '80rem',
    margin: '0 auto',
    padding: '0 1rem',
  }

  const contentStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '64px',
  }

  const logoStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  }

  const logoBadgeStyle: React.CSSProperties = {
    height: '32px',
    width: '32px',
    backgroundColor: '#2563eb',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '18px',
    fontWeight: 'bold',
  }

  const desktopNavStyle: React.CSSProperties = {
    display: 'none',
    gap: '2rem',
    '@media (min-width: 768px)': { display: 'flex' },
  }

  const navLinkStyle: React.CSSProperties = {
    color: '#374151',
    fontWeight: '500',
    transition: 'color 0.2s',
    cursor: 'pointer',
  }

  const desktopRightStyle: React.CSSProperties = {
    display: 'none',
    gap: '1rem',
    alignItems: 'center',
    '@media (min-width: 768px)': { display: 'flex' },
  }

  const signInButtonStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    backgroundColor: '#eff6ff',
    color: '#0369a1',
    padding: '0.5rem 1rem',
    borderRadius: '8px',
    transition: 'background-color 0.2s',
    border: 'none',
    cursor: 'pointer',
    fontWeight: '500',
  }

  const postButtonStyle: React.CSSProperties = {
    backgroundColor: '#2563eb',
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '8px',
    fontWeight: '500',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  }

  const mobileMenuStyle: React.CSSProperties = {
    display: isMenuOpen ? 'flex' : 'none',
    flexDirection: 'column',
    gap: '1rem',
    padding: '1rem',
    borderTop: '1px solid #e5e7eb',
  }

  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        <div style={contentStyle}>
          <div style={logoStyle}>
            <div style={logoBadgeStyle}>IF</div>
            <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#111827' }}>InternshipFinder</span>
          </div>

          {/* Desktop Nav */}
          <div style={{ ...desktopNavStyle, display: 'flex' }}>
            <a href="#" style={navLinkStyle} onMouseEnter={(e) => (e.currentTarget.style.color = '#2563eb')} onMouseLeave={(e) => (e.currentTarget.style.color = '#374151')}>Home</a>
            <a href="#" style={navLinkStyle} onMouseEnter={(e) => (e.currentTarget.style.color = '#2563eb')} onMouseLeave={(e) => (e.currentTarget.style.color = '#374151')}>Internships</a>
            <a href="#" style={navLinkStyle} onMouseEnter={(e) => (e.currentTarget.style.color = '#2563eb')} onMouseLeave={(e) => (e.currentTarget.style.color = '#374151')}>Companies</a>
            <a href="#" style={navLinkStyle} onMouseEnter={(e) => (e.currentTarget.style.color = '#2563eb')} onMouseLeave={(e) => (e.currentTarget.style.color = '#374151')}>Resources</a>
            <a href="#" style={navLinkStyle} onMouseEnter={(e) => (e.currentTarget.style.color = '#2563eb')} onMouseLeave={(e) => (e.currentTarget.style.color = '#374151')}>Blog</a>
          </div>

          {/* Desktop Right */}
          <div style={{ ...desktopRightStyle, display: 'flex' }}>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#4b5563', padding: '0.5rem' }}>
              <MagnifyingGlassIcon width={20} height={20} />
            </button>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#4b5563', padding: '0.5rem' }}>
              <BellIcon width={20} height={20} />
            </button>
            <button style={signInButtonStyle} onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#dbeafe')} onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#eff6ff')}>
              <UserCircleIcon width={20} height={20} />
              <span>Sign In</span>
            </button>
            <button style={postButtonStyle} onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1d4ed8')} onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#2563eb')}>
              Post Internship
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div style={{ display: 'none', '@media (max-width: 767px)': { display: 'block' } }}>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem', color: '#374151' }}>
              {isMenuOpen ? <XMarkIcon width={24} height={24} /> : <Bars3Icon width={24} height={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div style={mobileMenuStyle}>
          <a href="#" style={{ color: '#374151', fontWeight: '500', padding: '0.5rem' }}>Home</a>
          <a href="#" style={{ color: '#374151', fontWeight: '500', padding: '0.5rem' }}>Internships</a>
          <a href="#" style={{ color: '#374151', fontWeight: '500', padding: '0.5rem' }}>Companies</a>
          <a href="#" style={{ color: '#374151', fontWeight: '500', padding: '0.5rem' }}>Resources</a>
          <a href="#" style={{ color: '#374151', fontWeight: '500', padding: '0.5rem' }}>Blog</a>
          <button style={signInButtonStyle}>
            <UserCircleIcon width={20} height={20} />
            <span>Sign In</span>
          </button>
          <button style={postButtonStyle}>Post Internship</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar