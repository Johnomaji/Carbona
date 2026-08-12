'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const rev = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}
const trans = { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }

const tabs = [
  {
    id: 'sat',
    label: 'Satellite Intelligence',
    title: 'Satellite Intelligence',
    body: 'Multispectral and radar imagery from a dozen satellite constellations, resampled to a consistent grid and refreshed on a weekly revisit cycle.',
    visual: 'satellite',
  },
  {
    id: 'cv',
    label: 'AI Computer Vision',
    title: 'AI Computer Vision',
    body: 'Models trained on millions of labeled hectares detect canopy structure, land-use change, and disturbance events before they show up in a field report.',
    visual: 'cv',
    highlight: 'Model confidence shown on every output.',
  },
  {
    id: 'chain',
    label: 'Blockchain Traceability',
    title: 'Blockchain Traceability',
    body: 'Every measurement, model version, and verification decision is hashed and anchored on-chain, so any claim can be traced back to its source data.',
    visual: 'blockchain',
  },
  {
    id: 'clim',
    label: 'Climate Models',
    title: 'Climate Models',
    body: 'Biophysical and machine-learned models translate raw signal into tonnes — cross-checked against independent ground plots in every region we operate.',
    visual: 'grid',
  },
]

function TabVisual({ type }: { type: string }) {
  return (
    <div
      style={{
        aspectRatio: '4/3',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--border)',
        background: 'rgba(255,251,247,0.02)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Grid overlay */}
      {(type === 'satellite' || type === 'grid' || type === 'cv') && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              repeating-linear-gradient(90deg, transparent 0, transparent 11%, rgba(255,251,247,0.04) 11%, rgba(255,251,247,0.04) 11.3%),
              repeating-linear-gradient(0deg, transparent 0, transparent 16%, rgba(255,251,247,0.04) 16%, rgba(255,251,247,0.04) 16.4%)
            `,
          }}
        />
      )}

      {/* Orange radial glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 60% 50% at 40% 40%, rgba(255,99,99,0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Scanline for satellite */}
      {(type === 'satellite' || type === 'cv') && (
        <div
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            height: 2,
            background: 'linear-gradient(90deg, transparent, #FF6363, transparent)',
            opacity: 0.7,
            animation: 'scan 3.4s linear infinite',
          }}
        />
      )}

      {/* Blockchain node chain */}
      {type === 'blockchain' && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            padding: '0 12%',
          }}
        >
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <div
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  background: '#FF6363',
                  boxShadow: '0 0 16px rgba(255,99,99,0.6)',
                  zIndex: 1,
                  position: 'relative',
                }}
              />
              {i < 4 && (
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '100%',
                    width: 'calc(100% - 12px)',
                    height: 1,
                    background: 'linear-gradient(90deg, rgba(255,99,99,0.5), rgba(255,251,247,0.1))',
                    transform: 'translateY(-50%)',
                    minWidth: 28,
                  }}
                />
              )}
            </div>
          ))}
        </div>
      )}

      {/* Corner accent */}
      <div
        style={{
          position: 'absolute',
          top: 12,
          right: 12,
          padding: '4px 10px',
          background: 'rgba(255,99,99,0.12)',
          border: '1px solid rgba(255,99,99,0.22)',
          borderRadius: 6,
          fontSize: '0.62rem',
          color: '#FF6363',
          fontFamily: 'var(--font-mono-var), monospace',
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
        }}
      >
        Live
      </div>
    </div>
  )
}

export default function FeatureTabs() {
  const [activeTab, setActiveTab] = useState('sat')

  return (
    <section style={{ paddingBlock: 96 }}>
      <style>{`@media (min-width: 860px) { .featuretabs-wrap { padding-block: 128px !important; } }`}</style>
      <div className="container featuretabs-wrap" style={{ paddingBlock: 96 }}>
        <motion.div
          variants={rev}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-8%' }}
          transition={trans}
          style={{ maxWidth: 600, marginBottom: 52 }}
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
            Inside The Engine
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
            Four systems. One ground truth.
          </h2>
        </motion.div>

        {/* Tab list */}
        <div
          role="tablist"
          aria-label="Platform capabilities"
          style={{
            display: 'flex',
            gap: 6,
            overflowX: 'auto',
            paddingBottom: 4,
            marginBottom: 36,
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
          }}
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                role="tab"
                id={`tabbtn-${tab.id}`}
                aria-selected={isActive}
                aria-controls={`tab-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  flexShrink: 0,
                  padding: '9px 18px',
                  borderRadius: 8,
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: isActive ? '#FFFBF7' : 'var(--text-3)',
                  background: isActive ? 'linear-gradient(135deg, #FF4D00, #FF6363)' : 'rgba(255,251,247,0.05)',
                  border: `1px solid ${isActive ? 'transparent' : 'var(--border)'}`,
                  boxShadow: isActive ? '0 4px 16px rgba(255,99,99,0.35)' : 'none',
                  whiteSpace: 'nowrap',
                  transition: 'color 150ms, background 150ms, border-color 150ms, box-shadow 150ms',
                  cursor: 'pointer',
                }}
              >
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Tab panels */}
        <div style={{ position: 'relative' }}>
          <AnimatePresence mode="wait">
            {tabs.map((tab) =>
              activeTab === tab.id ? (
                <motion.div
                  key={tab.id}
                  id={`tab-${tab.id}`}
                  role="tabpanel"
                  aria-labelledby={`tabbtn-${tab.id}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                >
                  <style>{`@media (min-width: 860px) { .tab-inner { grid-template-columns: 1fr 1fr !important; align-items: center !important; gap: 56px !important; } }`}</style>
                  <div className="tab-inner" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 32 }}>
                    <TabVisual type={tab.visual} />
                    <div>
                      <h3
                        style={{
                          fontFamily: 'var(--font-display-var), sans-serif',
                          fontWeight: 700,
                          fontSize: 'clamp(1.35rem, 2vw, 1.7rem)',
                          letterSpacing: '-0.03em',
                          color: 'var(--text)',
                          marginBottom: 16,
                        }}
                      >
                        {tab.title}
                      </h3>
                      <p style={{ fontSize: '1rem', color: 'var(--text-2)', lineHeight: 1.68, maxWidth: '48ch' }}>
                        {tab.body}
                        {tab.highlight && (
                          <>
                            {' '}
                            <span style={{ color: '#FF6363', fontWeight: 500 }}>{tab.highlight}</span>
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ) : null
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
