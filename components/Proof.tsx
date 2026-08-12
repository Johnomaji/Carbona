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
        paddingBlock: 52,
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        <p
          style={{
            fontSize: '0.72rem',
            fontWeight: 600,
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
          @media (min-width: 640px) { .proof-row { grid-template-columns: repeat(3, 1fr) !important; } }
          @media (min-width: 960px) { .proof-row { grid-template-columns: repeat(6, 1fr) !important; } }
        `}</style>
        <div
          className="proof-row"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '20px 16px',
            alignItems: 'center',
            justifyItems: 'center',
          }}
        >
          {logos.map((name, i) => (
            <motion.span
              key={name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-8%' }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              style={{
                fontFamily: 'var(--font-display-var), sans-serif',
                fontSize: '0.82rem',
                fontWeight: 600,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: 'rgba(255,251,247,0.2)',
                whiteSpace: 'nowrap',
                transition: 'color 280ms',
                cursor: 'default',
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'rgba(255,251,247,0.45)')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'rgba(255,251,247,0.2)')}
            >
              {name}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}
