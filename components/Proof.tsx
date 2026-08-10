'use client'
import { motion } from 'framer-motion'

const logos = [
  'MERIDIAN CAPITAL',
  'NORTHFIELD AGRI',
  'ATLAS DEVELOPMENT',
  'VERDANT BANK',
  'KAIROS FUND',
  'TERRA REGISTRY',
]

export default function Proof() {
  return (
    <section
      style={{
        paddingBlock: 56,
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="container">
        <p
          style={{
            fontFamily: 'var(--font-mono-var), monospace',
            fontSize: '0.72rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--text-3)',
            marginBottom: 32,
            textAlign: 'center',
          }}
        >
          Trusted by teams measuring the planet
        </p>
        <style>{`
          @media (min-width: 700px) { .logo-row { grid-template-columns: repeat(3, 1fr) !important; } }
          @media (min-width: 960px) { .logo-row { grid-template-columns: repeat(6, 1fr) !important; } }
        `}</style>
        <div
          className="logo-row"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '28px 20px',
            alignItems: 'center',
            justifyItems: 'center',
          }}
        >
          {logos.map((name, i) => (
            <motion.span
              key={name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8%' }}
              transition={{ duration: 0.64, ease: [0.16, 1, 0.3, 1], delay: i * 0.06 }}
              style={{
                fontFamily: 'var(--font-display-var), sans-serif',
                fontSize: '1rem',
                letterSpacing: '0.02em',
                color: 'var(--text-3)',
                whiteSpace: 'nowrap',
                transition: 'color 280ms',
                cursor: 'default',
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--text-2)')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--text-3)')}
            >
              {name}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}
