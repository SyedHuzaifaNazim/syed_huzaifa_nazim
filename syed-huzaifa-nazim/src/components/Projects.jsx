import { motion } from 'framer-motion'
import { useState } from 'react'
import { ExternalLinkIcon, CodeIcon, EyeIcon } from '@heroicons/react/outline'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [hoveredProject, setHoveredProject] = useState(null)

  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-featured online store with payment integration, product management, and admin dashboard built with modern web technologies.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      codeLink: '',
      projectLink: 'https://ecommerce-platform.example.com',
      category: 'Full Stack'
    },
    {
      title: 'Task Management App',
      description: 'Productivity application for team collaboration and task tracking with real-time updates and drag-and-drop functionality.',
      tags: ['React', 'Firebase', 'Tailwind CSS', 'Redux'],
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      codeLink: '',
      projectLink: 'https://task-manager-app.example.com',
      category: 'Frontend'
    },
    {
      title: 'Portfolio Website',
      description: 'Custom designed and developed portfolio website with smooth animations and responsive design showcasing my work and skills.',
      tags: ['React.js', 'Framer Motion', 'Tailwind CSS', 'Vite'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      codeLink: 'https://github.com/SyedHuzaifaNazim/syed_huzaifa_nazim',
      projectLink: 'https://syed-huzaifa-nazim.vercel.app/',
      category: 'Frontend'
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather application with forecast data, location detection, and interactive charts for weather visualization.',
      tags: ['React', 'Chart.js', 'API Integration', 'Geolocation'],
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      codeLink: 'https://github.com/SyedHuzaifaNazim/weather-app',
      projectLink: 'https://weather-app.example.com',
      category: 'Frontend'
    },
    {
      title: 'Chat Application',
      description: 'Real-time messaging platform with rooms, user authentication, and file sharing capabilities.',
      tags: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      codeLink: 'https://github.com/SyedHuzaifaNazim/chat-app',
      projectLink: 'https://chat-app.example.com',
      category: 'Full Stack'
    },
    {
      title: 'Fitness Tracker',
      description: 'Comprehensive fitness application with workout planning, progress tracking, and social features.',
      tags: ['React Native', 'Firebase', 'Redux', 'Charts'],
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      codeLink: 'https://github.com/SyedHuzaifaNazim/fitness-tracker',
      projectLink: 'https://fitness-tracker.example.com',
      category: 'Mobile'
    }
  ]

  const filters = ['All', 'Frontend', 'Full Stack', 'Mobile']

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Featured Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6">
            A collection of my recent work and personal projects
          </p>
          <div className="w-20 h-1 bg-blue-600 dark:bg-yellow-300 mx-auto"></div>
        </motion.div>

        {/* Filter buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-blue-600 dark:bg-yellow-300 text-white dark:text-gray-900'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-yellow-100 dark:hover:text-gray-900'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={index}
              variants={item}
              whileHover={{ y: -8 }}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="h-52 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-sm">{project.description}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-blue-600 dark:bg-yellow-300 text-white dark:text-gray-900 text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-yellow-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-blue-100 dark:bg-yellow-100 dark:bg-opacity-20 text-blue-600 dark:text-yellow-300 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3 pt-2 border-t border-gray-100 dark:border-gray-800">
                  <a 
                    href={project.projectLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 dark:text-yellow-300 hover:text-blue-800 dark:hover:text-yellow-100 transition-colors duration-300"
                  >
                    <EyeIcon className="w-4 h-4 mr-1" />
                    Live Demo
                  </a>
                  {project.codeLink && (
                    <a 
                      href={project.codeLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-300"
                    >
                      <CodeIcon className="w-4 h-4 mr-1" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <a 
            href="https://github.com/SyedHuzaifaNazim?tab=repositories" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border-2 border-blue-600 dark:border-yellow-300 text-blue-600 dark:text-yellow-300 rounded-md hover:bg-blue-600 dark:hover:bg-yellow-300 hover:text-white dark:hover:text-gray-900 transition-all duration-300 font-medium"
          >
            View All Projects
            <ExternalLinkIcon className="w-4 h-4 ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects