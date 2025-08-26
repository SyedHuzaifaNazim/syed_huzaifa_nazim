import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import image from '../assets/WhatsApp Image 2024-09-08 at 01.06.06_421cc77c.jpg'

const Hero = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Use a more reliable scroll detection
      setScrolled(window.scrollY > 50)
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

  // Function to handle smooth scrolling
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 pt-16"
      >
        <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-center">
          <motion.div
            className="md:w-1/2 mb-10 md:mb-0 order-2 md:order-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-gray-900 dark:text-white text-center md:text-left"
              variants={itemVariants}
            >
              Hi, I'm{' '}
              <TypeAnimation
                sequence={['Syed Huzaifa Nazim', 2000]}
                wrapper="span"
                cursor={true}
                speed={60}
                className="text-blue-600 dark:text-yellow-300 block mt-2"
                repeat={Infinity}
              />
            </motion.h1>

            <motion.div variants={itemVariants} className="mb-6 h-10 md:h-12 lg:h-14">
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  2000,
                  'Frontend Enthusiast',
                  2000,
                  'Data Analyst',
                  2000,
                  'Backend Engineer',
                  2000,
                  'MERN Stack Developer',
                  2000,
                ]}
                wrapper="h2"
                speed={50}
                repeat={Infinity}
                className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-600 dark:text-gray-300 text-center md:text-left"
              />
            </motion.div>

            <motion.p
              className="text-lg mb-8 max-w-lg text-gray-700 dark:text-gray-400 text-center md:text-left mx-auto md:mx-0"
              variants={itemVariants}
            >
              I create insightful and functional web applications with a focus on user experience and performance.
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start" variants={itemVariants}>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
              >
                Contact Me
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="px-6 py-3 border border-blue-600 text-blue-600 dark:text-yellow-300 dark:border-yellow-300 rounded-md hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors duration-300"
              >
                View Work
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            className="md:w-1/2 flex justify-center order-1 md:order-2 mb-8 md:mb-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-blue-600 dark:border-yellow-300 shadow-lg relative">
              <div className="absolute inset-0 bg-blue-100 dark:bg-yellow-100 opacity-20"></div>
              <img
                src={image}
                alt="Profile"
                className="w-full h-full object-cover relative z-10"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Down Button - Only show when not scrolled */}
        {!scrolled && (
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
            <button
              onClick={() => scrollToSection('about')}
              className="flex flex-col items-center text-blue-600 dark:text-yellow-300 animate-bounce"
            >
              <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
              <span className="text-sm">Scroll Down</span>
            </button>
          </div>
        )}
      </section>
    </>
  )
}

export default Hero