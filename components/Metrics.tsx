'use client'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface MetricData {
  count: number
  decimals: number
  suffix: string
  label: string
}

const metrics: MetricData[] = [
  { count: 47.2, decimals: 1, suffix: 'M', label: 'hectares under continuous monitoring' },
  { count: 182, decimals: 0, suffix: 'M', label: 'tonnes CO₂e measured to date' },
  { count: 6.4, decimals: 1, suffix: '', label: 'weeks, average time to verification' },
  { count: 99.1, decimals: 1, suffix: '%', label: 'agreement with independent ground-truth sampling' },
]

function AnimatedCounter({ count, decimals, suffix }: MetricData) {
  const [display, setDisplay] = useState(`${(0).toFixed(decimals)}${suffix}`)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-20%' })
  const animated = useRef(false)

  useEffect(() => {
    if (!inView || animated.current) return
    animated.current = true
    const dur = 1400
    const startTime = performance.now()
    const tick = (now: number) => {
      const p = Math.min(1, (now - startTime) / dur)
      const eased = 1 - Math.pow(1 - p, 3)
      setDisplay(`${(count * eased).toFixed(decimals)}${suffix}`)
      if (p < 1) requestAnimationFrame(tick)
      else setDisplay(`${count.toFixed(decimals)}${suffix}`)
    }
    requestAnimationFrame(tick)
  }, [inView, count, decimals, suffix])

  return (
    <span
      ref={ref}
      style={{
        display: 'block',
        fontFamily: 'var(--font-mono-var), monospace',
        fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
        fontWeight: 700,
        letterSpacing: '-0.03em',
        marginBottom: 10,
        background: 'linear-gradient(135deg, #FF6363, #FFAA6E)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}
    >
      {display}
    </span>
  )
}

export default function Metrics() {
  return (
    <section style={{ paddingBlock: 72 }}>
      <div className="container">
        <style>{`
          @media (min-width: 800px) { .metrics-grid { grid-template-columns: repeat(4, 1fr) !important; } }
        `}</style>
        <div
          className="metrics-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            border: '1px solid var(--border)',
            background: 'var(--border)',
            gap: 1,
          }}
        >
          {metrics.map((m, i) => (
            <div
              key={i}
              style={{
                background: 'var(--bg-elev)',
                padding: '36px 28px',
                transition: 'background 200ms',
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = 'rgba(255,99,99,0.04)')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = 'var(--bg-elev)')}
            >
              <AnimatedCounter {...m} />
              <p style={{ fontSize: '0.85rem', color: 'var(--text-3)', maxWidth: '22ch', lineHeight: 1.55 }}>
                {m.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
