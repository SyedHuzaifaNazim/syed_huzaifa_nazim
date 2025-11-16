import { motion } from 'framer-motion'
import image from '../assets/WhatsApp Image 2024-09-08 at 01.06.11_26f41571.jpg'

const About = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  const cardVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="about" className="relative py-16 md:py-24 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 dark:bg-yellow-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 dark:bg-yellow-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="inline-block text-sm md:text-base font-semibold text-blue-600 dark:text-yellow-300 mb-3 tracking-wide uppercase"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Get to Know Me
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight">
            About <span className="bg-gradient-to-r from-blue-600 to-blue-400 dark:from-yellow-300 dark:to-yellow-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-blue-600 dark:via-yellow-300 to-blue-600 dark:to-yellow-300"></div>
            <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-yellow-300"></div>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent via-blue-600 dark:via-yellow-300 to-blue-600 dark:to-yellow-300"></div>
          </div>
        </motion.div>
        
        <motion.div 
          className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Image Section */}
          <motion.div 
            className="w-full lg:w-2/5 flex justify-center lg:justify-start"
            variants={item}
          >
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-blue-400/20 dark:from-yellow-300/20 dark:to-yellow-500/20 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Image Container */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-3xl">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/30 via-transparent to-transparent dark:from-yellow-300/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                
                {/* Border Glow */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/50 dark:group-hover:border-yellow-400/50 rounded-2xl transition-all duration-500"></div>
                
                <img 
                  src={image}
                  alt="About" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              {/* Decorative Corner Elements */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-blue-600 dark:border-yellow-300 opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-blue-600 dark:border-yellow-300 opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </motion.div>
          
          {/* Content Section */}
          <motion.div 
            className="w-full lg:w-3/5 space-y-6"
            variants={item}
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-gray-900 dark:text-white relative inline-block">
                  Who I Am
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-transparent dark:from-yellow-300"></span>
                </h3>
              </div>
              
              <div className="space-y-5">
                <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed">
                  I'm a passionate <span className="font-semibold text-blue-600 dark:text-yellow-300">Web Developer</span> currently pursuing a Bachelor's degree in
                  <span className="font-semibold text-blue-600 dark:text-yellow-300"> Artificial Intelligence</span> from DUET. With hands-on experience in technologies
                  like React.js, Next.js, Node.js, and MongoDB, I enjoy building full-stack 
                  applications that solve real-world problems. My journey includes developing 
                  dynamic systems such as a family networking platform, a course enrollment app, 
                  and microfinance solutions during hackathons.
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed">
                  Beyond academics, I've explored modern frameworks like Remix.js and 
                  Shopify App development, continuously challenging myself to learn and adapt. 
                  I value clean code, user-focused design, and scalable architecture. 
                  Whether working solo or collaborating with teams, I'm always striving to
                  build impactful and innovative digital experiences.
                </p>
              </div>
            </div>
            
            {/* Info Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-8">
              <motion.div
                className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-5 md:p-6 rounded-xl shadow-md hover:shadow-xl border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300 overflow-hidden"
                variants={cardVariants}
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent dark:from-yellow-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1 h-6 bg-gradient-to-b from-blue-600 to-blue-400 dark:from-yellow-300 dark:to-yellow-500 rounded-full"></div>
                    <h4 className="font-semibold text-blue-600 dark:text-yellow-300 text-sm md:text-base tracking-wide">Name</h4>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg font-medium">Syed Huzaifa Nazim</p>
                </div>
              </motion.div>
              
              <motion.div
                className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-5 md:p-6 rounded-xl shadow-md hover:shadow-xl border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300 overflow-hidden"
                variants={cardVariants}
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent dark:from-yellow-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1 h-6 bg-gradient-to-b from-blue-600 to-blue-400 dark:from-yellow-300 dark:to-yellow-500 rounded-full"></div>
                    <h4 className="font-semibold text-blue-600 dark:text-yellow-300 text-sm md:text-base tracking-wide">Email</h4>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg font-medium break-all">huzaifanazim154@gmail.com</p>
                </div>
              </motion.div>
              
              <motion.div
                className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-5 md:p-6 rounded-xl shadow-md hover:shadow-xl border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300 overflow-hidden"
                variants={cardVariants}
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent dark:from-yellow-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1 h-6 bg-gradient-to-b from-blue-600 to-blue-400 dark:from-yellow-300 dark:to-yellow-500 rounded-full"></div>
                    <h4 className="font-semibold text-blue-600 dark:text-yellow-300 text-sm md:text-base tracking-wide">Location</h4>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg font-medium">Karachi, Pakistan</p>
                </div>
              </motion.div>
              
              <motion.div
                className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-5 md:p-6 rounded-xl shadow-md hover:shadow-xl border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300 overflow-hidden"
                variants={cardVariants}
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent dark:from-yellow-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1 h-6 bg-gradient-to-b from-blue-600 to-blue-400 dark:from-yellow-300 dark:to-yellow-500 rounded-full"></div>
                    <h4 className="font-semibold text-blue-600 dark:text-yellow-300 text-sm md:text-base tracking-wide">Experience</h4>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg font-medium">3+ Years</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About