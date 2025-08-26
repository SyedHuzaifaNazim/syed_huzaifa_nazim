import { motion } from 'framer-motion'
import {
  FaJs, FaReact, FaNodeJs, FaPython, FaCss3Alt, FaCuttlefish, FaRProject,
} from 'react-icons/fa'
import {
  SiMysql, SiMongodb, SiOracle, SiRedux, SiNextdotjs, SiExpress,
} from 'react-icons/si'

const Skills = () => {
  const skills = [
    { name: 'JavaScript', level: 90, icon: <FaJs className="text-yellow-400" /> },
    { name: 'React', level: 85, icon: <FaReact className="text-blue-500" /> },
    { name: 'Redux', level: 82, icon: <SiRedux className="text-purple-500" /> },
    { name: 'Next.js', level: 78, icon: <SiNextdotjs className="text-black dark:text-white" /> },
    { name: 'Node.js', level: 80, icon: <FaNodeJs className="text-green-500" /> },
    { name: 'Express.js', level: 79, icon: <SiExpress className="text-gray-600 dark:text-gray-300" /> },
    { name: 'CSS/Tailwind', level: 90, icon: <FaCss3Alt className="text-blue-600" /> },
    { name: 'Python', level: 80, icon: <FaPython className="text-yellow-500" /> },
    { name: 'C/C++', level: 73, icon: <FaCuttlefish className="text-gray-700 dark:text-gray-300" /> },
    { name: 'R', level: 70, icon: <FaRProject className="text-blue-400" /> },
    { name: 'MySQL', level: 80, icon: <SiMysql className="text-orange-500" /> },
    { name: 'MongoDB', level: 90, icon: <SiMongodb className="text-green-600" /> },
    { name: 'Oracle', level: 84, icon: <SiOracle className="text-red-500" /> },
  ]

  const professionalSkills = [
    'Communication', 'Teamwork', 'Problem Solving', 'Creativity', 'Time Management', 'Leadership',
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
    },
  }

  const fadeSlideUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const fallFromTop = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: 'spring', bounce: 0.3 } },
  }

  return (
    <section id="skills" className="py-12 md:py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-8 md:mb-12"
          variants={fadeSlideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">My Skills</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-yellow-300 mx-auto"></div>
        </motion.div>

        <motion.div
          className="flex flex-col lg:flex-row gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Technical Skills */}
          <motion.div 
            className="w-full lg:w-1/2"
            variants={fallFromTop}
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Technical Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="flex items-center p-3 sm:p-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                  variants={fadeSlideUp}
                  whileHover={{ y: -3 }}
                >
                  <div className="text-xl sm:text-2xl mr-3 sm:mr-4 flex-shrink-0">{skill.icon}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 truncate">{skill.name}</span>
                      <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 ml-2">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="bg-blue-600 dark:bg-yellow-300 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Professional Skills */}
          <motion.div 
            className="w-full lg:w-1/2"
            variants={fallFromTop}
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Professional Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {professionalSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="flex items-center p-3 sm:p-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                  variants={fadeSlideUp}
                  whileHover={{ y: -3 }}
                >
                  <div className="p-1.5 sm:p-2 mr-3 bg-blue-100 dark:bg-yellow-100 dark:bg-opacity-20 rounded-full flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills