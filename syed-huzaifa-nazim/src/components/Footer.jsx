"use client";

import { motion } from 'framer-motion';
import { FaGithub, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { HiArrowUp } from 'react-icons/hi';

const socialLinks = [
  { icon: <FaGithub />, href: 'https://github.com/SyedHuzaifaNazim', label: 'GitHub', color: '#e2e8f0' },
  { icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/in/syed-huzaifa-nazim-a861b727a', label: 'LinkedIn', color: '#0a66c2' },
  { icon: <FaInstagram />, href: 'https://www.instagram.com/developer_154/', label: 'Instagram', color: '#e1306c' },
  { icon: <FaFacebookF />, href: 'https://www.facebook.com/syed.huzaifa.nazim', label: 'Facebook', color: '#1877f2' },
];

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer style={{ position: 'relative', overflow: 'hidden', marginTop: '80px' }}>

      {/* Top divider glow */}
      <div style={{
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.4), rgba(168,85,247,0.3), transparent)',
      }} />

      {/* Ambient glow */}
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: '600px', height: '200px',
        background: 'radial-gradient(ellipse, rgba(99,102,241,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ padding: '48px 24px 32px', maxWidth: '1280px', margin: '0 auto' }}>

        {/* Main row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ marginBottom: '12px' }}>
              <span style={{
                fontSize: '1.3rem', fontWeight: 800,
                background: 'linear-gradient(135deg, #60a5fa, #818cf8, #c084fc)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                letterSpacing: '-0.02em',
              }}>
                Syed Huzaifa Nazim
              </span>
            </div>
            <p style={{ color: '#334155', fontSize: '13px', lineHeight: 1.7, maxWidth: '240px' }}>
              Full Stack Developer & AI/ML Engineer crafting elegant digital experiences from Karachi, Pakistan.
            </p>

            {/* Status pill */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '7px',
              marginTop: '16px', padding: '5px 12px',
              borderRadius: '999px',
              background: 'rgba(16,185,129,0.06)',
              border: '1px solid rgba(16,185,129,0.15)',
            }}>
              <motion.div
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 6px #10b981' }}
              />
              <span style={{ fontSize: '11px', color: '#10b981', fontWeight: 500, letterSpacing: '0.04em' }}>
                Open to opportunities
              </span>
            </div>
          </motion.div>

          {/* Nav links */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p style={{ fontSize: '11px', fontWeight: 600, color: '#334155', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>
              Navigation
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 24px' }}>
              {navLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(link.href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  whileHover={{ x: 4, color: '#818cf8' }}
                  style={{
                    fontSize: '13px', color: '#475569',
                    textDecoration: 'none', fontWeight: 500,
                    transition: 'color 0.2s',
                    display: 'flex', alignItems: 'center', gap: '6px',
                  }}
                >
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(99,102,241,0.4)', flexShrink: 0 }} />
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Social + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p style={{ fontSize: '11px', fontWeight: 600, color: '#334155', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>
              Connect
            </p>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
              {socialLinks.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.label}
                  whileHover={{ scale: 1.12, borderColor: link.color + '50', color: link.color, boxShadow: `0 0 16px ${link.color}20` }}
                  whileTap={{ scale: 0.94 }}
                  style={{
                    width: '40px', height: '40px', borderRadius: '11px',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#475569', fontSize: '16px',
                    textDecoration: 'none',
                    transition: 'all 0.25s ease',
                  }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>

            <motion.a
              href="mailto:huzaifanazim154@gmail.com"
              whileHover={{ scale: 1.03, boxShadow: '0 0 24px rgba(99,102,241,0.25)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '10px 20px', borderRadius: '10px',
                background: 'rgba(99,102,241,0.08)',
                border: '1px solid rgba(99,102,241,0.2)',
                color: '#818cf8', fontSize: '13px', fontWeight: 600,
                textDecoration: 'none', letterSpacing: '0.02em',
              }}
            >
              huzaifanazim154@gmail.com
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div style={{
          paddingTop: '24px',
          borderTop: '1px solid rgba(255,255,255,0.04)',
          display: 'flex', flexWrap: 'wrap',
          justifyContent: 'space-between', alignItems: 'center',
          gap: '12px',
        }}>
          <p style={{ fontSize: '12px', color: '#1e293b' }}>
            © {new Date().getFullYear()}{' '}
            <span style={{ color: '#334155', fontWeight: 500 }}>Syed Huzaifa Nazim</span>
            . All rights reserved.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <p style={{ fontSize: '12px', color: '#1e293b' }}>
              Built with{' '}
              <span style={{ color: '#6366f1' }}>Next.js</span>
              {' '}·{' '}
              <span style={{ color: '#a855f7' }}>Framer Motion</span>
              {' '}·{' '}
              <span style={{ color: '#f472b6' }}>Tailwind CSS</span>
            </p>

            {/* Scroll to top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, borderColor: 'rgba(99,102,241,0.4)', color: '#818cf8' }}
              whileTap={{ scale: 0.92 }}
              style={{
                width: '34px', height: '34px', borderRadius: '9px',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#334155', cursor: 'pointer',
                transition: 'all 0.25s ease',
              }}
              title="Back to top"
            >
              <HiArrowUp style={{ fontSize: '15px' }} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;