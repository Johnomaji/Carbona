'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const revealVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
}

const revealTransition = { duration: 0.64, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }

const points = [
  { left: 16, top: 20, id: 'PLC-2291', val: '41.2 tCO2e/ha', conf: '96.4%' },
  { left: 62, top: 14, id: 'PLC-2304', val: '36.8 tCO2e/ha', conf: '95.1%' },
  { left: 38, top: 50, id: 'PLC-2318', val: '44.0 tCO2e/ha', conf: '98.2%' },
  { left: 74, top: 44, id: 'PLC-2325', val: '29.5 tCO2e/ha', conf: '93.7%' },
  { left: 22, top: 72, id: 'PLC-2339', val: '47.3 tCO2e/ha', conf: '96.9%' },
  { left: 56, top: 76, id: 'PLC-2344', val: '33.1 tCO2e/ha', conf: '94.8%' },
]

export default function Hero() {
  const [pointIndex, setPointIndex] = useState(0)
  const [tagVisible, setTagVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setTagVisible(false)
      setTimeout(() => {
        setPointIndex((i) => (i + 1) % points.length)
        setTagVisible(true)
      }, 260)
    }, 3400)
    return () => clearInterval(interval)
  }, [])

  const current = points[pointIndex]

  return (
    <section
      id="top"
      style={{
        position: 'relative',
        paddingTop: 'calc(var(--nav-h) + 64px)',
        paddingBottom: 80,
        overflow: 'hidden',
      }}
    >
      {/* Background radial glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-10%',
          left: '50%',
          width: '120%',
          height: '70%',
          transform: 'translateX(-50%)',
          background: 'radial-gradient(ellipse at center,rgba(31,157,99,.14),transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      <div
        className="container"
        style={{
          position: 'relative',
          display: 'grid',
          gap: 56,
          alignItems: 'center',
        }}
      >
        <style>{`
          @media (min-width: 960px) {
            .hero-grid { grid-template-columns: 1.05fr 0.95fr !important; gap: 48px !important; }
          }
        `}</style>
        <div className="hero-grid" style={{ display: 'grid', gap: 56, alignItems: 'center' }}>
          {/* Copy */}
          <div style={{ position: 'relative', zIndex: 2 }}>
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
              AI-Native Carbon MRV
            </div>

            <motion.h1
              variants={revealVariants}
              initial="hidden"
              animate="visible"
              transition={revealTransition}
              style={{
                fontFamily: 'var(--font-display-var), sans-serif',
                fontWeight: 500,
                letterSpacing: '-0.03em',
                lineHeight: 1.06,
                fontSize: 'clamp(2.5rem, 6.4vw, 5.1rem)',
                color: 'var(--text)',
                marginBottom: 22,
              }}
            >
              The intelligence layer for carbon.
            </motion.h1>

            <motion.p
              variants={revealVariants}
              initial="hidden"
              animate="visible"
              transition={{ ...revealTransition, delay: 0.08 }}
              style={{
                fontSize: 'clamp(1.05rem, 1.5vw, 1.25rem)',
                color: 'var(--text-2)',
                maxWidth: '44ch',
              }}
            >
              Carbona turns satellite, drone, and sensor data into verified carbon truth — at parcel-level resolution, in weeks instead of months.
            </motion.p>

            <motion.div
              variants={revealVariants}
              initial="hidden"
              animate="visible"
              transition={{ ...revealTransition, delay: 0.16 }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 36 }}
            >
              <a
                href="#access"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  padding: '15px 28px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  background: 'var(--cyan-solid)',
                  color: 'var(--on-solid)',
                  whiteSpace: 'nowrap',
                  transition: 'transform 150ms, box-shadow 150ms',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
                  ;(e.currentTarget as HTMLElement).style.boxShadow = '0 14px 32px rgba(0,230,195,.28)'
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                  ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
                }}
              >
                Request Access
              </a>
              <a
                href="#platform"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  padding: '15px 28px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  background: 'transparent',
                  color: 'var(--text)',
                  border: '1px solid var(--border-strong)',
                  whiteSpace: 'nowrap',
                  transition: 'border-color 150ms, color 150ms',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--cyan)'
                  ;(e.currentTarget as HTMLElement).style.color = 'var(--cyan)'
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-strong)'
                  ;(e.currentTarget as HTMLElement).style.color = 'var(--text)'
                }}
              >
                See the platform
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 5v14M6 13l6 6 6-6" />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Instrument */}
          <motion.div
            variants={revealVariants}
            initial="hidden"
            animate="visible"
            transition={{ ...revealTransition, delay: 0.12 }}
            style={{ position: 'relative', zIndex: 2 }}
          >
            <div
              aria-hidden="true"
              style={{
                position: 'relative',
                aspectRatio: '10/7',
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                border: '1px solid var(--border-strong)',
                backgroundImage: `
                  radial-gradient(circle at 20% 28%, rgba(31,157,99,.55), transparent 42%),
                  radial-gradient(circle at 72% 18%, rgba(57,192,127,.32), transparent 40%),
                  radial-gradient(circle at 62% 72%, rgba(15,60,42,.75), transparent 46%),
                  radial-gradient(circle at 14% 82%, rgba(31,157,99,.32), transparent 42%),
                  radial-gradient(circle at 92% 88%, rgba(10,40,28,.7), transparent 38%)
                `,
                backgroundColor: 'var(--bg-elev)',
                boxShadow: '0 40px 80px -30px rgba(0,0,0,.6)',
              }}
            >
              {/* Grid overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  pointerEvents: 'none',
                  backgroundImage: `
                    repeating-linear-gradient(90deg, transparent 0, transparent calc(8.3333% - 1px), var(--border) calc(8.3333% - 1px), var(--border) 8.3333%),
                    repeating-linear-gradient(0deg, transparent 0, transparent calc(12.5% - 1px), var(--border) calc(12.5% - 1px), var(--border) 12.5%)
                  `,
                }}
              />

              {/* Bottom gradient */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  pointerEvents: 'none',
                  background: 'linear-gradient(180deg, transparent 60%, rgba(0,0,0,.35) 100%)',
                }}
              />

              {/* Reticle */}
              <div
                style={{
                  position: 'absolute',
                  width: 56,
                  height: 56,
                  border: '1.5px solid var(--cyan-solid)',
                  borderRadius: 7,
                  left: `${current.left}%`,
                  top: `${current.top}%`,
                  transform: 'translate(-50%, -50%)',
                  transition: 'left 640ms cubic-bezier(.16,1,.3,1), top 640ms cubic-bezier(.16,1,.3,1)',
                  boxShadow: '0 0 0 6px var(--cyan-dim), 0 0 34px rgba(0,230,195,.4)',
                  zIndex: 3,
                }}
              >
                {/* Crosshair */}
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: 14,
                    height: 1.5,
                    background: 'var(--cyan-solid)',
                    transform: 'translate(-50%, -50%)',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: 1.5,
                    height: 14,
                    background: 'var(--cyan-solid)',
                    transform: 'translate(-50%, -50%)',
                  }}
                />
              </div>

              {/* Readout tag */}
              <div
                style={{
                  position: 'absolute',
                  left: `${current.left}%`,
                  ...(current.top > 55
                    ? { bottom: `calc(${100 - current.top}% + 38px)`, top: 'auto' }
                    : { top: `calc(${current.top}% + 38px)`, bottom: 'auto' }),
                  transform: 'translateX(-50%)',
                  fontFamily: 'var(--font-mono-var), monospace',
                  fontSize: '0.68rem',
                  letterSpacing: '0.01em',
                  whiteSpace: 'nowrap',
                  background: 'var(--bg)',
                  border: '1px solid var(--border-strong)',
                  color: 'var(--cyan)',
                  padding: '7px 11px',
                  borderRadius: 'var(--radius-sm)',
                  opacity: tagVisible ? 1 : 0,
                  transition: 'opacity 280ms',
                  pointerEvents: 'none',
                  zIndex: 4,
                }}
              >
                {current.id} · {current.val} · conf {current.conf}
              </div>
            </div>

            {/* Caption */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 12,
                marginTop: 16,
                fontFamily: 'var(--font-mono-var), monospace',
                fontSize: '0.72rem',
                color: 'var(--text-3)',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
              }}
            >
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 7,
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: 'var(--emerald-bright)',
                    animation: 'pulse 2.2s cubic-bezier(.4,0,.2,1) infinite',
                    flexShrink: 0,
                  }}
                />
                Live parcel sampling
              </span>
              <span>12 constellations · weekly revisit</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
