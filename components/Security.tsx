'use client'
import { motion } from 'framer-motion'

const rev = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}
const trans = { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }

const items = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="20" height="20">
        <rect x="4" y="10" width="16" height="10" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      </svg>
    ),
    title: 'Encrypted in transit and at rest',
    body: 'Every payload and stored record is encrypted end to end.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="20" height="20">
        <circle cx="9" cy="8" r="3.2" />
        <path d="M3.5 20a5.5 5.5 0 0 1 11 0M16 9.5c1.7.3 3 1.7 3 3.5M17.5 20a4 4 0 0 0-3-6.8" />
      </svg>
    ),
    title: 'Role-based access',
    body: 'Granular permissions across teams, partners, and auditors.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="20" height="20">
        <path d="M4 6h16M4 12h16M4 18h10" />
        <circle cx="19" cy="18" r="2.4" />
      </svg>
    ),
    title: 'Immutable audit trail',
    body: 'Every measurement is timestamped and cannot be silently altered.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="20" height="20">
        <path d="M12 3 4 6.5V12c0 4.8 3.4 8.4 8 9 4.6-.6 8-4.2 8-9V6.5L12 3Z" />
      </svg>
    ),
    title: 'Dedicated deployment',
    body: 'On-prem and single-tenant options for governments and banks.',
  },
]

export default function Security() {
  return (
    <section style={{ paddingBlock: 96 }}>
      <style>{`@media (min-width: 860px) { .security-wrap { padding-block: 128px !important; } }`}</style>
      <div className="container security-wrap" style={{ paddingBlock: 96 }}>
        <motion.div
          variants={rev}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-8%' }}
          transition={trans}
          style={{ maxWidth: 600, marginBottom: 60 }}
        >
          <span
            style={{
              display: 'inline-block',
              fontSize: '0.72rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#FF6363',
              marginBottom: 18,
            }}
          >
            Security &amp; Governance
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-display-var), sans-serif',
              fontWeight: 700,
              letterSpacing: '-0.04em',
              lineHeight: 1.06,
              fontSize: 'clamp(2rem, 4vw, 2.9rem)',
              color: 'var(--text)',
            }}
          >
            Built for institutions, not just startups.
          </h2>
        </motion.div>

        <style>{`@media (min-width: 800px) { .security-grid { grid-template-columns: repeat(2, 1fr) !important; } }`}</style>
        <div
          className="security-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 12,
          }}
        >
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              variants={rev}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-8%' }}
              transition={{ ...trans, delay: i * 0.07 }}
              style={{
                background: 'rgba(255,251,247,0.03)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
                padding: '28px 24px',
                display: 'flex',
                gap: 18,
                alignItems: 'flex-start',
                transition: 'border-color 280ms, background 280ms',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,99,99,0.25)'
                ;(e.currentTarget as HTMLElement).style.background = 'rgba(255,99,99,0.04)'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'
                ;(e.currentTarget as HTMLElement).style.background = 'rgba(255,251,247,0.03)'
              }}
            >
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 10,
                  background: 'rgba(255,99,99,0.1)',
                  border: '1px solid rgba(255,99,99,0.18)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FF6363',
                  flexShrink: 0,
                }}
              >
                {item.icon}
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display-var), sans-serif',
                    fontWeight: 700,
                    fontSize: '1rem',
                    letterSpacing: '-0.02em',
                    color: 'var(--text)',
                    marginBottom: 6,
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-2)', lineHeight: 1.6 }}>{item.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
