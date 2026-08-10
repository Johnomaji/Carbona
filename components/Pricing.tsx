'use client'
import { motion } from 'framer-motion'

const rev = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
}
const trans = { duration: 0.64, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15" style={{ color: 'var(--cyan)', flexShrink: 0, marginTop: 3 }}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
)

const plans = [
  {
    name: 'Developer',
    desc: 'For teams testing Carbona against a small portfolio.',
    price: 'Custom',
    priceSub: 'usage-based',
    features: ['API access', 'Up to 5,000 hectares', 'Community support'],
    cta: 'Request Access',
    ctaStyle: 'ghost',
    featured: false,
  },
  {
    name: 'Business',
    desc: 'For carbon developers and agribusinesses scaling verification.',
    price: 'Custom',
    priceSub: 'by portfolio size',
    features: ['Full platform access', 'Dedicated onboarding', 'Priority support'],
    cta: 'Talk to Sales',
    ctaStyle: 'primary',
    featured: true,
    badge: 'Most Teams Choose This',
  },
  {
    name: 'Enterprise & Government',
    desc: 'For banks, development agencies, and national programs.',
    price: 'Custom',
    priceSub: 'contact us',
    features: ['Dedicated deployment', 'Custom SLAs', 'On-prem option'],
    cta: 'Talk to Sales',
    ctaStyle: 'ghost',
    featured: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" style={{ paddingBlock: 96 }}>
      <style>{`
        @media (min-width: 860px) { .pricing-section { padding-block: 140px !important; } }
        @media (min-width: 860px) { .pricing-grid { grid-template-columns: repeat(3, 1fr) !important; } }
      `}</style>
      <div className="container pricing-section" style={{ paddingBlock: 96 }}>
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
            Pricing
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
            Straightforward plans. Enterprise-grade underneath.
          </h2>
        </motion.div>

        <div className="pricing-grid" style={{ display: 'grid', gap: 20 }}>
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              variants={rev}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-8%' }}
              transition={{ ...trans, delay: i * 0.07 }}
              style={{
                position: 'relative',
                background: 'var(--bg-elev)',
                border: '1px solid',
                borderColor: plan.featured ? 'rgba(205,168,106,.4)' : 'var(--border)',
                borderRadius: 'var(--radius-lg)',
                padding: 32,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {plan.badge && (
                <span
                  style={{
                    position: 'absolute',
                    top: -12,
                    left: 32,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    fontFamily: 'var(--font-mono-var), monospace',
                    fontSize: '0.66rem',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    padding: '6px 12px',
                    borderRadius: 'var(--radius-full)',
                    border: '1px solid rgba(205,168,106,.35)',
                    background: 'rgba(205,168,106,.12)',
                    color: 'var(--gold)',
                  }}
                >
                  {plan.badge}
                </span>
              )}

              <h3
                style={{
                  fontFamily: 'var(--font-display-var), sans-serif',
                  fontWeight: 600,
                  fontSize: 'clamp(1.1rem, 1.6vw, 1.3rem)',
                  color: 'var(--text)',
                  marginBottom: 8,
                }}
              >
                {plan.name}
              </h3>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-2)', marginBottom: 24, minHeight: 42 }}>
                {plan.desc}
              </p>
              <div
                style={{
                  fontFamily: 'var(--font-mono-var), monospace',
                  fontSize: '1.6rem',
                  color: 'var(--text)',
                  marginBottom: 24,
                }}
              >
                {plan.price}{' '}
                <span
                  style={{
                    fontSize: '0.78rem',
                    color: 'var(--text-3)',
                    fontFamily: 'var(--font-body-var), sans-serif',
                  }}
                >
                  · {plan.priceSub}
                </span>
              </div>

              <ul style={{ marginBottom: 28, display: 'flex', flexDirection: 'column', gap: 12, flexGrow: 1 }}>
                {plan.features.map((f) => (
                  <li
                    key={f}
                    style={{
                      display: 'flex',
                      gap: 10,
                      fontSize: '0.86rem',
                      color: 'var(--text-2)',
                      alignItems: 'flex-start',
                    }}
                  >
                    <CheckIcon />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#access"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  padding: '15px 28px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  width: '100%',
                  background: plan.ctaStyle === 'primary' ? 'var(--cyan-solid)' : 'transparent',
                  color: plan.ctaStyle === 'primary' ? 'var(--on-solid)' : 'var(--text)',
                  border: plan.ctaStyle === 'ghost' ? '1px solid var(--border-strong)' : 'none',
                  transition: 'transform 150ms, box-shadow 150ms, border-color 150ms, color 150ms',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  if (plan.ctaStyle === 'primary') {
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
                    ;(e.currentTarget as HTMLElement).style.boxShadow = '0 14px 32px rgba(0,230,195,.28)'
                  } else {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--cyan)'
                    ;(e.currentTarget as HTMLElement).style.color = 'var(--cyan)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (plan.ctaStyle === 'primary') {
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                    ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
                  } else {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-strong)'
                    ;(e.currentTarget as HTMLElement).style.color = 'var(--text)'
                  }
                }}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
