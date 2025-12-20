import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { HiArrowDown, HiCode } from 'react-icons/hi'
// Make sure this path matches your file structure exactly
// import image from '../assets/WhatsApp Image 2024-09-08 at 01.06.06_421cc77c.jpg'
import image from '../assets/328.jpg'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden px-6 pt-20">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left: Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm mb-6 font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Available for opportunities
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
            Hi, I'm <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
               Syed Huzaifa Nazim
            </span>
          </h1>
          
          <div className="text-xl md:text-2xl text-gray-400 mb-8 h-[60px] flex items-center gap-2">
            <HiCode className="text-indigo-500" />
            <span>I am a </span>
            <TypeAnimation
              sequence={[
                'Full Stack Developer', 2000,
                'Frontend Enthusiast', 2000,
                'Data Analyst', 2000,
                'Backend Engineer', 2000,
                'MERN Stack Developer', 2000,
              ]}
              wrapper="span"
              speed={50}
              className="text-white font-semibold"
              repeat={Infinity}
            />
          </div>

          <p className="text-gray-400 text-lg max-w-lg mb-10 leading-relaxed">
            I create insightful and functional web applications with a focus on user experience and performance.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-500/25"
            >
              Contact Me
            </motion.button>
            <motion.button 
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
               className="px-8 py-4 bg-white/5 border border-white/10 text-white font-medium rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm"
            >
              View Work
            </motion.button>
          </div>
        </motion.div>

        {/* Right: Holographic Floating Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:flex justify-center items-center"
        >
          <div className="relative group">
            {/* 1. Outer Rotating Ring */}
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full opacity-70 blur-md group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-spin-slow"></div>
            
            {/* 2. Floating Container */}
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl animate-float">
               <img 
                 src={image} 
                 alt="Syed Huzaifa Nazim" 
                 className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
               />
               
               {/* 3. Glass Overlay Gradient */}
               <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 via-transparent to-transparent opacity-60"></div>
            </div>

            {/* 4. Glowing Orbs Background */}
            <div className="absolute top-0 right-10 w-24 h-24 bg-purple-500/30 rounded-full blur-2xl animate-pulse -z-10" />
            <div className="absolute bottom-10 left-10 w-32 h-32 bg-indigo-500/30 rounded-full blur-2xl animate-pulse -z-10" style={{ animationDelay: '1s' }} />
          </div>
        </motion.div>

      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
      >
        <HiArrowDown className="w-6 h-6" />
      </motion.div>
    </section>
  )
}

export default Hero