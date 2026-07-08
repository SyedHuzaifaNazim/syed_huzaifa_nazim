"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { HiCommandLine } from 'react-icons/hi2';

const skillCategories = {
  frontend: {
    label: 'Frontend',
    icon: '⬡',
    color: 'var(--primary)',
    glow: 'var(--primary-glow)',
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
    color: 'var(--secondary)',
    glow: 'var(--secondary-glow)',
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
    color: 'var(--primary)',
    glow: 'var(--primary-glow)',
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
    color: 'var(--accent)',
    glow: 'var(--accent-glow)',
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
      initial={{ opacity: 0, y: 15, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.96 }}
      transition={{ duration: 0.4, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="glass-panel cyber-border rounded-2xl p-5 relative overflow-hidden cursor-default"
      style={{
        boxShadow: hovered ? `0 12px 32px ${glow}` : 'none',
      }}
    >
      {/* Hover background glow */}
      {hovered && (
        <div 
          className="absolute inset-0 pointer-events-none" 
          style={{ background: `radial-gradient(circle at top right, ${color}10, transparent 70%)` }}
        />
      )}

      <div className="flex items-center gap-4 relative z-10">
        {/* Circular progress */}
        <div className="relative flex-shrink-0">
          <svg width="60" height="60" viewBox="0 0 64 64" className="rotate-[-90deg]">
            {/* Track */}
            <circle cx="32" cy="32" r="28" fill="none" stroke="var(--card-border)" strokeWidth="4" />
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
              transition={{ duration: 1, delay: idx * 0.05 + 0.1, ease: 'easeOut' }}
              style={{ filter: `drop-shadow(0 0 3px ${color})` }}
            />
          </svg>
          {/* Icon/Letters in center */}
          <div 
            className="absolute inset-0 flex items-center justify-center text-[10px] font-bold font-mono transition-colors duration-300"
            style={{ color: hovered ? color : 'var(--text-muted)' }}
          >
            {skill.icon}
          </div>
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0 space-y-1.5">
          <div className="text-sm font-bold text-slate-800 dark:text-slate-100 truncate">
            {skill.name}
          </div>
          
          {/* Segmented bar */}
          <div className="flex gap-[3px]">
            {Array.from({ length: 10 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: 1, scaleY: 1 }}
                transition={{ delay: idx * 0.04 + i * 0.03 + 0.2, duration: 0.25 }}
                className="flex-1 h-1 rounded-sm transition-colors duration-300"
                style={{
                  background: i < Math.round(skill.level / 10) ? color : 'rgba(120,120,120,0.1)',
                  boxShadow: i < Math.round(skill.level / 10) && hovered ? `0 0 5px ${color}` : 'none',
                }}
              />
            ))}
          </div>
          
          <div className="text-[11px] text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider">
            Proficiency: <span style={{ color, fontWeight: 700 }}>{skill.level}%</span>
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
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 flex flex-col items-start gap-2.5"
      >
        <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-xl border border-white/20 dark:border-white/5 bg-white/45 dark:bg-slate-900/40 backdrop-blur-md">
          <HiCommandLine className="text-indigo-600 dark:text-indigo-400 w-4.5 h-4.5" />
          <span className="text-[12px] font-semibold text-slate-700 dark:text-indigo-300 uppercase tracking-wider">
           Technical Arsenal
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Skills & Technologies
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base">
          Tools and technologies I use to bring ideas to life.
        </p>
      </motion.div>

      {/* Tab switcher — glass pill style */}
      <div className="flex flex-wrap items-center gap-2 mb-10 relative">
        {Object.entries(skillCategories).map(([key, val]) => (
          <motion.button
            key={key}
            onClick={() => setActive(key)}
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            className={`p-2 px-5 rounded-xl text-xs font-bold tracking-wide cursor-pointer transition-all border relative ${
              active === key 
                ? 'border-indigo-500/25 text-indigo-600 dark:text-indigo-300' 
                : 'border-slate-200 dark:border-white/5 text-slate-500 hover:text-slate-700 dark:hover:text-slate-200 bg-slate-100/50 dark:bg-white/5'
            }`}
            style={{
              background: active === key ? `${val.color}15` : undefined,
              boxShadow: active === key ? `0 8px 20px ${val.glow}` : 'none',
            }}
          >
            {active === key && (
              <motion.div
                layoutId="tab-glow"
                className="absolute inset-0 rounded-xl"
                style={{ background: `${val.color}05`, pointerEvents: 'none' }}
              />
            )}
            {val.label}
          </motion.button>
        ))}

        {/* Active category stats */}
        <div className="ml-auto flex items-center gap-4 text-xs font-semibold text-slate-500 dark:text-slate-400">
          <div>
            <span style={{ color: cat.color }} className="text-base font-bold">
              {cat.skills.length}
            </span>{' '}skills · avg{' '}
            <span style={{ color: cat.color }} className="font-bold">
              {Math.round(cat.skills.reduce((a, s) => a + s.level, 0) / cat.skills.length)}%
            </span>
          </div>
        </div>
      </div>

      {/* Skill cards grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5"
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
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="glass-panel rounded-2xl p-6 md:p-8 mt-12 flex flex-wrap gap-8 items-center justify-between"
      >
        {[
          { label: 'Total Skills', value: Object.values(skillCategories).reduce((a, c) => a + c.skills.length, 0) + '+' },
          { label: 'Avg Proficiency', value: Math.round(Object.values(skillCategories).flatMap(c => c.skills).reduce((a, s) => a + s.level, 0) / Object.values(skillCategories).flatMap(c => c.skills).length) + '%' },
          { label: 'Years Learning', value: '3+' },
          { label: 'Projects Shipped', value: '15+' },
        ].map(({ label, value }) => (
          <div key={label} className="text-center md:text-left space-y-1">
            <div className="text-2xl font-bold text-slate-800 dark:text-slate-100 leading-none">{value}</div>
            <div className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{label}</div>
          </div>
        ))}

        <div className="flex flex-wrap gap-4 pt-4 md:pt-0">
          {Object.entries(skillCategories).map(([key, val]) => (
            <div key={key} className="flex items-center gap-2">
              <div 
                className="width-[8px] h-2 w-2 rounded-full" 
                style={{ background: val.color, boxShadow: `0 0 6px ${val.color}` }} 
              />
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">{val.label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;