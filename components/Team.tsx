'use client'
import { motion } from 'framer-motion'

const rev = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
}
const trans = { duration: 0.64, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }

const members = [
  {
    initials: 'CA',
    color: 'cyan',
    name: 'Chioma Asika',
    role: 'Founder & CEO',
    bio: 'Spent six years building satellite-monitoring systems for national agriculture programs before starting Carbona. Believes carbon markets fail on measurement, not intent.',
  },
  {
    initials: 'OA',
    color: 'emerald',
    name: 'Oluwaseun Adebayo',
    role: 'Co-Founder & CTO',
    bio: 'Led computer vision research at a remote-sensing lab before Carbona. Wrote the first version of the model that still verifies every parcel today.',
  },
  {
    initials: 'AS',
    color: 'cyan',
    name: 'Amina Suleiman',
    role: 'Chief Science Officer',
    bio: "Climate scientist with a decade in soil carbon measurement across West Africa. Makes sure every model agrees with what's actually in the ground.",
  },
  {
    initials: 'EN',
    color: 'emerald',
    name: 'Emeka Nwachukwu',
    role: 'Chief Operating Officer',
    bio: 'Ran carbon project development for agribusiness clients before joining Carbona. Knows exactly how long a manual verification cycle takes, because he used to run them.',
  },
  {
    initials: 'NE',
    color: 'cyan',
    name: 'Ngozi Eze',
    role: 'Head of Policy & Verification',
    bio: "Former registry auditor turned in-house skeptic. If a report can't survive her review, it doesn't ship.",
  },
]

export default function Team() {
  return (
    <section style={{ paddingBlock: 96 }}>
      <style>{`
        @media (min-width: 860px) { .team-section { padding-block: 140px !important; } }
        @media (min-width: 700px) { .team-grid { grid-template-columns: repeat(3, 1fr) !important; } }
        @media (min-width: 960px) { .team-grid { grid-template-columns: repeat(5, 1fr) !important; } }
      `}</style>
      <div className="container team-section" style={{ paddingBlock: 96 }}>
        <motion.div
          variants={rev}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-8%' }}
          transition={trans}
          style={{ maxWidth: 640, marginBottom: 56 }}
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
            Leadership
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
            Built by people who&apos;ve done the manual version.
          </h2>
        </motion.div>

        <div className="team-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
          {members.map((m, i) => (
            <motion.div
              key={m.name}
              variants={rev}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-8%' }}
              transition={{ ...trans, delay: i * 0.05 }}
              style={{
                background: 'var(--bg-elev)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
                padding: 24,
                transition: 'border-color 280ms',
              }}
              whileHover={{ borderColor: 'var(--border-strong)' } as Record<string, string>}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-mono-var), monospace',
                  fontSize: '0.8rem',
                  fontWeight: 500,
                  marginBottom: 18,
                  background: m.color === 'cyan' ? 'var(--cyan-solid)' : 'var(--emerald)',
                  color: m.color === 'cyan' ? 'var(--on-solid)' : '#f7f5ef',
                }}
              >
                {m.initials}
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-display-var), sans-serif',
                  fontWeight: 600,
                  fontSize: '0.96rem',
                  color: 'var(--text)',
                  marginBottom: 3,
                }}
              >
                {m.name}
              </h3>
              <span
                style={{
                  fontFamily: 'var(--font-mono-var), monospace',
                  fontSize: '0.68rem',
                  color: 'var(--cyan)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  marginBottom: 14,
                  display: 'block',
                }}
              >
                {m.role}
              </span>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-2)' }}>{m.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
