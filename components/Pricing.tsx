'use client'
import { motion } from 'framer-motion'

const rev = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}
const trans = { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }

const plans = [
  {
    name: 'Developer',
    desc: 'For teams testing Carbona against a small portfolio.',
    price: 'Custom',
    priceSub: 'usage-based',
    features: ['API access', 'Up to 5,000 hectares', 'Community support'],
    cta: 'Request Access',
    featured: false,
  },
  {
    name: 'Business',
    desc: 'For carbon developers and agribusinesses scaling verification.',
    price: 'Custom',
    priceSub: 'by portfolio size',
    features: ['Full platform access', 'Dedicated onboarding', 'Priority support'],
    cta: 'Talk to Sales',
    featured: true,
    badge: 'Most Popular',
  },
  {
    name: 'Enterprise',
    desc: 'For banks, development agencies, and national programs.',
    price: 'Custom',
    priceSub: 'contact us',
    features: ['Dedicated deployment', 'Custom SLAs', 'On-prem option'],
    cta: 'Talk to Sales',
    featured: false,
  },
]

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#FF6363" strokeWidth="2.2" width="14" height="14" style={{ flexShrink: 0, marginTop: 3 }}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

export default function Pricing() {
  return (
    <section id="pricing" style={{ paddingBlock: 96 }}>
      <style>{`
        @media (min-width: 860px) { .pricing-wrap { padding-block: 128px !important; } }
        @media (min-width: 860px) { .pricing-grid { grid-template-columns: repeat(3, 1fr) !important; } }
      `}</style>
      <div className="container pricing-wrap" style={{ paddingBlock: 96 }}>
        <motion.div
          variants={rev}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-8%' }}
          transition={trans}
          style={{ maxWidth: 600, marginInline: 'auto', textAlign: 'center', marginBottom: 60 }}
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
            Pricing
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
            Straightforward plans. Enterprise-grade underneath.
          </h2>
        </motion.div>

        <div className="pricing-grid" style={{ display: 'grid', gap: 12 }}>
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              variants={rev}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-8%' }}
              transition={{ ...trans, delay: i * 0.08 }}
              style={{
                position: 'relative',
                background: plan.featured
                  ? 'rgba(255,99,99,0.06)'
                  : 'rgba(255,251,247,0.03)',
                border: `1px solid ${plan.featured ? 'rgba(255,99,99,0.3)' : 'var(--border)'}`,
                borderRadius: 'var(--radius-lg)',
                padding: 32,
                display: 'flex',
                flexDirection: 'column',
                boxShadow: plan.featured ? '0 0 0 1px rgba(255,99,99,0.08), 0 20px 60px rgba(255,99,99,0.08)' : 'none',
              }}
            >
              {plan.badge && (
                <span
                  style={{
                    position: 'absolute',
                    top: -13,
                    left: 28,
                    display: 'inline-flex',
                    alignItems: 'center',
                    fontFamily: 'var(--font-mono-var), monospace',
                    fontSize: '0.64rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    padding: '5px 12px',
                    borderRadius: 'var(--radius-full)',
                    border: '1px solid rgba(255,99,99,0.3)',
                    background: 'linear-gradient(135deg, #FF4D00, #FF6363)',
                    color: '#FFFBF7',
                    fontWeight: 700,
                    boxShadow: '0 4px 16px rgba(255,99,99,0.4)',
                  }}
                >
                  {plan.badge}
                </span>
              )}

              <h3
                style={{
                  fontFamily: 'var(--font-display-var), sans-serif',
                  fontWeight: 700,
                  fontSize: '1.15rem',
                  letterSpacing: '-0.03em',
                  color: 'var(--text)',
                  marginBottom: 8,
                }}
              >
                {plan.name}
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-2)', marginBottom: 24, minHeight: 40, lineHeight: 1.6 }}>
                {plan.desc}
              </p>
              <div
                style={{
                  fontFamily: 'var(--font-mono-var), monospace',
                  fontSize: '1.7rem',
                  fontWeight: 700,
                  letterSpacing: '-0.03em',
                  color: 'var(--text)',
                  marginBottom: 6,
                }}
              >
                {plan.price}
              </div>
              <div
                style={{
                  fontSize: '0.78rem',
                  color: 'var(--text-3)',
                  marginBottom: 28,
                  fontFamily: 'var(--font-mono-var), monospace',
                }}
              >
                {plan.priceSub}
              </div>

              <ul style={{ marginBottom: 32, display: 'flex', flexDirection: 'column', gap: 12, flexGrow: 1 }}>
                {plan.features.map((f) => (
                  <li key={f} style={{ display: 'flex', gap: 10, fontSize: '0.88rem', color: 'var(--text-2)', alignItems: 'flex-start' }}>
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
                  padding: '12px 24px',
                  borderRadius: 10,
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  width: '100%',
                  background: plan.featured ? 'linear-gradient(135deg, #FF4D00, #FF6363)' : 'rgba(255,251,247,0.07)',
                  color: '#FFFBF7',
                  border: plan.featured ? 'none' : '1px solid var(--border-strong)',
                  boxShadow: plan.featured ? '0 4px 20px rgba(255,99,99,0.4)' : 'none',
                  transition: 'transform 150ms, box-shadow 150ms, background 150ms',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  if (plan.featured) {
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
                    ;(e.currentTarget as HTMLElement).style.boxShadow = '0 8px 28px rgba(255,99,99,0.55)'
                  } else {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255,251,247,0.12)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (plan.featured) {
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                    ;(e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(255,99,99,0.4)'
                  } else {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255,251,247,0.07)'
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
