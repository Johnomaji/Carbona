'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const rev = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}
const trans = { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }

const sparkPoints = '0,48 25,42 50,45 75,32 100,36 125,20 150,26 175,12 200,16 220,10'

function Sparkline() {
  const ref = useRef<SVGPolylineElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-10%' })

  return (
    <svg viewBox="0 0 220 60" width="100%" height="56" aria-hidden="true">
      <motion.polyline
        ref={ref}
        points={sparkPoints}
        stroke="#FF6363"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={inView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      />
      {/* Area fill */}
      <motion.polygon
        points={`0,60 ${sparkPoints} 220,60`}
        fill="url(#spark-fill)"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.4, delay: 0.3 }}
      />
      <defs>
        <linearGradient id="spark-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FF6363" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#FF6363" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default function Output() {
  return (
    <section style={{ paddingBlock: 96 }}>
      <style>{`
        @media (min-width: 860px) { .output-wrap { padding-block: 128px !important; } }
        @media (min-width: 960px) { .output-grid { grid-template-columns: 1fr 1fr !important; align-items: center !important; } }
      `}</style>
      <div
        className="container output-wrap output-grid"
        style={{ paddingBlock: 96, display: 'grid', gap: 48 }}
      >
        {/* Copy */}
        <motion.div
          variants={rev}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-8%' }}
          transition={trans}
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
            The Output
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
            See every hectare,{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #FF6363, #FFAA6E)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              scored.
            </span>
          </h2>
          <p
            style={{
              fontSize: 'clamp(1rem, 1.4vw, 1.15rem)',
              color: 'var(--text-2)',
              maxWidth: '44ch',
              lineHeight: 1.65,
            }}
          >
            Not a certificate. A live, auditable record you can hand to a registry, a bank, or a buyer.
          </p>
          <div style={{ marginTop: 36, display: 'flex', flexDirection: 'column', gap: 14 }}>
            {[
              'Full data lineage on every measurement',
              'Registry-ready output in weeks, not months',
              'Immutable, on-chain verification record',
            ].map((point) => (
              <div key={point} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <div
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: '50%',
                    background: 'rgba(255,99,99,0.15)',
                    border: '1px solid rgba(255,99,99,0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: 1,
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="#FF6363" strokeWidth="2.2" width="11" height="11">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <span style={{ fontSize: '0.9rem', color: 'var(--text-2)', lineHeight: 1.55 }}>{point}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Parcel card */}
        <motion.div
          variants={rev}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-8%' }}
          transition={{ ...trans, delay: 0.1 }}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <div
            style={{
              background: 'rgba(24, 22, 20, 0.95)',
              border: '1px solid rgba(255,251,247,0.1)',
              borderRadius: 'var(--radius-xl)',
              padding: 28,
              width: '100%',
              maxWidth: 480,
              boxShadow: '0 0 0 1px rgba(255,99,99,0.06), 0 32px 64px rgba(0,0,0,0.6)',
            }}
          >
            {/* Head */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 24,
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono-var), monospace',
                  fontSize: '0.8rem',
                  color: 'var(--text-3)',
                }}
              >
                Parcel PLC-2291 · Kalimantan
              </span>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  fontFamily: 'var(--font-mono-var), monospace',
                  fontSize: '0.64rem',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  padding: '5px 11px',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid rgba(255,99,99,0.25)',
                  background: 'rgba(255,99,99,0.1)',
                  color: '#FF6363',
                }}
              >
                <span
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: '50%',
                    background: '#FF6363',
                    boxShadow: '0 0 6px rgba(255,99,99,0.6)',
                    animation: 'pulse 2s ease-in-out infinite',
                  }}
                />
                Registry Ready
              </span>
            </div>

            {/* Score */}
            <div
              style={{
                fontFamily: 'var(--font-mono-var), monospace',
                fontSize: 'clamp(2.2rem, 4vw, 3rem)',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                color: 'var(--text)',
                marginBottom: 4,
              }}
            >
              41.2 tCO₂e/ha
            </div>

            {/* Confidence */}
            <div
              style={{
                fontSize: '0.85rem',
                color: 'var(--text-3)',
                marginBottom: 24,
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              <div
                style={{
                  height: 4,
                  width: 96,
                  background: 'rgba(255,251,247,0.1)',
                  borderRadius: 2,
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    height: '100%',
                    width: '96.4%',
                    background: 'linear-gradient(90deg, #FF4D00, #FF6363)',
                    borderRadius: 2,
                  }}
                />
              </div>
              Confidence 96.4%
            </div>

            {/* Sparkline */}
            <div style={{ marginBottom: 24 }}>
              <Sparkline />
            </div>

            {/* Footer */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderTop: '1px solid var(--border)',
                paddingTop: 18,
                fontSize: '0.85rem',
              }}
            >
              <span style={{ color: 'var(--text-3)' }}>Since last pass</span>
              <span
                style={{
                  color: '#4fc880',
                  fontFamily: 'var(--font-mono-var), monospace',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                }}
              >
                ▲ +2.1%
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
