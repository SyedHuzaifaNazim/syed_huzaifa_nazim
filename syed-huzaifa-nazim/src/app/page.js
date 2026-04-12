"use client";

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

// ✅ Dynamic import — prevents SSR for react-pdf (fixes DOMMatrix error)
const Resume = dynamic(() => import('../components/Resume'), { ssr: false });

// Animation variants for smooth, cascading reveals
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  },
};

export default function Home() {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <motion.section variants={sectionVariants} id="hero">
        <Hero />
      </motion.section>

      <motion.section variants={sectionVariants} id="about" className="mt-32">
        <About />
      </motion.section>

      <motion.section variants={sectionVariants} id="experience" className="mt-32">
        <Experience />
      </motion.section>

      <motion.section variants={sectionVariants} id="skills" className="mt-32">
        <Skills />
      </motion.section>

      <motion.section variants={sectionVariants} id="projects" className="mt-32">
        <Projects />
      </motion.section>

      <motion.section variants={sectionVariants} id="resume" className="mt-32">
        <Resume />
      </motion.section>

      <motion.section variants={sectionVariants} id="contact" className="mt-32 mb-32">
        <Contact />
      </motion.section>
    </motion.div>
  );
}