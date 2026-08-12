'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const parcels = [
  { id: 'PLC-2291', loc: 'Kalimantan, Indonesia', val: '41.2 tCO₂e/ha', conf: '96.4%', status: 'Verified' },
  { id: 'PLC-2304', loc: 'Cerrado, Brazil', val: '36.8 tCO₂e/ha', conf: '95.1%', status: 'Verifying' },
  { id: 'PLC-2318', loc: 'Congo Basin, DRC', val: '44.0 tCO₂e/ha', conf: '98.2%', status: 'Verified' },
  { id: 'PLC-2325', loc: 'Mato Grosso, Brazil', val: '29.5 tCO₂e/ha', conf: '93.7%', status: 'Pending' },
]

const rev = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }
const trans = { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }

function CommandConsole() {
  const [activeIdx, setActiveIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setActiveIdx((i) => (i + 1) % parcels.length), 2800)
    return () => clearInterval(t)
  }, [])

  return (
    <div
      style={{
        background: 'rgba(20, 18, 16, 0.96)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        border: '1px solid rgba(255,251,247,0.1)',
        borderRadius: 16,
        overflow: 'hidden',
        boxShadow: '0 0 0 1px rgba(255,99,99,0.08), 0 40px 80px rgba(0,0,0,0.7)',
      }}
    >
      {/* Title bar */}
      <div
        style={{
          padding: '12px 16px',
          borderBottom: '1px solid rgba(255,251,247,0.07)',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          background: 'rgba(255,251,247,0.02)',
        }}
      >
        {['#FF5F57', '#FEBC2E', '#28C840'].map((c, i) => (
          <div key={i} style={{ width: 11, height: 11, borderRadius: '50%', background: c, opacity: 0.8 }} />
        ))}
        <span
          style={{
            marginLeft: 8,
            fontSize: '0.72rem',
            color: 'rgba(255,251,247,0.35)',
            fontFamily: 'var(--font-mono-var), monospace',
            letterSpacing: '0.02em',
          }}
        >
          carbona · carbon intelligence
        </span>
        <div
          style={{
            marginLeft: 'auto',
            display: 'flex',
            alignItems: 'center',
            gap: 4,
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: '#FF6363',
              boxShadow: '0 0 8px rgba(255,99,99,0.6)',
              animation: 'pulse 2s ease-in-out infinite',
            }}
          />
          <span style={{ fontSize: '0.68rem', color: 'rgba(255,99,99,0.8)', fontFamily: 'var(--font-mono-var), monospace' }}>
            live
          </span>
        </div>
      </div>

      {/* Search bar */}
      <div
        style={{
          padding: '10px 14px',
          borderBottom: '1px solid rgba(255,251,247,0.06)',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          background: 'rgba(255,251,247,0.03)',
        }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,251,247,0.35)" strokeWidth="2">
          <circle cx="11" cy="11" r="7" />
          <path d="m21 21-4.35-4.35" />
        </svg>
        <span
          style={{
            fontSize: '0.84rem',
            color: 'rgba(255,251,247,0.35)',
            fontFamily: 'var(--font-mono-var), monospace',
            flex: 1,
          }}
        >
          Search parcels, projects, reports…
        </span>
        <span
          style={{
            fontSize: '0.68rem',
            color: 'rgba(255,251,247,0.22)',
            border: '1px solid rgba(255,251,247,0.1)',
            borderRadius: 4,
            padding: '2px 7px',
            fontFamily: 'var(--font-mono-var), monospace',
          }}
        >
          ⌘K
        </span>
      </div>

      {/* Section label */}
      <div
        style={{
          padding: '10px 14px 6px',
          fontSize: '0.65rem',
          color: 'rgba(255,251,247,0.3)',
          fontFamily: 'var(--font-mono-var), monospace',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
        }}
      >
        Active Parcels · 12 constellations
      </div>

      {/* Parcel results */}
      {parcels.map((item, i) => (
        <motion.div
          key={item.id}
          animate={{
            background: activeIdx === i ? 'rgba(255,99,99,0.1)' : 'transparent',
          }}
          transition={{ duration: 0.3 }}
          style={{
            padding: '9px 14px',
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            borderLeft: `2px solid ${activeIdx === i ? '#FF6363' : 'transparent'}`,
            cursor: 'default',
          }}
        >
          <div
            style={{
              width: 34,
              height: 34,
              borderRadius: 8,
              background: activeIdx === i ? 'rgba(255,99,99,0.18)' : 'rgba(255,251,247,0.05)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              transition: 'background 300ms',
            }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke={activeIdx === i ? '#FF6363' : 'rgba(255,251,247,0.38)'}
              strokeWidth="1.8"
              style={{ transition: 'stroke 300ms' }}
            >
              <path d="M3 7h4l3 7 4-14 3 10h4" />
            </svg>
          </div>

          <div style={{ flex: 1, minWidth: 0 }}>
            <div
              style={{
                fontSize: '0.82rem',
                color: activeIdx === i ? '#FFFBF7' : 'rgba(255,251,247,0.62)',
                fontWeight: 600,
                fontFamily: 'var(--font-mono-var), monospace',
                transition: 'color 300ms',
              }}
            >
              {item.id}
            </div>
            <div
              style={{
                fontSize: '0.71rem',
                color: 'rgba(255,251,247,0.32)',
                marginTop: 1,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {item.loc}
            </div>
          </div>

          <div style={{ textAlign: 'right', flexShrink: 0 }}>
            <div
              style={{
                fontSize: '0.82rem',
                color: activeIdx === i ? '#FF6363' : 'rgba(255,251,247,0.42)',
                fontFamily: 'var(--font-mono-var), monospace',
                fontWeight: 600,
                transition: 'color 300ms',
              }}
            >
              {item.val}
            </div>
            <div
              style={{
                fontSize: '0.68rem',
                color:
                  item.status === 'Verified'
                    ? 'rgba(80,200,120,0.7)'
                    : item.status === 'Verifying'
                      ? 'rgba(255,180,60,0.7)'
                      : 'rgba(255,251,247,0.28)',
                marginTop: 1,
                fontFamily: 'var(--font-mono-var), monospace',
              }}
            >
              {item.status}
            </div>
          </div>
        </motion.div>
      ))}

      {/* Footer hint bar */}
      <div
        style={{
          padding: '8px 14px',
          borderTop: '1px solid rgba(255,251,247,0.06)',
          display: 'flex',
          gap: 14,
          alignItems: 'center',
          background: 'rgba(255,251,247,0.02)',
        }}
      >
        {[
          ['↵', 'Verify'],
          ['⌘D', 'Details'],
          ['⌘E', 'Export'],
        ].map(([key, label]) => (
          <span
            key={label}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 5,
              fontSize: '0.68rem',
              color: 'rgba(255,251,247,0.28)',
            }}
          >
            <span
              style={{
                border: '1px solid rgba(255,251,247,0.13)',
                borderRadius: 4,
                padding: '1px 6px',
                fontFamily: 'var(--font-mono-var), monospace',
                fontSize: '0.65rem',
                lineHeight: 1.5,
              }}
            >
              {key}
            </span>
            {label}
          </span>
        ))}
        <span style={{ marginLeft: 'auto', fontSize: '0.68rem', color: 'rgba(255,251,247,0.22)', fontFamily: 'var(--font-mono-var), monospace' }}>
          47.2M ha monitored
        </span>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section
      id="top"
      style={{
        position: 'relative',
        paddingTop: 'calc(var(--nav-h) + 72px)',
        paddingBottom: 100,
        overflow: 'hidden',
      }}
    >
      {/* Orange radial glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-5%',
          right: '-5%',
          width: '70%',
          height: '70%',
          background: 'radial-gradient(ellipse at center, rgba(255,99,99,0.16) 0%, rgba(255,77,0,0.08) 40%, transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(40px)',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '-10%',
          width: '50%',
          height: '50%',
          background: 'radial-gradient(ellipse at center, rgba(255,77,0,0.06) 0%, transparent 65%)',
          pointerEvents: 'none',
          filter: 'blur(60px)',
        }}
      />

      <div
        className="container"
        style={{ position: 'relative' }}
      >
        <style>{`
          @media (min-width: 960px) {
            .hero-layout { grid-template-columns: 1fr 1fr !important; gap: 64px !important; align-items: center !important; }
          }
        `}</style>
        <div
          className="hero-layout"
          style={{ display: 'grid', gap: 56 }}
        >
          {/* Copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '6px 14px',
                background: 'rgba(255,99,99,0.1)',
                border: '1px solid rgba(255,99,99,0.22)',
                borderRadius: 'var(--radius-full)',
                marginBottom: 28,
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: '#FF6363',
                  boxShadow: '0 0 8px rgba(255,99,99,0.6)',
                  animation: 'pulse 2s ease-in-out infinite',
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-mono-var), monospace',
                  fontSize: '0.72rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#FF6363',
                }}
              >
                AI-Native Carbon MRV
              </span>
            </motion.div>

            <motion.h1
              variants={rev}
              initial="hidden"
              animate="visible"
              transition={trans}
              style={{
                fontFamily: 'var(--font-display-var), sans-serif',
                fontWeight: 700,
                letterSpacing: '-0.04em',
                lineHeight: 1.04,
                fontSize: 'clamp(2.8rem, 6vw, 5rem)',
                color: 'var(--text)',
                marginBottom: 24,
              }}
            >
              The intelligence layer for{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #FF6363, #FFAA6E)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                carbon.
              </span>
            </motion.h1>

            <motion.p
              variants={rev}
              initial="hidden"
              animate="visible"
              transition={{ ...trans, delay: 0.08 }}
              style={{
                fontSize: 'clamp(1.05rem, 1.5vw, 1.2rem)',
                color: 'var(--text-2)',
                maxWidth: '42ch',
                lineHeight: 1.65,
              }}
            >
              Carbona turns satellite, drone, and sensor data into verified carbon truth — at
              parcel-level resolution, in weeks instead of months.
            </motion.p>

            <motion.div
              variants={rev}
              initial="hidden"
              animate="visible"
              transition={{ ...trans, delay: 0.15 }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 36 }}
            >
              <a
                href="#access"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '12px 24px',
                  borderRadius: 10,
                  fontSize: '0.925rem',
                  fontWeight: 600,
                  background: 'linear-gradient(135deg, #FF4D00, #FF6363)',
                  color: '#FFFBF7',
                  boxShadow: '0 4px 20px rgba(255,99,99,0.4)',
                  transition: 'transform 150ms, box-shadow 150ms',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
                  ;(e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(255,99,99,0.55)'
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                  ;(e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(255,99,99,0.4)'
                }}
              >
                Request Access
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#platform"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '12px 24px',
                  borderRadius: 10,
                  fontSize: '0.925rem',
                  fontWeight: 600,
                  background: 'rgba(255,251,247,0.07)',
                  color: 'var(--text)',
                  border: '1px solid var(--border-strong)',
                  transition: 'background 150ms, border-color 150ms',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,251,247,0.11)'
                  ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,251,247,0.2)'
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,251,247,0.07)'
                  ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--border-strong)'
                }}
              >
                See the platform
              </a>
            </motion.div>

            <motion.div
              variants={rev}
              initial="hidden"
              animate="visible"
              transition={{ ...trans, delay: 0.22 }}
              style={{
                display: 'flex',
                gap: 24,
                marginTop: 44,
                paddingTop: 32,
                borderTop: '1px solid var(--border)',
              }}
            >
              {[
                { val: '47.2M', label: 'hectares monitored' },
                { val: '99.1%', label: 'ground-truth accuracy' },
                { val: '6.4 wks', label: 'avg. to verification' },
              ].map(({ val, label }) => (
                <div key={val}>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono-var), monospace',
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      color: 'var(--text)',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {val}
                  </div>
                  <div
                    style={{
                      fontSize: '0.75rem',
                      color: 'var(--text-3)',
                      marginTop: 2,
                    }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Command Console */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            style={{ position: 'relative' }}
          >
            <CommandConsole />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
