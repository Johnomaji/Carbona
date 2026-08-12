'use client'
import { motion } from 'framer-motion'

const rev = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}
const trans = { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }

const steps = [
  {
    num: '01',
    title: 'Ingest',
    body: 'Satellite, drone, and sensor data land in Carbona automatically. No manual upload required.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="18" height="18">
        <path d="M12 3v14M5 10l7 7 7-7" />
        <path d="M4 20h16" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Analyze',
    body: 'Computer vision and climate models process every parcel at native resolution.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="18" height="18">
        <path d="M3 7h4l3 7 4-14 3 10h4" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Verify',
    body: "Independent ground samples and cross-model checks confirm the estimate before it's published.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="18" height="18">
        <path d="M12 3 4 6.5V12c0 4.8 3.4 8.4 8 9 4.6-.6 8-4.2 8-9V6.5L12 3Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Report',
    body: 'A registry-ready report generates automatically, with full data lineage attached.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="18" height="18">
        <path d="M13.5 3H12H8C6.3 3 5 4.3 5 6v14c0 1.7 1.3 3 3 3h8c1.7 0 3-1.3 3-3V8.5L13.5 3Z" />
        <path d="M13 3v6h6" />
        <path d="M9 17h6M9 13h4" />
      </svg>
    ),
  },
]

export default function Workflow() {
  return (
    <section style={{ paddingBlock: 96 }}>
      <style>{`@media (min-width: 860px) { .workflow-wrap { padding-block: 128px !important; } }`}</style>
      <div className="container workflow-wrap" style={{ paddingBlock: 96 }}>
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
            How It Works
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
            From raw signal to registry-ready report.
          </h2>
        </motion.div>

        <style>{`@media (min-width: 860px) { .workflow-steps { grid-template-columns: repeat(4, 1fr) !important; } }`}</style>
        <div className="workflow-steps" style={{ display: 'grid', gap: 12 }}>
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              variants={rev}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-8%' }}
              transition={{ ...trans, delay: i * 0.07 }}
              style={{
                background: 'rgba(255,251,247,0.03)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
                padding: '28px 22px',
                position: 'relative',
                overflow: 'hidden',
                transition: 'border-color 280ms, background 280ms',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,99,99,0.28)'
                ;(e.currentTarget as HTMLElement).style.background = 'rgba(255,99,99,0.04)'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'
                ;(e.currentTarget as HTMLElement).style.background = 'rgba(255,251,247,0.03)'
              }}
            >
              {/* Step number background */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  top: -8,
                  right: -4,
                  fontFamily: 'var(--font-mono-var), monospace',
                  fontSize: '5rem',
                  fontWeight: 700,
                  color: 'rgba(255,251,247,0.025)',
                  lineHeight: 1,
                  letterSpacing: '-0.04em',
                  userSelect: 'none',
                }}
              >
                {s.num}
              </div>

              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 10,
                  background: 'rgba(255,99,99,0.1)',
                  border: '1px solid rgba(255,99,99,0.18)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FF6363',
                  marginBottom: 20,
                  position: 'relative',
                }}
              >
                {s.icon}
              </div>

              <span
                style={{
                  fontFamily: 'var(--font-mono-var), monospace',
                  fontSize: '0.72rem',
                  color: '#FF6363',
                  letterSpacing: '0.06em',
                  marginBottom: 10,
                  display: 'block',
                }}
              >
                {s.num}
              </span>
              <h3
                style={{
                  fontFamily: 'var(--font-display-var), sans-serif',
                  fontWeight: 700,
                  fontSize: '1.05rem',
                  letterSpacing: '-0.02em',
                  color: 'var(--text)',
                  marginBottom: 10,
                }}
              >
                {s.title}
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-2)', lineHeight: 1.65 }}>{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
