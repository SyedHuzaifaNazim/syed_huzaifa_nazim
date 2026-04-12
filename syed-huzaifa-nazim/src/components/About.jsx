"use client";

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { HiSparkles, HiLocationMarker, HiMail, HiAcademicCap, HiCode } from 'react-icons/hi';
import Image from 'next/image';
import image from '../../public/assets/WhatsApp Image 2024-09-08 at 01.06.06_421cc77c.jpg';

// 3D tilt hook
const useTilt = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-80, 80], [8, -8]), { stiffness: 200, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-80, 80], [-8, 8]), { stiffness: 200, damping: 30 });
  const onMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };
  const onMouseLeave = () => { x.set(0); y.set(0); };
  return { rotateX, rotateY, onMouseMove, onMouseLeave };
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }
  }),
};

const About = () => {
  const bioTilt = useTilt();
  const infoTilt = useTilt();

  return (
    <section id="about" className="py-20 relative">

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 flex flex-col items-start gap-2"
      >
        <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full"
          style={{
            background: 'rgba(99,102,241,0.08)',
            border: '1px solid rgba(99,102,241,0.2)',
          }}
        >
          <HiSparkles style={{ color: '#818cf8', fontSize: '14px' }} />
          <span style={{ color: '#818cf8', fontSize: '13px', fontWeight: 500, letterSpacing: '0.04em' }}>
            About Me
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight"
          style={{
            background: 'linear-gradient(135deg, #e2e8f0 0%, #94a3b8 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          The person behind the code
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* ── Main Bio Card ── */}
        <motion.div
          custom={0}
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="md:col-span-2"
          style={{ perspective: 1000 }}
          onMouseMove={bioTilt.onMouseMove}
          onMouseLeave={bioTilt.onMouseLeave}
        >
          <motion.div
            style={{
              rotateX: bioTilt.rotateX,
              rotateY: bioTilt.rotateY,
              transformStyle: 'preserve-3d',
              background: 'rgba(15,23,42,0.6)',
              border: '1px solid rgba(99,102,241,0.15)',
              borderRadius: '24px',
              padding: '32px',
              backdropFilter: 'blur(12px)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Card inner glow */}
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.4), transparent)',
            }} />
            <div style={{
              position: 'absolute', top: '-80px', right: '-40px',
              width: '200px', height: '200px',
              background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />

            <div className="flex flex-col md:flex-row gap-6 items-start">
              {/* Profile image with ring */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                style={{ position: 'relative', flexShrink: 0 }}
              >
                <div style={{
                  position: 'absolute', inset: '-4px',
                  borderRadius: '20px',
                  background: 'linear-gradient(135deg, rgba(99,102,241,0.6), rgba(168,85,247,0.4), rgba(244,114,182,0.3))',
                  zIndex: 0,
                }} />
                <div style={{
                  width: '96px', height: '96px',
                  borderRadius: '18px',
                  overflow: 'hidden',
                  position: 'relative',
                  zIndex: 1,
                  border: '2px solid rgba(15,23,42,0.8)',
                }}>
                  <Image
                    src={image}
                    alt="Syed Huzaifa Nazim"
                    width={96}
                    height={96}
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                </div>
                {/* Online indicator */}
                <div style={{
                  position: 'absolute', bottom: '2px', right: '2px',
                  width: '14px', height: '14px',
                  borderRadius: '50%',
                  background: '#10b981',
                  border: '2px solid #0f172a',
                  zIndex: 2,
                  boxShadow: '0 0 8px #10b981',
                }} />
              </motion.div>

              <div style={{ flex: 1 }}>
                {/* Name & title */}
                <div className="mb-4">
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#e2e8f0', marginBottom: '4px' }}>
                    Syed Huzaifa Nazim
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {['Full Stack Dev', 'AI/ML Engineer', 'MERN Stack'].map((tag) => (
                      <span key={tag} style={{
                        fontSize: '11px', fontWeight: 500,
                        padding: '2px 10px', borderRadius: '999px',
                        background: 'rgba(99,102,241,0.1)',
                        border: '1px solid rgba(99,102,241,0.2)',
                        color: '#818cf8',
                        letterSpacing: '0.04em',
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <p style={{ color: '#94a3b8', lineHeight: 1.8, marginBottom: '14px', fontSize: '0.95rem' }}>
                  I&apos;m a passionate{' '}
                  <span style={{ color: '#818cf8', fontWeight: 600 }}>Web Developer</span>{' '}
                  currently pursuing a Bachelor&apos;s degree in{' '}
                  <span style={{ color: '#818cf8', fontWeight: 600 }}>Artificial Intelligence</span>{' '}
                  from DUET. With hands-on experience in React.js, Next.js, Node.js, and MongoDB, I build full-stack applications that solve real-world problems.
                </p>
                <p style={{ color: '#64748b', fontSize: '0.875rem', lineHeight: 1.7 }}>
                  Beyond academics, I&apos;ve explored Remix.js and Shopify App development. I value clean code, user-focused design, and scalable architecture.
                </p>
              </div>
            </div>

            {/* Skill bars */}
            <div style={{
              marginTop: '28px',
              paddingTop: '24px',
              borderTop: '1px solid rgba(255,255,255,0.06)',
            }}>
              <p style={{ fontSize: '12px', color: '#475569', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px' }}>
                Core Proficiencies
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { label: 'Full Stack Development', pct: 90, color: '#6366f1' },
                  { label: 'AI / Machine Learning', pct: 78, color: '#a855f7' },
                  { label: 'MERN Stack', pct: 92, color: '#818cf8' },
                  { label: 'System Architecture', pct: 75, color: '#c084fc' },
                ].map(({ label, pct, color }) => (
                  <div key={label}>
                    <div className="flex justify-between mb-1">
                      <span style={{ fontSize: '12px', color: '#94a3b8' }}>{label}</span>
                      <span style={{ fontSize: '12px', color, fontWeight: 600 }}>{pct}%</span>
                    </div>
                    <div style={{
                      height: '4px', borderRadius: '999px',
                      background: 'rgba(255,255,255,0.05)',
                      overflow: 'hidden',
                    }}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
                        style={{
                          height: '100%', borderRadius: '999px',
                          background: `linear-gradient(90deg, ${color}, ${color}88)`,
                          boxShadow: `0 0 8px ${color}55`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ── Info Card ── */}
        <motion.div
          custom={1}
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ perspective: 1000 }}
          onMouseMove={infoTilt.onMouseMove}
          onMouseLeave={infoTilt.onMouseLeave}
        >
          <motion.div
            style={{
              rotateX: infoTilt.rotateX,
              rotateY: infoTilt.rotateY,
              transformStyle: 'preserve-3d',
              background: 'rgba(15,23,42,0.6)',
              border: '1px solid rgba(99,102,241,0.15)',
              borderRadius: '24px',
              padding: '28px',
              backdropFilter: 'blur(12px)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
              height: '100%',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Top shimmer line */}
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(168,85,247,0.4), transparent)',
            }} />

            <p style={{ fontSize: '12px', color: '#475569', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '20px' }}>
              Quick Info
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {[
                {
                  icon: <HiLocationMarker style={{ color: '#818cf8', fontSize: '16px' }} />,
                  label: 'Location',
                  value: 'Karachi, Pakistan',
                  valueStyle: { color: '#e2e8f0', fontWeight: 600 },
                },
                {
                  icon: <HiAcademicCap style={{ color: '#a855f7', fontSize: '16px' }} />,
                  label: 'Education',
                  value: 'BS Artificial Intelligence — DUET',
                  valueStyle: { color: '#e2e8f0', fontWeight: 600, fontSize: '13px' },
                },
                {
                  icon: <HiCode style={{ color: '#c084fc', fontSize: '16px' }} />,
                  label: 'Experience',
                  value: '1+ Years',
                  valueStyle: { color: '#e2e8f0', fontWeight: 600 },
                },
                {
                  icon: <HiMail style={{ color: '#f472b6', fontSize: '16px' }} />,
                  label: 'Email',
                  value: 'huzaifanazim154@gmail.com',
                  valueStyle: { color: '#818cf8', fontSize: '12px', wordBreak: 'break-all' },
                },
              ].map(({ icon, label, value, valueStyle }, i) => (
                <div key={label}>
                  <motion.div
                    whileHover={{ x: 4, background: 'rgba(99,102,241,0.05)' }}
                    style={{
                      display: 'flex', alignItems: 'flex-start', gap: '12px',
                      padding: '14px 10px',
                      borderRadius: '12px',
                      transition: 'all 0.2s',
                    }}
                  >
                    <div style={{
                      width: '34px', height: '34px', flexShrink: 0,
                      borderRadius: '10px',
                      background: 'rgba(99,102,241,0.08)',
                      border: '1px solid rgba(99,102,241,0.15)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      {icon}
                    </div>
                    <div>
                      <p style={{ fontSize: '11px', color: '#475569', letterSpacing: '0.06em', marginBottom: '2px' }}>
                        {label}
                      </p>
                      <p style={{ fontSize: '14px', ...valueStyle }}>{value}</p>
                    </div>
                  </motion.div>
                  {i < 3 && (
                    <div style={{ height: '1px', background: 'rgba(255,255,255,0.04)', margin: '0 10px' }} />
                  )}
                </div>
              ))}
            </div>

            {/* CTA */}
            <motion.a
              href="mailto:huzaifanazim154@gmail.com"
              whileHover={{ scale: 1.03, boxShadow: '0 0 24px rgba(99,102,241,0.3)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                marginTop: '24px',
                padding: '12px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, rgba(79,70,229,0.3), rgba(124,58,237,0.3))',
                border: '1px solid rgba(99,102,241,0.3)',
                color: '#a5b4fc',
                fontSize: '14px',
                fontWeight: 600,
                textDecoration: 'none',
                cursor: 'pointer',
              }}
            >
              <HiMail style={{ fontSize: '16px' }} />
              Get in Touch
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;