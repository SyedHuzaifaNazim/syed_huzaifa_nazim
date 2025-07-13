// src/components/Education.jsx
import { motion } from 'framer-motion'
// import { AcademicCapIcon } from '@heroicons/react/solid'
import { AcademicCapIcon } from '@heroicons/react/24/solid' 

const education = [
  {
    degree: 'B.S. in Artificial Intelligence',
    institute: 'Dawood University of Engineering & Technology',
    duration: '2023 – Present',
    location: 'Karachi, Pakistan',
  },
  {
    degree: 'Web and Mobile App Development',
    institute: 'Saylani mass IT Training (SMIT)',
    duration: '2023 – 2024',
    location: 'Karachi, Pakistan',
  },
  {
    degree: 'Intermediate (Pre‑Engineering)',
    institute: 'Govt. Degree Science College',
    duration: '2021 – 2023',
    location: 'Karachi, Pakistan',
  },
]

const Education = () => {
  return (
    <section id="education" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Education</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-yellow-300 mx-auto"></div>
        </motion.div>

        {/* Education Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {education.map((item, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-center group..."
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-4">
                <AcademicCapIcon className="w-8 h-8 text-blue-600 dark:text-yellow-300" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover: stroke-white">{item.degree}</h3>
              <p className="text-gray-700 dark:text-gray-300 group-hover: text-white">{item.institute}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 group-hover: text-white">{item.location}</p>
              <p className="text-sm italic text-gray-500 dark:text-gray-400 mt-1 group-hover: text-white">{item.duration}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education

