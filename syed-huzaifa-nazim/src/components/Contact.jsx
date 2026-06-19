"use client";

import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { HiMail, HiPhone, HiLocationMarker, HiPaperAirplane, HiCheckCircle, HiXCircle, HiSparkles } from 'react-icons/hi';

const contactDetails = [
  {
    icon: <HiMail className="w-5 h-5" />,
    label: 'Email',
    value: 'huzaifanazim154@gmail.com',
    href: 'mailto:huzaifanazim154@gmail.com',
    color: 'var(--primary)',
  },
  {
    icon: <HiPhone className="w-5 h-5" />,
    label: 'Phone',
    value: '+92 335 0554871',
    href: 'tel:+923350554871',
    color: 'var(--secondary)',
  },
  {
    icon: <HiLocationMarker className="w-5 h-5" />,
    label: 'Location',
    value: 'Karachi, Pakistan',
    href: null,
    color: 'var(--accent)',
  },
];

// Input field component
const Field = ({ label, name, type = 'text', placeholder, rows, required }) => {
  const [focused, setFocused] = useState(false);
  const Tag = rows ? 'textarea' : 'input';

  return (
    <div className="space-y-2">
      <label className={`block text-[11px] font-bold uppercase tracking-wider transition-colors duration-300 ${
        focused ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-500'
      }`}>
        {label}
      </label>
      <div className="relative">
        <Tag
          name={name}
          type={type}
          required={required}
          rows={rows}
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`w-full glass-input placeholder-slate-400 dark:placeholder-slate-600 ${
            rows ? 'resize-none min-h-[120px]' : ''
          }`}
        />
        {/* Focus glow line at bottom */}
        <motion.div
          animate={{ scaleX: focused ? 1 : 0, opacity: focused ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-0 left-3 right-3 h-[1px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent origin-center rounded-sm"
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
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="glass-panel cyber-border rounded-xl p-5 flex items-center gap-4 transition-all"
      style={{
        background: hovered ? `${item.color}08` : undefined,
        cursor: item.href ? 'pointer' : 'default',
      }}
    >
      {/* Icon */}
      <div 
        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 border transition-all"
        style={{
          background: `${item.color}15`,
          borderColor: hovered ? `${item.color}40` : 'rgba(120,120,120,0.1)',
          color: item.color,
          boxShadow: hovered ? `0 0 16px ${item.color}30` : 'none',
        }}
      >
        {item.icon}
      </div>

      <div className="space-y-0.5">
        <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
          {item.label}
        </p>
        <p className={`text-sm font-semibold transition-colors ${
          hovered ? 'text-slate-800 dark:text-slate-100' : 'text-slate-600 dark:text-slate-400'
        }`}>
          {item.value}
        </p>
      </div>

      {/* Arrow on hover */}
      {item.href && (
        <motion.div
          animate={{ x: hovered ? 0 : -6, opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="ml-auto text-lg font-bold"
          style={{ color: item.color }}
        >
          →
        </motion.div>
      )}
    </motion.div>
  );

  return item.href
    ? <a href={item.href} className="no-underline">{content}</a>
    : content;
};

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(null); // null | 'loading' | 'success' | 'error'

  // 3D tilt for form card
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-100, 100], [4, -4]), { stiffness: 150, damping: 25 });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-4, 4]), { stiffness: 150, damping: 25 });
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
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 flex flex-col items-start gap-2.5"
      >
        <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-xl border border-white/20 dark:border-white/5 bg-white/45 dark:bg-slate-900/40 backdrop-blur-md">
          <HiMail className="text-indigo-600 dark:text-indigo-400 w-4.5 h-4.5" />
          <span className="text-[12px] font-semibold text-slate-700 dark:text-indigo-300 uppercase tracking-wider">
            💬 Let&apos;s Connect
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Get In Touch
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base">
          Have a project or opportunity? I&apos;d love to hear from you.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

        {/* ── LEFT: Info ── */}
        <div className="lg:col-span-5 space-y-6">
          {/* Big statement */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel cyber-border rounded-2xl p-6 relative overflow-hidden"
          >
            {/* Background glow overlay */}
            <div className="absolute -top-10 -right-10 w-40 h-40 pointer-events-none rounded-full bg-indigo-500/5 blur-xl" />

            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-ring" />
              <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 tracking-wider uppercase">
                AVAILABLE FOR WORK
              </span>
            </div>

            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-[15px]">
              I&apos;m currently open to <span className="text-indigo-600 dark:text-indigo-400 font-semibold">freelance projects</span>, <span className="text-purple-600 dark:text-purple-400 font-semibold">full-time roles</span>, and interesting <span className="text-pink-600 dark:text-pink-400 font-semibold">collaborations</span>. Whether you have a question or just want to say hi—my inbox is always open.
            </p>

            <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-slate-200 dark:border-white/5">
              {[
                { val: '24h', lbl: 'Response' },
                { val: '3+', lbl: 'Yrs learning' },
                { val: '15+', lbl: 'Projects' }
              ].map(({ val, lbl }) => (
                <div key={lbl} className="space-y-0.5">
                  <div className="text-lg font-bold text-slate-800 dark:text-slate-100">{val}</div>
                  <div className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide leading-none">{lbl}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact detail cards */}
          <div className="space-y-4">
            {contactDetails.map((item, idx) => (
              <ContactCard key={idx} item={item} idx={idx} />
            ))}
          </div>
        </div>

        {/* ── RIGHT: Form ── */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-7"
          style={{ perspective: 1200 }}
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
        >
          <motion.div
            style={{
              rotateX, rotateY,
              transformStyle: 'preserve-3d',
            }}
            className="glass-panel cyber-border rounded-2xl p-6 md:p-8"
          >
            <div className="mb-6">
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">Send a Message</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">I typically reply within 24 hours.</p>
            </div>

            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Name" name="user_name" placeholder="Your name" required />
                <Field label="Email" name="user_email" type="email" placeholder="your@email.com" required />
              </div>
              <Field label="Subject" name="subject" placeholder="What's this about?" required />
              <Field label="Message" name="message" rows={5} placeholder="Tell me about your project or opportunity..." required />

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={status === 'loading'}
                whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
                whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
                className={`w-full py-3.5 rounded-xl border-none font-bold text-sm tracking-wide flex items-center justify-center gap-2 cursor-pointer shadow-lg transition-all ${
                  status === 'loading'
                    ? 'bg-indigo-500/30 text-white/50 cursor-not-allowed shadow-none'
                    : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-indigo-600/20 hover:shadow-indigo-600/35'
                }`}
              >
                {status === 'loading' ? (
                  <>
                    <div className="w-4.5 h-4.5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <HiPaperAirplane className="w-4 h-4 rotate-90" />
                    Send Message
                  </>
                )}
              </motion.button>

              {/* Status messages */}
              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.97 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20"
                  >
                    <HiCheckCircle className="text-emerald-500 w-6 h-6 flex-shrink-0" />
                    <div className="space-y-0.5">
                      <p className="text-emerald-600 dark:text-emerald-400 text-xs font-bold">Message sent!</p>
                      <p className="text-slate-500 dark:text-slate-400 text-[11px] font-semibold">I&apos;ll get back to you within 24 hours.</p>
                    </div>
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.97 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20"
                  >
                    <HiXCircle className="text-red-500 w-6 h-6 flex-shrink-0" />
                    <div className="space-y-0.5">
                      <p className="text-red-600 dark:text-red-400 text-xs font-bold">Failed to send</p>
                      <p className="text-slate-500 dark:text-slate-400 text-[11px] font-semibold">Please try again or email me directly.</p>
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