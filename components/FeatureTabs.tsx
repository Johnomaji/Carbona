'use client'
import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const rev = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }
const trans = { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }

const tabs = [
  {
    id: 'sat',
    label: 'Satellite Intelligence',
    title: 'Satellite Intelligence',
    body: 'Multispectral and radar imagery from a dozen satellite constellations, resampled to a consistent grid and refreshed on a weekly revisit cycle.',
    visual: 'satellite',
  },
  {
    id: 'cv',
    label: 'AI Computer Vision',
    title: 'AI Computer Vision',
    body: 'Models trained on millions of labeled hectares detect canopy structure, land-use change, and disturbance events before they show up in a field report.',
    visual: 'cv',
    highlight: 'Model confidence shown on every output.',
  },
  {
    id: 'chain',
    label: 'Blockchain Traceability',
    title: 'Blockchain Traceability',
    body: 'Every measurement, model version, and verification decision is hashed and anchored on-chain, so any claim can be traced back to its source data.',
    visual: 'blockchain',
  },
  {
    id: 'clim',
    label: 'Climate Models',
    title: 'Climate Models',
    body: 'Biophysical and machine-learned models translate raw signal into tonnes — cross-checked against independent ground plots in every region we operate.',
    visual: 'grid',
  },
]

// ─── Shared ──────────────────────────────────────────────────────────────────

const LiveBadge = () => (
  <div
    style={{
      position: 'absolute',
      top: 12,
      right: 12,
      padding: '4px 10px',
      background: 'rgba(255,99,99,0.12)',
      border: '1px solid rgba(255,99,99,0.22)',
      borderRadius: 6,
      fontSize: '0.62rem',
      color: '#FF6363',
      fontFamily: 'var(--font-mono-var), monospace',
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      zIndex: 2,
    }}
  >
    Live
  </div>
)

const visualWrap: React.CSSProperties = {
  aspectRatio: '4/3',
  borderRadius: 'var(--radius-lg)',
  border: '1px solid var(--border)',
  background: 'rgba(8,6,4,0.85)',
  position: 'relative',
  overflow: 'hidden',
}

// ─── Satellite Visual ─────────────────────────────────────────────────────────

const NDVI_STOPS = [
  'rgba(139,0,0,0.85)',
  'rgba(185,65,0,0.85)',
  'rgba(210,145,0,0.85)',
  'rgba(100,175,40,0.85)',
  'rgba(40,145,20,0.85)',
  'rgba(15,105,8,0.85)',
]

function ndviColor(v: number) {
  return NDVI_STOPS[Math.min(Math.floor(v * NDVI_STOPS.length), NDVI_STOPS.length - 1)]
}

