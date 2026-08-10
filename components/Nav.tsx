'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from './ThemeProvider'

function BrandMark() {
  return (
    <span
      aria-hidden="true"
      style={{
        width: 20,
        height: 20,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: '1fr 1fr',
        gap: 2,
        borderRadius: 4,
        overflow: 'hidden',
        flexShrink: 0,
      }}
    >
      <span style={{ background: 'var(--emerald)' }} />
      <span style={{ background: 'var(--cyan-solid)' }} />
      <span style={{ background: 'var(--cyan-solid)' }} />
      <span style={{ background: 'var(--emerald)' }} />
    </span>
  )
}

export default function Nav() {
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8)
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
          background: theme === 'light' ? 'rgba(247,245,239,.72)' : 'rgba(7,9,10,.68)',
          backdropFilter: 'blur(18px) saturate(140%)',
          WebkitBackdropFilter: 'blur(18px) saturate(140%)',
          borderBottom: `1px solid ${scrolled ? 'var(--border)' : 'transparent'}`,
          transition: 'background 280ms, border-color 280ms',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          {/* Brand */}
          <a
            href="#top"
            aria-label="Carbona home"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              fontFamily: 'var(--font-display-var), sans-serif',
              fontSize: '1.2rem',
              letterSpacing: '-0.01em',
              color: 'var(--text)',
            }}
          >
            <BrandMark />
            Carbona
          </a>

          {/* Desktop nav links */}
          <nav
            aria-label="Primary"
            style={{
              display: 'none',
              alignItems: 'center',
              gap: 8,
              fontSize: '0.9rem',
              color: 'var(--text-2)',
            }}
            className="md-nav"
          >
            <a
              href="#platform"
              style={{ padding: '10px 14px', borderRadius: 'var(--radius-full)', transition: 'color 150ms, background 150ms' }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = 'var(--text)'
                ;(e.currentTarget as HTMLElement).style.background = 'var(--bg-elev-2)'
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = 'var(--text-2)'
                ;(e.currentTarget as HTMLElement).style.background = 'transparent'
              }}
            >
              Platform
            </a>

            {/* Solutions dropdown */}
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <a
                href="#platform"
                aria-haspopup="true"
                aria-expanded={solutionsOpen}
                style={{ padding: '10px 14px', borderRadius: 'var(--radius-full)', transition: 'color 150ms, background 150ms', display: 'block' }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = 'var(--text)'
                  ;(e.currentTarget as HTMLElement).style.background = 'var(--bg-elev-2)'
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = 'var(--text-2)'
                  ;(e.currentTarget as HTMLElement).style.background = 'transparent'
                }}
              >
                Solutions
              </a>
              <AnimatePresence>
                {solutionsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: 0.15 }}
                    style={{
                      position: 'absolute',
                      top: 'calc(100% + 6px)',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'var(--bg-elev)',
                      border: '1px solid var(--border-strong)',
                      borderRadius: 'var(--radius-md)',
                      padding: 8,
                      minWidth: 230,
                      boxShadow: '0 24px 48px rgba(0,0,0,.35)',
                      zIndex: 10,
                    }}
                  >
                    {['Governments', 'Carbon Developers', 'Agribusiness', 'Financial Institutions'].map((item) => (
                      <a
                        key={item}
                        href="#platform"
                        style={{
                          display: 'block',
                          padding: '11px 12px',
                          borderRadius: 'var(--radius-sm)',
                          fontSize: '0.85rem',
                          color: 'var(--text-2)',
                          transition: 'background 150ms, color 150ms',
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.background = 'var(--bg-elev-2)'
                          ;(e.currentTarget as HTMLElement).style.color = 'var(--text)'
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.background = 'transparent'
                          ;(e.currentTarget as HTMLElement).style.color = 'var(--text-2)'
                        }}
                      >
                        {item}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a
              href="#developer"
              style={{ padding: '10px 14px', borderRadius: 'var(--radius-full)', transition: 'color 150ms, background 150ms' }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = 'var(--text)'
                ;(e.currentTarget as HTMLElement).style.background = 'var(--bg-elev-2)'
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = 'var(--text-2)'
                ;(e.currentTarget as HTMLElement).style.background = 'transparent'
              }}
            >
              Developers
            </a>
            <a
              href="#pricing"
              style={{ padding: '10px 14px', borderRadius: 'var(--radius-full)', transition: 'color 150ms, background 150ms' }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = 'var(--text)'
                ;(e.currentTarget as HTMLElement).style.background = 'var(--bg-elev-2)'
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = 'var(--text-2)'
                ;(e.currentTarget as HTMLElement).style.background = 'transparent'
              }}
            >
              Pricing
            </a>
          </nav>

          {/* Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle color theme"
              aria-pressed={theme === 'light'}
              style={{
                width: 38,
                height: 38,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                border: '1px solid var(--border)',
                color: 'var(--text-2)',
                flexShrink: 0,
                transition: 'border-color 150ms, color 150ms',
              }}
            >
              {theme === 'dark' ? (
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z" />
                </svg>
              ) : (
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <circle cx="12" cy="12" r="4.5" />
                  <path d="M12 2.5v2.5M12 19v2.5M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2.5 12H5M19 12h2.5M4.2 19.8 6 18M18 6l1.8-1.8" />
                </svg>
              )}
            </button>

            {/* Request Access — hidden on mobile via style trick with CSS */}
            <a
              href="#access"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '11px 20px',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.82rem',
                fontWeight: 600,
                background: 'var(--cyan-solid)',
                color: 'var(--on-solid)',
                whiteSpace: 'nowrap',
                transition: 'transform 150ms, box-shadow 150ms',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
                ;(e.currentTarget as HTMLElement).style.boxShadow = '0 14px 32px rgba(0,230,195,.28)'
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
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
              style={{
                width: 38,
                height: 38,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                border: '1px solid var(--border)',
                color: 'var(--text-2)',
                flexShrink: 0,
              }}
              className="menu-toggle-btn"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                {menuOpen ? (
                  <path d="M18 6 6 18M6 6l12 12" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Desktop nav style override */}
      <style>{`
        @media (min-width: 960px) {
          .md-nav { display: flex !important; }
          .menu-toggle-btn { display: none !important; }
        }
      `}</style>

      {/* Mobile nav */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobileNav"
            aria-label="Mobile"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
            style={{
              position: 'fixed',
              inset: 'var(--nav-h) 0 0 0',
              background: 'var(--bg)',
              zIndex: 190,
              padding: '32px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
              overflowY: 'auto',
            }}
          >
            {[
              { label: 'Platform', href: '#platform' },
              { label: 'Solutions', href: '#platform' },
              { label: 'Developers', href: '#developer' },
              { label: 'Pricing', href: '#pricing' },
              { label: 'FAQ', href: '#faq' },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={closeMobile}
                style={{
                  display: 'block',
                  padding: '16px 4px',
                  fontSize: '1.2rem',
                  fontFamily: 'var(--font-display-var), sans-serif',
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
                marginTop: 24,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '15px 28px',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.92rem',
                fontWeight: 600,
                background: 'var(--cyan-solid)',
                color: 'var(--on-solid)',
                width: '100%',
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
