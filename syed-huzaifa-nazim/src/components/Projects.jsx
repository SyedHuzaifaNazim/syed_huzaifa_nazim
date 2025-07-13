// src/components/Projects.jsx (updated with animations)
import { motion } from 'framer-motion'

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-featured online store with payment integration and admin dashboard.',
      tags: ['React', 'Node.js', 'MongoDB'],
      image: 'https://woovina.com/images/2022/03/31/mekog-cover.png',
      codeLink: '',
      projectLink: 'https://ecommerce-platform.example.com'
    },
    {
      title: 'Task Management App',
      description: 'Productivity application for team collaboration and task tracking.',
      tags: ['React', 'Firebase', 'Tailwind CSS'],
      image: 'https://embed-ssl.wistia.com/deliveries/4097039cdac9311d5cfa8a8e10502178.jpg?image_crop_resized=900x506',
      codeLink: '',
      projectLink: 'https://task-manager-app.example.com'
    },
    {
      title: 'Portfolio Website',
      description: 'Custom designed and developed portfolio for a creative professional.',
      tags: ['React.js', 'Framer Motion', 'Tailwind CSS'],
      image: 'https://cdn1.vectorstock.com/i/1000x1000/78/45/portfolio-banner-with-colorful-confetti-vector-21757845.jpg',
      codeLink: 'https://github.com/SyedHuzaifaNazim/syed_huzaifa_nazim',
      projectLink: 'https://syed-huzaifa-nazim.vercel.app/'
    }
  ]

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
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">My Projects</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-yellow-300 mx-auto"></div>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              variants={item}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="h-48 overflow-hidden relative group">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-600 dark:bg-yellow-300 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-blue-100 dark:bg-yellow-100 dark:bg-opacity-20 text-blue-600 dark:text-yellow-300 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex space-x-3">
                  <a href={project.projectLink} className="text-blue-600 dark:text-yellow-300 hover:underline">View Project</a>
                  <a href={project.codeLink} className="text-blue-600 dark:text-yellow-300 hover:underline">Code</a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <button className="px-6 py-3 border border-blue-600 dark:border-yellow-300 text-blue-600 dark:text-yellow-300 rounded-md hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors duration-300">
            <a href="https://github.com/SyedHuzaifaNazim?tab=repositories">View All Projects</a>
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects