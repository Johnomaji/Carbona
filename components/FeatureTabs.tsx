'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const rev = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
}
const trans = { duration: 0.64, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }

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
    visual: 'satellite',
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
        background: 'var(--bg-elev)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Grid overlay */}
      {(type === 'satellite' || type === 'grid') && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              repeating-linear-gradient(90deg, transparent 0, transparent 11%, var(--border) 11%, var(--border) 11.3%),
              repeating-linear-gradient(0deg, transparent 0, transparent 16%, var(--border) 16%, var(--border) 16.4%)
            `,
          }}
        />
      )}

      {/* Scanline */}
      {type === 'satellite' && (
        <div
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            height: 2,
            background: 'linear-gradient(90deg, transparent, var(--cyan-solid), transparent)',
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
          {[0, 1, 2, 3].map((i) => (
            <div key={i} style={{ position: 'relative' }}>
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  background: 'var(--cyan-solid)',
                  boxShadow: '0 0 14px rgba(0,230,195,.5)',
                }}
              />
              {i < 3 && (
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '100%',
                    width: 26,
                    height: 1,
                    background: 'var(--border-strong)',
                    transform: 'translateY(-50%)',
                  }}
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default function FeatureTabs() {
  const [activeTab, setActiveTab] = useState('sat')

  return (
    <section style={{ paddingBlock: 96 }}>
      <style>{`@media (min-width: 860px) { .featuretabs-section { padding-block: 140px !important; } }`}</style>
      <div className="container featuretabs-section" style={{ paddingBlock: 96 }}>
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
            Inside The Engine
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
            Four systems. One ground truth.
          </h2>
        </motion.div>

        <motion.div
          variants={rev}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-8%' }}
          transition={{ ...trans, delay: 0.1 }}
          style={{ marginTop: 48 }}
        >
          {/* Tab list */}
          <div
            role="tablist"
            aria-label="Platform capabilities"
            style={{
              display: 'flex',
              gap: 6,
              overflowX: 'auto',
              paddingBottom: 4,
              marginBottom: 32,
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
            }}
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                id={`tabbtn-${tab.id}`}
                aria-selected={activeTab === tab.id}
                aria-controls={`tab-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  flexShrink: 0,
                  padding: '11px 20px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.85rem',
                  color: activeTab === tab.id ? 'var(--on-solid)' : 'var(--text-2)',
                  border: '1px solid',
                  borderColor: activeTab === tab.id ? 'var(--cyan-solid)' : 'var(--border)',
                  background: activeTab === tab.id ? 'var(--cyan-solid)' : 'transparent',
                  whiteSpace: 'nowrap',
                  transition: 'border-color 150ms, color 150ms, background 150ms',
                  cursor: 'pointer',
                }}
              >
                {tab.label}
              </button>
            ))}
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
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr',
                      gap: 32,
                    }}
                  >
                    <style>{`@media (min-width: 860px) { .tab-panel-inner { grid-template-columns: 1fr 1fr !important; align-items: center !important; gap: 48px !important; } }`}</style>
                    <div className="tab-panel-inner" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 32 }}>
                      <TabVisual type={tab.visual} />
                      <div>
                        <h3
                          style={{
                            fontFamily: 'var(--font-display-var), sans-serif',
                            fontWeight: 600,
                            fontSize: 'clamp(1.3rem, 2vw, 1.6rem)',
                            letterSpacing: '-0.02em',
                            color: 'var(--text)',
                            marginBottom: 14,
                          }}
                        >
                          {tab.title}
                        </h3>
                        <p style={{ fontSize: '0.98rem', color: 'var(--text-2)', maxWidth: '48ch' }}>
                          {tab.body}
                          {tab.highlight && (
                            <> <span style={{ color: 'var(--blue)' }}>{tab.highlight}</span></>
                          )}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ) : null
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
