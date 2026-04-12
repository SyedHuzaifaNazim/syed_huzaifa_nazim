"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { HiCode, HiServer, HiWrenchScrewdriver, HiUserGroup } from 'react-icons/hi2';

const skillCategories = {
  frontend: {
    label: 'Frontend',
    icon: '⬡',
    color: '#6366f1',
    glow: 'rgba(99,102,241,0.3)',
    skills: [
      { name: 'JavaScript', level: 90, icon: 'JS' },
      { name: 'React', level: 85, icon: 'Re' },
      { name: 'Next.js', level: 78, icon: 'Nx' },
      { name: 'TypeScript', level: 80, icon: 'TS' },
      { name: 'HTML/CSS', level: 95, icon: 'HT' },
      { name: 'Tailwind CSS', level: 90, icon: 'Tw' },
    ],
  },
  backend: {
    label: 'Backend',
    icon: '⬡',
    color: '#a855f7',
    glow: 'rgba(168,85,247,0.3)',
    skills: [
      { name: 'Node.js', level: 80, icon: 'No' },
      { name: 'Express.js', level: 75, icon: 'Ex' },
      { name: 'Python', level: 70, icon: 'Py' },
      { name: 'MongoDB', level: 85, icon: 'Mg' },
      { name: 'MySQL', level: 80, icon: 'My' },
      { name: 'PostgreSQL', level: 75, icon: 'PG' },
    ],
  },
  tools: {
    label: 'Tools',
    icon: '⬡',
    color: '#f472b6',
    glow: 'rgba(244,114,182,0.3)',
    skills: [
      { name: 'Git', level: 90, icon: 'Gt' },
      { name: 'Docker', level: 70, icon: 'Dk' },
      { name: 'AWS', level: 65, icon: 'AW' },
      { name: 'Figma', level: 75, icon: 'Fi' },
      { name: 'Jest', level: 80, icon: 'Je' },
    ],
  },
  soft: {
    label: 'Soft Skills',
    icon: '⬡',
    color: '#10b981',
    glow: 'rgba(16,185,129,0.3)',
    skills: [
      { name: 'Problem Solving', level: 90, icon: 'PS' },
      { name: 'Collaboration', level: 85, icon: 'Co' },
      { name: 'Communication', level: 88, icon: 'Cm' },
    ],
  },
};

