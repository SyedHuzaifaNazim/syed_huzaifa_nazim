"use client";

import { useRef, useSyncExternalStore } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { HiCode } from 'react-icons/hi';
import { HiBriefcase, HiEnvelope, HiDocumentText } from 'react-icons/hi2';
import Image from 'next/image';

// Floating particle component
const Particle = ({ delay, duration, x, y, size }) => (
  <motion.div
    style={{
      position: 'absolute',
      left: `${x}%`,
      top: `${y}%`,
      width: size,
      height: size,
      borderRadius: '50%',
      background: 'radial-gradient(circle, var(--primary), transparent)',
      pointerEvents: 'none',
      opacity: 0.3,
    }}
    animate={{ y: [0, -40, 0], opacity: [0, 0.6, 0], scale: [0.6, 1.2, 0.6] }}
    transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
  />
);

// Orbiting ring component
const OrbitRing = ({ radius, duration, delay, color, dotSize = 6 }) => (
  <motion.div
    style={{
      position: 'absolute',
      width: radius * 2,
      height: radius * 2,
      borderRadius: '50%',
      border: `1px solid ${color}`,
      top: '50%',
      left: '50%',
      marginTop: -radius,
      marginLeft: -radius,
      pointerEvents: 'none',
    }}
    animate={{ rotate: 360 }}
    transition={{ duration, repeat: Infinity, ease: 'linear', delay }}
  >
    <div style={{
      position: 'absolute',
      width: dotSize,
      height: dotSize,
      borderRadius: '50%',
      background: 'var(--primary)',
      top: -dotSize / 2,
      left: '50%',
      marginLeft: -dotSize / 2,
      boxShadow: '0 0 10px var(--primary), 0 0 20px var(--secondary)',
    }} />
  </motion.div>
);

const particles = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  delay: Math.random() * 4,
  duration: 4 + Math.random() * 4,
  size: `${2 + Math.random() * 3}px`,
}));