function SatelliteVisual() {
  const COLS = 11, ROWS = 8
  const [cells, setCells] = useState(() =>
    Array.from({ length: COLS * ROWS }, () => Math.random())
  )
  const [hovered, setHovered] = useState<number | null>(null)

  useEffect(() => {
    const id = setInterval(() => {
      setCells(prev => {
        const next = [...prev]
        const i = Math.floor(Math.random() * next.length)
        next[i] = Math.random()
        return next
      })
    }, 350)
    return () => clearInterval(id)
  }, [])

  const h = hovered !== null
    ? { col: hovered % COLS, row: Math.floor(hovered / COLS), val: cells[hovered] }
    : null

  return (
    <div style={visualWrap}>
      <style>{`
        @keyframes ftScan {
          from { top: -2%; }
          to   { top: 102%; }
        }
      `}</style>
      <LiveBadge />

      {/* Cell grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'grid',
          gridTemplateColumns: `repeat(${COLS}, 1fr)`,
          gridTemplateRows: `repeat(${ROWS}, 1fr)`,
          gap: 1.5,
          padding: '1.5px',
        }}
      >
        {cells.map((v, i) => (
          <div
            key={i}
            style={{
              background: ndviColor(v),
              borderRadius: 2,
              transition: 'background 0.55s ease',
              cursor: 'crosshair',
              outline: hovered === i ? '1.5px solid rgba(255,251,247,0.85)' : 'none',
              outlineOffset: -1,
            }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          />
        ))}
      </div>

      {/* Scanline */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          height: 3,
          background: 'linear-gradient(90deg, transparent, #FF6363 30%, #FF6363 70%, transparent)',
          opacity: 0.75,
          pointerEvents: 'none',
          boxShadow: '0 0 10px rgba(255,99,99,0.55)',
          animation: 'ftScan 3.4s linear infinite',
        }}
      />

      {/* Hover tooltip */}
      {h && (
        <div
          style={{
            position: 'absolute',
            bottom: 10,
            left: 10,
            background: 'rgba(8,6,4,0.93)',
            border: '1px solid rgba(255,99,99,0.22)',
            borderRadius: 8,
            padding: '7px 11px',
            fontFamily: 'var(--font-mono-var), monospace',
            fontSize: '0.67rem',
            color: 'var(--text-2)',
            pointerEvents: 'none',
            lineHeight: 1.6,
          }}
        >
          <div style={{ color: '#FF6363', fontWeight: 600 }}>NDVI {h.val.toFixed(3)}</div>
          <div style={{ color: 'rgba(255,251,247,0.35)' }}>
            Grid [{h.col}, {h.row}]
          </div>
        </div>
      )}

      {/* NDVI scale */}
      <div
        style={{
          position: 'absolute',
          bottom: 10,
          right: 10,
          fontFamily: 'var(--font-mono-var), monospace',
          fontSize: '0.58rem',
          color: 'rgba(255,251,247,0.3)',
        }}
      >
        <div
          style={{
            width: 52,
            height: 5,
            borderRadius: 3,
            background:
              'linear-gradient(90deg, rgba(139,0,0,0.8), rgba(210,145,0,0.8), rgba(15,105,8,0.8))',
            marginBottom: 3,
          }}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', width: 52 }}>
          <span>0.0</span>
          <span>NDVI</span>
          <span>1.0</span>
        </div>
      </div>
    </div>
  )
}

// ─── CV Visual ────────────────────────────────────────────────────────────────

const CV_BOXES = [
  { id: 0, x: 7, y: 9, w: 40, h: 50, label: 'Dense Canopy', conf: 0.97, color: '#FF6363' },
  { id: 1, x: 53, y: 17, w: 32, h: 38, label: 'Land Change', conf: 0.89, color: '#FF9F40' },
  { id: 2, x: 14, y: 66, w: 52, h: 27, label: 'Water Body', conf: 0.94, color: '#4ECDC4' },
]

function CVVisual() {
  const [hovered, setHovered] = useState<number | null>(null)
  const [visible, setVisible] = useState<Set<number>>(new Set())

  useEffect(() => {
    const timers = CV_BOXES.map((box, i) =>
      setTimeout(() => setVisible(s => new Set([...s, box.id])), i * 480 + 280)
    )
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <div style={visualWrap}>
      {/* Grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            repeating-linear-gradient(90deg, transparent 0, transparent 9.9%, rgba(255,251,247,0.03) 10%, rgba(255,251,247,0.03) 10.2%),
            repeating-linear-gradient(0deg, transparent 0, transparent 9.9%, rgba(255,251,247,0.03) 10%, rgba(255,251,247,0.03) 10.2%)
          `,
        }}
      />
      {/* Glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 65% 55% at 35% 40%, rgba(255,99,99,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <LiveBadge />

      {CV_BOXES.map(box => {
        const on = hovered === box.id
        const show = visible.has(box.id)
        return (
          <div
            key={box.id}
            style={{
              position: 'absolute',
              left: `${box.x}%`,
              top: `${box.y}%`,
              width: `${box.w}%`,
              height: `${box.h}%`,
              border: `1.5px solid ${on ? box.color : `${box.color}77`}`,
              borderRadius: 4,
              opacity: show ? 1 : 0,
              transition: 'opacity 0.4s ease, border-color 0.2s, box-shadow 0.2s',
              boxShadow: on
                ? `0 0 22px ${box.color}44, inset 0 0 18px ${box.color}0f`
                : 'none',
              cursor: 'pointer',
              zIndex: on ? 2 : 1,
            }}
            onMouseEnter={() => setHovered(box.id)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Confidence badge */}
            <div
              style={{
                position: 'absolute',
                top: -1,
                left: -1,
                background: box.color,
                color: '#060402',
                fontSize: '0.6rem',
                fontFamily: 'var(--font-mono-var), monospace',
                fontWeight: 700,
                padding: '2px 7px',
                borderRadius: '3px 0 4px 0',
                opacity: show ? 1 : 0,
                transition: 'opacity 0.35s ease 0.15s',
              }}
            >
              {(box.conf * 100).toFixed(0)}%
            </div>

            {/* Hover label */}
            {on && (
              <div
                style={{
                  position: 'absolute',
                  bottom: -26,
                  left: 0,
                  background: 'rgba(8,6,4,0.92)',
                  border: `1px solid ${box.color}44`,
                  borderRadius: 4,
                  padding: '2px 8px',
                  fontSize: '0.64rem',
                  color: box.color,
                  fontFamily: 'var(--font-mono-var), monospace',
                  whiteSpace: 'nowrap',
                  zIndex: 3,
                }}
              >
                {box.label}
              </div>
            )}
          </div>
        )
      })}

      {/* Footer */}
      <div
        style={{
          position: 'absolute',
          bottom: 10,
          left: 10,
          fontFamily: 'var(--font-mono-var), monospace',
          fontSize: '0.62rem',
          color: 'rgba(255,251,247,0.28)',
        }}
      >
        {CV_BOXES.length} regions · avg{' '}
        {((CV_BOXES.reduce((a, b) => a + b.conf, 0) / CV_BOXES.length) * 100).toFixed(0)}%
        conf
      </div>
    </div>
  )
}

