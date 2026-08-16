'use client'
import Image from 'next/image'
import { useState } from 'react'
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
        width: '100%',
        height: 220,
        position: 'relative',
        background: 'linear-gradient(135deg, #FF4D00, #FF6363)',
        overflow: 'hidden',
        flexShrink: 0,
      }}
    >
      <Image
        src={photo}
        alt={name}
        fill
        sizes="(max-width: 700px) 50vw, (max-width: 960px) 33vw, 20vw"
        style={{ objectFit: 'cover', objectPosition: 'top center' }}
        onError={(e) => {
          ;(e.currentTarget as HTMLImageElement).style.display = 'none'
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'var(--font-mono-var), monospace',
          fontSize: '2rem',
          fontWeight: 700,
          color: 'rgba(255,251,247,0.6)',
          zIndex: -1,
          letterSpacing: '-0.02em',
        }}
      >
        {initials}
      </div>
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 64,
          background: 'linear-gradient(to top, rgba(24,22,20,0.7), transparent)',
          pointerEvents: 'none',
        }}
      />
    </div>
  )
}

const CARD_HEIGHT = 320

export default function Team() {
  const [flipped, setFlipped] = useState<number | null>(null)

  return (
    <section style={{ paddingBlock: 96 }}>
      <style>{`
        @media (min-width: 860px) { .team-wrap { padding-block: 128px !important; } }
        .team-grid {
          display: flex;
          flex-direction: row;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          gap: 12px;
          padding-bottom: 4px;
        }
        .team-grid::-webkit-scrollbar { display: none; }
        .team-grid > * {
          flex: 0 0 72vw;
          max-width: 280px;
          scroll-snap-align: start;
        }
        @media (min-width: 700px) {
          .team-grid {
            display: grid !important;
            grid-template-columns: repeat(3, 1fr) !important;
            overflow-x: visible !important;
          }
          .team-grid > * { flex: unset; max-width: unset; }
        }
        @media (min-width: 960px) {
          .team-grid { grid-template-columns: repeat(5, 1fr) !important; }
        }
        .team-card-inner {
          position: relative;
          width: 100%;
          height: ${CARD_HEIGHT}px;
          transform-style: preserve-3d;
          transition: transform 0.55s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .team-card-inner.is-flipped {
          transform: rotateY(180deg);
        }
        .team-face {
          position: absolute;
          inset: 0;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          overflow: hidden;
          border-radius: var(--radius-lg);
        }
        .team-face-back {
          transform: rotateY(180deg);
          background: rgba(24,14,8,0.97);
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 28px 22px;
        }
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

        <div className="team-grid" style={{ gap: 12 }}>
          {members.map((m, i) => {
            const isFlipped = flipped === i
            return (
              <motion.div
                key={m.name}
                variants={rev}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-8%' }}
                transition={{ ...trans, delay: i * 0.06 }}
                style={{
                  perspective: '1000px',
                  border: `1px solid ${isFlipped ? 'rgba(255,99,99,0.3)' : 'var(--border)'}`,
                  borderRadius: 'var(--radius-lg)',
                  transition: 'border-color 280ms',
                  cursor: 'pointer',
                  userSelect: 'none',
                }}
                onClick={() => setFlipped(isFlipped ? null : i)}
              >
                <div className={`team-card-inner${isFlipped ? ' is-flipped' : ''}`}>

                  {/* Front */}
                  <div className="team-face" style={{ background: 'rgba(255,251,247,0.03)' }}>
                    <Avatar photo={m.photo} name={m.name} initials={m.initials} />
                    <div style={{ padding: '18px 20px 20px' }}>
                      <h3
                        style={{
                          fontFamily: 'var(--font-display-var), sans-serif',
                          fontWeight: 700,
                          fontSize: '0.95rem',
                          letterSpacing: '-0.02em',
                          color: 'var(--text)',
                          marginBottom: 4,
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
                          display: 'block',
                          marginBottom: 14,
                        }}
                      >
                        {m.role}
                      </span>
                      {/* Tap hint */}
                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 5,
                          fontSize: '0.65rem',
                          color: 'rgba(255,251,247,0.3)',
                          fontFamily: 'var(--font-mono-var), monospace',
                        }}
                      >
                        <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.4">
                          <circle cx="6" cy="6" r="5" />
                          <line x1="6" y1="4" x2="6" y2="6.5" />
                          <circle cx="6" cy="8.5" r="0.6" fill="currentColor" stroke="none" />
                        </svg>
                        Click for bio
                      </div>
                    </div>
                  </div>

                  {/* Back */}
                  <div className="team-face team-face-back">
                    {/* Glow */}
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'radial-gradient(ellipse 80% 60% at 30% 30%, rgba(255,99,99,0.09) 0%, transparent 70%)',
                        pointerEvents: 'none',
                      }}
                    />
                    <span
                      style={{
                        fontFamily: 'var(--font-mono-var), monospace',
                        fontSize: '0.62rem',
                        color: '#FF6363',
                        textTransform: 'uppercase',
                        letterSpacing: '0.07em',
                        marginBottom: 10,
                        display: 'block',
                      }}
                    >
                      {m.role}
                    </span>
                    <p
                      style={{
                        fontSize: '0.875rem',
                        color: 'rgba(255,251,247,0.75)',
                        lineHeight: 1.72,
                        marginBottom: 20,
                      }}
                    >
                      {m.bio}
                    </p>
                    <div
                      style={{
                        fontFamily: 'var(--font-display-var), sans-serif',
                        fontWeight: 700,
                        fontSize: '0.88rem',
                        letterSpacing: '-0.02em',
                        color: 'rgba(255,251,247,0.4)',
                      }}
                    >
                      — {m.name}
                    </div>
                    {/* Close hint */}
                    <div
                      style={{
                        position: 'absolute',
                        bottom: 14,
                        right: 16,
                        fontSize: '0.6rem',
                        fontFamily: 'var(--font-mono-var), monospace',
                        color: 'rgba(255,251,247,0.2)',
                      }}
                    >
                      Click to close
                    </div>
                  </div>

                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
