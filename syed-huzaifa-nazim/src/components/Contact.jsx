"use client";

import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { HiMail, HiPhone, HiLocationMarker, HiPaperAirplane, HiCheckCircle, HiXCircle } from 'react-icons/hi';

const contactDetails = [
  {
    icon: <HiMail style={{ fontSize: '18px' }} />,
    label: 'Email',
    value: 'huzaifanazim154@gmail.com',
    href: 'mailto:huzaifanazim154@gmail.com',
    color: '#6366f1',
  },
  {
    icon: <HiPhone style={{ fontSize: '18px' }} />,
    label: 'Phone',
    value: '+92 335 0554871',
    href: 'tel:+923350554871',
    color: '#a855f7',
  },
  {
    icon: <HiLocationMarker style={{ fontSize: '18px' }} />,
    label: 'Location',
    value: 'Karachi, Pakistan',
    href: null,
    color: '#f472b6',
  },
];

// Input field component
const Field = ({ label, name, type = 'text', placeholder, rows, required }) => {
  const [focused, setFocused] = useState(false);
  const Tag = rows ? 'textarea' : 'input';

  return (
    <div>
      <label style={{
        display: 'block', fontSize: '12px', fontWeight: 500,
        color: focused ? '#818cf8' : '#475569',
        marginBottom: '8px', letterSpacing: '0.04em',
        textTransform: 'uppercase', transition: 'color 0.2s',
      }}>
        {label}
      </label>
      <div style={{ position: 'relative' }}>
        <Tag
          name={name}
          type={type}
          required={required}
          rows={rows}
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            width: '100%',
            background: focused ? 'rgba(99,102,241,0.05)' : 'rgba(255,255,255,0.02)',
            border: `1px solid ${focused ? 'rgba(99,102,241,0.4)' : 'rgba(255,255,255,0.07)'}`,
            borderRadius: '12px',
            padding: rows ? '14px 16px' : '13px 16px',
            color: '#e2e8f0',
            fontSize: '14px',
            outline: 'none',
            resize: rows ? 'none' : undefined,
            transition: 'all 0.25s ease',
            boxShadow: focused ? '0 0 0 3px rgba(99,102,241,0.08)' : 'none',
            fontFamily: 'inherit',
            display: 'block',
          }}
        />
        {/* Focus glow line at bottom */}
        <motion.div
          animate={{ scaleX: focused ? 1 : 0, opacity: focused ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'absolute', bottom: 0, left: '12px', right: '12px',
            height: '1px', background: 'linear-gradient(90deg, transparent, #6366f1, transparent)',
            transformOrigin: 'center', borderRadius: '1px',
          }}
        />
      </div>
    </div>
  );
};

