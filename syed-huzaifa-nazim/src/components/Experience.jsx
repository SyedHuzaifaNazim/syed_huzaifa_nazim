import { motion } from 'framer-motion'
import { useState } from 'react'

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  
  const experiences = [
    {
      role: 'Full Stack Developer',
      company: 'Tax Filerz & Co.',
      period: '2025 - Present',
      description: 'Lead development team building enterprise applications. Implemented CI/CD pipelines and improved deployment processes.',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Docker'],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      role: 'Frontend Developer',
      company: 'Self-Employed',
      period: '2024 - 2025',
      description: 'Developed responsive websites and web applications for various clients. Collaborated with designers to implement UI/UX.',
      technologies: ['React', 'JavaScript', 'CSS', 'Figma', 'Responsive Design'],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
        </svg>
      )
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  }

  const lineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section id="experience" className="py-16 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 dark:bg-blue-900/20 rounded-full -translate-x-36 -translate-y-36 opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-100 dark:bg-yellow-900/20 rounded-full translate-x-48 translate-y-48 opacity-50"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Work Experience</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6">
            My professional journey and career milestones
          </p>
          <div className="w-20 h-1 bg-blue-600 dark:bg-yellow-300 mx-auto"></div>
        </motion.div>
        
        <motion.div 
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Timeline line */}
          <motion.div 
            className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-1 h-full bg-blue-200 dark:bg-gray-700 origin-top"
            variants={lineVariants}
          ></motion.div>
          
          {/* Experience Items */}
          <div className="space-y-12 ml-12 md:ml-0">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative flex flex-col md:flex-row items-start"
                variants={itemVariants}
                onHoverStart={() => setActiveIndex(index)}
                whileHover={{ scale: 1.02 }}
              >
                {/* Timeline node */}
                <div className="absolute -left-9 md:absolute md:left-1/2 md:-translate-x-1/2 -translate-y-2 flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-800 border-4 border-blue-600 dark:border-yellow-300 shadow-lg z-10">
                  <div className={`flex items-center justify-center w-6 h-6 rounded-full ${activeIndex === index ? 'bg-blue-600 dark:bg-yellow-300' : 'bg-blue-100 dark:bg-yellow-100'} transition-colors duration-300`}>
                    <div className={`${activeIndex === index ? 'text-white' : 'text-blue-600 dark:text-yellow-300'} transition-colors duration-300`}>
                      {exp.icon}
                    </div>
                  </div>
                  
                  {/* Year indicator */}
                  <span className="absolute -top-8 text-sm font-semibold text-blue-600 dark:text-yellow-300 whitespace-nowrap">
                    {exp.period.split(' - ')[0]}
                  </span>
                </div>

                {/* Content Card */}
                <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden flex-1 ${index % 2 === 0 ? 'md:mr-8 md:pr-8' : 'md:ml-8 md:pl-8'} transition-all duration-500`}>
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{exp.role}</h3>
                        <p className="text-lg text-blue-600 dark:text-yellow-300 font-semibold">{exp.company}</p>
                      </div>
                      <span className="mt-2 md:mt-0 px-3 py-1 bg-blue-100 dark:bg-yellow-100 dark:bg-opacity-20 text-blue-600 dark:text-yellow-300 text-sm font-medium rounded-full">
                        {exp.period}
                      </span>
                    </div>
                    
                    <p className="text-gray-700 dark:text-gray-300 mb-4">{exp.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* For even items, add spacer on desktop for alternating layout */}
                {index % 2 === 0 && <div className="hidden md:block md:w-8"></div>}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline legend */}
        <motion.div 
          className="mt-16 p-6 bg-blue-50 dark:bg-gray-800 rounded-xl border border-blue-100 dark:border-gray-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center space-x-6">
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-blue-600 dark:bg-yellow-300 mr-2"></div>
              <span className="text-sm text-gray-700 dark:text-gray-300">Current</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-blue-300 dark:bg-yellow-100 mr-2"></div>
              <span className="text-sm text-gray-700 dark:text-gray-300">Previous</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience