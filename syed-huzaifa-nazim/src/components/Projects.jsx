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
  const rotateX = useSpring(useTransform(y, [-80, 80], [8, -8]), { stiffness: 200, damping: 25 });
  const rotateY = useSpring(useTransform(x, [-80, 80], [-8, 8]), { stiffness: 200, damping: 25 });
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
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{ perspective: 1200 }}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
    >
      <motion.div
        style={{
          rotateX: tilt.rotateX,
          rotateY: tilt.rotateY,
          transformStyle: 'preserve-3d',
          position: 'relative',
          borderRadius: '24px',
          overflow: 'hidden',
          border: `1px solid ${hovered ? project.color + '40' : 'rgba(255,255,255,0.06)'}`,
          boxShadow: hovered
            ? `0 24px 64px rgba(0,0,0,0.5), 0 0 0 1px ${project.color}20, 0 0 60px ${project.color}15`
            : '0 8px 32px rgba(0,0,0,0.3)',
          transition: 'box-shadow 0.4s ease, border-color 0.4s ease',
          background: '#0a0f1e',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Image */}
        <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
          <motion.div
            animate={{ scale: hovered ? 1.06 : 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{ width: '100%', height: '100%' }}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
          </motion.div>

          {/* Image overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            background: `linear-gradient(180deg, transparent 30%, #0a0f1e 100%)`,
          }} />

          {/* Moving glow on hover */}
          <motion.div
            style={{
              position: 'absolute', inset: 0,
              background: useTransform(
                [tilt.glowX, tilt.glowY],
                ([gx, gy]) => `radial-gradient(circle at ${gx}% ${gy}%, ${project.color}20, transparent 60%)`
              ),
              pointerEvents: 'none',
            }}
          />

          {/* Category badge */}
          <div style={{
            position: 'absolute', top: '16px', left: '16px',
            padding: '4px 12px', borderRadius: '999px',
            background: `${project.color}20`,
            border: `1px solid ${project.color}40`,
            fontSize: '11px', fontWeight: 600,
            color: project.color, letterSpacing: '0.06em',
            backdropFilter: 'blur(8px)',
          }}>
            {project.category}
          </div>

          {/* Featured badge */}
          <div style={{
            position: 'absolute', top: '16px', right: '16px',
            padding: '4px 10px', borderRadius: '999px',
            background: 'rgba(0,0,0,0.6)',
            border: '1px solid rgba(255,255,255,0.1)',
            fontSize: '10px', fontWeight: 600,
            color: '#64748b', letterSpacing: '0.08em',
            backdropFilter: 'blur(8px)',
          }}>
            FEATURED
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: '24px' }}>
          {/* Title with accent line */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
            <div style={{ width: '3px', height: '20px', borderRadius: '2px', background: project.color, flexShrink: 0 }} />
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#f1f5f9' }}>{project.title}</h3>
          </div>

          <p style={{ color: '#64748b', fontSize: '13.5px', lineHeight: 1.7, marginBottom: '18px' }}>
            {project.description}
          </p>

          {/* Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
            {project.tags.map((tag) => (
              <span key={tag} style={{
                fontSize: '11px', fontWeight: 500,
                padding: '3px 10px', borderRadius: '999px',
                background: `${project.color}08`,
                border: `1px solid ${project.color}20`,
                color: '#64748b',
              }}>
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div style={{
            display: 'flex', gap: '12px',
            paddingTop: '16px',
            borderTop: '1px solid rgba(255,255,255,0.05)',
          }}>
            <motion.a
              href={project.projectLink}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              style={{
                flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
                padding: '9px 0',
                borderRadius: '10px',
                background: `linear-gradient(135deg, ${project.color}cc, ${project.color}99)`,
                color: '#fff', fontSize: '13px', fontWeight: 600,
                textDecoration: 'none',
                boxShadow: `0 4px 16px ${project.color}30`,
              }}
            >
              <HiExternalLink style={{ fontSize: '15px' }} />
              Live Demo
            </motion.a>
            <motion.a
              href={project.codeLink}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.04, background: 'rgba(255,255,255,0.08)' }}
              whileTap={{ scale: 0.96 }}
              style={{
                flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
                padding: '9px 0',
                borderRadius: '10px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                color: '#94a3b8', fontSize: '13px', fontWeight: 500,
                textDecoration: 'none',
              }}
            >
              <HiCode style={{ fontSize: '15px' }} />
              Source
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
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{ perspective: 1000 }}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
    >
      <motion.div
        style={{
          rotateX: tilt.rotateX,
          rotateY: tilt.rotateY,
          transformStyle: 'preserve-3d',
          position: 'relative',
          borderRadius: '20px',
          overflow: 'hidden',
          border: `1px solid ${hovered ? project.color + '35' : 'rgba(255,255,255,0.05)'}`,
          background: '#0a0f1e',
          boxShadow: hovered
            ? `0 16px 48px rgba(0,0,0,0.4), 0 0 40px ${project.color}10`
            : '0 4px 20px rgba(0,0,0,0.25)',
          transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
          cursor: 'default',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Image strip */}
        <div style={{ position: 'relative', height: '160px', overflow: 'hidden' }}>
          <motion.div
            animate={{ scale: hovered ? 1.07 : 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{ width: '100%', height: '100%' }}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              style={{ objectFit: 'cover' }}
            />
          </motion.div>
          <div style={{
            position: 'absolute', inset: 0,
            background: `linear-gradient(180deg, ${project.color}10 0%, #0a0f1e 100%)`,
          }} />

          {/* Hover shimmer line */}
          {hovered && (
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '200%' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              style={{
                position: 'absolute', top: 0, left: 0, bottom: 0,
                width: '40%',
                background: `linear-gradient(90deg, transparent, ${project.color}20, transparent)`,
                pointerEvents: 'none',
              }}
            />
          )}

          <div style={{
            position: 'absolute', top: '12px', left: '12px',
            padding: '3px 10px', borderRadius: '999px',
            background: 'rgba(0,0,0,0.7)',
            border: `1px solid ${project.color}30`,
            fontSize: '10px', fontWeight: 600,
            color: project.color, letterSpacing: '0.06em',
            backdropFilter: 'blur(6px)',
          }}>
            {project.category}
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: '18px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <motion.div
              animate={{ opacity: hovered ? 1 : 0.4, width: hovered ? '20px' : '8px' }}
              transition={{ duration: 0.3 }}
              style={{ height: '2px', borderRadius: '1px', background: project.color, flexShrink: 0 }}
            />
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#f1f5f9' }}>{project.title}</h3>
          </div>

          <p style={{ color: '#475569', fontSize: '12.5px', lineHeight: 1.65, marginBottom: '14px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
            {project.description}
          </p>

          {/* Tags — show max 3 */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginBottom: '14px' }}>
            {project.tags.slice(0, 3).map((tag) => (
              <span key={tag} style={{
                fontSize: '10px', fontWeight: 500,
                padding: '2px 8px', borderRadius: '999px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.07)',
                color: '#475569',
              }}>
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span style={{
                fontSize: '10px', fontWeight: 500,
                padding: '2px 8px', borderRadius: '999px',
                background: `${project.color}10`,
                border: `1px solid ${project.color}20`,
                color: project.color,
              }}>
                +{project.tags.length - 3}
              </span>
            )}
          </div>

          {/* Links */}
          <div style={{ display: 'flex', gap: '8px' }}>
            <motion.a
              href={project.projectLink}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              style={{
                flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px',
                padding: '7px',
                borderRadius: '9px',
                background: `${project.color}15`,
                border: `1px solid ${project.color}25`,
                color: project.color, fontSize: '12px', fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              <HiExternalLink style={{ fontSize: '13px' }} />
              Demo
            </motion.a>
            <motion.a
              href={project.codeLink}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05, background: 'rgba(255,255,255,0.07)' }}
              style={{
                flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px',
                padding: '7px',
                borderRadius: '9px',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                color: '#475569', fontSize: '12px',
                textDecoration: 'none',
              }}
            >
              <HiCode style={{ fontSize: '13px' }} />
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
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full mb-4"
          style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)' }}
        >
          <span style={{ color: '#818cf8', fontSize: '13px', fontWeight: 500, letterSpacing: '0.04em' }}>
            🚀 Selected Work
          </span>
        </div>
        <div className="flex flex-wrap justify-between items-end gap-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-3"
              style={{
                background: 'linear-gradient(135deg, #e2e8f0 0%, #94a3b8 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}
            >
              Featured Projects
            </h2>
            <p style={{ color: '#475569', fontSize: '0.95rem' }}>
              Real-world products I designed, built, and shipped.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#6366f1', boxShadow: '0 0 6px #6366f1' }} />
            <span style={{ fontSize: '13px', color: '#334155' }}>{projects.length} projects</span>
          </div>
        </div>
      </motion.div>

      {/* Featured row — 2 large cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {featured.map((project, idx) => (
          <FeaturedCard key={idx} project={project} idx={idx} />
        ))}
      </div>

      {/* Rest — 4 compact cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {rest.map((project, idx) => (
          <CompactCard key={idx} project={project} idx={idx + featured.length} />
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{ textAlign: 'center', marginTop: '48px' }}
      >
        <motion.a
          href="https://github.com/SyedHuzaifaNazim"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.04, boxShadow: '0 0 32px rgba(99,102,241,0.3)' }}
          whileTap={{ scale: 0.96 }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            padding: '13px 32px',
            borderRadius: '14px',
            background: 'rgba(99,102,241,0.08)',
            border: '1px solid rgba(99,102,241,0.25)',
            color: '#818cf8', fontSize: '14px', fontWeight: 600,
            textDecoration: 'none',
            letterSpacing: '0.02em',
          }}
        >
          <HiCode style={{ fontSize: '18px' }} />
          View All on GitHub
          <motion.span
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{ display: 'inline-block' }}
          >
            →
          </motion.span>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Projects;