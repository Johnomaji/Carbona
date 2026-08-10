'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const rev = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
}
const trans = { duration: 0.64, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }

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
      <style>{`@media (min-width: 860px) { .faq-section { padding-block: 140px !important; } }`}</style>
      <div className="container faq-section" style={{ paddingBlock: 96 }}>
        <motion.div
          variants={rev}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-8%' }}
          transition={trans}
          style={{ maxWidth: 640, marginInline: 'auto', textAlign: 'center', marginBottom: 56 }}
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
            FAQ
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
            maxWidth: 760,
            marginInline: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            background: 'var(--border)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
          }}
        >
          {faqs.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div key={i} style={{ background: 'var(--bg-elev)' }}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%',
                    padding: '22px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 16,
                    fontFamily: 'var(--font-display-var), sans-serif',
                    fontSize: '1rem',
                    fontWeight: 500,
                    color: 'var(--text)',
                    textAlign: 'left',
                    cursor: 'pointer',
                    background: 'none',
                    border: 'none',
                  }}
                >
                  {item.q}
                  {/* Plus/minus indicator */}
                  <span
                    style={{
                      width: 20,
                      height: 20,
                      position: 'relative',
                      flexShrink: 0,
                    }}
                    aria-hidden="true"
                  >
                    <span
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        width: 12,
                        height: 1.5,
                        background: 'var(--text-3)',
                        transform: 'translate(-50%, -50%)',
                      }}
                    />
                    <span
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        width: 1.5,
                        height: 12,
                        background: 'var(--text-3)',
                        transform: `translate(-50%, -50%) rotate(${isOpen ? 90 : 0}deg)`,
                        opacity: isOpen ? 0 : 1,
                        transition: 'transform 280ms, opacity 280ms',
                      }}
                    />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p
                        style={{
                          padding: '0 24px 22px',
                          fontSize: '0.92rem',
                          color: 'var(--text-2)',
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