// Contact info card
const ContactCard = ({ item, idx }) => {
  const [hovered, setHovered] = useState(false);
  const content = (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: idx * 0.12 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex', alignItems: 'center', gap: '16px',
        padding: '16px 20px',
        borderRadius: '16px',
        background: hovered ? `${item.color}08` : 'rgba(15,23,42,0.4)',
        border: `1px solid ${hovered ? item.color + '30' : 'rgba(255,255,255,0.05)'}`,
        backdropFilter: 'blur(8px)',
        transition: 'all 0.3s ease',
        cursor: item.href ? 'pointer' : 'default',
        textDecoration: 'none',
      }}
    >
      {/* Icon */}
      <div style={{
        width: '44px', height: '44px', borderRadius: '12px', flexShrink: 0,
        background: `${item.color}12`,
        border: `1px solid ${item.color}25`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: item.color,
        boxShadow: hovered ? `0 0 16px ${item.color}20` : 'none',
        transition: 'box-shadow 0.3s ease',
      }}>
        {item.icon}
      </div>

      <div>
        <p style={{ fontSize: '11px', color: '#334155', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '3px' }}>
          {item.label}
        </p>
        <p style={{ fontSize: '14px', fontWeight: 500, color: hovered ? '#e2e8f0' : '#94a3b8', transition: 'color 0.2s' }}>
          {item.value}
        </p>
      </div>

      {/* Arrow on hover */}
      {item.href && (
        <motion.div
          animate={{ x: hovered ? 0 : -6, opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          style={{ marginLeft: 'auto', color: item.color, fontSize: '18px' }}
        >
          →
        </motion.div>
      )}
    </motion.div>
  );

  return item.href
    ? <a href={item.href} style={{ textDecoration: 'none' }}>{content}</a>
    : content;
};

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(null); // null | 'loading' | 'success' | 'error'

  // 3D tilt for form card
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-100, 100], [5, -5]), { stiffness: 150, damping: 25 });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-5, 5]), { stiffness: 150, damping: 25 });
  const onMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };
  const onMouseLeave = () => { x.set(0); y.set(0); };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('loading');
    emailjs
      .sendForm('service_xqjn4nm', 'template_alhau15', form.current, 'mVllVNlJundbYGJcd')
      .then(() => { setStatus('success'); form.current.reset(); })
      .catch(() => setStatus('error'));
  };

  return (
    <section id="contact" className="py-20 relative">

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
            💬 Let&apos;s Connect
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-3"
          style={{
            background: 'linear-gradient(135deg, #e2e8f0 0%, #94a3b8 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}
        >
          Get In Touch
        </h2>
        <p style={{ color: '#475569', fontSize: '0.95rem' }}>
          Have a project or opportunity? I&apos;d love to hear from you.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

        {/* ── LEFT: Info ── */}
        <div>
          {/* Big statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{
              padding: '28px',
              borderRadius: '20px',
              background: 'rgba(15,23,42,0.5)',
              border: '1px solid rgba(99,102,241,0.1)',
              backdropFilter: 'blur(12px)',
              marginBottom: '20px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div style={{
              position: 'absolute', top: '-40px', right: '-40px',
              width: '180px', height: '180px',
              background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.4), transparent)' }} />

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <motion.div
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 8px #10b981' }}
              />
              <span style={{ fontSize: '12px', color: '#10b981', fontWeight: 500, letterSpacing: '0.06em' }}>
                AVAILABLE FOR WORK
              </span>
            </div>

            <p style={{ color: '#94a3b8', lineHeight: 1.8, fontSize: '0.95rem' }}>
              I&apos;m currently open to <span style={{ color: '#818cf8', fontWeight: 600 }}>freelance projects</span>,{' '}
              <span style={{ color: '#a78bfa', fontWeight: 600 }}>full-time roles</span>, and interesting{' '}
              <span style={{ color: '#c084fc', fontWeight: 600 }}>collaborations</span>.
              Whether you have a question or just want to say hi — my inbox is always open.
            </p>

            <div style={{ display: 'flex', gap: '20px', marginTop: '20px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
              {[{ val: '24h', lbl: 'Response time' }, { val: '3+', lbl: 'Yrs experience' }, { val: '15+', lbl: 'Projects done' }].map(({ val, lbl }) => (
                <div key={lbl}>
                  <div style={{ fontSize: '1.3rem', fontWeight: 700, color: '#e2e8f0', lineHeight: 1 }}>{val}</div>
                  <div style={{ fontSize: '11px', color: '#334155', marginTop: '3px' }}>{lbl}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact detail cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {contactDetails.map((item, idx) => (
              <ContactCard key={idx} item={item} idx={idx} />
            ))}
          </div>
        </div>

        {/* ── RIGHT: Form ── */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          style={{ perspective: 1200 }}
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
        >
          <motion.div
            style={{
              rotateX, rotateY,
              transformStyle: 'preserve-3d',
              background: 'rgba(15,23,42,0.7)',
              border: '1px solid rgba(99,102,241,0.15)',
              borderRadius: '24px',
              padding: '32px',
              backdropFilter: 'blur(16px)',
              boxShadow: '0 24px 64px rgba(0,0,0,0.4)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Top shimmer */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.5), rgba(168,85,247,0.4), transparent)' }} />
            <div style={{ position: 'absolute', top: '-60px', right: '-30px', width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#e2e8f0', marginBottom: '4px' }}>Send a Message</h3>
              <p style={{ fontSize: '13px', color: '#334155' }}>I typically reply within 24 hours.</p>
            </div>

            <form ref={form} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field label="Name" name="user_name" placeholder="Your name" required />
                <Field label="Email" name="user_email" type="email" placeholder="your@email.com" required />
              </div>
              <Field label="Subject" name="subject" placeholder="What's this about?" required />
              <Field label="Message" name="message" rows={5} placeholder="Tell me about your project or opportunity..." required />

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={status === 'loading'}
                whileHover={{ scale: status === 'loading' ? 1 : 1.02, boxShadow: '0 0 32px rgba(99,102,241,0.4)' }}
                whileTap={{ scale: status === 'loading' ? 1 : 0.97 }}
                style={{
                  width: '100%',
                  padding: '14px',
                  borderRadius: '13px',
                  border: 'none',
                  background: status === 'loading'
                    ? 'rgba(99,102,241,0.3)'
                    : 'linear-gradient(135deg, #4f46e5, #7c3aed)',
                  color: '#fff',
                  fontSize: '15px',
                  fontWeight: 700,
                  cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                  boxShadow: '0 4px 24px rgba(99,102,241,0.25), inset 0 1px 0 rgba(255,255,255,0.1)',
                  letterSpacing: '0.02em',
                }}
              >
                {status === 'loading' ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                      style={{ width: '16px', height: '16px', border: '2px solid rgba(255,255,255,0.3)', borderTop: '2px solid #fff', borderRadius: '50%' }}
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <HiPaperAirplane style={{ fontSize: '16px', transform: 'rotate(90deg)' }} />
                    Send Message
                  </>
                )}
              </motion.button>

              {/* Status messages */}
              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.96 }}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '10px',
                      padding: '14px 16px', borderRadius: '12px',
                      background: 'rgba(16,185,129,0.08)',
                      border: '1px solid rgba(16,185,129,0.2)',
                    }}
                  >
                    <HiCheckCircle style={{ color: '#10b981', fontSize: '20px', flexShrink: 0 }} />
                    <div>
                      <p style={{ color: '#10b981', fontSize: '13px', fontWeight: 600 }}>Message sent!</p>
                      <p style={{ color: '#064e3b', fontSize: '12px', marginTop: '1px' }}>I&apos;ll get back to you within 24 hours.</p>
                    </div>
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.96 }}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '10px',
                      padding: '14px 16px', borderRadius: '12px',
                      background: 'rgba(239,68,68,0.08)',
                      border: '1px solid rgba(239,68,68,0.2)',
                    }}
                  >
                    <HiXCircle style={{ color: '#ef4444', fontSize: '20px', flexShrink: 0 }} />
                    <div>
                      <p style={{ color: '#ef4444', fontSize: '13px', fontWeight: 600 }}>Failed to send</p>
                      <p style={{ color: '#7f1d1d', fontSize: '12px', marginTop: '1px' }}>Please try again or email me directly.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;