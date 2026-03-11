import { motion } from 'framer-motion'
import { HiExternalLink, HiCode } from 'react-icons/hi'
import brandsocia from '../assets/brandsocia.png' // Ensure this exists

const projects = [
  {
    title: 'Brand Socia',
    description: 'A platform for brands to connect with influencers and for influencers to find brands to collaborate with.',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Redux'],
    image: brandsocia,
    codeLink: 'https://github.com/SyedHuzaifaNazim/BrandSocia',
    projectLink: 'https://brandsocia.com/',
    category: 'Full Stack'
  },
  {
    title: 'Tax Filerz & Co.',
    description: 'A comprehensive tax filing and financial management platform for individuals and businesses, offering seamless tax preparation, filing, and financial insights.',
    tags: ['wordpress', 'php', 'MySQL', 'Tailwind CSS', 'Redux'],
    image: 'https://img.freepik.com/premium-photo/tax-benefits-concept-finance-business-blue-b_94120-1783.jpg?w=1480',
    codeLink: 'https://github.com/SyedHuzaifaNazim/',
    projectLink: 'https://taxfilerz.com/',
    category: 'Full Stack'
  },
  {
    title: 'Portfolio Website',
    description: 'Custom designed and developed portfolio website with smooth animations and responsive design showcasing my work and skills.',
    tags: ['React.js', 'Framer Motion', 'Tailwind CSS', 'Vite'],
    image: 'https://media.licdn.com/dms/image/v2/D4D2DAQHm1I49BP6qiw/profile-treasury-image-shrink_800_800/B4DZtltVsqI8AY-/0/1766937943666?e=1773824400&v=beta&t=3Y93OtejQNMRUavvmHPKp9S0v-u7a8fCaVQRrneIOuc',
    codeLink: 'https://github.com/SyedHuzaifaNazim/syed_huzaifa_nazim',
    projectLink: 'https://syed-huzaifa-nazim.vercel.app/',
    category: 'Frontend'
  },
  {
    title: 'Apna Ghar Apni Zameen',
    description: 'A real estate platform for buying and selling properties with advanced search and filtering capabilities.',
    tags: ['Wordpress','React.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Redux'],
    image: 'https://img.freepik.com/free-psd/real-estate-house-property-web-banner-background-template_120329-4478.jpg?t=st=1773215185~exp=1773218785~hmac=846de2b708ce888e60ab15206c1f707a7578b5f823b95aa23c6469a6ae4dcdd5&w=1480',
    codeLink: 'https://github.com/SyedHuzaifaNazim/Apna-Ghar-Apni-Zameen',
    projectLink: 'https://apnagharapnizameen.com/',
    category: 'Full Stack'
  },
  {
    title: 'Cosmic Code 404 Solutions',
    description: 'A software house specializing in innovative solutions for the digital age, offering a wide range of services including web development, mobile app development, and custom software solutions.',
    tags: ['React.js', 'node.js', 'TypeScript', 'Tailwind CSS'],
    image: 'https://img.freepik.com/free-photo/technology-circuit-processor-innovation-network-concept_53876-124249.jpg?t=st=1773216143~exp=1773219743~hmac=ec1b5ef1e7fda182ced4e29ab5bda567698181859fe4b6beebd272de6d900614&w=1480',
    codeLink: 'https://github.com/SyedHuzaifaNazim/COSMOS-CODE-404/tree/main/cosmic-code-404-solutions',
    projectLink: 'https://CC4-coming-soon.netlify.app/',
    category: 'Frontend'
  },
  {
    title: 'SaaS Dashboard',
    description: 'A sleek and modern dashboard for managing SaaS applications, featuring real-time analytics and user management.',
    tags: ['React.js', 'Framer Motion', 'Tailwind CSS', 'Vite','Docker','Kubernetes','node.js','Express.js','PostgreSQL','n8n'],
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    codeLink: 'https://github.com/SyedHuzaifaNazim/saas-automated-engine',
    projectLink: 'https://saas-dashboard-automated.netlify.app/',
    category: 'Full Stack'
  }
]

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-7xl italic font-bold mb-12">Featured Projects</h2>
      
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