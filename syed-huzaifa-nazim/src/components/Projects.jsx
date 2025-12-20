import { motion } from 'framer-motion'
import { HiExternalLink, HiCode } from 'react-icons/hi'
import brandsocia from '../assets/brandsocia.png' // Ensure this exists

const projects = [
  {
    title: 'Brand Socia',
    description: 'A platform for brands to connect with influencers and for influencers to find brands to collaborate with.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: brandsocia,
    codeLink: 'https://github.com/SyedHuzaifaNazim/BrandSocia',
    projectLink: 'https://brandsocia.vercel.app/',
    category: 'Full Stack'
  },
  {
    title: 'Stream Wave',
    description: 'A platform for streaming movies and TV shows with a search functionality and a watch history.',
    tags: ['Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Redux'],
    image: 'https://cdn.dribbble.com/userupload/9422488/file/original-5e50a254a590ecbb87859477600b0497.png?resize=400x0',
    codeLink: 'https://github.com/SyedHuzaifaNazim/Stream-Wave',
    projectLink: 'https://stream-wave.vercel.app/',
    category: 'Full Stack'
  },
  {
    title: 'Portfolio Website',
    description: 'Custom designed and developed portfolio website with smooth animations and responsive design showcasing my work and skills.',
    tags: ['React.js', 'Framer Motion', 'Tailwind CSS', 'Vite'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    codeLink: 'https://github.com/SyedHuzaifaNazim/syed_huzaifa_nazim',
    projectLink: 'https://syed-huzaifa-nazim.vercel.app/',
    category: 'Frontend'
  }
]

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass-card rounded-2xl overflow-hidden group"
          >
            <div className="h-48 overflow-hidden relative">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <span className="absolute top-4 right-4 z-20 px-3 py-1 bg-black/60 backdrop-blur-md text-xs rounded-full border border-white/10">
                {project.category}
              </span>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs px-2 py-1 rounded bg-white/5 border border-white/10 text-gray-400">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-auto">
                <a href={project.projectLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-white hover:text-indigo-400 transition-colors">
                  <HiExternalLink className="w-4 h-4" /> Live Demo
                </a>
                <a href={project.codeLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                  <HiCode className="w-4 h-4" /> Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects