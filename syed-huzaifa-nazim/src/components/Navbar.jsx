"use client";
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { HiHome, HiUser, HiEnvelope, HiBriefcase, HiCommandLine, HiDocumentText } from 'react-icons/hi2';
import { HiCode } from 'react-icons/hi';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { id: 'home', icon: HiHome, label: 'Home' },
  { id: 'about', icon: HiUser, label: 'About' },
  { id: 'skills', icon: HiCommandLine, label: 'Skills' },
  { id: 'experience', icon: HiBriefcase, label: 'Experience' },
  { id: 'projects', icon: HiCode, label: 'Work' },
  { id: 'resume', icon: HiDocumentText, label: 'Resume' },
  { id: 'contact', icon: HiEnvelope, label: 'Contact' },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-lg md:max-w-xl">
      <motion.div 
        initial={{ y: 80, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center justify-between gap-1 px-3 py-2 bg-white/70 dark:bg-slate-900/40 backdrop-blur-xl border border-slate-200/60 dark:border-white/5 rounded-2xl shadow-xl dark:shadow-2xl"
      >
        <div className="flex items-center gap-1 w-full justify-around">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`p-2.5 rounded-xl transition-all duration-300 relative group flex items-center justify-center ${
                  isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-100'
                }`}
                aria-label={item.label}
              >
                {/* Active Indicator Glow */}
                {isActive && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 bg-indigo-500/10 dark:bg-indigo-400/10 border border-indigo-500/20 dark:border-indigo-400/20 rounded-xl"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                
                <item.icon className="w-5 h-5 relative z-10" />
                
                {/* Tooltip */}
                <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-slate-900 text-slate-100 text-[10px] font-medium tracking-wide rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap pointer-events-none shadow-md border border-white/10 translate-y-1 group-hover:translate-y-0">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
        
        {/* Divider */}
        <div className="w-[1px] h-6 bg-slate-300 dark:bg-slate-800 mx-2" />
        
        {/* Integrated Theme Toggle */}
        <div className="flex-shrink-0">
          <ThemeToggle />
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;