'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function BrandMark() {
  return (
    <span
      aria-hidden="true"
      style={{
        width: 26,
        height: 26,
        borderRadius: 7,
        background: 'linear-gradient(135deg, #FF4D00, #FF6363)',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: '1fr 1fr',
        gap: 3,
        padding: 5,
        flexShrink: 0,
      }}
    >
      <span style={{ background: 'rgba(255,251,247,0.95)', borderRadius: 2 }} />
      <span style={{ background: 'rgba(255,251,247,0.55)', borderRadius: 2 }} />
      <span style={{ background: 'rgba(255,251,247,0.55)', borderRadius: 2 }} />
      <span style={{ background: 'rgba(255,251,247,0.95)', borderRadius: 2 }} />
    </span>
  )
}

const navLinks = [
  { label: 'Platform', href: '#platform' },
  { label: 'Solutions', href: '#platform' },
  { label: 'Developers', href: '#developer' },
  { label: 'Pricing', href: '#pricing' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMobile = () => {
    setMenuOpen(false)
    document.body.style.overflow = ''
  }

  const toggleMenu = () => {
    const next = !menuOpen
    setMenuOpen(next)
    document.body.style.overflow = next ? 'hidden' : ''
  }

  return (
    <>
      <header
        id="siteNav"
        style={{
          position: 'fixed',
          inset: '0 0 auto 0',
          height: 'var(--nav-h)',
          zIndex: 200,
          display: 'flex',
          alignItems: 'center',
          background: scrolled ? 'rgba(12, 11, 10, 0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px) saturate(160%)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(160%)' : 'none',
          borderBottom: `1px solid ${scrolled ? 'rgba(255,251,247,0.07)' : 'transparent'}`,
          transition: 'background 320ms var(--ease-standard), border-color 320ms var(--ease-standard)',
        }}
      >
        <div
          className="container"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}
        >
          {/* Brand */}
          <a
            href="#top"
            aria-label="Carbona home"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              fontFamily: 'var(--font-display-var), sans-serif',
              fontSize: '1.05rem',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              color: 'var(--text)',
            }}
          >
            <BrandMark />
            Carbona
          </a>

          {/* Desktop nav links */}
          <nav
            aria-label="Primary"
            className="rc-nav"
            style={{
              display: 'none',
              alignItems: 'center',
              gap: 2,
              fontSize: '0.875rem',
              fontWeight: 500,
              color: 'var(--text-2)',
            }}
          >
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                style={{
                  padding: '8px 14px',
                  borderRadius: 8,
                  transition: 'color 150ms, background 150ms',
                  color: 'var(--text-2)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = 'var(--text)'
                  ;(e.currentTarget as HTMLElement).style.background = 'rgba(255,251,247,0.07)'
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = 'var(--text-2)'
                  ;(e.currentTarget as HTMLElement).style.background = 'transparent'
                }}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <a
              href="#access"
              className="rc-cta"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '9px 18px',
                borderRadius: 8,
                fontSize: '0.875rem',
                fontWeight: 600,
                background: 'linear-gradient(135deg, #FF4D00, #FF6363)',
                color: '#FFFBF7',
                whiteSpace: 'nowrap',
                transition: 'opacity 150ms, transform 150ms, box-shadow 150ms',
                boxShadow: '0 2px 12px rgba(255,99,99,0.3)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'
                ;(e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(255,99,99,0.45)'
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                ;(e.currentTarget as HTMLElement).style.boxShadow = '0 2px 12px rgba(255,99,99,0.3)'
              }}
            >
              Request Access
            </a>

            {/* Hamburger */}
            <button
              onClick={toggleMenu}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobileNav"
              className="rc-hamburger"
              style={{
                width: 36,
                height: 36,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 8,
                border: '1px solid var(--border-strong)',
                color: 'var(--text-2)',
                flexShrink: 0,
                transition: 'border-color 150ms',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                {menuOpen ? (
                  <path d="M18 6 6 18M6 6l12 12" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h10" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      <style>{`
        @media (min-width: 920px) {
          .rc-nav { display: flex !important; }
          .rc-hamburger { display: none !important; }
        }
        @media (max-width: 919px) {
          .rc-cta { padding: 8px 14px !important; font-size: 0.82rem !important; }
        }
      `}</style>

      {/* Mobile nav */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobileNav"
            aria-label="Mobile"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
            style={{
              position: 'fixed',
              inset: 'var(--nav-h) 0 0 0',
              background: 'rgba(12,11,10,0.97)',
              backdropFilter: 'blur(24px)',
              zIndex: 190,
              padding: '28px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              overflowY: 'auto',
            }}
          >
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={closeMobile}
                style={{
                  display: 'block',
                  padding: '14px 12px',
                  fontSize: '1.1rem',
                  fontFamily: 'var(--font-display-var), sans-serif',
                  fontWeight: 600,
                  letterSpacing: '-0.02em',
                  borderBottom: '1px solid var(--border)',
                  color: 'var(--text)',
                }}
              >
                {label}
              </a>
            ))}
            <a
              href="#access"
              onClick={closeMobile}
              style={{
                marginTop: 20,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '14px 24px',
                borderRadius: 10,
                fontSize: '0.95rem',
                fontWeight: 600,
                background: 'linear-gradient(135deg, #FF4D00, #FF6363)',
                color: '#FFFBF7',
                width: '100%',
                boxShadow: '0 4px 24px rgba(255,99,99,0.35)',
              }}
            >
              Request Access
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}
