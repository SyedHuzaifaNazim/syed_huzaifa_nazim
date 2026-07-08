"use client";

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useState } from 'react';
import { HiExternalLink, HiCode } from 'react-icons/hi';
import brandsocia from '../../public/assets/brandsocia.png';
import Image from 'next/image';

const projects = [
  {
    title: 'Brand Socia',
    description: 'A platform for brands to connect with influencers and for influencers to find brands to collaborate with.',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Redux'],
    image: brandsocia,
    codeLink: 'https://github.com/SyedHuzaifaNazim/BrandSocia',
    projectLink: 'https://brandsocia.com/',
    category: 'Full Stack',
    color: '#6366f1',
    featured: true,
  },
  {
    title: 'Tax Filerz & Co.',
    description: 'A comprehensive tax filing and financial management platform for individuals and businesses.',
    tags: ['WordPress', 'PHP', 'MySQL', 'Tailwind CSS'],
    image: 'https://img.freepik.com/premium-photo/tax-benefits-concept-finance-business-blue-b_94120-1783.jpg?w=1480',
    codeLink: 'https://github.com/SyedHuzaifaNazim/',
    projectLink: 'https://taxfilerz.com/',
    category: 'Full Stack',
    color: '#a855f7',
    featured: true,
  },
  {
    title: 'TutorWala',
    description: 'A premium full-stack tutor matching platform featuring role-based authentication, interactive forms for students & faculty, profile picture uploads, and a feature-rich admin dashboard with secure profile controls.',
    tags: ['React.js', 'Express.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Framer Motion', 'Multer', 'JWT Auth', 'Bcrypt', 'shadcn/ui'],
    image: '/assets/tutor.png',
    codeLink: 'https://github.com/SyedHuzaifaNazim/Tutor-Wala',
    projectLink: 'https://tutorwala.vercel.app/',
    category: 'Full Stack',
    color: '#27bafb',
    featured: true,
  },
  {
    title: 'Interviewer.ai',
    description: 'An AI-powered interview preparation platform that generates personalized questions and provides real-time feedback using advanced NLP techniques.',
    tags: ['Python', 'YOLOv8', 'OpenCV', 'NumPy', 'SciPy', 'PyTorch', 'Computer Vision'],
    image: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?auto=format&fit=crop&w=800&q=80',
    codeLink: 'https://github.com/SyedHuzaifaNazim/Interviewer.AI',
    projectLink: 'https://github.com/SyedHuzaifaNazim/Interviewer.AI',
    category: 'AI / ML',
    color: '#f97316',
    featured: true,
  },
  {
    title: 'Driver Assistance Pipeline',
    description: 'An advanced AI computer vision pipeline integrating YOLOv8 nano for real-time vehicle tracking, classical Canny/Hough transform lane detection, velocity estimation, and dynamic collision proximity warning HUD overlays.',
    tags: ['Python', 'YOLOv8', 'OpenCV', 'NumPy', 'SciPy', 'PyTorch', 'Computer Vision'],
    image: '/assets/driver_assistance.png',
    codeLink: 'https://github.com/SyedHuzaifaNazim/CCA-CV',
    projectLink: 'https://github.com/SyedHuzaifaNazim/CCA-CV',
    category: 'AI / ML',
    color: '#10b981',
    featured: true,
  },
  {
    title: 'StreamWave',
    description: 'A modern, high-performance video streaming platform built with Next.js 14, featuring YouTube API integration, secure Google OAuth login, smart search, and a stunning glassmorphic interface with Framer Motion.',
    tags: ['Next.js', 'React.js', 'Tailwind CSS', 'Framer Motion', 'NextAuth.js', 'YouTube API'],
    image: '/assets/streamwave.png',
    codeLink: 'https://github.com/SyedHuzaifaNazim/Stream-Wave',
    projectLink: 'https://github.com/SyedHuzaifaNazim/Stream-Wave',
    category: 'Full Stack',
    color: '#0284c7',
    featured: true,
  },
  {
    title: 'Portfolio Website',
    description: 'Custom designed portfolio with smooth animations and responsive design showcasing my work.',
    tags: ['React.js', 'Framer Motion', 'Tailwind CSS', 'Vite'],
    image: '/assets/328.jpg',
    codeLink: 'https://github.com/SyedHuzaifaNazim/syed_huzaifa_nazim',
    projectLink: 'https://syed-huzaifa-nazim.vercel.app/',
    category: 'Frontend',
    color: '#f472b6',
    featured: false,
  },
  {
    title: 'Helmet Detection System',
    description: 'A real-time deep learning computer vision system custom-trained on YOLOv8 to automate traffic compliance by detecting motorcycle riders, safety helmet presence (compliance vs. violations), and license plates.',
    tags: ['Python', 'YOLOv8', 'OpenCV', 'PyTorch', 'Computer Vision', 'Deep Learning'],
    image: '/assets/helmet_detection.png',
    codeLink: 'https://github.com/SyedHuzaifaNazim/CCA-by-53-23-and-07',
    projectLink: 'https://github.com/SyedHuzaifaNazim/CCA-by-53-23-and-07',
    category: 'AI / ML',
    color: '#ef4444',
    featured: false,
  },
  {
    title: 'Apna Ghar Apni Zameen',
    description: 'A real estate platform for buying and selling properties with advanced search and filtering.',
    tags: ['WordPress', 'React.js', 'Node.js', 'MongoDB'],
    image: 'https://img.freepik.com/free-psd/real-estate-house-property-web-banner-background-template_120329-4478.jpg?w=1480',
    codeLink: 'https://github.com/SyedHuzaifaNazim/Apna-Ghar-Apni-Zameen',
    projectLink: 'https://apnagharapnizameen.com/',
    category: 'Full Stack',
    color: '#10b981',
    featured: false,
  },
  {
    title: 'Cosmic Code 404',
    description: 'A software house specializing in innovative digital solutions — web, mobile, and custom software.',
    tags: ['React.js', 'Node.js', 'TypeScript', 'Tailwind CSS'],
    image: 'https://img.freepik.com/free-photo/technology-circuit-processor-innovation-network-concept_53876-124249.jpg?w=1480',
    codeLink: 'https://github.com/SyedHuzaifaNazim/COSMOS-CODE-404/tree/main/cosmic-code-404-solutions',
    projectLink: 'https://CC4-coming-soon.netlify.app/',
    category: 'Frontend',
    color: '#f59e0b',
    featured: false,
  },
  {
    title: 'SaaS Dashboard',
    description: 'A sleek dashboard for managing SaaS applications with real-time analytics and user management.',
    tags: ['React.js', 'Docker', 'PostgreSQL', 'n8n', 'Express.js'],
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    codeLink: 'https://github.com/SyedHuzaifaNazim/saas-automated-engine',
    projectLink: 'https://saas-dashboard-automated.netlify.app/',
    category: 'Full Stack',
    color: '#06b6d4',
    featured: false,
  },
];

