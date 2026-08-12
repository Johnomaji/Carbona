'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

const rev = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}
const trans = { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }

export default function FinalCTA() {
  const [submitted, setSubmitted] = useState(false)
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setSubmitted(true)
    }
  }

  return (
    <section
      id="access"
      style={{
        paddingBlock: 96,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <style>{`@media (min-width: 860px) { .cta-wrap { padding-block: 128px !important; } }`}</style>

      {/* Background */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 70% 80% at 50% 50%, rgba(255,99,99,0.12) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, transparent 0%, rgba(255,77,0,0.04) 100%)',
          pointerEvents: 'none',
        }}
      />

      <div
        className="container cta-wrap"
        style={{ paddingBlock: 96, textAlign: 'center', position: 'relative' }}
      >
        <motion.div
          variants={rev}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-8%' }}
          transition={trans}
          style={{ maxWidth: 640, marginInline: 'auto', marginBottom: 40 }}
        >
          <span
            style={{
              display: 'inline-block',
              fontSize: '0.72rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#FF6363',
              marginBottom: 20,
            }}
          >
            Get Started
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-display-var), sans-serif',
              fontWeight: 700,
              letterSpacing: '-0.04em',
              lineHeight: 1.06,
              fontSize: 'clamp(2rem, 4.5vw, 3.4rem)',
              color: 'var(--text)',
              marginBottom: 20,
            }}
          >
            Carbon markets are only as strong as their{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #FF6363, #FFAA6E)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              weakest measurement.
            </span>
          </h2>
          <p
            style={{
              fontSize: 'clamp(1rem, 1.4vw, 1.15rem)',
              color: 'var(--text-2)',
              maxWidth: '44ch',
              marginInline: 'auto',
              lineHeight: 1.65,
            }}
          >
            Request access to see what Carbona finds on your first parcel.
          </p>
        </motion.div>

        <motion.div
          variants={rev}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-8%' }}
          transition={{ ...trans, delay: 0.08 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}
        >
          <a
            href="#access"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              padding: '14px 28px',
              borderRadius: 10,
              fontSize: '0.95rem',
              fontWeight: 600,
              background: 'linear-gradient(135deg, #FF4D00, #FF6363)',
              color: '#FFFBF7',
              boxShadow: '0 4px 24px rgba(255,99,99,0.45)',
              transition: 'transform 150ms, box-shadow 150ms',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
              ;(e.currentTarget as HTMLElement).style.boxShadow = '0 10px 36px rgba(255,99,99,0.6)'
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
              ;(e.currentTarget as HTMLElement).style.boxShadow = '0 4px 24px rgba(255,99,99,0.45)'
            }}
          >
            Request Access
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>

          {submitted ? (
            <p
              style={{
                fontSize: '0.9rem',
                color: '#4fc880',
                fontFamily: 'var(--font-mono-var), monospace',
                padding: '10px 20px',
                background: 'rgba(79,200,128,0.1)',
                border: '1px solid rgba(79,200,128,0.2)',
                borderRadius: 8,
              }}
            >
              You&apos;re on the list. We&apos;ll reach out before general access opens.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{
                display: 'flex',
                gap: 8,
                maxWidth: 460,
                width: '100%',
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}
            >
              <label htmlFor="notifyEmail" className="visually-hidden">
                Email address
              </label>
              <input
                type="email"
                id="notifyEmail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Or get notified before general access"
                required
                style={{
                  flex: 1,
                  minWidth: 220,
                  background: 'rgba(255,251,247,0.05)',
                  border: '1px solid var(--border-strong)',
                  borderRadius: 10,
                  padding: '12px 18px',
                  fontSize: '0.88rem',
                  color: 'var(--text)',
                  outline: 'none',
                  transition: 'border-color 150ms, background 150ms',
                }}
                onFocus={(e) => {
                  (e.currentTarget as HTMLInputElement).style.borderColor = 'rgba(255,99,99,0.4)'
                  ;(e.currentTarget as HTMLInputElement).style.background = 'rgba(255,251,247,0.07)'
                }}
                onBlur={(e) => {
                  (e.currentTarget as HTMLInputElement).style.borderColor = 'var(--border-strong)'
                  ;(e.currentTarget as HTMLInputElement).style.background = 'rgba(255,251,247,0.05)'
                }}
              />
              <button
                type="submit"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '12px 20px',
                  borderRadius: 10,
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  background: 'rgba(255,251,247,0.07)',
                  color: 'var(--text)',
                  border: '1px solid var(--border-strong)',
                  transition: 'border-color 150ms, background 150ms',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,251,247,0.12)'
                  ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,251,247,0.2)'
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,251,247,0.07)'
                  ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--border-strong)'
                }}
              >
                Notify Me
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