// ─── Blockchain Visual ────────────────────────────────────────────────────────

const CHAIN_NODES = [
  { hash: '0xa3f2…', block: '#1,247,803', data: '12.4 t', time: '2s ago' },
  { hash: '0xb7e1…', block: '#1,247,802', data: '9.1 t', time: '8s ago' },
  { hash: '0xc2d8…', block: '#1,247,801', data: '15.7 t', time: '14s ago' },
  { hash: '0xd9a4…', block: '#1,247,800', data: '8.3 t', time: '20s ago' },
  { hash: '0xe1f6…', block: '#1,247,799', data: '11.2 t', time: '26s ago' },
]

function BlockchainVisual() {
  const [hovered, setHovered] = useState<number | null>(null)
  const [pulse, setPulse] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setPulse(p => (p + 1) % CHAIN_NODES.length), 1100)
    return () => clearInterval(id)
  }, [])

  return (
    <div style={{ ...visualWrap, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 75% 55% at 50% 50%, rgba(255,99,99,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <LiveBadge />

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          padding: '0 16px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {CHAIN_NODES.map((node, i) => {
          const on = hovered === i
          const hot = pulse === i
          return (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                flex: i < CHAIN_NODES.length - 1 ? 1 : undefined,
              }}
            >
              {/* Block card */}
              <div
                style={{
                  flexShrink: 0,
                  width: 54,
                  borderRadius: 9,
                  padding: '9px 6px 7px',
                  background: on
                    ? 'rgba(255,99,99,0.12)'
                    : hot
                    ? 'rgba(255,99,99,0.07)'
                    : 'rgba(255,251,247,0.04)',
                  border: `1px solid ${
                    on
                      ? 'rgba(255,99,99,0.45)'
                      : hot
                      ? 'rgba(255,99,99,0.28)'
                      : 'rgba(255,251,247,0.09)'
                  }`,
                  boxShadow: hot || on ? '0 0 14px rgba(255,99,99,0.28)' : 'none',
                  transition: 'all 0.22s ease',
                  cursor: 'pointer',
                  position: 'relative',
                  textAlign: 'center',
                }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Dot */}
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: on || hot ? '#FF6363' : 'rgba(255,99,99,0.38)',
                    margin: '0 auto 5px',
                    boxShadow: on || hot ? '0 0 10px rgba(255,99,99,0.75)' : 'none',
                    transition: 'all 0.2s',
                  }}
                />
                <div
                  style={{
                    fontSize: '0.54rem',
                    fontFamily: 'var(--font-mono-var), monospace',
                    color: 'rgba(255,251,247,0.35)',
                    letterSpacing: '-0.01em',
                    marginBottom: 3,
                  }}
                >
                  {node.hash}
                </div>
                <div
                  style={{
                    fontSize: '0.6rem',
                    fontFamily: 'var(--font-mono-var), monospace',
                    color: '#FF6363',
                    fontWeight: 700,
                  }}
                >
                  {node.data}
                </div>

                {/* Popup */}
                {on && (
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 'calc(100% + 10px)',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'rgba(8,6,4,0.95)',
                      border: '1px solid rgba(255,99,99,0.22)',
                      borderRadius: 8,
                      padding: '9px 12px',
                      fontFamily: 'var(--font-mono-var), monospace',
                      fontSize: '0.63rem',
                      whiteSpace: 'nowrap',
                      zIndex: 10,
                      lineHeight: 1.7,
                      textAlign: 'left',
                    }}
                  >
                    <div style={{ color: '#FF6363', fontWeight: 700, marginBottom: 2 }}>
                      {node.block}
                    </div>
                    <div style={{ color: 'rgba(255,251,247,0.55)' }}>CO₂: {node.data}</div>
                    <div style={{ color: 'rgba(255,251,247,0.28)' }}>{node.time}</div>
                    {/* Arrow */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '100%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: 0,
                        height: 0,
                        borderLeft: '5px solid transparent',
                        borderRight: '5px solid transparent',
                        borderTop: '5px solid rgba(255,99,99,0.22)',
                      }}
                    />
                  </div>
                )}
              </div>

              {/* Connector */}
              {i < CHAIN_NODES.length - 1 && (
                <div
                  style={{
                    flex: 1,
                    height: 1,
                    background:
                      'linear-gradient(90deg, rgba(255,99,99,0.45), rgba(255,251,247,0.08))',
                  }}
                />
              )}
            </div>
          )
        })}
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: 10,
          left: '50%',
          transform: 'translateX(-50%)',
          fontFamily: 'var(--font-mono-var), monospace',
          fontSize: '0.6rem',
          color: 'rgba(255,251,247,0.22)',
          whiteSpace: 'nowrap',
        }}
      >
        Hover nodes to inspect blocks
      </div>
    </div>
  )
}

