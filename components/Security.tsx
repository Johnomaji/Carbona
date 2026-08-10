'use client'
import { motion } from 'framer-motion'

const rev = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
}
const trans = { duration: 0.64, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }

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
      <style>{`@media (min-width: 860px) { .security-section { padding-block: 140px !important; } }`}</style>
      <div className="container security-section" style={{ paddingBlock: 96 }}>
        <motion.div
          variants={rev}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-8%' }}
          transition={trans}
          style={{ maxWidth: 640, marginBottom: 56 }}
        >
          <div
            style={{
              fontFamily: 'var(--font-mono-var), monospace',
              fontSize: '0.72rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--cyan)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 9,
              marginBottom: 18,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: 'var(--cyan-solid)',
                boxShadow: '0 0 10px var(--cyan-solid)',
                flexShrink: 0,
              }}
            />
            Security &amp; Governance
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display-var), sans-serif',
              fontWeight: 500,
              letterSpacing: '-0.02em',
              lineHeight: 1.06,
              fontSize: 'clamp(1.9rem, 3.8vw, 2.75rem)',
              color: 'var(--text)',
            }}
          >
            Built for institutions, not just startups.
          </h2>
        </motion.div>

        <style>{`@media (min-width: 800px) { .security-grid { grid-template-columns: repeat(2, 1fr) !important; } }`}</style>
        <motion.div
          className="security-grid"
          variants={rev}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-8%' }}
          transition={{ ...trans, delay: 0.1 }}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 1,
            background: 'var(--border)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
          }}
        >
            {items.map((item) => (
              <div
                key={item.title}
                style={{
                  background: 'var(--bg-elev)',
                  padding: 28,
                  display: 'flex',
                  gap: 16,
                  alignItems: 'flex-start',
                }}
              >
                <span style={{ color: 'var(--cyan)', flexShrink: 0, marginTop: 2 }}>{item.icon}</span>
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display-var), sans-serif',
                      fontWeight: 600,
                      fontSize: '0.98rem',
                      color: 'var(--text)',
                      marginBottom: 6,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.86rem', color: 'var(--text-2)' }}>{item.body}</p>
                </div>
              </div>
            ))}
        </motion.div>
      </div>
    </section>
  )
}
