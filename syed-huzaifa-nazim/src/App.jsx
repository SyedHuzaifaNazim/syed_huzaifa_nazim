import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { motion, AnimatePresence } from 'framer-motion'
import Education from './components/Education'

function App() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [activeSection, setActiveSection] = useState('home')
  const [particles, setParticles] = useState([])

  // Add smooth transition for dark mode
  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  // Create floating particles
  useEffect(() => {
    const createParticles = () => {
      const newParticles = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        duration: Math.random() * 20 + 10,
        delay: Math.random() * 5,
      }))
      setParticles(newParticles)
    }
    createParticles()
  }, [])

  // Scroll progress indicator
  useEffect(() => {
    const updateScrollProgress = () => {
      const currentProgress = window.scrollY
      const scrollHeight = document.body.scrollHeight - window.innerHeight
      if (scrollHeight) {
        setScrollProgress(Number((currentProgress / scrollHeight).toFixed(2)) * 100)
      }
    }

    window.addEventListener('scroll', updateScrollProgress)
    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  // Active section detection
  useEffect(() => {
    const sections = ['home', 'about', 'education', 'skills', 'projects', 'experience', 'contact']
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check on mount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Smooth scrolling for navigation
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault()
        const id = e.target.getAttribute('href').substring(1)
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }

    document.addEventListener('click', handleSmoothScroll)
    return () => document.removeEventListener('click', handleSmoothScroll)
  }, [])

  // Navigation sections
  const sections = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About', icon: '👤' },
    { id: 'education', label: 'Education', icon: '📚' },
    { id: 'skills', label: 'Skills', icon: '💼' },
    { id: 'projects', label: 'Projects', icon: '🚀' },
    { id: 'experience', label: 'Experience', icon: '📈' },
    { id: 'contact', label: 'Contact', icon: '📧' },
  ]

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Enhanced loading screen
  if (isLoading) {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 bg-gradient-to-br from-white via-blue-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center z-50 overflow-hidden"
        >
          {/* Animated Background */}
          <div className="absolute inset-0">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-blue-600/20 dark:bg-yellow-300/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.3, 1, 0.3],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="text-center relative z-10"
          >
            {/* Animated Logo/Icon */}
            <div className="relative mb-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-20 h-20 mx-auto mb-4"
              >
                <div className="w-full h-full border-4 border-blue-600 dark:border-yellow-300 border-t-transparent rounded-full relative">
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border-4 border-blue-400 dark:border-yellow-400 border-r-transparent rounded-full"
                  />
                </div>
              </motion.div>
              
              {/* Pulsing circles */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 border-2 border-blue-600/30 dark:border-yellow-300/30 rounded-full"
                  style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                  animate={{
                    scale: [1, 1.5 + i * 0.3, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
            </div>

            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 dark:from-yellow-300 dark:to-yellow-500 bg-clip-text text-transparent"
            >
              Loading Portfolio
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gray-600 dark:text-gray-400 text-lg"
            >
              Preparing something amazing...
            </motion.p>

            {/* Loading Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-3 h-3 bg-blue-600 dark:bg-yellow-300 rounded-full"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300 relative overflow-x-hidden">
      {/* Floating Particles Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-blue-600/10 dark:bg-yellow-300/10"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.sin(particle.id) * 50, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Enhanced Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200/50 dark:bg-gray-700/50 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 dark:from-yellow-300 dark:via-yellow-400 dark:to-yellow-500 shadow-lg"
          style={{ width: `${scrollProgress}%` }}
          initial={{ width: 0 }}
          transition={{ duration: 0.1 }}
        >
          <motion.div
            className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white dark:bg-gray-900 rounded-full shadow-md"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </motion.div>
      </div>

      {/* Section Navigation Dots */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4"
      >
        {sections.map((section, index) => (
          <motion.button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="group relative flex items-center gap-3"
            whileHover={{ x: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === section.id
                  ? 'bg-blue-600 dark:bg-yellow-300 scale-125'
                  : 'bg-gray-400 dark:bg-gray-600 group-hover:bg-blue-400 dark:group-hover:bg-yellow-400'
              }`}
              layoutId="activeDot"
            />
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              whileHover={{ opacity: 1, x: 0 }}
              className="absolute right-6 text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap pointer-events-none"
            >
              {section.label}
            </motion.span>
          </motion.button>
        ))}
      </motion.div>
      
      <Header />
      
      <main className="flex-grow relative z-10">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      
      <Footer />

      {/* Enhanced Back to Top Button */}
      <AnimatePresence>
        {scrollProgress > 10 && (
          <motion.button
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0, rotate: 180 }}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-500 dark:from-yellow-300 dark:to-yellow-400 text-white dark:text-gray-900 rounded-full shadow-2xl flex items-center justify-center z-40 group overflow-hidden"
            aria-label="Back to top"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-600 dark:from-yellow-400 dark:to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <motion.svg
              className="w-6 h-6 relative z-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </motion.svg>
            
            {/* Progress Ring */}
            <svg className="absolute inset-0 -rotate-90" width="56" height="56">
              <circle
                cx="28"
                cy="28"
                r="26"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                className="text-white/20 dark:text-gray-900/20"
              />
              <motion.circle
                cx="28"
                cy="28"
                r="26"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                className="text-white dark:text-gray-900"
                strokeDasharray={163.36}
                strokeDashoffset={163.36 - (163.36 * scrollProgress) / 100}
                strokeLinecap="round"
                transition={{ duration: 0.1 }}
              />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Scroll Percentage Indicator (Optional) */}
      {scrollProgress > 5 && scrollProgress < 95 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed bottom-8 left-8 z-40 hidden md:block"
        >
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-gray-200/50 dark:border-gray-700/50">
            <span className="text-sm font-semibold text-blue-600 dark:text-yellow-300">
              {Math.round(scrollProgress)}%
            </span>
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default App