"use client";

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { HiBriefcase, HiCalendar, HiChip, HiExternalLink } from 'react-icons/hi';

const experiences = [
  {
    role: 'Full Stack Developer',
    company: 'Tax Filerz & Co.',
    period: '2025 - Present',
    type: 'Full-time',
    status: 'current',
    description: 'Lead development team building enterprise applications. Implemented CI/CD pipelines and improved deployment processes, reducing deployment time by 40%.',
    achievements: ['Built scalable REST APIs serving 10k+ requests/day', 'Reduced load time by 60% through optimization', 'Mentored 2 junior developers'],
    tech: ['React', 'Node.js', 'MongoDB', 'AWS', 'Docker'],
    color: '#6366f1',
  },
  {
    role: 'Frontend Developer',
    company: 'Self-Employed',
    period: '2024 - 2025',
    type: 'Freelance',
    status: 'past',
    description: 'Developed responsive websites and web applications for various clients. Collaborated with designers to implement pixel-perfect UI/UX experiences.',
    achievements: ['Delivered 10+ client projects on time', 'Maintained 5-star client satisfaction', 'Specialized in MERN stack solutions'],
    tech: ['React', 'Next.js', 'JavaScript', 'CSS', 'Figma'],
    color: '#a855f7',
  },
];

const useTilt = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-60, 60], [6, -6]), { stiffness: 200, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-60, 60], [-6, 6]), { stiffness: 200, damping: 30 });
  const onMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };
  const onMouseLeave = () => { x.set(0); y.set(0); };
  return { rotateX, rotateY, onMouseMove, onMouseLeave };
};

