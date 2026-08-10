'use client'
import { motion } from 'framer-motion'

const rev = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
}
const trans = { duration: 0.64, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }

export default function Developer() {
  return (
    <section id="developer" style={{ paddingBlock: 96 }}>
      <style>{`
        @media (min-width: 860px) { .dev-section { padding-block: 140px !important; } }
        @media (min-width: 960px) { .dev-grid { grid-template-columns: 1fr 1fr !important; } }
      `}</style>
      <div
        className="container dev-section dev-grid"
        style={{ paddingBlock: 96, display: 'grid', gap: 48, alignItems: 'center' }}
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
            For Developers
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
            Built by climate scientists. Shipped like software.
          </h2>
          <p
            style={{
              fontSize: 'clamp(1.05rem, 1.5vw, 1.25rem)',
              color: 'var(--text-2)',
              maxWidth: '44ch',
            }}
          >
            A REST API and SDKs for teams who want carbon data inside their own systems, not just a dashboard.
          </p>
        </motion.div>

        {/* Code window */}
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
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: '0 30px 60px -30px rgba(0,0,0,.5)',
            }}
          >
            {/* Titlebar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '14px 18px',
                borderBottom: '1px solid var(--border)',
              }}
            >
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    background: 'var(--border-strong)',
                  }}
                />
              ))}
            </div>

            {/* Code */}
            <pre
              style={{
                padding: '22px 20px',
                overflowX: 'auto',
                fontFamily: 'var(--font-mono-var), monospace',
                fontSize: '0.82rem',
                lineHeight: 1.7,
              }}
            >
              <code style={{ color: 'var(--text-2)' }}>
                <span style={{ color: 'var(--cyan)' }}>POST</span>
                {' /v1/parcels/PLC-2291/verify\n\n'}
                {'{\n'}
                {'  '}
                <span style={{ color: 'var(--gold)' }}>&quot;carbon_tCO2e_ha&quot;</span>
                {': '}
                <span style={{ color: 'var(--emerald-bright)' }}>41.2</span>
                {',\n'}
                {'  '}
                <span style={{ color: 'var(--gold)' }}>&quot;confidence&quot;</span>
                {': '}
                <span style={{ color: 'var(--emerald-bright)' }}>0.964</span>
                {',\n'}
                {'  '}
                <span style={{ color: 'var(--gold)' }}>&quot;methodology&quot;</span>
                {': '}
                <span style={{ color: 'var(--emerald-bright)' }}>&quot;carbona-vcs-v3&quot;</span>
                {',\n'}
                {'  '}
                <span style={{ color: 'var(--gold)' }}>&quot;registry_status&quot;</span>
                {': '}
                <span style={{ color: 'var(--emerald-bright)' }}>&quot;ready&quot;</span>
                {'\n}'}
              </code>
            </pre>
          </div>
          <p
            style={{
              marginTop: 16,
              fontSize: '0.8rem',
              color: 'var(--text-3)',
            }}
          >
            Illustrative response. Full API documentation available on request during the access period.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
