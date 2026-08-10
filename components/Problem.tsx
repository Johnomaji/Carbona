'use client'
import { motion } from 'framer-motion'

const rev = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
}
const trans = { duration: 0.64, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }

const pains = [
  {
    stat: '6–18 months',
    text: 'Typical timeline for a single manual verification cycle, start to registry.',
  },
  {
    stat: 'Inconsistent',
    text: 'Methodology varies by verifier, region, and project type — hard to compare across a portfolio.',
  },
  {
    stat: 'Unauditable',
    text: "Buyers and regulators see a certificate. Rarely the data, models, or samples behind it.",
  },
]

export default function Problem() {
  return (
    <section style={{ paddingBlock: 96 }}>
      <style>{`@media (min-width: 860px) { .problem-section { padding-block: 140px !important; } }`}</style>
      <div className="container problem-section" style={{ paddingBlock: 96 }}>
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
            The Problem
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display-var), sans-serif',
              fontWeight: 500,
              letterSpacing: '-0.02em',
              lineHeight: 1.06,
              fontSize: 'clamp(1.9rem, 3.8vw, 2.75rem)',
              color: 'var(--text)',
              marginBottom: 16,
            }}
          >
            Carbon claims are only as strong as the data behind them.
          </h2>
          <p
            style={{
              fontSize: 'clamp(1.05rem, 1.5vw, 1.25rem)',
              color: 'var(--text-2)',
              maxWidth: '44ch',
            }}
          >
            Most carbon verification still runs on manual field audits, spreadsheets, and inconsistent
            methodology. It takes months, costs more than the credits are worth, and leaves buyers with
            no way to check the work.
          </p>
        </motion.div>

        <style>{`@media (min-width: 800px) { .problem-grid { grid-template-columns: repeat(3, 1fr) !important; } }`}</style>
        <div className="problem-grid" style={{ display: 'grid', gap: 16, marginTop: 48 }}>
            {pains.map((p, i) => (
              <motion.div
                key={p.stat}
                variants={rev}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-8%' }}
                transition={{ ...trans, delay: i * 0.07 }}
                style={{
                  background: 'var(--bg-elev)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 28,
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono-var), monospace',
                    fontSize: '1.3rem',
                    color: 'var(--cyan)',
                    marginBottom: 10,
                    display: 'block',
                  }}
                >
                  {p.stat}
                </span>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-2)' }}>{p.text}</p>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  )
}
