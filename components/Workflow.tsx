'use client'
import { motion } from 'framer-motion'

const rev = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
}
const trans = { duration: 0.64, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }

const steps = [
  {
    num: '01',
    title: 'Ingest',
    body: 'Satellite, drone, and sensor data land in Carbona automatically. No manual upload required.',
  },
  {
    num: '02',
    title: 'Analyze',
    body: 'Computer vision and climate models process every parcel at native resolution.',
  },
  {
    num: '03',
    title: 'Verify',
    body: "Independent ground samples and cross-model checks confirm the estimate before it's published.",
  },
  {
    num: '04',
    title: 'Report',
    body: 'A registry-ready report generates automatically, with full data lineage attached.',
  },
]

export default function Workflow() {
  return (
    <section style={{ paddingBlock: 96 }}>
      <style>{`@media (min-width: 860px) { .workflow-section { padding-block: 140px !important; } }`}</style>
      <div className="container workflow-section" style={{ paddingBlock: 96 }}>
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
            How It Works
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
            From raw signal to registry-ready report.
          </h2>
        </motion.div>

        <div style={{ display: 'grid', position: 'relative' }}>
          <style>{`
            @media (min-width: 860px) {
              .workflow-grid { grid-template-columns: repeat(4, 1fr) !important; gap: 24px !important; }
              .workflow-step { border-top: none !important; padding: 0 !important; }
              .workflow-step-inner { padding: 0 !important; }
              .workflow-connector { display: block !important; }
            }
          `}</style>
          <div className="workflow-grid" style={{ display: 'grid', gap: 0 }}>
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                className="workflow-step"
                variants={rev}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-8%' }}
                transition={{ ...trans, delay: i * 0.06 }}
                style={{
                  position: 'relative',
                  paddingTop: 28,
                  paddingBottom: 28,
                  borderTop: '1px solid var(--border)',
                }}
              >
                {/* Connector on desktop */}
                {i > 0 && (
                  <div
                    className="workflow-connector"
                    style={{
                      display: 'none',
                      position: 'absolute',
                      top: 22,
                      left: -12,
                      width: 24,
                      height: 1,
                      background: 'var(--border-strong)',
                    }}
                  />
                )}
                <span
                  style={{
                    fontFamily: 'var(--font-mono-var), monospace',
                    fontSize: '0.78rem',
                    color: 'var(--cyan)',
                    marginBottom: 14,
                    display: 'block',
                  }}
                >
                  {s.num}
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-display-var), sans-serif',
                    fontWeight: 600,
                    fontSize: '1.05rem',
                    color: 'var(--text)',
                    marginBottom: 10,
                  }}
                >
                  {s.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-2)' }}>{s.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
