import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import image from '../assets/WhatsApp Image 2024-09-08 at 01.06.06_421cc77c.jpg'

const Hero = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
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
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      },
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
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      >
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-white dark:from-gray-900 dark:via-blue-900/10 dark:to-gray-900"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/10 dark:bg-yellow-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-40"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            {/* Left Content */}
            <motion.div
              className="w-full md:w-1/2 mb-10 md:mb-0 order-2 md:order-1"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Greeting Badge */}
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-md border border-gray-200/50 dark:border-gray-700/50"
              >
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Available for opportunities
                </span>
              </motion.div>

              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 text-gray-900 dark:text-white text-center md:text-left tracking-tight"
                variants={itemVariants}
              >
                <span className="block mb-2">Hi, I'm</span>
                <TypeAnimation
                  sequence={['Syed Huzaifa Nazim', 2000]}
                  wrapper="span"
                  cursor={true}
                  speed={60}
                  className="block bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 dark:from-yellow-300 dark:via-yellow-400 dark:to-yellow-500 bg-clip-text text-transparent mt-2"
                  repeat={Infinity}
                />
              </motion.h1>

              <motion.div 
                variants={itemVariants} 
                className="mb-6 h-12 md:h-14 lg:h-16"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg md:text-xl text-gray-600 dark:text-gray-400">I'm a</span>
                </div>
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
                  className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 dark:from-yellow-300 dark:to-yellow-500 bg-clip-text text-transparent text-center md:text-left"
                />
              </motion.div>

              <motion.p
                className="text-lg md:text-xl mb-10 max-w-xl text-gray-700 dark:text-gray-300 leading-relaxed text-center md:text-left mx-auto md:mx-0"
                variants={itemVariants}
              >
                I create <span className="font-semibold text-blue-600 dark:text-yellow-300">insightful</span> and <span className="font-semibold text-blue-600 dark:text-yellow-300">functional</span> web applications with a focus on user experience and performance.
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start" 
                variants={itemVariants}
              >
                <motion.button
                  onClick={() => scrollToSection('contact')}
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Contact Me
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.button>
                
                <motion.button
                  onClick={() => scrollToSection('projects')}
                  className="group px-8 py-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-blue-600 dark:border-yellow-300 text-blue-600 dark:text-yellow-300 rounded-xl font-semibold shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    View Work
                    <svg className="w-5 h-5 transform group-hover:rotate-90 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-blue-50 dark:bg-yellow-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              className="w-full md:w-1/2 flex justify-center order-1 md:order-2 mb-8 md:mb-0"
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.6, -0.05, 0.01, 0.99] }}
            >
              <div className="relative group">
                {/* Outer Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/30 via-blue-400/30 to-blue-600/30 dark:from-yellow-300/30 dark:via-yellow-400/30 dark:to-yellow-300/30 rounded-full blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                
                {/* Middle Ring */}
                <div className="absolute inset-0 border-4 border-blue-600/20 dark:border-yellow-300/20 rounded-full" style={{ animation: 'spin 20s linear infinite' }}></div>
                
                {/* Image Container */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl transform transition-all duration-700 group-hover:scale-105">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 via-transparent to-transparent dark:from-yellow-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  
                  {/* Inner Border */}
                  <div className="absolute inset-0 border-4 border-blue-600/50 dark:border-yellow-300/50 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <img
                    src={image}
                    alt="Profile"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 relative z-0"
                  />
                </div>

                {/* Floating Decorative Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-20 h-20 bg-blue-600/10 dark:bg-yellow-300/10 rounded-full blur-xl"
                  animate={{
                    y: [0, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                ></motion.div>
                <motion.div
                  className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-400/10 dark:bg-yellow-400/10 rounded-full blur-xl"
                  animate={{
                    y: [0, 10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5
                  }}
                ></motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Enhanced Scroll Down Button */}
        {!scrolled && (
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <motion.button
              onClick={() => scrollToSection('about')}
              className="flex flex-col items-center gap-2 text-blue-600 dark:text-yellow-300 group"
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center p-1 group-hover:border-opacity-100 transition-all duration-300">
                <motion.div
                  className="w-1.5 h-3 bg-current rounded-full"
                  animate={{ y: [0, 12, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
              <span className="text-sm font-medium tracking-wide">Scroll Down</span>
            </motion.button>
          </motion.div>
        )}
      </section>
    </>
  )
}

export default Hero