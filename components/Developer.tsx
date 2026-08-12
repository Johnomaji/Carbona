'use client'
import { motion } from 'framer-motion'

const rev = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}
const trans = { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }

export default function Developer() {
  return (
    <section id="developer" style={{ paddingBlock: 96 }}>
      <style>{`
        @media (min-width: 860px) { .dev-wrap { padding-block: 128px !important; } }
        @media (min-width: 960px) { .dev-grid { grid-template-columns: 1fr 1fr !important; align-items: center !important; } }
      `}</style>
      <div
        className="container dev-wrap dev-grid"
        style={{ paddingBlock: 96, display: 'grid', gap: 56 }}
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
            For Developers
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
            Built by climate scientists.{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #FF6363, #FFAA6E)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Shipped like software.
            </span>
          </h2>
          <p
            style={{
              fontSize: 'clamp(1rem, 1.4vw, 1.15rem)',
              color: 'var(--text-2)',
              maxWidth: '42ch',
              lineHeight: 1.65,
            }}
          >
            A REST API and SDKs for teams who want carbon data inside their own systems, not just a dashboard.
          </p>
          <div style={{ marginTop: 36, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {['REST API', 'Python SDK', 'TypeScript SDK', 'Webhooks'].map((tag) => (
              <span
                key={tag}
                style={{
                  padding: '6px 14px',
                  borderRadius: 8,
                  background: 'rgba(255,251,247,0.05)',
                  border: '1px solid var(--border)',
                  fontSize: '0.8rem',
                  color: 'var(--text-2)',
                  fontFamily: 'var(--font-mono-var), monospace',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Code window */}
        <motion.div
          variants={rev}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-8%' }}
          transition={{ ...trans, delay: 0.1 }}
        >
          <div
            style={{
              background: 'rgba(14, 12, 10, 0.98)',
              border: '1px solid rgba(255,251,247,0.1)',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: '0 0 0 1px rgba(255,99,99,0.06), 0 32px 64px rgba(0,0,0,0.6)',
            }}
          >
            {/* Titlebar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '12px 16px',
                borderBottom: '1px solid rgba(255,251,247,0.07)',
                background: 'rgba(255,251,247,0.02)',
              }}
            >
              {['#FF5F57', '#FEBC2E', '#28C840'].map((c, i) => (
                <div key={i} style={{ width: 11, height: 11, borderRadius: '50%', background: c, opacity: 0.8 }} />
              ))}
              <span
                style={{
                  marginLeft: 10,
                  fontSize: '0.72rem',
                  color: 'rgba(255,251,247,0.3)',
                  fontFamily: 'var(--font-mono-var), monospace',
                }}
              >
                POST /v1/parcels/{'{id}'}/verify
              </span>
            </div>

            {/* Code */}
            <pre
              style={{
                padding: '24px 22px',
                overflowX: 'auto',
                fontFamily: 'var(--font-mono-var), monospace',
                fontSize: '0.84rem',
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              <code>
                <span style={{ color: '#FF6363' }}>POST</span>
                <span style={{ color: 'rgba(255,251,247,0.5)' }}>{' /v1/parcels/PLC-2291/verify\n\n'}</span>
                <span style={{ color: 'rgba(255,251,247,0.3)' }}>{'{\n'}</span>
                {'  '}
                <span style={{ color: '#FFAA6E' }}>&quot;carbon_tCO2e_ha&quot;</span>
                <span style={{ color: 'rgba(255,251,247,0.4)' }}>{': '}</span>
                <span style={{ color: '#6ee7b7' }}>41.2</span>
                <span style={{ color: 'rgba(255,251,247,0.3)' }}>{',\n'}</span>
                {'  '}
                <span style={{ color: '#FFAA6E' }}>&quot;confidence&quot;</span>
                <span style={{ color: 'rgba(255,251,247,0.4)' }}>{': '}</span>
                <span style={{ color: '#6ee7b7' }}>0.964</span>
                <span style={{ color: 'rgba(255,251,247,0.3)' }}>{',\n'}</span>
                {'  '}
                <span style={{ color: '#FFAA6E' }}>&quot;methodology&quot;</span>
                <span style={{ color: 'rgba(255,251,247,0.4)' }}>{': '}</span>
                <span style={{ color: '#6ee7b7' }}>&quot;carbona-vcs-v3&quot;</span>
                <span style={{ color: 'rgba(255,251,247,0.3)' }}>{',\n'}</span>
                {'  '}
                <span style={{ color: '#FFAA6E' }}>&quot;registry_status&quot;</span>
                <span style={{ color: 'rgba(255,251,247,0.4)' }}>{': '}</span>
                <span style={{ color: '#6ee7b7' }}>&quot;ready&quot;</span>
                <span style={{ color: 'rgba(255,251,247,0.3)' }}>{'\n}'}</span>
                {'\n\n'}
                <span style={{ color: 'rgba(255,251,247,0.2)' }}>{'// → 200 OK · verified in 3.4s'}</span>
              </code>
            </pre>
          </div>
          <p style={{ marginTop: 14, fontSize: '0.78rem', color: 'var(--text-3)' }}>
            Illustrative response. Full API documentation available during access period.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
