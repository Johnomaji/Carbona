'use client'
import { motion } from 'framer-motion'

const rev = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
}
const trans = { duration: 0.64, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }

const pillars = [
  {
    index: '01 · Sense',
    title: 'Every signal, fused',
    body: 'Satellite, drone, and IoT data are ingested continuously and fused into a single ground-truth layer for every parcel.',
  },
  {
    index: '02 · Verify',
    title: 'Cross-validated, not assumed',
    body: 'Computer vision and climate models cross-validate biomass, canopy cover, and soil carbon at parcel-level resolution.',
  },
  {
    index: '03 · Trust',
    title: 'Provable, end to end',
    body: 'Every measurement is logged, timestamped, and anchored on-chain — audit-ready for any registry, bank, or buyer.',
  },
]

export default function Platform() {
  return (
    <section id="platform" style={{ paddingBlock: 96 }}>
      <style>{`@media (min-width: 860px) { .platform-section { padding-block: 140px !important; } }`}</style>
      <div className="container platform-section" style={{ paddingBlock: 96 }}>
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
            The Platform
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
            One platform. Every layer of carbon truth.
          </h2>
          <p
            style={{
              fontSize: 'clamp(1.05rem, 1.5vw, 1.25rem)',
              color: 'var(--text-2)',
              maxWidth: '44ch',
            }}
          >
            Carbona replaces the manual MRV cycle with a continuous, machine-verified one.
          </p>
        </motion.div>

        <style>{`@media (min-width: 800px) { .pillars-grid { grid-template-columns: repeat(3, 1fr) !important; } }`}</style>
        <div className="pillars-grid" style={{ display: 'grid', gap: 16 }}>
            {pillars.map((p, i) => (
              <motion.div
                key={p.index}
                variants={rev}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-8%' }}
                transition={{ ...trans, delay: i * 0.07 }}
                style={{
                  background: 'var(--bg-elev)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 32,
                  transition: 'border-color 280ms',
                }}
                onHoverStart={(e) => ((e.target as HTMLElement).style.borderColor = 'var(--border-strong)')}
                onHoverEnd={(e) => ((e.target as HTMLElement).style.borderColor = 'var(--border)')}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono-var), monospace',
                    fontSize: '0.75rem',
                    color: 'var(--text-3)',
                    marginBottom: 22,
                    display: 'block',
                  }}
                >
                  {p.index}
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-display-var), sans-serif',
                    fontWeight: 600,
                    fontSize: 'clamp(1.1rem, 1.6vw, 1.3rem)',
                    letterSpacing: '-0.02em',
                    color: 'var(--text)',
                    marginBottom: 12,
                  }}
                >
                  {p.title}
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-2)' }}>{p.body}</p>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  )
}
