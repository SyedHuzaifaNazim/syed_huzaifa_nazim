// src/components/Hero.jsx (updated with animations)
import { motion } from 'framer-motion'
import image from '../assets/WhatsApp Image 2024-09-08 at 01.06.06_421cc77c.jpg'
const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="home" className="py-20 md:py-28 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
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
            Hi, I'm <span className="text-blue-600 dark:text-yellow-300">Syed Huzaifa Nazim</span>
          </motion.h1>
          
          <motion.h2 
            className="text-2xl md:text-3xl font-semibold text-gray-600 dark:text-gray-300 mb-6"
            variants={itemVariants}
          >
            Full Stack Developer
          </motion.h2>
          
          <motion.p 
            className="text-lg mb-8 max-w-lg text-gray-700 dark:text-gray-400"
            variants={itemVariants}
          >
            I create beautiful and functional web applications with a focus on user experience and performance.
          </motion.p>
          
          <motion.div 
            className="flex space-x-4"
            variants={itemVariants}
          >
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
    </section>
  )
}

export default Hero