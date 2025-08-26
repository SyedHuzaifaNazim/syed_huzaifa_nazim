import { motion } from 'framer-motion'
import { AcademicCapIcon } from '@heroicons/react/24/solid'
import { useEffect, useRef, useState } from 'react'

const education = [
  {
    degree: 'Web and Mobile App Development',
    institute: 'Saylani mass IT Training (SMIT)',
    duration: '2023 – 2024',
    location: 'Karachi, Pakistan',
    description: 'Comprehensive training in modern web and mobile development technologies including React, React Native, and full-stack development principles.'
  },
  {
    degree: 'B.S. in Artificial Intelligence',
    institute: 'Dawood University of Engineering & Technology',
    duration: '2023 – Present',
    location: 'Karachi, Pakistan',
    description: 'Currently pursuing degree with focus on machine learning, neural networks, and AI application development. GPA: 3.8/4.0'
  },
  {
    degree: 'Intermediate (Pre‑Engineering)',
    institute: 'Govt. Degree Science College',
    duration: '2021 – 2023',
    location: 'Karachi, Pakistan',
    description: 'Completed with distinction in Physics, Chemistry, and Mathematics. Active participant in science fairs and coding competitions.'
  },
]

const Education = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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
    <section id="education" ref={sectionRef} className="py-16 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-72 bg-blue-50 dark:bg-blue-900/10 opacity-50"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Education Journey</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6">
            My academic path and professional development milestones
          </p>
          <div className="w-24 h-1 bg-blue-600 dark:bg-yellow-300 mx-auto"></div>
        </motion.div>

        {/* Timeline */}
        <motion.div 
          className="relative"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* Timeline line */}
          <motion.div 
            className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-1 h-full bg-blue-200 dark:bg-gray-700 origin-top"
            variants={lineVariants}
          ></motion.div>
          
          {/* Education Items */}
          <div className="space-y-12 md:space-y-16 ml-12 md:ml-0">
            {education.map((item, index) => (
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
                    <AcademicCapIcon className={`w-4 h-4 ${activeIndex === index ? 'text-white' : 'text-blue-600 dark:text-yellow-300'} transition-colors duration-300`} />
                  </div>
                  
                  {/* Year indicator */}
                  <span className="absolute -top-8 text-sm font-semibold text-blue-600 dark:text-yellow-300 whitespace-nowrap">
                    {item.duration.split('–')[0].trim()}
                  </span>
                </div>

                {/* Content Card */}
                <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden flex-1 ${index % 2 === 0 ? 'md:mr-8 md:pr-8' : 'md:ml-8 md:pl-8'} transition-all duration-500`}>
                  <div className="p-6">
                    <div className={`mb-4 pb-4 border-b border-gray-100 dark:border-gray-700 ${index === activeIndex ? 'border-blue-100 dark:border-yellow-900' : ''} transition-colors duration-300`}>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.degree}</h3>
                      <p className="text-lg text-blue-600 dark:text-yellow-300 font-semibold">{item.institute}</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-3 mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {item.location}
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {item.duration}
                      </span>
                    </div>
                    
                    <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
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
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="flex items-center justify-center space-x-6">
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-blue-600 dark:bg-yellow-300 mr-2"></div>
              <span className="text-sm text-gray-700 dark:text-gray-300">Current</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-blue-300 dark:bg-yellow-100 mr-2"></div>
              <span className="text-sm text-gray-700 dark:text-gray-300">Completed</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-blue-100 dark:bg-yellow-50 mr-2"></div>
              <span className="text-sm text-gray-700 dark:text-gray-300">Future</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education