// ─── Climate Graph Visual ─────────────────────────────────────────────────────

const CHART_DATA = [
  { year: '2019', measured: 87, baseline: 87 },
  { year: '2020', measured: 79, baseline: 84 },
  { year: '2021', measured: 68, baseline: 81 },
  { year: '2022', measured: 54, baseline: 77 },
  { year: '2023', measured: 41, baseline: 73 },
  { year: '2024', measured: 32, baseline: 70 },
  { year: '2025', measured: 24, baseline: 66 },
  { year: '2026', measured: 19, baseline: 63 },
]

const W = 560, H = 280
const P = { t: 32, r: 20, b: 36, l: 46 }
const cW = W - P.l - P.r
const cH = H - P.t - P.b
const xp = (i: number) => P.l + (i / (CHART_DATA.length - 1)) * cW
const yp = (v: number) => P.t + cH - (v / 100) * cH

const measuredPath = CHART_DATA.map((d, i) => `${i === 0 ? 'M' : 'L'} ${xp(i).toFixed(1)} ${yp(d.measured).toFixed(1)}`).join(' ')
const baselinePath = CHART_DATA.map((d, i) => `${i === 0 ? 'M' : 'L'} ${xp(i).toFixed(1)} ${yp(d.baseline).toFixed(1)}`).join(' ')
const areaPath = [
  `M ${xp(0).toFixed(1)} ${(P.t + cH).toFixed(1)}`,
  ...CHART_DATA.map((d, i) => `L ${xp(i).toFixed(1)} ${yp(d.measured).toFixed(1)}`),
  `L ${xp(CHART_DATA.length - 1).toFixed(1)} ${(P.t + cH).toFixed(1)} Z`,
].join(' ')
const Y_TICKS = [0, 25, 50, 75, 100]

function LegendItem({ color, label, dashed }: { color: string; label: string; dashed?: boolean }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 5,
        fontSize: '0.62rem',
        color: 'rgba(255,251,247,0.38)',
        fontFamily: 'var(--font-mono-var), monospace',
      }}
    >
      <svg width="16" height="8" style={{ flexShrink: 0 }}>
        <line
          x1={0} y1={4} x2={16} y2={4}
          stroke={color}
          strokeWidth={dashed ? 1.5 : 2}
          strokeDasharray={dashed ? '4,3' : undefined}
        />
      </svg>
      {label}
    </div>
  )
}

function ClimateVisual() {
  const [hoverIdx, setHoverIdx] = useState<number | null>(null)

  const handleMouseMove = useCallback((e: React.MouseEvent<SVGSVGElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const relX = ((e.clientX - rect.left) / rect.width) * W - P.l
    const idx = Math.round((relX / cW) * (CHART_DATA.length - 1))
    setHoverIdx(Math.max(0, Math.min(CHART_DATA.length - 1, idx)))
  }, [])

  const d = hoverIdx !== null ? CHART_DATA[hoverIdx] : null

  return (
    <div style={visualWrap}>
      <LiveBadge />

      {/* Legend */}
      <div
        style={{
          position: 'absolute',
          top: 10,
          left: 12,
          display: 'flex',
          gap: 14,
          zIndex: 2,
        }}
      >
        <LegendItem color="#FF6363" label="Measured" />
        <LegendItem color="rgba(255,251,247,0.28)" label="Baseline" dashed />
      </div>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        style={{ width: '100%', height: '100%', cursor: 'crosshair', display: 'block' }}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setHoverIdx(null)}
      >
        <defs>
          <linearGradient id="climGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FF6363" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#FF6363" stopOpacity="0.02" />
          </linearGradient>
        </defs>

        {/* Y grid + labels */}
        {Y_TICKS.map(v => (
          <g key={v}>
            <line
              x1={P.l} y1={yp(v)} x2={P.l + cW} y2={yp(v)}
              stroke="rgba(255,251,247,0.05)" strokeWidth={1}
            />
            <text
              x={P.l - 7} y={yp(v)}
              textAnchor="end" dominantBaseline="middle"
              fill="rgba(255,251,247,0.2)" fontSize={9} fontFamily="monospace"
            >
              {v}
            </text>
          </g>
        ))}

        {/* X labels */}
        {CHART_DATA.map((pt, i) => (
          <text
            key={i}
            x={xp(i)} y={P.t + cH + 16}
            textAnchor="middle"
            fill="rgba(255,251,247,0.2)" fontSize={9} fontFamily="monospace"
          >
            {pt.year}
          </text>
        ))}

        {/* Area fill */}
        <motion.path
          d={areaPath}
          fill="url(#climGrad)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.8 }}
        />

        {/* Baseline dashed */}
        <motion.path
          d={baselinePath}
          fill="none"
          stroke="rgba(255,251,247,0.22)"
          strokeWidth={1.5}
          strokeDasharray="5,4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.4, ease: 'easeInOut' }}
        />

        {/* Measured line */}
        <motion.path
          d={measuredPath}
          fill="none"
          stroke="#FF6363"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.4, ease: 'easeInOut', delay: 0.2 }}
        />

        {/* Dots on measured */}
        {CHART_DATA.map((pt, i) => (
          <motion.circle
            key={i}
            cx={xp(i)} cy={yp(pt.measured)} r={hoverIdx === i ? 0 : 3}
            fill="#FF6363"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.75, scale: 1 }}
            transition={{ delay: 0.3 + i * 0.08, duration: 0.25 }}
          />
        ))}

        {/* Hover state */}
        {hoverIdx !== null && d && (
          <g>
            {/* Crosshair */}
            <line
              x1={xp(hoverIdx)} y1={P.t}
              x2={xp(hoverIdx)} y2={P.t + cH}
              stroke="rgba(255,251,247,0.14)" strokeWidth={1} strokeDasharray="3,3"
            />

            {/* Measured dot */}
            <circle
              cx={xp(hoverIdx)} cy={yp(d.measured)} r={5.5}
              fill="#FF6363"
              stroke="rgba(8,6,4,0.85)" strokeWidth={2}
            />

            {/* Baseline dot */}
            <circle
              cx={xp(hoverIdx)} cy={yp(d.baseline)} r={4}
              fill="rgba(255,251,247,0.35)"
              stroke="rgba(8,6,4,0.85)" strokeWidth={2}
            />

            {/* Tooltip */}
            {(() => {
              const tx = Math.min(xp(hoverIdx) + 12, W - 118)
              const ty = Math.max(P.t + 2, yp(d.measured) - 76)
              return (
                <g transform={`translate(${tx},${ty})`}>
                  <rect
                    x={0} y={0} width={112} height={66} rx={7}
                    fill="rgba(8,6,4,0.94)" stroke="rgba(255,99,99,0.22)" strokeWidth={1}
                  />
                  <text x={10} y={20} fill="rgba(255,251,247,0.42)" fontSize={9} fontFamily="monospace">
                    {d.year}
                  </text>
                  <text x={10} y={38} fill="#FF6363" fontSize={13} fontFamily="monospace" fontWeight="700">
                    {d.measured} MtCO₂
                  </text>
                  <text x={10} y={54} fill="rgba(255,251,247,0.32)" fontSize={9} fontFamily="monospace">
                    Base: {d.baseline} MtCO₂
                  </text>
                </g>
              )
            })()}
          </g>
        )}
      </svg>
    </div>
  )
}

// ─── Router ───────────────────────────────────────────────────────────────────

function TabVisual({ type }: { type: string }) {
  if (type === 'satellite') return <SatelliteVisual />
  if (type === 'cv') return <CVVisual />
  if (type === 'blockchain') return <BlockchainVisual />
  return <ClimateVisual />
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function FeatureTabs() {
  const [activeTab, setActiveTab] = useState('sat')

  return (
    <section style={{ paddingBlock: 96 }}>
      <style>{`@media (min-width: 860px) { .featuretabs-wrap { padding-block: 128px !important; } }`}</style>
      <div className="container featuretabs-wrap" style={{ paddingBlock: 96 }}>
        <motion.div
          variants={rev}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-8%' }}
          transition={trans}
          style={{ maxWidth: 600, marginBottom: 52 }}
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
            Inside The Engine
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
            Four systems. One ground truth.
          </h2>
        </motion.div>

        {/* Tab list */}
        <div
          role="tablist"
          aria-label="Platform capabilities"
          style={{
            display: 'flex',
            gap: 6,
            overflowX: 'auto',
            paddingBottom: 4,
            marginBottom: 36,
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
          }}
        >
          {tabs.map(tab => {
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                role="tab"
                id={`tabbtn-${tab.id}`}
                aria-selected={isActive}
                aria-controls={`tab-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  flexShrink: 0,
                  padding: '9px 18px',
                  borderRadius: 8,
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: isActive ? '#FFFBF7' : 'var(--text-3)',
                  background: isActive
                    ? 'linear-gradient(135deg, #FF4D00, #FF6363)'
                    : 'rgba(255,251,247,0.05)',
                  border: `1px solid ${isActive ? 'transparent' : 'var(--border)'}`,
                  boxShadow: isActive ? '0 4px 16px rgba(255,99,99,0.35)' : 'none',
                  whiteSpace: 'nowrap',
                  transition: 'color 150ms, background 150ms, border-color 150ms, box-shadow 150ms',
                  cursor: 'pointer',
                }}
              >
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Tab panels */}
        <div style={{ position: 'relative' }}>
          <AnimatePresence mode="wait">
            {tabs.map(tab =>
              activeTab === tab.id ? (
                <motion.div
                  key={tab.id}
                  id={`tab-${tab.id}`}
                  role="tabpanel"
                  aria-labelledby={`tabbtn-${tab.id}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                >
                  <style>{`@media (min-width: 860px) { .tab-inner { grid-template-columns: 1fr 1fr !important; align-items: center !important; gap: 56px !important; } }`}</style>
                  <div className="tab-inner" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 32 }}>
                    <TabVisual type={tab.visual} />
                    <div>
                      <h3
                        style={{
                          fontFamily: 'var(--font-display-var), sans-serif',
                          fontWeight: 700,
                          fontSize: 'clamp(1.35rem, 2vw, 1.7rem)',
                          letterSpacing: '-0.03em',
                          color: 'var(--text)',
                          marginBottom: 16,
                        }}
                      >
                        {tab.title}
                      </h3>
                      <p
                        style={{
                          fontSize: '1rem',
                          color: 'var(--text-2)',
                          lineHeight: 1.68,
                          maxWidth: '48ch',
                        }}
                      >
                        {tab.body}
                        {tab.highlight && (
                          <>
                            {' '}
                            <span style={{ color: '#FF6363', fontWeight: 500 }}>
                              {tab.highlight}
                            </span>
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ) : null
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
