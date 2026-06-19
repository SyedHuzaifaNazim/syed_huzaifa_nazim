"use client";

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { HiSparkles, HiLocationMarker, HiMail, HiAcademicCap, HiCode } from 'react-icons/hi';
import Image from 'next/image';
import image from '../../public/assets/WhatsApp Image 2024-09-08 at 01.06.06_421cc77c.jpg';

// 3D tilt hook
const useTilt = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-80, 80], [6, -6]), { stiffness: 200, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-80, 80], [-6, 6]), { stiffness: 200, damping: 30 });
  
  const onMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };
  const onMouseLeave = () => { x.set(0); y.set(0); };
  return { rotateX, rotateY, onMouseMove, onMouseLeave };
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }
  }),
};

const About = () => {
  const bioTilt = useTilt();
  const infoTilt = useTilt();

  return (
    <section id="about" className="py-20 relative">
      
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 flex flex-col items-start gap-2.5"
      >
        <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-xl border border-white/20 dark:border-white/5 bg-white/45 dark:bg-slate-900/40 backdrop-blur-md">
          <HiSparkles className="text-indigo-600 dark:text-indigo-400 w-4.5 h-4.5" />
          <span className="text-[12px] font-semibold text-slate-700 dark:text-indigo-300 uppercase tracking-wider">
            About Me
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          The person behind the code
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* ── Main Bio Card ── */}
        <motion.div
          custom={0}
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="lg:col-span-2"
          style={{ perspective: 1000 }}
          onMouseMove={bioTilt.onMouseMove}
          onMouseLeave={bioTilt.onMouseLeave}
        >
          <motion.div
            style={{
              rotateX: bioTilt.rotateX,
              rotateY: bioTilt.rotateY,
              transformStyle: 'preserve-3d',
            }}
            className="glass-panel cyber-border rounded-2xl p-6 md:p-8 h-full flex flex-col justify-between"
          >
            <div className="flex flex-col md:flex-row gap-6 items-start">
              {/* Profile image with custom gradient frame */}
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="relative flex-shrink-0 mx-auto md:mx-0"
              >
                <div className="absolute inset-[-3px] rounded-2xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 opacity-80" />
                <div className="w-24 h-24 rounded-[14px] overflow-hidden relative z-10 border border-slate-900 dark:border-slate-950">
                  <Image
                    src={image}
                    alt="Syed Huzaifa Nazim"
                    width={96}
                    height={96}
                    style={{ objectFit: 'cover' }}
                    className="w-full h-full"
                  />
                </div>
                {/* Online Pulse */}
                <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-slate-50 dark:border-slate-950 z-20 shadow-md animate-pulse" />
              </motion.div>

              <div className="flex-1 space-y-4 text-center md:text-left">
                {/* Name & tags */}
                <div className="space-y-2.5">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100">
                    Syed Huzaifa Nazim
                  </h3>
                  <div className="flex flex-wrap justify-center md:justify-start gap-2">
                    {['Full Stack Dev', 'AI/ML Engineer', 'MERN Stack'].map((tag) => (
                      <span key={tag} className="text-[11px] font-semibold px-3 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-300 tracking-wide">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-[15px]">
                  I&apos;m a passionate <span className="text-indigo-600 dark:text-indigo-400 font-bold">Web Developer</span> currently pursuing a Bachelor&apos;s degree in <span className="text-indigo-600 dark:text-indigo-400 font-bold">Artificial Intelligence</span> from DUET. With hands-on experience in React.js, Next.js, Node.js, and MongoDB, I build full-stack applications that solve real-world problems.
                </p>
                <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm leading-relaxed">
                  Beyond academics, I&apos;ve explored Remix.js and Shopify App development. I value clean code, user-focused design, and scalable architecture.
                </p>
              </div>
            </div>

            {/* Core Proficiencies */}
            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/5 space-y-4">
              <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 tracking-wider uppercase">
                Core Proficiencies
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { label: 'Full Stack Development', pct: 90, color: 'var(--primary)' },
                  { label: 'AI / Machine Learning', pct: 78, color: 'var(--secondary)' },
                  { label: 'MERN Stack', pct: 92, color: 'var(--primary)' },
                  { label: 'System Architecture', pct: 75, color: 'var(--secondary)' },
                ].map(({ label, pct, color }) => (
                  <div key={label} className="space-y-1.5">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-slate-600 dark:text-slate-400">{label}</span>
                      <span style={{ color }}>{pct}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-200 dark:bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
                        className="h-full rounded-full"
                        style={{ background: color }}
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
            }}
            className="glass-panel cyber-border rounded-2xl p-6 md:p-8 h-full flex flex-col justify-between"
          >
            <div className="space-y-6">
              <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 tracking-wider uppercase">
                Quick Info
              </p>

              <div className="space-y-4">
                {[
                  {
                    icon: <HiLocationMarker className="text-indigo-600 dark:text-indigo-400 w-4.5 h-4.5" />,
                    label: 'Location',
                    value: 'Karachi, Pakistan',
                    valueStyle: 'text-slate-800 dark:text-slate-100 font-bold',
                  },
                  {
                    icon: <HiAcademicCap className="text-purple-600 dark:text-purple-400 w-4.5 h-4.5" />,
                    label: 'Education',
                    value: 'BS Artificial Intelligence — DUET',
                    valueStyle: 'text-slate-800 dark:text-slate-100 font-bold text-xs md:text-sm',
                  },
                  {
                    icon: <HiCode className="text-pink-600 dark:text-pink-400 w-4.5 h-4.5" />,
                    label: 'Experience',
                    value: '1+ Years',
                    valueStyle: 'text-slate-800 dark:text-slate-100 font-bold',
                  },
                  {
                    icon: <HiMail className="text-emerald-600 dark:text-emerald-400 w-4.5 h-4.5" />,
                    label: 'Email',
                    value: 'huzaifanazim154@gmail.com',
                    valueStyle: 'text-indigo-600 dark:text-indigo-400 font-semibold text-xs break-all',
                  },
                ].map(({ icon, label, value, valueStyle }, i) => (
                  <div key={label}>
                    <motion.div
                      whileHover={{ x: 3 }}
                      className="flex items-start gap-4 p-2 rounded-xl transition-colors hover:bg-slate-100/50 dark:hover:bg-white/5"
                    >
                      <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 flex items-center justify-center flex-shrink-0">
                        {icon}
                      </div>
                      <div className="space-y-0.5">
                        <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                          {label}
                        </p>
                        <p className={`text-sm ${valueStyle}`}>{value}</p>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <motion.a
              href="mailto:huzaifanazim154@gmail.com"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 hover:from-indigo-500/20 hover:to-purple-500/20 border border-indigo-500/20 dark:border-indigo-400/20 text-indigo-600 dark:text-indigo-300 font-bold text-sm tracking-wide flex items-center justify-center gap-2 cursor-pointer no-underline"
            >
              <HiMail className="w-4 h-4" />
              Get in Touch
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;