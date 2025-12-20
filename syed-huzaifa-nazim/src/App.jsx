import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-[#030712] flex items-center justify-center z-50">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          className="flex flex-col items-center gap-4"
        >
          <div className="w-16 h-16 border-t-2 border-indigo-500 border-r-2 border-indigo-500/50 rounded-full animate-spin" />
          <p className="text-indigo-500/80 font-mono text-sm tracking-widest animate-pulse">INITIALIZING SYSTEM...</p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen bg-[#030712] text-white selection:bg-indigo-500/30">
      
      {/* --- Background Layer --- */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Tech Grid */}
        <div className="absolute inset-0 bg-grid-white opacity-[0.05]" />
        
        {/* Aurora Blobs */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] animate-aurora mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] animate-aurora mix-blend-screen" style={{ animationDelay: '2s' }} />
      </div>

      {/* --- Main Content --- */}
      <div className="relative z-10 flex flex-col pb-32">
        <Hero />
        
        <div className="max-w-6xl mx-auto w-full px-6 flex flex-col gap-32 mt-20">
          <About />
          <Experience />
          <Education />
          <Skills />
          <Projects />
          <Contact />
        </div>

        <Footer />
      </div>

      <Navbar />
      
    </div>
  )
}

export default App