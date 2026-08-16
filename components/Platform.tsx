'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

const rev = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}
const trans = { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }

const pillars = [
  {
    index: '01',
    label: 'Sense',
    title: 'Every signal, fused',
    body: 'Satellite, drone, and IoT data are ingested continuously and fused into a single ground-truth layer for every parcel.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="22" height="22">
        <circle cx="12" cy="12" r="2" />
        <path d="M6.3 6.3a8 8 0 0 0 0 11.4M17.7 17.7a8 8 0 0 0 0-11.4M3.5 3.5a14 14 0 0 0 0 17M20.5 20.5a14 14 0 0 0 0-17" />
      </svg>
    ),
  },
  {
    index: '02',
    label: 'Verify',
    title: 'Cross-validated, not assumed',
    body: 'Computer vision and climate models cross-validate biomass, canopy cover, and soil carbon at parcel-level resolution.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="22" height="22">
        <path d="M12 3 4 6.5V12c0 4.8 3.4 8.4 8 9 4.6-.6 8-4.2 8-9V6.5L12 3Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    index: '03',
    label: 'Trust',
    title: 'Provable, end to end',
    body: 'Every measurement is logged, timestamped, and anchored on-chain — audit-ready for any registry, bank, or buyer.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="22" height="22">
        <path d="M13.5 3H12H8C6.3 3 5 4.3 5 6v14c0 1.7 1.3 3 3 3h8c1.7 0 3-1.3 3-3V8.5L13.5 3Z" />
        <path d="M13 3v6h6M9 13h6M9 17h4" />
      </svg>
    ),
  },
]

function Connector({ active }: { active: boolean }) {
  return (
    <div
      className="platform-connector"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        transition: 'opacity 280ms',
        opacity: active ? 1 : 0.3,
      }}
    >
      {/* Horizontal arrow (desktop) */}
      <div className="connector-h" style={{ alignItems: 'center', gap: 0 }}>
        <div
          style={{
            width: 32,
            height: 1,
            background: active
              ? 'linear-gradient(90deg, rgba(255,99,99,0.5), rgba(255,99,99,0.8))'
              : 'rgba(255,251,247,0.12)',
            transition: 'background 280ms',
          }}
        />
        <svg
          viewBox="0 0 8 12"
          width="8"
          height="12"
          fill="none"
          stroke={active ? '#FF6363' : 'rgba(255,251,247,0.2)'}
          strokeWidth="1.5"
          style={{ transition: 'stroke 280ms', flexShrink: 0 }}
        >
          <path d="M1 1l6 5-6 5" />
        </svg>
      </div>
      {/* Vertical arrow (mobile) */}
      <div className="connector-v" style={{ alignItems: 'center', flexDirection: 'column', gap: 0 }}>
        <div
          style={{
            width: 1,
            height: 24,
            background: active
              ? 'linear-gradient(180deg, rgba(255,99,99,0.5), rgba(255,99,99,0.8))'
              : 'rgba(255,251,247,0.12)',
            transition: 'background 280ms',
          }}
        />
        <svg
          viewBox="0 0 12 8"
          width="12"
          height="8"
          fill="none"
          stroke={active ? '#FF6363' : 'rgba(255,251,247,0.2)'}
          strokeWidth="1.5"
          style={{ transition: 'stroke 280ms', flexShrink: 0 }}
        >
          <path d="M1 1l5 6 5-6" />
        </svg>
      </div>
    </div>
  )
}

export default function Platform() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section id="platform" style={{ paddingBlock: 96 }}>
      <style>{`
        @media (min-width: 860px) { .platform-wrap { padding-block: 128px !important; } }

        .platform-flow {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .platform-connector { display: flex; }
        .connector-h { display: none; }
        .connector-v { display: flex; }

        @media (min-width: 800px) {
          .platform-flow { flex-direction: row; align-items: stretch; }
          .connector-h { display: flex; }
          .connector-v { display: none; }
          .platform-pillar { flex: 1; }
        }
      `}</style>
      <div className="container platform-wrap" style={{ paddingBlock: 96 }}>
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
            The Platform
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
            One platform.{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #FF6363, #FFAA6E)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Every layer
            </span>{' '}
            of carbon truth.
          </h2>
          <p
            style={{
              fontSize: 'clamp(1rem, 1.4vw, 1.15rem)',
              color: 'var(--text-2)',
              maxWidth: '44ch',
              lineHeight: 1.65,
            }}
          >
            Carbona replaces the manual MRV cycle with a continuous, machine-verified one.
          </p>
        </motion.div>

        <div className="platform-flow">
          {pillars.map((p, i) => {
            const isHovered = hovered === i
            const isDimmed = hovered !== null && !isHovered

            return (
              <>
                <motion.div
                  key={p.index}
                  className="platform-pillar"
                  variants={rev}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-8%' }}
                  transition={{ ...trans, delay: i * 0.08 }}
                  style={{
                    background: isHovered ? 'rgba(255,99,99,0.06)' : 'rgba(255,251,247,0.03)',
                    border: `1px solid ${isHovered ? 'rgba(255,99,99,0.32)' : 'var(--border)'}`,
                    borderRadius: 'var(--radius-lg)',
                    padding: '32px 28px',
                    cursor: 'default',
                    transition: 'border-color 260ms, background 260ms, opacity 260ms, box-shadow 260ms',
                    opacity: isDimmed ? 0.38 : 1,
                    boxShadow: isHovered ? '0 0 48px rgba(255,99,99,0.07) inset' : 'none',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* Large watermark index */}
                  <div
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      bottom: -12,
                      right: 12,
                      fontFamily: 'var(--font-display-var), sans-serif',
                      fontSize: '6rem',
                      fontWeight: 800,
                      letterSpacing: '-0.06em',
                      color: isHovered ? 'rgba(255,99,99,0.07)' : 'rgba(255,251,247,0.04)',
                      lineHeight: 1,
                      transition: 'color 260ms',
                      userSelect: 'none',
                      pointerEvents: 'none',
                    }}
                  >
                    {p.index}
                  </div>

                  {/* Header row */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: 28,
                    }}
                  >
                    <div
                      style={{
                        width: 42,
                        height: 42,
                        borderRadius: 11,
                        background: isHovered ? 'rgba(255,99,99,0.15)' : 'rgba(255,99,99,0.1)',
                        border: `1px solid ${isHovered ? 'rgba(255,99,99,0.3)' : 'rgba(255,99,99,0.18)'}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#FF6363',
                        transition: 'background 260ms, border-color 260ms',
                      }}
                    >
                      {p.icon}
                    </div>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono-var), monospace',
                        fontSize: '0.68rem',
                        color: isHovered ? 'rgba(255,99,99,0.7)' : 'var(--text-3)',
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        transition: 'color 260ms',
                      }}
                    >
                      {p.label}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-display-var), sans-serif',
                      fontWeight: 700,
                      fontSize: 'clamp(1.1rem, 1.5vw, 1.25rem)',
                      letterSpacing: '-0.03em',
                      color: 'var(--text)',
                      marginBottom: 12,
                    }}
                  >
                    {p.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-2)', lineHeight: 1.65, position: 'relative', zIndex: 1 }}>
                    {p.body}
                  </p>
                </motion.div>

                {i < pillars.length - 1 && (
                  <Connector key={`conn-${i}`} active={hovered === i || hovered === i + 1} />
                )}
              </>
            )
          })}
        </div>
      </div>
    </section>
  )
}
