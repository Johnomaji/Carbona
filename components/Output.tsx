'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const rev = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
}
const trans = { duration: 0.64, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }

const sparkPoints = '0,48 25,42 50,45 75,32 100,36 125,20 150,26 175,12 200,16 220,10'

function Sparkline() {
  const ref = useRef<SVGPolylineElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-10%' })

  return (
    <svg viewBox="0 0 220 60" width="100%" height="60" aria-hidden="true">
      <motion.polyline
        ref={ref}
        points={sparkPoints}
        stroke="var(--cyan-solid)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={inView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
      />
    </svg>
  )
}

export default function Output() {
  return (
    <section style={{ paddingBlock: 96 }}>
      <style>{`
        @media (min-width: 860px) { .output-section { padding-block: 140px !important; } }
        @media (min-width: 960px) { .output-grid { grid-template-columns: 1fr 1fr !important; } }
      `}</style>
      <div
        className="container output-section output-grid"
        style={{ paddingBlock: 96, display: 'grid', gap: 40, alignItems: 'center' }}
      >
        {/* Copy */}
        <motion.div
          variants={rev}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-8%' }}
          transition={trans}
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
            The Output
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
            See every hectare, scored.
          </h2>
          <p
            style={{
              fontSize: 'clamp(1.05rem, 1.5vw, 1.25rem)',
              color: 'var(--text-2)',
              maxWidth: '44ch',
            }}
          >
            Not a certificate. A live, auditable record you can hand to a registry, a bank, or a buyer.
          </p>
        </motion.div>

        {/* Parcel card */}
        <motion.div
          variants={rev}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-8%' }}
          transition={{ ...trans, delay: 0.08 }}
        >
          <div
            style={{
              background: 'var(--bg-elev)',
              border: '1px solid var(--border-strong)',
              borderRadius: 'var(--radius-xl)',
              padding: 32,
              maxWidth: 520,
              boxShadow: '0 30px 60px -30px rgba(0,0,0,.5)',
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
                  fontSize: '0.82rem',
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
                  fontSize: '0.66rem',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  padding: '6px 12px',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid var(--cyan-dim)',
                  background: 'var(--cyan-dim)',
                  color: 'var(--cyan)',
                }}
              >
                Registry Ready
              </span>
            </div>

            {/* Score */}
            <div
              style={{
                fontFamily: 'var(--font-mono-var), monospace',
                fontSize: 'clamp(2.2rem, 4vw, 3rem)',
                color: 'var(--text)',
                marginBottom: 4,
              }}
            >
              41.2 tCO₂e/ha
            </div>

            {/* Confidence with tooltip */}
            <div
              style={{
                fontSize: '0.85rem',
                color: 'var(--text-3)',
                marginBottom: 24,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 5,
                position: 'relative',
              }}
              tabIndex={0}
              className="tooltip-trigger"
            >
              <style>{`
                .tooltip-trigger .tooltip-bubble { opacity: 0; transform: translateX(-50%) translateY(4px); transition: opacity 150ms, transform 150ms; pointer-events: none; }
                .tooltip-trigger:hover .tooltip-bubble,
                .tooltip-trigger:focus-within .tooltip-bubble { opacity: 1; transform: translateX(-50%) translateY(0); }
              `}</style>
              <span
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: '50%',
                  border: '1px solid var(--border-strong)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.62rem',
                  color: 'var(--text-3)',
                  fontFamily: 'var(--font-mono-var), monospace',
                  flexShrink: 0,
                }}
                aria-hidden="true"
              >
                i
              </span>
              Confidence 96.4%
              <span
                className="tooltip-bubble"
                role="tooltip"
                style={{
                  position: 'absolute',
                  bottom: 'calc(100% + 10px)',
                  left: '50%',
                  width: 220,
                  background: 'var(--bg)',
                  border: '1px solid var(--border-strong)',
                  color: 'var(--text-2)',
                  fontSize: '0.76rem',
                  lineHeight: 1.5,
                  padding: '12px 14px',
                  borderRadius: 'var(--radius-sm)',
                  zIndex: 20,
                  boxShadow: '0 20px 40px rgba(0,0,0,.3)',
                }}
              >
                Confidence reflects agreement between the satellite-modeled estimate and independent ground-sampled plots for this parcel.
              </span>
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
                paddingTop: 20,
                fontSize: '0.85rem',
              }}
            >
              <span style={{ color: 'var(--text-2)' }}>Since last pass</span>
              <span
                style={{
                  color: 'var(--emerald-bright)',
                  fontFamily: 'var(--font-mono-var), monospace',
                  fontSize: '0.82rem',
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
