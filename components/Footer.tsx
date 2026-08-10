'use client'

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

const columns = [
  {
    heading: 'Product',
    links: [
      { label: 'Platform', href: '#platform' },
      { label: 'Satellite Intelligence', href: '#platform' },
      { label: 'Verification', href: '#platform' },
      { label: 'API', href: '#developer' },
    ],
  },
  {
    heading: 'Solutions',
    links: [
      { label: 'Governments', href: '#platform' },
      { label: 'Carbon Developers', href: '#platform' },
      { label: 'Agribusiness', href: '#platform' },
      { label: 'Financial Institutions', href: '#platform' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '#top' },
      { label: 'Careers', href: '#top' },
      { label: 'Press', href: '#top' },
      { label: 'Contact', href: '#access' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy', href: '#top' },
      { label: 'Terms', href: '#top' },
      { label: 'Security', href: '#top' },
    ],
  },
]

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        paddingTop: 64,
        paddingBottom: 40,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 40,
            marginBottom: 56,
          }}
        >
          <style>{`
            @media (min-width: 700px) { .footer-grid { grid-template-columns: 1.4fr repeat(4, 1fr) !important; } }
          `}</style>
          <div className="footer-grid" style={{ display: 'contents' }}>
            {/* Brand */}
            <div>
              <a
                href="#top"
                aria-label="Carbona home"
                style={{
                  display: 'inline-flex',
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
              <p
                style={{
                  fontSize: '0.86rem',
                  color: 'var(--text-2)',
                  maxWidth: '32ch',
                  marginTop: 16,
                }}
              >
                The Intelligence Layer for Carbon. AI-native infrastructure for measurement, reporting, and verification.
              </p>
            </div>

            {/* Link columns */}
            {columns.map((col) => (
              <div key={col.heading}>
                <h3
                  style={{
                    fontFamily: 'var(--font-mono-var), monospace',
                    fontSize: '0.72rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--text-3)',
                    fontWeight: 500,
                    marginBottom: 16,
                  }}
                >
                  {col.heading}
                </h3>
                {col.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    style={{
                      display: 'block',
                      fontSize: '0.88rem',
                      color: 'var(--text-2)',
                      padding: '6px 0',
                      transition: 'color 280ms',
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--text)')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--text-2)')}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 16,
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: 32,
            borderTop: '1px solid var(--border)',
            fontSize: '0.8rem',
            color: 'var(--text-3)',
          }}
        >
          <span>&copy; 2026 Carbona, Inc.</span>
          <div style={{ display: 'flex', gap: 10 }}>
            {/* LinkedIn */}
            <a
              href="#top"
              aria-label="Carbona on LinkedIn"
              style={{
                width: 34,
                height: 34,
                border: '1px solid var(--border)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'border-color 150ms',
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--border-strong)')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--border)')}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--text-3)' }}>
                <path d="M6.94 8.5H4.06V19.5H6.94V8.5ZM5.5 4.25A1.75 1.75 0 1 0 5.5 7.75 1.75 1.75 0 0 0 5.5 4.25ZM19.94 19.5H17.06V13.9C17.06 12.7 16.6 11.9 15.5 11.9C14.6 11.9 14.1 12.5 13.9 13.1C13.8 13.35 13.8 13.7 13.8 14.05V19.5H10.9C10.9 19.5 10.94 9.5 10.9 8.5H13.8V9.85C14.2 9.15 15 8.15 16.9 8.15C19.3 8.15 19.94 9.75 19.94 12V19.5Z" />
              </svg>
            </a>

            {/* X / Twitter */}
            <a
              href="#top"
              aria-label="Carbona on X"
              style={{
                width: 34,
                height: 34,
                border: '1px solid var(--border)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'border-color 150ms',
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--border-strong)')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--border)')}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--text-3)' }}>
                <path d="M13.6 10.6 20 4h-2l-5.4 5.7L8.2 4H4l6.4 8.8L4 20h2l5.7-6.1L16 20h4l-6.4-9.4Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
