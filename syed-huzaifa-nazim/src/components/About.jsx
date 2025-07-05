// src/components/About.jsx (updated with animations)
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
    <section id="about" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-yellow-300 mx-auto"></div>
        </motion.div>
        
        <motion.div 
          className="flex flex-col md:flex-row items-center"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            className="md:w-1/3 mb-8 md:mb-0 flex justify-center"
            variants={item}
          >
            <div className="w-64 h-64 rounded-lg overflow-hidden shadow-lg relative group">
              <div className="absolute inset-0 bg-blue-600 dark:bg-yellow-300 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <img 
                src={image}
                alt="About" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-2/3 md:pl-12"
            variants={item}
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Who I Am</h3>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              I'm a passionate developer/designer with X years of experience creating 
              digital solutions for clients across various industries. My approach 
              combines technical expertise with creative problem-solving.
            </p>
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              When I'm not coding, you can find me [hobbies/interests]. I believe 
              in continuous learning and staying updated with the latest industry trends.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-blue-600 dark:text-yellow-300">Name:</h4>
                <p className="text-gray-700 dark:text-gray-300">Syed Huzaifa Nazim</p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-600 dark:text-yellow-300">Email:</h4>
                <p className="text-gray-700 dark:text-gray-300">huzaifanazim154@gmail.com</p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-600 dark:text-yellow-300">From:</h4>
                <p className="text-gray-700 dark:text-gray-300">Karachi, Pakistan</p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-600 dark:text-yellow-300">Experience:</h4>
                <p className="text-gray-700 dark:text-gray-300">X+ Years</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About