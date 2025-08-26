import { motion } from 'framer-motion'

const Skills = () => {
  const skills = [
    { name: 'JavaScript', level: 90, icon: 'JS' },
    { name: 'React', level: 85, icon: 'React' },
    { name: 'Redux', level: 82, icon: 'Redux' },
    { name: 'Next.js', level: 78, icon: 'Next' },
    { name: 'Node.js', level: 80, icon: 'Node' },
    { name: 'Express.js', level: 79, icon: 'Express' },
    { name: 'CSS/Tailwind', level: 90, icon: 'CSS' },
    { name: 'Python', level: 80, icon: 'Python' },
    { name: 'C/C++', level: 73, icon: 'C++' },
    { name: 'R', level: 70, icon: 'R' },
    { name: 'MySQL', level: 80, icon: 'SQL' },
    { name: 'MongoDB', level: 90, icon: 'Mongo' },
    { name: 'Oracle', level: 84, icon: 'Oracle' },
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

  // Function to get icon background color based on technology
  const getIconColor = (name) => {
    const colorMap = {
      'JavaScript': 'bg-yellow-400 text-yellow-900',
      'React': 'bg-blue-500 text-white',
      'Redux': 'bg-purple-500 text-white',
      'Next.js': 'bg-black text-white dark:bg-white dark:text-black',
      'Node.js': 'bg-green-500 text-white',
      'Express.js': 'bg-gray-600 text-white dark:bg-gray-300 dark:text-gray-800',
      'CSS/Tailwind': 'bg-blue-600 text-white',
      'Python': 'bg-yellow-500 text-yellow-900',
      'C/C++': 'bg-gray-700 text-white dark:bg-gray-300 dark:text-gray-800',
      'R': 'bg-blue-400 text-white',
      'MySQL': 'bg-orange-500 text-white',
      'MongoDB': 'bg-green-600 text-white',
      'Oracle': 'bg-red-500 text-white',
    }
    return colorMap[name] || 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white'
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
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold mr-3 sm:mr-4 flex-shrink-0 ${getIconColor(skill.name)}`}>
                    {skill.icon}
                  </div>
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