// 3D tilt hook
const useTilt = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-80, 80], [6, -6]), { stiffness: 200, damping: 25 });
  const rotateY = useSpring(useTransform(x, [-80, 80], [-6, 6]), { stiffness: 200, damping: 25 });
  const glowX = useTransform(x, [-80, 80], [0, 100]);
  const glowY = useTransform(y, [-80, 80], [0, 100]);
  const onMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };
  const onMouseLeave = () => { x.set(0); y.set(0); };
  return { rotateX, rotateY, glowX, glowY, onMouseMove, onMouseLeave };
};

// Featured large card
const FeaturedCard = ({ project, idx }) => {
  const tilt = useTilt();
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: 1200 }}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
    >
      <motion.div
        style={{
          rotateX: tilt.rotateX,
          rotateY: tilt.rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="glass-panel cyber-border rounded-2xl overflow-hidden h-full flex flex-col justify-between"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div>
          {/* Image container */}
          <div className="relative h-56 overflow-hidden bg-slate-950/20">
            <motion.div
              animate={{ scale: hovered ? 1.05 : 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="w-full h-full relative"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
                className="opacity-90 dark:opacity-75"
              />
            </motion.div>

            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

            {/* Glowing spot */}
            <motion.div
              style={{
                position: 'absolute', inset: 0,
                background: useTransform(
                  [tilt.glowX, tilt.glowY],
                  ([gx, gy]) => `radial-gradient(circle at ${gx}% ${gy}%, ${project.color}18, transparent 65%)`
                ),
                pointerEvents: 'none',
              }}
            />

            {/* Category badge */}
            <div 
              className="absolute top-4 left-4 px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider border backdrop-blur-md"
              style={{
                background: `${project.color}15`,
                borderColor: `${project.color}35`,
                color: project.color,
              }}
            >
              {project.category}
            </div>

            {/* Featured badge */}
            <div className="absolute top-4 right-4 px-3 py-1 rounded-lg text-[9px] font-bold uppercase tracking-wider border border-white/10 dark:border-white/5 bg-slate-900/60 dark:bg-black/60 text-slate-400 backdrop-blur-md">
              Featured
            </div>
          </div>

          {/* Card body */}
          <div className="p-6 space-y-4">
            {/* Title with color highlight */}
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-6 rounded-full flex-shrink-0" style={{ background: project.color }} />
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">{project.title}</h3>
            </div>

            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="text-[10px] font-semibold px-2.5 py-1 rounded-lg border text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
                  style={{
                    background: `${project.color}05`,
                    borderColor: `${project.color}15`,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action links */}
        <div className="p-6 pt-0">
          <div className="h-[1px] bg-slate-200 dark:bg-white/5 mb-4" />
          <div className="flex gap-3">
            <motion.a
              href={project.projectLink}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 py-2.5 rounded-xl text-white font-bold text-xs flex items-center justify-center gap-2 border-none shadow-md"
              style={{
                background: `linear-gradient(135deg, ${project.color}, ${project.color}dd)`,
                boxShadow: `0 4px 15px ${project.color}25`,
              }}
            >
              <HiExternalLink className="w-4 h-4" />
              Live Demo
            </motion.a>
            
            <motion.a
              href={project.codeLink}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 font-semibold text-xs flex items-center justify-center gap-2 bg-slate-50 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 transition-all"
            >
              <HiCode className="w-4 h-4" />
              Source Code
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Compact card for grid
const CompactCard = ({ project, idx }) => {
  const tilt = useTilt();
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: 1000 }}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
    >
      <motion.div
        style={{
          rotateX: tilt.rotateX,
          rotateY: tilt.rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="glass-panel cyber-border rounded-2xl overflow-hidden h-full flex flex-col justify-between"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div>
          {/* Imagestrip */}
          <div className="relative h-40 overflow-hidden bg-slate-950/20">
            <motion.div
              animate={{ scale: hovered ? 1.05 : 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="w-full h-full relative"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: 'cover' }}
                className="opacity-90 dark:opacity-75"
              />
            </motion.div>

            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

            {/* Hover shimmer line */}
            {hovered && (
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '200%' }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="absolute top-0 bottom-0 left-0 w-[40%] pointer-events-none"
                style={{
                  background: `linear-gradient(90deg, transparent, ${project.color}25, transparent)`,
                }}
              />
            )}

            {/* Category badge */}
            <div 
              className="absolute top-3 left-3 px-2.5 py-0.5 rounded-lg text-[9px] font-bold uppercase tracking-wider border backdrop-blur-md"
              style={{
                background: `${project.color}15`,
                borderColor: `${project.color}35`,
                color: project.color,
              }}
            >
              {project.category}
            </div>
          </div>

          {/* Card body */}
          <div className="p-5 space-y-3">
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ opacity: hovered ? 1 : 0.4, width: hovered ? '16px' : '6px' }}
                transition={{ duration: 0.3 }}
                className="h-1 rounded-full flex-shrink-0"
                style={{ background: project.color }}
              />
              <h3 className="text-base font-bold text-slate-800 dark:text-slate-100 truncate">{project.title}</h3>
            </div>

            <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed line-clamp-2">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1">
              {project.tags.slice(0, 3).map((tag) => (
                <span 
                  key={tag} 
                  className="text-[9px] font-semibold px-2 py-0.5 rounded-md border text-slate-500 dark:text-slate-400 transition-colors"
                  style={{
                    background: 'rgba(120,120,120,0.03)',
                    borderColor: 'rgba(120,120,120,0.08)',
                  }}
                >
                  {tag}
                </span>
              ))}
              {project.tags.length > 3 && (
                <span 
                  className="text-[9px] font-bold px-2 py-0.5 rounded-md border"
                  style={{
                    background: `${project.color}10`,
                    borderColor: `${project.color}20`,
                    color: project.color,
                  }}
                >
                  +{project.tags.length - 3}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Action links */}
        <div className="p-5 pt-0">
          <div className="h-[1px] bg-slate-200 dark:bg-white/5 mb-3" />
          <div className="flex gap-2">
            <motion.a
              href={project.projectLink}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.02, y: -0.5 }}
              className="flex-1 py-1.5 rounded-xl font-bold text-[11px] flex items-center justify-center gap-1.5 border no-underline transition-all"
              style={{
                background: `${project.color}15`,
                borderColor: `${project.color}25`,
                color: project.color,
              }}
            >
              <HiExternalLink className="w-3.5 h-3.5" />
              Demo
            </motion.a>
            
            <motion.a
              href={project.codeLink}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.02, y: -0.5 }}
              className="flex-1 py-1.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-500 dark:text-slate-400 font-semibold text-[11px] flex items-center justify-center gap-1.5 no-underline transition-all"
            >
              <HiCode className="w-3.5 h-3.5" />
              Code
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 relative">

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-xl border border-white/20 dark:border-white/5 bg-white/45 dark:bg-slate-900/40 backdrop-blur-md mb-4">
          <span className="text-[12px] font-semibold text-slate-700 dark:text-indigo-300 uppercase tracking-wider">
            Selected Work
          </span>
        </div>
        
        <div className="flex flex-wrap justify-between items-end gap-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-2">
              Featured Projects
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base">
              Real-world products I designed, built, and shipped.
            </p>
          </div>
          <div className="flex items-center gap-2 border border-slate-200 dark:border-white/5 bg-slate-100/50 dark:bg-white/5 py-1.5 px-3 rounded-lg text-xs font-semibold text-slate-500 dark:text-slate-400">
            <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            <span>{projects.length} Projects Total</span>
          </div>
        </div>
      </motion.div>

      {/* Featured row — large cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-6">
        {featured.map((project, idx) => (
          <FeaturedCard key={idx} project={project} idx={idx} />
        ))}
      </div>

      {/* Rest — compact cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {rest.map((project, idx) => (
          <CompactCard key={idx} project={project} idx={idx + featured.length} />
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center mt-12"
      >
        <motion.a
          href="https://github.com/SyedHuzaifaNazim"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-2 px-8 py-3 rounded-xl border border-indigo-500/20 dark:border-indigo-400/20 bg-indigo-500/10 hover:bg-indigo-500/15 text-indigo-600 dark:text-indigo-300 font-bold text-sm tracking-wide no-underline transition-all"
        >
          <HiCode className="w-4.5 h-4.5" />
          View All on GitHub
          <motion.span
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="inline-block"
          >
            →
          </motion.span>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Projects;