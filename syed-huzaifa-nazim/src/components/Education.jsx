import { motion } from 'framer-motion'

const education = [
  {
    degree: 'Web and Mobile App Development',
    institute: 'Saylani mass IT Training (SMIT)',
    duration: '2023 – 2024',
    location: 'Karachi, Pakistan',
    description: 'Comprehensive training in modern web and mobile development technologies including React, React Native, and full-stack development principles.'
  },
  {
    degree: 'B.S. in Artificial Intelligence',
    institute: 'Dawood University of Engineering & Technology',
    duration: '2023 – Present',
    location: 'Karachi, Pakistan',
    description: 'Currently pursuing degree with focus on machine learning, neural networks, and AI application development. GPA: 3.8/4.0'
  },
  {
    degree: 'Intermediate (Pre‑Engineering)',
    institute: 'Govt. Degree Science College',
    duration: '2021 – 2023',
    location: 'Karachi, Pakistan',
    description: 'Completed with distinction in Physics, Chemistry, and Mathematics.'
  },
]

const Education = () => {
  return (
    <section id="education" className="py-10">
      <h2 className="text-3xl font-bold mb-12">Education</h2>
      <div className="grid gap-6">
        {education.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 rounded-2xl"
          >
            <div className="flex flex-col md:flex-row justify-between md:items-center mb-2">
              <h3 className="text-xl font-bold text-white">{item.degree}</h3>
              <span className="text-sm text-indigo-400 font-mono">{item.duration}</span>
            </div>
            <p className="text-lg text-gray-300 mb-2">{item.institute}</p>
            <p className="text-gray-400 text-sm mb-4">{item.location}</p>
            <p className="text-gray-400 leading-relaxed text-sm">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Education