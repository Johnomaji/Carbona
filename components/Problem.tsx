'use client'
import { motion } from 'framer-motion'

const rev = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}
const trans = { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }

const pains = [
  {
    stat: '6–18 months',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="18" height="18">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.5 3.5" />
      </svg>
    ),
    text: 'Typical timeline for a single manual verification cycle, start to registry.',
  },
  {
    stat: 'Inconsistent',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="18" height="18">
        <path d="M12 2 2 7l10 5 10-5-10-5M2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    text: 'Methodology varies by verifier, region, and project type — hard to compare across a portfolio.',
  },
  {
    stat: 'Unauditable',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="18" height="18">
        <path d="M12 3 4 6.5V12c0 4.8 3.4 8.4 8 9 4.6-.6 8-4.2 8-9V6.5L12 3Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    text: "Buyers and regulators see a certificate. Rarely the data, models, or samples behind it.",
  },
]

export default function Problem() {
  return (
    <section style={{ paddingBlock: 96 }}>
      <style>{`@media (min-width: 860px) { .problem-wrap { padding-block: 128px !important; } }`}</style>
      <div className="container problem-wrap" style={{ paddingBlock: 96 }}>
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
            The Problem
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-display-var), sans-serif',
              fontWeight: 700,
              letterSpacing: '-0.04em',
              lineHeight: 1.06,
              fontSize: 'clamp(2rem, 4vw, 2.9rem)',
              color: 'var(--text)',
              marginBottom: 18,
            }}
          >
            Carbon claims are only as strong as the data behind them.
          </h2>
          <p
            style={{
              fontSize: 'clamp(1rem, 1.4vw, 1.15rem)',
              color: 'var(--text-2)',
              maxWidth: '48ch',
              lineHeight: 1.65,
            }}
          >
            Most carbon verification still runs on manual field audits, spreadsheets, and inconsistent
            methodology. It takes months, costs more than the credits are worth, and leaves buyers with
            no way to check the work.
          </p>
        </motion.div>

        <style>{`@media (min-width: 800px) { .problem-grid { grid-template-columns: repeat(3, 1fr) !important; } }`}</style>
        <div className="problem-grid" style={{ display: 'grid', gap: 12 }}>
          {pains.map((p, i) => (
            <motion.div
              key={p.stat}
              variants={rev}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-8%' }}
              transition={{ ...trans, delay: i * 0.08 }}
              style={{
                background: 'rgba(255,251,247,0.03)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
                padding: '28px 24px',
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
                  width: 38,
                  height: 38,
                  borderRadius: 10,
                  background: 'rgba(255,99,99,0.12)',
                  border: '1px solid rgba(255,99,99,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FF6363',
                  marginBottom: 20,
                }}
              >
                {p.icon}
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-mono-var), monospace',
                  fontSize: '1.35rem',
                  fontWeight: 700,
                  color: 'var(--text)',
                  marginBottom: 12,
                  display: 'block',
                  letterSpacing: '-0.02em',
                }}
              >
                {p.stat}
              </span>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-2)', lineHeight: 1.6 }}>{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
