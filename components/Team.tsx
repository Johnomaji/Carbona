'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

const rev = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}
const trans = { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }

const members = [
  {
    initials: 'CA',
    photo: '/team1.jpg',
    name: 'Chioma Asika',
    role: 'Founder & CEO',
    bio: 'Spent six years building satellite-monitoring systems for national agriculture programs before starting Carbona. Believes carbon markets fail on measurement, not intent.',
  },
  {
    initials: 'OA',
    photo: '/team2.jpg',
    name: 'Oluwaseun Adebayo',
    role: 'Co-Founder & CTO',
    bio: 'Led computer vision research at a remote-sensing lab before Carbona. Wrote the first version of the model that still verifies every parcel today.',
  },
  {
    initials: 'AS',
    photo: '/team3.jpg',
    name: 'Amina Suleiman',
    role: 'Chief Science Officer',
    bio: "Climate scientist with a decade in soil carbon measurement across West Africa. Makes sure every model agrees with what's actually in the ground.",
  },
  {
    initials: 'EN',
    photo: '/team4.jpg',
    name: 'Emeka Nwachukwu',
    role: 'Chief Operating Officer',
    bio: 'Ran carbon project development for agribusiness clients before joining Carbona. Knows exactly how long a manual verification cycle takes, because he used to run them.',
  },
  {
    initials: 'NE',
    photo: '/team5.jpg',
    name: 'Ngozi Eze',
    role: 'Head of Policy & Verification',
    bio: "Former registry auditor turned in-house skeptic. If a report can't survive her review, it doesn't ship.",
  },
]

function Avatar({ photo, name, initials }: { photo: string; name: string; initials: string }) {
  return (
    <div
      style={{
        width: 64,
        height: 64,
        borderRadius: '50%',
        overflow: 'hidden',
        position: 'relative',
        flexShrink: 0,
        background: 'linear-gradient(135deg, #FF4D00, #FF6363)',
        boxShadow: '0 0 0 2px rgba(255,99,99,0.25), 0 4px 16px rgba(255,99,99,0.2)',
      }}
    >
      <Image
        src={photo}
        alt={name}
        fill
        sizes="64px"
        style={{ objectFit: 'cover', objectPosition: 'top center' }}
        onError={(e) => {
          /* hide the broken image so the gradient fallback shows */
          ;(e.currentTarget as HTMLImageElement).style.display = 'none'
        }}
      />
      {/* Gradient fallback shown behind the image */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'var(--font-mono-var), monospace',
          fontSize: '0.82rem',
          fontWeight: 700,
          color: '#FFFBF7',
          zIndex: -1,
        }}
      >
        {initials}
      </div>
    </div>
  )
}

export default function Team() {
  return (
    <section style={{ paddingBlock: 96 }}>
      <style>{`
        @media (min-width: 860px) { .team-wrap { padding-block: 128px !important; } }
        @media (min-width: 700px) { .team-grid { grid-template-columns: repeat(3, 1fr) !important; } }
        @media (min-width: 960px) { .team-grid { grid-template-columns: repeat(5, 1fr) !important; } }
      `}</style>
      <div className="container team-wrap" style={{ paddingBlock: 96 }}>
        <motion.div
          variants={rev}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-8%' }}
          transition={trans}
          style={{ maxWidth: 600, marginBottom: 60 }}
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
            Leadership
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
            Built by people who&apos;ve done the manual version.
          </h2>
        </motion.div>

        <div className="team-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
          {members.map((m, i) => (
            <motion.div
              key={m.name}
              variants={rev}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-8%' }}
              transition={{ ...trans, delay: i * 0.06 }}
              style={{
                background: 'rgba(255,251,247,0.03)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
                padding: 24,
                transition: 'border-color 280ms, background 280ms',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,99,99,0.25)'
                ;(e.currentTarget as HTMLElement).style.background = 'rgba(255,99,99,0.04)'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'
                ;(e.currentTarget as HTMLElement).style.background = 'rgba(255,251,247,0.03)'
              }}
            >
              <Avatar photo={m.photo} name={m.name} initials={m.initials} />

              <h3
                style={{
                  fontFamily: 'var(--font-display-var), sans-serif',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  letterSpacing: '-0.02em',
                  color: 'var(--text)',
                  marginBottom: 4,
                  marginTop: 18,
                }}
              >
                {m.name}
              </h3>
              <span
                style={{
                  fontFamily: 'var(--font-mono-var), monospace',
                  fontSize: '0.68rem',
                  color: '#FF6363',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: 14,
                  display: 'block',
                }}
              >
                {m.role}
              </span>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-2)', lineHeight: 1.62 }}>{m.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
