'use client'
import { motion } from 'framer-motion'

export default function Testimonial() {
  return (
    <section
      style={{
        paddingBlock: 96,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 70% 80% at 50% 50%, rgba(255,99,99,0.07) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8%' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{
            maxWidth: 820,
            marginInline: 'auto',
            textAlign: 'center',
            padding: '56px 40px',
            background: 'rgba(255,251,247,0.02)',
            border: '1px solid rgba(255,99,99,0.12)',
            borderRadius: 'var(--radius-xl)',
            boxShadow: '0 0 0 1px rgba(255,99,99,0.05)',
          }}
        >
          {/* Quote mark */}
          <div
            style={{
              fontSize: '4rem',
              lineHeight: 0.8,
              marginBottom: 28,
              background: 'linear-gradient(135deg, #FF6363, #FFAA6E)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontFamily: 'Georgia, serif',
            }}
          >
            &ldquo;
          </div>
          <blockquote
            style={{
              fontFamily: 'var(--font-display-var), sans-serif',
              fontWeight: 600,
              fontSize: 'clamp(1.35rem, 2.8vw, 1.9rem)',
              letterSpacing: '-0.02em',
              lineHeight: 1.38,
              color: 'var(--text)',
              marginBottom: 32,
            }}
          >
            Carbona cut our verification cycle from eleven months to six weeks, without changing what our investment committee trusts.
          </blockquote>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 14,
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #FF4D00, #FF6363)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.78rem',
                fontWeight: 700,
                color: '#FFFBF7',
                flexShrink: 0,
              }}
            >
              HCM
            </div>
            <cite style={{ fontStyle: 'normal', textAlign: 'left' }}>
              <strong style={{ display: 'block', fontSize: '0.9rem', color: 'var(--text)', fontWeight: 600 }}>
                Head of Carbon Markets
              </strong>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-3)' }}>Tier-1 development bank</span>
            </cite>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
