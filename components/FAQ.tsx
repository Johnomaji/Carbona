'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const rev = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}
const trans = { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }

const faqs = [
  {
    q: "How accurate is Carbona's verification?",
    a: "Every estimate is cross-checked against independent ground-truth plots in the region. Across active projects, our modeled estimates agree with ground sampling 99.1% of the time within methodology tolerance.",
  },
  {
    q: 'Which methodologies does Carbona support?',
    a: 'Carbona is designed to align with leading voluntary and compliance carbon market methodologies. We work with your team to map outputs to the specific standard your registry requires.',
  },
  {
    q: 'Can Carbona verify a project with no ground-truth data yet?',
    a: 'Yes. Carbona can begin from satellite and public reference data alone, though accuracy improves once even a small set of ground plots is added.',
  },
  {
    q: 'Who owns the data?',
    a: 'You do. Carbona processes your data under your control and never shares it across customers without permission.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" style={{ paddingBlock: 96 }}>
      <style>{`@media (min-width: 860px) { .faq-wrap { padding-block: 128px !important; } }`}</style>
      <div className="container faq-wrap" style={{ paddingBlock: 96 }}>
        <motion.div
          variants={rev}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-8%' }}
          transition={trans}
          style={{ maxWidth: 600, marginInline: 'auto', textAlign: 'center', marginBottom: 56 }}
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
            FAQ
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
            Questions worth asking before you trust a number.
          </h2>
        </motion.div>

        <motion.div
          variants={rev}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-8%' }}
          transition={{ ...trans, delay: 0.1 }}
          style={{
            maxWidth: 780,
            marginInline: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
          }}
        >
          {faqs.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={i}
                style={{
                  background: 'rgba(255,251,247,0.03)',
                  border: `1px solid ${isOpen ? 'rgba(255,99,99,0.25)' : 'var(--border)'}`,
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  transition: 'border-color 200ms',
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%',
                    padding: '20px 22px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 16,
                    fontFamily: 'var(--font-display-var), sans-serif',
                    fontSize: '0.98rem',
                    fontWeight: 600,
                    letterSpacing: '-0.01em',
                    color: isOpen ? 'var(--text)' : 'rgba(255,251,247,0.82)',
                    textAlign: 'left',
                    cursor: 'pointer',
                    background: 'none',
                    border: 'none',
                    transition: 'color 150ms',
                  }}
                >
                  {item.q}
                  <span
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: 6,
                      background: isOpen ? 'rgba(255,99,99,0.15)' : 'rgba(255,251,247,0.05)',
                      border: `1px solid ${isOpen ? 'rgba(255,99,99,0.25)' : 'var(--border)'}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'background 200ms, border-color 200ms, transform 200ms',
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                    }}
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke={isOpen ? '#FF6363' : 'rgba(255,251,247,0.4)'} strokeWidth="2" width="12" height="12">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p
                        style={{
                          padding: '0 22px 20px',
                          fontSize: '0.92rem',
                          color: 'var(--text-2)',
                          lineHeight: 1.7,
                          maxWidth: '64ch',
                        }}
                      >
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
