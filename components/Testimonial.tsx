'use client'
import { motion } from 'framer-motion'

export default function Testimonial() {
  return (
    <section style={{ paddingBlock: 96 }}>
      <style>{`@media (min-width: 860px) { .testimonial-section { padding-block: 140px !important; } }`}</style>
      <div className="container testimonial-section" style={{ paddingBlock: 96 }}>
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8%' }}
          transition={{ duration: 0.64, ease: [0.16, 1, 0.3, 1] }}
          style={{ maxWidth: 780, marginInline: 'auto', textAlign: 'center' }}
        >
          <blockquote
            style={{
              fontFamily: 'var(--font-display-var), sans-serif',
              fontWeight: 500,
              fontSize: 'clamp(1.4rem, 3vw, 2rem)',
              letterSpacing: '-0.01em',
              lineHeight: 1.35,
              color: 'var(--text)',
              marginBottom: 28,
            }}
          >
            <span style={{ color: 'var(--cyan)' }}>&ldquo;</span>
            Carbona cut our verification cycle from eleven months to six weeks, without changing what our investment committee trusts.
            <span style={{ color: 'var(--cyan)' }}>&rdquo;</span>
          </blockquote>
          <cite
            style={{
              fontStyle: 'normal',
              fontSize: '0.88rem',
              color: 'var(--text-3)',
            }}
          >
            <strong style={{ color: 'var(--text-2)', fontWeight: 500 }}>Head of Carbon Markets</strong>
            {' '}· a Tier-1 development bank
          </cite>
        </motion.div>
      </div>
    </section>
  )
}
