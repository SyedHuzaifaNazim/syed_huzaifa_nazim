import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import image from '../assets/WhatsApp Image 2024-09-08 at 01.06.06_421cc77c.jpg'
import About from './About'

const Hero = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.3)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section
      id="home"
      className={`${
        scrolled ? 'relative h-auto' : 'fixed h-screen'
      } top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 transition-all duration-500`}
    >
      <div className="container mx-auto h-full px-6 flex flex-col md:flex-row items-center justify-center">
        <motion.div
          className="md:w-1/2 mb-10 md:mb-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-gray-900 dark:text-white"
            variants={itemVariants}
          >
            Hi, I'm{' '}
            <TypeAnimation
              sequence={['Syed Huzaifa Nazim', 2000]}
              wrapper="span"
              cursor={true}
              speed={60}
              className="text-blue-600 dark:text-yellow-300"
              repeat={Infinity}
            />
          </motion.h1>

          <motion.div variants={itemVariants} className="mb-6">
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                2000,
                'Frontend Enthusiast',
                2000,
                'Backend Engineer',
                2000,
                'MERN Stack Developer',
                2000,
              ]}
              wrapper="h2"
              speed={50}
              repeat={Infinity}
              className="text-2xl md:text-3xl font-semibold text-gray-600 dark:text-gray-300"
            />
          </motion.div>

          <motion.p
            className="text-lg mb-8 max-w-lg text-gray-700 dark:text-gray-400"
            variants={itemVariants}
          >
            I create insightful and functional web applications with a focus on user experience and performance.
          </motion.p>

          <motion.div className="flex space-x-4" variants={itemVariants}>
            <a
              href="#contact"
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="px-6 py-3 border border-blue-600 text-blue-600 dark:text-yellow-300 dark:border-yellow-300 rounded-md hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors duration-300"
            >
              View Work
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-600 dark:border-yellow-300 shadow-lg relative">
            <div className="absolute inset-0 bg-blue-100 dark:bg-yellow-100 opacity-20"></div>
            <img
              src={image}
              alt="Profile"
              className="w-full h-full object-cover relative z-10"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Button */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <a
          href={About ? 'About' : '#home'}
          className="flex flex-col items-center text-blue-600 dark:text-yellow-300 animate-bounce"
        >
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
          <span className="text-sm">Scroll Down</span>
        </a>
      </div>
    </section>
  )
}

export default Hero
