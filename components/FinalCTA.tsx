'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

const rev = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
}
const trans = { duration: 0.64, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }

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
    <section id="access" style={{ paddingBlock: 96, textAlign: 'center' }}>
      <style>{`@media (min-width: 860px) { .finalcta-section { padding-block: 140px !important; } }`}</style>
      <div className="container finalcta-section" style={{ paddingBlock: 96 }}>
        <motion.div
          variants={rev}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-8%' }}
          transition={trans}
          style={{ maxWidth: 640, marginInline: 'auto', marginBottom: 32 }}
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
              justifyContent: 'center',
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
            Get Started
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
            Carbon markets are only as strong as their weakest measurement.
          </h2>
          <p
            style={{
              fontSize: 'clamp(1.05rem, 1.5vw, 1.25rem)',
              color: 'var(--text-2)',
              maxWidth: '44ch',
              marginInline: 'auto',
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
        </motion.div>

        <motion.div
          variants={rev}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-8%' }}
          transition={{ ...trans, delay: 0.14 }}
          style={{ marginTop: 32 }}
        >
          {submitted ? (
            <p
              style={{
                fontSize: '0.9rem',
                color: 'var(--emerald-bright)',
                fontFamily: 'var(--font-mono-var), monospace',
              }}
            >
              You&apos;re on the list. We&apos;ll reach out before general access opens.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{
                display: 'flex',
                gap: 10,
                maxWidth: 420,
                margin: '0 auto',
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
                placeholder="Or get updates before general access"
                required
                style={{
                  flex: 1,
                  minWidth: 200,
                  background: 'var(--bg-elev)',
                  border: '1px solid var(--border-strong)',
                  borderRadius: 'var(--radius-full)',
                  padding: '13px 20px',
                  fontSize: '0.88rem',
                  color: 'var(--text)',
                  outline: 'none',
                  transition: 'border-color 150ms',
                }}
                onFocus={(e) => ((e.currentTarget as HTMLInputElement).style.borderColor = 'var(--cyan)')}
                onBlur={(e) => ((e.currentTarget as HTMLInputElement).style.borderColor = 'var(--border-strong)')}
              />
              <button
                type="submit"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  padding: '11px 20px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  background: 'transparent',
                  color: 'var(--text)',
                  border: '1px solid var(--border-strong)',
                  whiteSpace: 'nowrap',
                  transition: 'border-color 150ms, color 150ms',
                  cursor: 'pointer',
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
                Notify Me
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