const Hero = () => {
  const containerRef = useRef(null);

  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  // 3D tilt for image card
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-150, 150], [15, -15]), { stiffness: 200, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-150, 150], [-15, 15]), { stiffness: 200, damping: 30 });
  const glowX = useTransform(mouseX, [-150, 150], [0, 100]);
  const glowY = useTransform(mouseY, [-150, 150], [0, 100]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };
  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="min-h-screen flex items-center relative overflow-hidden px-6 pt-24 pb-12"
    >
      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 grid-overlay opacity-30 dark:opacity-100 pointer-events-none" />

      {/* Decorative Blob */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-3xl animate-aurora pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-fuchsia-500/10 dark:bg-fuchsia-500/5 rounded-full blur-3xl animate-aurora pointer-events-none delay-3000" />

      {/* Floating particles */}
      {mounted && particles.map(p => <Particle key={p.id} {...p} />)}

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">

        {/* ── LEFT: Content ── */}
        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          animate="visible" 
          className="lg:col-span-7 z-10 space-y-6"
        >
          {/* Status badge */}
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2.5 py-1.5 px-4 rounded-xl border border-white/20 dark:border-white/5 bg-white/45 dark:bg-slate-900/40 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[12px] font-semibold text-slate-700 dark:text-indigo-300 uppercase tracking-wider">
                Available for opportunities
              </span>
            </div>
          </motion.div>

          {/* Name */}
          <motion.div variants={itemVariants}>
            <h1 className="font-extrabold tracking-tight leading-none text-slate-900 dark:text-white" style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)' }}>
              <span className="block text-sm font-semibold tracking-[0.2em] uppercase text-indigo-600 dark:text-indigo-400 mb-3">
                Hello, I&apos;m
              </span>
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent block pb-2">
                Syed Huzaifa
              </span>
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-purple-400 dark:via-pink-400 dark:to-orange-400 bg-clip-text text-transparent block">
                Nazim
              </span>
            </h1>
          </motion.div>

          {/* Type animation */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400 text-sm md:text-base font-medium">
              <div className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/50">
                <HiCode className="text-indigo-600 dark:text-indigo-400 w-5 h-5" />
              </div>
              <span>Specializing in</span>
              <TypeAnimation
                sequence={['Full Stack Development', 2000, 'AI Engineering', 2000, 'ML Engineering', 2000, 'MERN Stack', 2000, 'Software Engineering', 2000]}
                wrapper="span"
                speed={50}
                className="text-slate-800 dark:text-slate-100 font-bold underline decoration-indigo-500 decoration-2 underline-offset-4"
                repeat={Infinity}
              />
            </div>
          </motion.div>

          {/* Description */}
          <motion.div variants={itemVariants}>
            <p className="text-slate-600 dark:text-slate-400 text-[15px] md:text-[16px] max-w-lg leading-relaxed">
              I build high-performance web applications and intelligent systems—combining tactile, user-focused UI with scalable backend architecture to create meaningful impact.
            </p>
          </motion.div>

          {/* Tech stack pills */}
          <motion.div variants={itemVariants}>
            <div className="flex flex-wrap gap-2 pt-2">
              {['React', 'Next.js', 'Node.js', 'Python', 'MongoDB', 'TensorFlow'].map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-3.5 py-1.5 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/5 bg-slate-100/50 dark:bg-white/5 cursor-default hover:border-indigo-500/40 dark:hover:border-indigo-400/40 transition-colors"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="pt-4">
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/35 border-none cursor-pointer text-sm tracking-wide"
              >
                Hire Me
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3.5 text-slate-700 dark:text-slate-200 font-semibold rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 cursor-pointer text-sm transition-all"
              >
                View Work
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3.5 text-slate-700 dark:text-slate-200 font-semibold rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 cursor-pointer text-sm transition-all"
              >
                Resume
              </motion.button>
            </div>
          </motion.div>

          {/* Stats row */}
          <motion.div variants={itemVariants} className="pt-6">
            <div className="grid grid-cols-3 gap-6 max-w-md pt-6 border-t border-slate-200 dark:border-white/5">
              {[
                { value: '2+', label: 'Years Exp' },
                { value: '15+', label: 'Projects' },
                { value: '100%', label: 'Satisfaction' }
              ].map(({ value, label }) => (
                <div key={label} className="space-y-1">
                  <div className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100">{value}</div>
                  <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* ── RIGHT: 3D Image Card ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative hidden lg:flex justify-center items-center"
          style={{ perspective: 1200 }}
        >
          <motion.div
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative p-6"
          >
            {/* Orbiting Rings */}
            <OrbitRing radius={170} duration={14} delay={0} color="var(--primary-glow)" dotSize={5} />
            <OrbitRing radius={210} duration={20} delay={-5} color="var(--secondary-glow)" dotSize={4} />

            {/* Glowing backdrop halo */}
            <motion.div
              style={{
                position: 'absolute', inset: '-30px', borderRadius: '50%',
                background: useTransform(
                  [glowX, glowY],
                  ([x, y]) => `radial-gradient(circle at ${x}% ${y}%, var(--primary-glow) 0%, transparent 65%)`
                ),
                pointerEvents: 'none', zIndex: 0,
              }}
            />

            {/* Photo Container */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-[300px] h-[300px] md:w-[320px] md:h-[320px] rounded-2xl overflow-hidden border border-white/25 dark:border-white/5 shadow-2xl z-10"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <Image 
                src="/assets/328.jpg" 
                alt="Syed Huzaifa Nazim" 
                fill 
                sizes="(max-width: 768px) 100vw, 320px" 
                priority 
                style={{ objectFit: 'cover', transform: 'scale(1.05)' }} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
            </motion.div>

            {/* Floating Badge 1 */}
            <motion.div
              animate={{ y: [0, -5, 0], rotate: [0, 1, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
              className="absolute top-10 -right-4 px-4 py-2.5 glass-panel rounded-xl z-20 shadow-lg border border-white/20 dark:border-white/5"
            >
              <div className="text-[10px] font-bold text-slate-500 dark:text-slate-400 tracking-wider uppercase">CURRENT STACK</div>
              <div className="text-xs font-bold text-slate-800 dark:text-slate-100 mt-0.5">MERN + AI/ML</div>
            </motion.div>

            {/* Floating Badge 2 */}
            <motion.div
              animate={{ y: [0, 5, 0], rotate: [0, -1, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
              className="absolute bottom-12 -left-6 px-4 py-2.5 glass-panel rounded-xl z-20 shadow-lg border border-white/20 dark:border-white/5 flex items-center gap-2"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <div>
                <div className="text-[10px] font-bold text-slate-500 dark:text-slate-400 tracking-wider uppercase">STATUS</div>
                <div className="text-xs font-bold text-slate-800 dark:text-slate-100 mt-0.5">Open to Work</div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer z-10"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 border border-slate-300 dark:border-slate-800 rounded-full flex justify-center pt-1.5">
          <motion.div
            animate={{ y: [0, 8, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 rounded-full bg-indigo-500 dark:bg-indigo-400"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;