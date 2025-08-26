import { motion } from 'framer-motion'
import image from '../assets/WhatsApp Image 2024-09-08 at 01.06.11_26f41571.jpg'

const About = () => {
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
    <section id="about" className="py-12 md:py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-yellow-300 mx-auto"></div>
        </motion.div>
        
        <motion.div 
          className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div 
            className="w-full lg:w-2/5 flex justify-center"
            variants={item}
          >
            <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-lg overflow-hidden shadow-lg relative group">
              <div className="absolute inset-0 bg-blue-600 dark:bg-yellow-300 opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>
              <img 
                src={image}
                alt="About" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full lg:w-3/5"
            variants={item}
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Who I Am</h3>
            <p className="mb-4 text-gray-700 dark:text-gray-300 text-base md:text-lg">
              I'm a passionate Web Developer currently pursuing a Bachelor's degree in
               Artificial Intelligence from DUET. With hands-on experience in technologies
                like React.js, Next.js, Node.js, and MongoDB, I enjoy building full-stack 
                applications that solve real-world problems. My journey includes developing 
                dynamic systems such as a family networking platform, a course enrollment app, 
                and microfinance solutions during hackathons.
            </p>
            <p className="mb-6 text-gray-700 dark:text-gray-300 text-base md:text-lg">
              Beyond academics, I've explored modern frameworks like Remix.js and 
              Shopify App development, continuously challenging myself to learn and adapt. 
              I value clean code, user-focused design, and scalable architecture. 
              Whether working solo or collaborating with teams, I'm always striving to
               build impactful and innovative digital experiences.
            </p>
            
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 md:gap-6">
              <div className="bg-white dark:bg-gray-700 p-3 md:p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-blue-600 dark:text-yellow-300 text-sm md:text-base">Name:</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">Syed Huzaifa Nazim</p>
              </div>
              <div className="bg-white dark:bg-gray-700 p-3 md:p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-blue-600 dark:text-yellow-300 text-sm md:text-base">Email:</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base break-all">huzaifanazim154@gmail.com</p>
              </div>
              <div className="bg-white dark:bg-gray-700 p-3 md:p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-blue-600 dark:text-yellow-300 text-sm md:text-base">From:</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">Karachi, Pakistan</p>
              </div>
              <div className="bg-white dark:bg-gray-700 p-3 md:p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-blue-600 dark:text-yellow-300 text-sm md:text-base">Experience:</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">3+ Years</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About