// Circular arc skill card
const SkillCard = ({ skill, color, glow, idx }) => {
  const [hovered, setHovered] = useState(false);
  const circumference = 2 * Math.PI * 28;
  const dash = (skill.level / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -12, scale: 0.92 }}
      transition={{ duration: 0.4, delay: idx * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        background: hovered ? 'rgba(15,23,42,0.9)' : 'rgba(15,23,42,0.6)',
        border: `1px solid ${hovered ? color + '40' : 'rgba(255,255,255,0.06)'}`,
        borderRadius: '20px',
        padding: '20px',
        backdropFilter: 'blur(12px)',
        boxShadow: hovered ? `0 8px 32px ${glow}, 0 0 0 1px ${color}20` : '0 4px 20px rgba(0,0,0,0.2)',
        transition: 'all 0.3s ease',
        cursor: 'default',
        overflow: 'hidden',
      }}
    >
      {/* Hover glow */}
      {hovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{
            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
            background: `radial-gradient(circle at top right, ${color}08, transparent 70%)`,
            pointerEvents: 'none',
          }}
        />
      )}

      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        {/* Circular progress */}
        <div style={{ position: 'relative', flexShrink: 0 }}>
          <svg width="64" height="64" viewBox="0 0 64 64" style={{ transform: 'rotate(-90deg)' }}>
            {/* Track */}
            <circle cx="32" cy="32" r="28" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="4" />
            {/* Progress */}
            <motion.circle
              cx="32" cy="32" r="28"
              fill="none"
              stroke={color}
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray={circumference}
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset: circumference - dash }}
              transition={{ duration: 1.2, delay: idx * 0.06 + 0.2, ease: 'easeOut' }}
              style={{ filter: `drop-shadow(0 0 4px ${color})` }}
            />
          </svg>
          {/* Icon in center */}
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '11px', fontWeight: 700,
            color: hovered ? color : '#64748b',
            fontFamily: 'monospace',
            transition: 'color 0.3s',
          }}>
            {skill.icon}
          </div>
        </div>

        {/* Info */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: '14px', fontWeight: 600, color: '#e2e8f0', marginBottom: '4px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {skill.name}
          </div>
          {/* Segmented bar */}
          <div style={{ display: 'flex', gap: '3px', marginBottom: '6px' }}>
            {Array.from({ length: 10 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: 1, scaleY: 1 }}
                transition={{ delay: idx * 0.06 + i * 0.04 + 0.3, duration: 0.3 }}
                style={{
                  flex: 1, height: '6px', borderRadius: '2px',
                  background: i < Math.round(skill.level / 10)
                    ? color
                    : 'rgba(255,255,255,0.05)',
                  boxShadow: i < Math.round(skill.level / 10) ? `0 0 4px ${color}60` : 'none',
                  transition: 'background 0.3s',
                }}
              />
            ))}
          </div>
          <div style={{ fontSize: '12px', color: '#475569' }}>
            Proficiency:{' '}
            <span style={{ color, fontWeight: 600 }}>{skill.level}%</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const [active, setActive] = useState('frontend');
  const cat = skillCategories[active];

  return (
    <section id="skills" className="py-20 relative">

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full mb-4"
          style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)' }}
        >
          <span style={{ color: '#818cf8', fontSize: '13px', fontWeight: 500, letterSpacing: '0.04em' }}>
            ⚡ Technical Arsenal
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-3"
          style={{
            background: 'linear-gradient(135deg, #e2e8f0 0%, #94a3b8 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}
        >
          Skills & Technologies
        </h2>
        <p style={{ color: '#475569', fontSize: '0.95rem' }}>
          Tools and technologies I use to bring ideas to life.
        </p>
      </motion.div>

      {/* Tab switcher — pill style */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '36px', position: 'relative' }}>
        {Object.entries(skillCategories).map(([key, val]) => (
          <motion.button
            key={key}
            onClick={() => setActive(key)}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            style={{
              position: 'relative',
              padding: '8px 20px',
              borderRadius: '999px',
              fontSize: '13px',
              fontWeight: 600,
              cursor: 'pointer',
              border: `1px solid ${active === key ? val.color + '50' : 'rgba(255,255,255,0.07)'}`,
              background: active === key ? `${val.color}15` : 'rgba(255,255,255,0.03)',
              color: active === key ? val.color : '#475569',
              boxShadow: active === key ? `0 0 20px ${val.color}20` : 'none',
              transition: 'all 0.25s ease',
              letterSpacing: '0.02em',
            }}
          >
            {active === key && (
              <motion.div
                layoutId="tab-glow"
                style={{
                  position: 'absolute', inset: 0,
                  borderRadius: '999px',
                  background: `${val.color}10`,
                  pointerEvents: 'none',
                }}
              />
            )}
            {val.label}
          </motion.button>
        ))}

        {/* Active category stats */}
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ fontSize: '12px', color: '#334155' }}>
            <span style={{ color: cat.color, fontWeight: 700, fontSize: '16px' }}>
              {cat.skills.length}
            </span>{' '}skills · avg{' '}
            <span style={{ color: cat.color, fontWeight: 700 }}>
              {Math.round(cat.skills.reduce((a, s) => a + s.level, 0) / cat.skills.length)}%
            </span>
          </div>
        </div>
      </div>

      {/* Skill cards grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '16px',
          }}
        >
          {cat.skills.map((skill, idx) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              color={cat.color}
              glow={cat.glow}
              idx={idx}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Bottom summary bar */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{
          marginTop: '48px',
          padding: '20px 28px',
          borderRadius: '16px',
          background: 'rgba(15,23,42,0.5)',
          border: '1px solid rgba(255,255,255,0.05)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '32px',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {[
          { label: 'Total Skills', value: Object.values(skillCategories).reduce((a, c) => a + c.skills.length, 0) + '+' },
          { label: 'Avg Proficiency', value: Math.round(Object.values(skillCategories).flatMap(c => c.skills).reduce((a, s) => a + s.level, 0) / Object.values(skillCategories).flatMap(c => c.skills).length) + '%' },
          { label: 'Years Learning', value: '3+' },
          { label: 'Projects Shipped', value: '15+' },
        ].map(({ label, value }) => (
          <div key={label} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.6rem', fontWeight: 700, color: '#e2e8f0', lineHeight: 1 }}>{value}</div>
            <div style={{ fontSize: '12px', color: '#334155', marginTop: '4px', letterSpacing: '0.04em' }}>{label}</div>
          </div>
        ))}

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {Object.entries(skillCategories).map(([key, val]) => (
            <div key={key} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: val.color, boxShadow: `0 0 6px ${val.color}` }} />
              <span style={{ fontSize: '12px', color: '#475569' }}>{val.label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;