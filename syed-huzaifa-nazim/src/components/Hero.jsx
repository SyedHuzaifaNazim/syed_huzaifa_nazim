"use client";

import { useRef, useSyncExternalStore } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { HiCode } from 'react-icons/hi';
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
      background: `radial-gradient(circle, rgba(99,102,241,0.6), transparent)`,
      pointerEvents: 'none',
    }}
    animate={{ y: [0, -30, 0], opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
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
      background: color,
      top: -dotSize / 2,
      left: '50%',
      marginLeft: -dotSize / 2,
      boxShadow: `0 0 10px ${color}, 0 0 20px ${color}`,
    }} />
  </motion.div>
);

// Glowing grid background
const GridBackground = () => (
  <div style={{
    position: 'absolute',
    inset: 0,
    backgroundImage: `
      linear-gradient(rgba(99,102,241,0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(99,102,241,0.03) 1px, transparent 1px)
    `,
    backgroundSize: '60px 60px',
    maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)',
    pointerEvents: 'none',
  }} />
);

const particles = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  delay: Math.random() * 4,
  duration: 3 + Math.random() * 4,
  size: `${2 + Math.random() * 4}px`,
}));

const Hero = () => {
  const containerRef = useRef(null);

  // ✅ SSR-safe — no useState/useEffect, no ESLint warning
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  // 3D tilt for image card
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-150, 150], [18, -18]), { stiffness: 200, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-150, 150], [-18, 18]), { stiffness: 200, damping: 30 });
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
    visible: { transition: { staggerChildren: 0.12 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="min-h-screen flex items-center relative overflow-hidden px-6 pt-20"
    >
      <GridBackground />

      {/* Ambient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute', top: '-20%', left: '-10%',
            width: '60vw', height: '60vw',
            background: 'radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 65%)',
            borderRadius: '50%',
          }}
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          style={{
            position: 'absolute', bottom: '-20%', right: '-10%',
            width: '50vw', height: '50vw',
            background: 'radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 65%)',
            borderRadius: '50%',
          }}
        />
      </div>

      {/* Floating particles — client only */}
      {mounted && particles.map(p => <Particle key={p.id} {...p} />)}

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* ── LEFT: Content ── */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="z-10">

          {/* Status badge */}
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full mb-8"
              style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.25)', backdropFilter: 'blur(8px)' }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span style={{ color: '#a5b4fc', fontSize: '13px', fontWeight: 500, letterSpacing: '0.04em' }}>
                Available for opportunities
              </span>
            </div>
          </motion.div>

          {/* Name */}
          <motion.div variants={itemVariants}>
            <h1 className="font-bold tracking-tight mb-4 leading-none" style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}>
              <span style={{ display: 'block', marginBottom: '4px', fontSize: '0.45em', fontWeight: 400, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#64748b' }}>
                Hello, I&apos;m
              </span>
              <span style={{ background: 'linear-gradient(135deg, #60a5fa 0%, #818cf8 40%, #c084fc 80%, #f472b6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', display: 'block', lineHeight: 1.1 }}>
                Syed Huzaifa
              </span>
              <span style={{ background: 'linear-gradient(135deg, #818cf8 0%, #c084fc 60%, #f472b6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', display: 'block', lineHeight: 1.1 }}>
                Nazim
              </span>
            </h1>
          </motion.div>

          {/* Type animation */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-6" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)' }}>
              <div style={{ padding: '6px 8px', borderRadius: '8px', background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)' }}>
                <HiCode style={{ color: '#818cf8', fontSize: '18px' }} />
              </div>
              <span style={{ color: '#64748b' }}>Specialized in</span>
              <TypeAnimation
                sequence={['Full Stack Development', 2000, 'AI Engineering', 2000, 'ML Engineering', 2000, 'MERN Stack', 2000, 'Software Engineering', 2000]}
                wrapper="span"
                speed={55}
                style={{ color: '#e2e8f0', fontWeight: 600 }}
                repeat={Infinity}
              />
            </div>
          </motion.div>

          {/* Description */}
          <motion.div variants={itemVariants}>
            <p style={{ color: '#64748b', fontSize: '1.05rem', maxWidth: '480px', lineHeight: 1.8, marginBottom: '40px' }}>
              I craft high-performance web applications and intelligent systems — blending elegant UI with powerful backend architecture to deliver real-world impact.
            </p>
          </motion.div>

          {/* Tech stack pills */}
          <motion.div variants={itemVariants}>
            <div className="flex flex-wrap gap-2 mb-10">
              {['React', 'Next.js', 'Node.js', 'Python', 'MongoDB', 'TensorFlow'].map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.08, borderColor: 'rgba(99,102,241,0.5)' }}
                  style={{ padding: '4px 12px', borderRadius: '999px', fontSize: '12px', fontWeight: 500, color: '#94a3b8', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', cursor: 'default', letterSpacing: '0.03em' }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants}>
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(99,102,241,0.4)' }}
                whileTap={{ scale: 0.96 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                style={{ padding: '14px 32px', background: 'linear-gradient(135deg, #4f46e5, #7c3aed)', color: '#fff', fontWeight: 700, borderRadius: '14px', border: 'none', cursor: 'pointer', fontSize: '15px', boxShadow: '0 4px 24px rgba(99,102,241,0.3), inset 0 1px 0 rgba(255,255,255,0.1)', letterSpacing: '0.02em' }}
              >
                Hire Me
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.04, background: 'rgba(255,255,255,0.08)' }}
                whileTap={{ scale: 0.96 }}
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                style={{ padding: '14px 32px', background: 'rgba(255,255,255,0.04)', color: '#e2e8f0', fontWeight: 500, borderRadius: '14px', border: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer', fontSize: '15px', backdropFilter: 'blur(8px)' }}
              >
                View Work
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.04, background: 'rgba(255,255,255,0.08)' }}
                whileTap={{ scale: 0.96 }}
                onClick={() => document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' })}
                style={{ padding: '14px 32px', background: 'rgba(255,255,255,0.04)', color: '#e2e8f0', fontWeight: 500, borderRadius: '14px', border: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer', fontSize: '15px', backdropFilter: 'blur(8px)' }}
              >
                Resume
              </motion.button>
            </div>
          </motion.div>

          {/* Stats row */}
          <motion.div variants={itemVariants}>
            <div className="flex gap-8 mt-12 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
              {[{ value: '2+', label: 'Years Experience' }, { value: '15+', label: 'Projects Built' }, { value: '100%', label: 'Client Satisfaction' }].map(({ value, label }) => (
                <div key={label}>
                  <div style={{ fontSize: '1.6rem', fontWeight: 700, color: '#e2e8f0', lineHeight: 1 }}>{value}</div>
                  <div style={{ fontSize: '12px', color: '#475569', marginTop: '4px', letterSpacing: '0.04em' }}>{label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* ── RIGHT: 3D Image Card ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative hidden lg:flex justify-center items-center"
          style={{ perspective: 1200 }}
        >
          <motion.div
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative"
          >
            <OrbitRing radius={220} duration={12} delay={0} color="rgba(99,102,241,0.2)" dotSize={6} />
            <OrbitRing radius={270} duration={18} delay={-6} color="rgba(168,85,247,0.15)" dotSize={5} />
            <OrbitRing radius={180} duration={8} delay={-3} color="rgba(244,114,182,0.15)" dotSize={4} />

            {/* Mouse-following glow */}
            <motion.div
              style={{
                position: 'absolute', inset: '-40px', borderRadius: '50%',
                background: useTransform(
                  [glowX, glowY],
                  ([x, y]) => `radial-gradient(circle at ${x}% ${y}%, rgba(99,102,241,0.3) 0%, transparent 60%)`
                ),
                pointerEvents: 'none', zIndex: 0,
              }}
            />

            {/* Main image */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              style={{ position: 'relative', width: '360px', height: '360px', borderRadius: '50%', overflow: 'hidden', border: '3px solid rgba(99,102,241,0.3)', boxShadow: '0 0 0 1px rgba(99,102,241,0.1), 0 20px 60px rgba(0,0,0,0.5), 0 0 80px rgba(99,102,241,0.15), inset 0 0 40px rgba(99,102,241,0.05)', zIndex: 1 }}
            >
              <Image src="/assets/328.jpg" alt="Syed Huzaifa Nazim" fill sizes="360px" priority style={{ objectFit: 'cover', scale: '1.08' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, rgba(99,102,241,0.08) 0%, transparent 50%, rgba(0,0,0,0.3) 100%)' }} />
            </motion.div>

            {/* Floating badge — top right */}
            <motion.div
              animate={{ y: [0, -6, 0], rotate: [0, 2, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              style={{ position: 'absolute', top: '10px', right: '-20px', padding: '10px 16px', background: 'rgba(15,23,42,0.9)', border: '1px solid rgba(99,102,241,0.3)', borderRadius: '14px', backdropFilter: 'blur(12px)', boxShadow: '0 8px 32px rgba(0,0,0,0.4)', zIndex: 2, whiteSpace: 'nowrap' }}
            >
              <div style={{ fontSize: '11px', color: '#64748b', marginBottom: '2px', letterSpacing: '0.06em' }}>CURRENT STACK</div>
              <div style={{ fontSize: '13px', color: '#e2e8f0', fontWeight: 600 }}>MERN + AI/ML</div>
            </motion.div>

            {/* Floating badge — bottom left */}
            <motion.div
              animate={{ y: [0, 6, 0], rotate: [0, -2, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              style={{ position: 'absolute', bottom: '20px', left: '-30px', padding: '10px 16px', background: 'rgba(15,23,42,0.9)', border: '1px solid rgba(168,85,247,0.3)', borderRadius: '14px', backdropFilter: 'blur(12px)', boxShadow: '0 8px 32px rgba(0,0,0,0.4)', zIndex: 2, display: 'flex', alignItems: 'center', gap: '8px', whiteSpace: 'nowrap' }}
            >
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#10b981', boxShadow: '0 0 8px #10b981' }} />
              <div>
                <div style={{ fontSize: '11px', color: '#64748b', letterSpacing: '0.06em' }}>STATUS</div>
                <div style={{ fontSize: '13px', color: '#e2e8f0', fontWeight: 600 }}>Open to Work</div>
              </div>
            </motion.div>

            {/* Floating badge — bottom right */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              style={{ position: 'absolute', bottom: '-10px', right: '-10px', padding: '10px 14px', background: 'rgba(15,23,42,0.9)', border: '1px solid rgba(244,114,182,0.3)', borderRadius: '14px', backdropFilter: 'blur(12px)', boxShadow: '0 8px 32px rgba(0,0,0,0.4)', zIndex: 2, textAlign: 'center', whiteSpace: 'nowrap' }}
            >
              <div style={{ fontSize: '20px', fontWeight: 700, color: '#e2e8f0', lineHeight: 1 }}>15+</div>
              <div style={{ fontSize: '11px', color: '#64748b', letterSpacing: '0.04em' }}>Projects</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}
      >
        <span style={{ fontSize: '11px', color: '#334155', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Scroll</span>
        <div style={{ width: '24px', height: '40px', border: '1.5px solid rgba(99,102,241,0.3)', borderRadius: '12px', display: 'flex', justifyContent: 'center', paddingTop: '6px' }}>
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{ width: '4px', height: '8px', borderRadius: '2px', background: 'rgba(99,102,241,0.6)' }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;