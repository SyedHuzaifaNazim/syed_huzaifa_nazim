"use client";

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { HiBriefcase, HiCalendar, HiCpuChip } from 'react-icons/hi2';

const experiences = [
    {
    role: 'AI Engineer Intern - Bootcamp 6.0',
    company: 'Saylani Mass IT Training',
    period: '2026 - Present',
    type: 'Full-time',
    status: 'current',
    description: 'Developed and deployed AI-driven solutions for various business applications. Implemented machine learning models to enhance data analysis and decision-making processes.',
    achievements: ['Developed a predictive analytics model that improved sales forecasting accuracy by 25%', 'Implemented a natural language processing system for customer support, reducing response time by 30%', 'Collaborated with cross-functional teams to integrate AI solutions into existing workflows'],
    tech: ['Python', 'TensorFlow', 'PyTorch', 'scikit-learn', 'AWS', 'Docker'],
    color: 'var(--accent)',
  },
  {
    role: 'Full Stack Developer',
    company: 'Tax Filerz & Co.',
    period: '2025 - 2026',
    type: 'Full-time',
    status: 'past',
    description: 'Lead development team building enterprise applications. Implemented CI/CD pipelines and improved deployment processes, reducing deployment time by 40%.',
    achievements: ['Built scalable REST APIs serving 10k+ requests/day', 'Reduced load time by 60% through optimization', 'Mentored 2 junior developers'],
    tech: ['React', 'Node.js', 'MongoDB', 'AWS', 'Docker'],
    color: 'var(--secondary)',
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
    color: 'var(--secondary)',
  },
];

const useTilt = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-60, 60], [5, -5]), { stiffness: 200, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-60, 60], [-5, 5]), { stiffness: 200, damping: 30 });
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
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative pl-10"
      style={{ perspective: 1000 }}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
    >
      {/* Timeline dot */}
      <div className="absolute left-[-6px] top-7 z-25">
        <motion.div
          animate={exp.status === 'current' ? { scale: [1, 1.25, 1], opacity: [1, 0.6, 1] } : {}}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-3 h-3 rounded-full"
          style={{
            background: exp.color,
            boxShadow: `0 0 0 3px var(--bg-color), 0 0 12px ${exp.color}`,
          }}
        />
      </div>

      <motion.div
        style={{
          rotateX: tilt.rotateX,
          rotateY: tilt.rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="glass-panel cyber-border rounded-2xl p-6 md:p-8 cursor-default"
      >
        {/* Background glow overlay */}
        <div 
          className="absolute -top-10 -right-10 w-40 h-40 pointer-events-none rounded-full"
          style={{ background: `radial-gradient(circle, ${exp.color}12 0%, transparent 70%)` }}
        />

        {/* Header row */}
        <div className="flex flex-wrap justify-between items-start gap-4 mb-5">
          <div className="flex items-start gap-4">
            {/* Company icon */}
            <div 
              className="w-11 h-11 flex-shrink-0 rounded-xl flex items-center justify-center border"
              style={{
                background: `${exp.color}15`,
                borderColor: `${exp.color}30`,
              }}
            >
              <HiBriefcase className="w-5 h-5" style={{ color: exp.color }} />
            </div>

            <div className="space-y-1">
              <h3 className="text-base md:text-lg font-bold text-slate-800 dark:text-slate-100 leading-tight">
                {exp.role}
              </h3>
              <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 font-semibold">{exp.company}</p>
            </div>
          </div>

          {/* Badges */}
          <div className="flex flex-col items-end gap-2">
            <div className="flex items-center gap-1.5 py-1 px-3 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
              <HiCalendar className="text-indigo-600 dark:text-indigo-400 w-3.5 h-3.5" />
              <span className="text-[11px] text-indigo-600 dark:text-indigo-300 font-semibold font-mono tracking-wide">
                {exp.period}
              </span>
            </div>
            <div 
              className={`flex items-center gap-1.5 py-0.5 px-3 rounded-lg border text-[10px] font-bold uppercase tracking-wider ${
                exp.status === 'current' 
                  ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400' 
                  : 'bg-slate-100 dark:bg-white/5 border-slate-200 dark:border-white/5 text-slate-500 dark:text-slate-400'
              }`}
            >
              {exp.status === 'current' && (
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              )}
              {exp.type}
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm mb-4">
          {exp.description}
        </p>

        {/* Achievements */}
        <div className="space-y-2 mb-6">
          {exp.achievements.map((a, i) => (
            <div key={i} className="flex items-start gap-2.5">
              <div 
                className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2" 
                style={{ background: exp.color, boxShadow: `0 0 5px ${exp.color}` }} 
              />
              <span className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{a}</span>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-slate-200 dark:bg-white/5 mb-5" />

        {/* Tech stack */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
            <HiCpuChip className="w-4.5 h-4.5 text-slate-500 dark:text-slate-400" />
            <span>Tech Stack</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {exp.tech.map((t) => (
              <motion.span
                key={t}
                whileHover={{ scale: 1.05, borderColor: `${exp.color}60` }}
                className="text-xs font-semibold px-3 py-1 rounded-lg border text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-all cursor-default"
                style={{
                  background: `${exp.color}08`,
                  borderColor: `${exp.color}20`,
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
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 flex flex-col items-start gap-2.5"
      >
        <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-xl border border-white/20 dark:border-white/5 bg-white/45 dark:bg-slate-900/40 backdrop-blur-md">
          <HiBriefcase className="text-indigo-600 dark:text-indigo-400 w-4.5 h-4.5" />
          <span className="text-[12px] font-semibold text-slate-700 dark:text-indigo-300 uppercase tracking-wider">
            Work History
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Work Experience
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base">
          A track record of building and delivering real-world products.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative border-l border-slate-200 dark:border-white/5 ml-1.5 flex flex-col gap-8 pb-4">
        {/* Animated timeline connector line */}
        <motion.div
          animate={{ top: ['0%', '100%', '0%'] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-[-1px] w-[1px] h-16 pointer-events-none"
          style={{
            background: 'linear-gradient(180deg, transparent, var(--primary), transparent)',
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