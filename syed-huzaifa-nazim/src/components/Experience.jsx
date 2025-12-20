import { motion } from 'framer-motion'

const experiences = [
  {
    role: 'Full Stack Developer',
    company: 'Tax Filerz & Co.',
    period: '2025 - Present',
    description: 'Lead development team building enterprise applications. Implemented CI/CD pipelines and improved deployment processes.',
    tech: ['React', 'Node.js', 'MongoDB', 'AWS', 'Docker']
  },
  {
    role: 'Frontend Developer',
    company: 'Self-Employed',
    period: '2024 - 2025',
    description: 'Developed responsive websites and web applications for various clients. Collaborated with designers to implement UI/UX.',
    tech: ['React', 'JavaScript', 'CSS', 'Figma']
  }
]

const Experience = () => {
  return (
    <section id="experience" className="py-10">
      <motion.h2 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        className="text-3xl font-bold mb-12"
      >
        Work Experience
      </motion.h2>
      
      <div className="relative border-l border-white/10 ml-3 space-y-12">
        {experiences.map((exp, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="relative pl-8"
          >
            <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
            
            <div className="glass-card p-6 rounded-2xl hover:bg-white/5 transition-colors">
              <span className="text-sm text-indigo-400 font-mono mb-2 block">{exp.period}</span>
              <h3 className="text-xl font-bold text-white">{exp.role}</h3>
              <p className="text-gray-400 text-sm mb-4">{exp.company}</p>
              <p className="text-gray-300 mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.tech.map(t => (
                  <span key={t} className="text-xs px-2 py-1 rounded bg-white/5 border border-white/10 text-gray-400">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Experience