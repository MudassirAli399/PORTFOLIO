"use client"
import Link from 'next/link';

import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkWidth = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

<<<<<<< HEAD
  const navItems = ['HOME', 'ABOUT', 'PROJECTS', 'RESUME'];
=======
  const navItems = ['HOME', 'ABOUT', 'PROJECTS', 'RESUME', 'CONTACT'];
>>>>>>> 182255fbd23779e68ea16e16c355d050a008b786

  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <div style={styles.logo}>
          <span style={styles.logoText}>Portfolio</span>
        </div>

        {/* Desktop Navigation */}
        {!isMobile && (
          <ul style={styles.navList}>
            {navItems.map((item, index) => (
              <li key={item} style={{
                ...styles.navItem,
                animationDelay: `${index * 0.1}s`
              }}>
              <Link href={item==="HOME" ? "/" : `/${item.toLowerCase()}`} style={styles.navLink} > {item} </Link>
              </li>
            ))}
          </ul>
        )}

        {/* Hamburger Menu */}
        {isMobile && (
          <button
            onClick={toggleMenu}
            style={styles.hamburger}
            aria-label="Toggle menu"
          >
            <span style={{
              ...styles.hamburgerLine,
              transform: isMenuOpen ? 'rotate(45deg) translateY(8px)' : 'none'
            }}></span>
            <span style={{
              ...styles.hamburgerLine,
              opacity: isMenuOpen ? 0 : 1
            }}></span>
            <span style={{
              ...styles.hamburgerLine,
              transform: isMenuOpen ? 'rotate(-45deg) translateY(-8px)' : 'none'
            }}></span>
          </button>
        )}
      </nav>

     
      {isMobile && (
        <div style={{
          ...styles.mobileMenu,
          maxHeight: isMenuOpen ? '400px' : '0',
          opacity: isMenuOpen ? 1 : 0
        }}>
          <ul style={styles.mobileNavList}>
            {navItems.map((item, index) => (
              <li
                key={item}
                style={{
                  ...styles.mobileNavItem,
                  transitionDelay: isMenuOpen ? `${index * 0.05}s` : '0s'
                }}
              >
              <Link href={item==="HOME" ? "/" : `/${item.toLowerCase()}`} style={styles.navLink} > {item} </Link>

              </li>
            ))}
          </ul>
        </div>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Work+Sans:wght@400;500&display=swap');
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes glow {
          0%, 100% {
            text-shadow: 0 0 10px rgba(0, 255, 200, 0.5),
                         0 0 20px rgba(0, 255, 200, 0.3);
          }
          50% {
            text-shadow: 0 0 20px rgba(0, 255, 200, 0.8),
                         0 0 30px rgba(0, 255, 200, 0.5);
          }
        }
      `}</style>
    </header>
  );
}

const styles = {
  header: {
   
    background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%)',
    backdropFilter: 'blur(10px)',
    borderBottom: '2px solid rgba(0, 255, 200, 0.3)',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.5)',
    
    fontFamily: "'Work Sans', sans-serif",
  },
  nav: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '1.2rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: '1.8rem',
    fontWeight: 900,
    fontFamily: "'Orbitron', sans-serif",
    background: 'linear-gradient(135deg, #00ffc8 0%, #00b4d8 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    letterSpacing: '2px',
    animation: 'glow 2s ease-in-out infinite',
  },
  logoText: {
    display: 'inline-block',
  },
  navList: {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    gap: '2.5rem',
  },
  navItem: {
    animation: 'slideDown 0.6s ease-out forwards',
    opacity: 0,
  },
  navLink: {
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '0.95rem',
    fontWeight: 500,
    letterSpacing: '1.5px',
    position: 'relative',
    padding: '0.5rem 0',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    display: 'inline-block',
    cursor: 'pointer',
  },
  hamburger: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    padding: '8px',
    zIndex: 1001,
  },
  hamburgerLine: {
    width: '28px',
    height: '3px',
    background: 'linear-gradient(135deg, #00ffc8 0%, #00b4d8 100%)',
    borderRadius: '3px',
    transition: 'all 0.3s ease',
    boxShadow: '0 0 10px rgba(0, 255, 200, 0.5)',
  },
  mobileMenu: {
    overflow: 'hidden',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    background: 'linear-gradient(180deg, #1a1f3a 0%, #0a0e27 100%)',
    borderTop: '1px solid rgba(0, 255, 200, 0.2)',
  },
  mobileNavList: {
    listStyle: 'none',
    margin: 0,
    padding: '1rem 0',
  },
  mobileNavItem: {
    opacity: 1,
    transition: 'all 0.3s ease',
  },
  mobileNavLink: {
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '1.1rem',
    fontWeight: 500,
    letterSpacing: '2px',
    display: 'block',
    padding: '1rem 2rem',
    transition: 'all 0.3s ease',
    borderLeft: '3px solid transparent',
  },
};