const ExperienceCard = ({ exp, idx }) => {
  const tilt = useTilt();

  return (
    <motion.div
      initial={{ opacity: 0, x: -32 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative pl-10"
      style={{ perspective: 1000 }}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
    >
      {/* Timeline dot */}
      <div style={{ position: 'absolute', left: '-6px', top: '28px', zIndex: 2 }}>
        <motion.div
          animate={exp.status === 'current' ? { scale: [1, 1.3, 1], opacity: [1, 0.6, 1] } : {}}
          transition={{ duration: 2, repeat: Infinity }}
          style={{
            width: '12px', height: '12px', borderRadius: '50%',
            background: exp.color,
            boxShadow: `0 0 0 3px rgba(15,23,42,1), 0 0 12px ${exp.color}`,
          }}
        />
      </div>

      <motion.div
        style={{
          rotateX: tilt.rotateX,
          rotateY: tilt.rotateY,
          transformStyle: 'preserve-3d',
          background: 'rgba(15,23,42,0.7)',
          border: `1px solid rgba(99,102,241,0.12)`,
          borderRadius: '20px',
          padding: '28px',
          backdropFilter: 'blur(12px)',
          boxShadow: '0 16px 48px rgba(0,0,0,0.3)',
          position: 'relative',
          overflow: 'hidden',
          cursor: 'default',
        }}
      >
        {/* Top accent line */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
          background: `linear-gradient(90deg, transparent, ${exp.color}, transparent)`,
        }} />

        {/* Background glow */}
        <div style={{
          position: 'absolute', top: '-40px', right: '-40px',
          width: '160px', height: '160px',
          background: `radial-gradient(circle, ${exp.color}12 0%, transparent 70%)`,
          pointerEvents: 'none',
        }} />

        {/* Header row */}
        <div className="flex flex-wrap justify-between items-start gap-4 mb-5">
          <div className="flex items-start gap-4">
            {/* Company icon */}
            <div style={{
              width: '44px', height: '44px', flexShrink: 0,
              borderRadius: '12px',
              background: `${exp.color}15`,
              border: `1px solid ${exp.color}30`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <HiBriefcase style={{ color: exp.color, fontSize: '20px' }} />
            </div>

            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#e2e8f0', lineHeight: 1.2, marginBottom: '4px' }}>
                {exp.role}
              </h3>
              <p style={{ fontSize: '14px', color: '#64748b', fontWeight: 500 }}>{exp.company}</p>
            </div>
          </div>

          {/* Badges */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              padding: '4px 10px', borderRadius: '999px',
              background: 'rgba(99,102,241,0.08)',
              border: '1px solid rgba(99,102,241,0.15)',
            }}>
              <HiCalendar style={{ color: '#818cf8', fontSize: '12px' }} />
              <span style={{ fontSize: '12px', color: '#818cf8', fontWeight: 500, fontFamily: 'monospace' }}>
                {exp.period}
              </span>
            </div>
            <div style={{
              display: 'flex', alignItems: 'center', gap: '5px',
              padding: '3px 10px', borderRadius: '999px',
              background: exp.status === 'current' ? 'rgba(16,185,129,0.08)' : 'rgba(255,255,255,0.04)',
              border: `1px solid ${exp.status === 'current' ? 'rgba(16,185,129,0.2)' : 'rgba(255,255,255,0.08)'}`,
            }}>
              {exp.status === 'current' && (
                <motion.div
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981' }}
                />
              )}
              <span style={{
                fontSize: '11px', fontWeight: 500, letterSpacing: '0.04em',
                color: exp.status === 'current' ? '#10b981' : '#475569',
              }}>
                {exp.type}
              </span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p style={{ color: '#94a3b8', lineHeight: 1.75, fontSize: '0.9rem', marginBottom: '18px' }}>
          {exp.description}
        </p>

        {/* Achievements */}
        <div style={{ marginBottom: '20px' }}>
          {exp.achievements.map((a, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '6px' }}>
              <div style={{
                width: '5px', height: '5px', borderRadius: '50%',
                background: exp.color, flexShrink: 0, marginTop: '7px',
                boxShadow: `0 0 6px ${exp.color}`,
              }} />
              <span style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.6 }}>{a}</span>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)', marginBottom: '18px' }} />

        {/* Tech stack */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px' }}>
            <HiChip style={{ color: '#475569', fontSize: '13px' }} />
            <span style={{ fontSize: '11px', color: '#475569', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Tech Stack
            </span>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {exp.tech.map((t) => (
              <motion.span
                key={t}
                whileHover={{ scale: 1.08, borderColor: `${exp.color}60` }}
                style={{
                  fontSize: '12px', fontWeight: 500,
                  padding: '4px 12px', borderRadius: '999px',
                  background: `${exp.color}08`,
                  border: `1px solid ${exp.color}20`,
                  color: '#94a3b8',
                  cursor: 'default',
                  transition: 'all 0.2s',
                }}
              >
                {t}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative">

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full mb-4"
          style={{
            background: 'rgba(99,102,241,0.08)',
            border: '1px solid rgba(99,102,241,0.2)',
          }}
        >
          <HiBriefcase style={{ color: '#818cf8', fontSize: '14px' }} />
          <span style={{ color: '#818cf8', fontSize: '13px', fontWeight: 500, letterSpacing: '0.04em' }}>
            Work History
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight"
          style={{
            background: 'linear-gradient(135deg, #e2e8f0 0%, #94a3b8 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Work Experience
        </h2>
        <p style={{ color: '#475569', marginTop: '12px', fontSize: '0.95rem' }}>
          A track record of building and delivering real-world products.
        </p>
      </motion.div>

      {/* Timeline */}
      <div
        style={{
          position: 'relative',
          borderLeft: '1px solid rgba(99,102,241,0.12)',
          marginLeft: '6px',
          display: 'flex',
          flexDirection: 'column',
          gap: '28px',
          paddingBottom: '8px',
        }}
      >
        {/* Animated top glow on timeline line */}
        <motion.div
          animate={{ top: ['0%', '100%', '0%'] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            left: '-1px',
            width: '1px',
            height: '60px',
            background: 'linear-gradient(180deg, transparent, #6366f1, transparent)',
            pointerEvents: 'none',
          }}
        />

        {experiences.map((exp, idx) => (
          <ExperienceCard key={idx} exp={exp} idx={idx} />
        ))}
      </div>
    </section>
  );
};

export default Experience;