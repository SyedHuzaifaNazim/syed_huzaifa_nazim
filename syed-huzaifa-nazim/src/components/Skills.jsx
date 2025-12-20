import { motion } from 'framer-motion'
import { useState } from 'react'

const skillCategories = {
  frontend: [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Next.js', level: 78 },
    { name: 'TypeScript', level: 80 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Tailwind CSS', level: 90 }
  ],
  backend: [
    { name: 'Node.js', level: 80 },
    { name: 'Express.js', level: 75 },
    { name: 'Python', level: 70 },
    { name: 'MongoDB', level: 85 },
    { name: 'MySQL', level: 80 },
    { name: 'PostgreSQL', level: 75 }
  ],
  tools: [
    { name: 'Git', level: 90 },
    { name: 'Docker', level: 70 },
    { name: 'AWS', level: 65 },
    { name: 'Figma', level: 75 },
    { name: 'Jest', level: 80 }
  ],
  soft: [
    { name: 'Problem Solving', level: 90 },
    { name: 'Team Collaboration', level: 85 },
    { name: 'Communication', level: 88 }
  ]
}

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend')

  return (
    <section id="skills" className="py-20">
      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-4">Skills & Technologies</h2>
        
        {/* Tabs */}
        <div className="flex flex-wrap gap-2">
          {Object.keys(skillCategories).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeCategory === cat 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-white/5 text-gray-400 hover:bg-white/10'
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories[activeCategory].map((skill, idx) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="glass-card p-5 rounded-xl border border-white/5"
          >
            <div className="flex justify-between mb-2">
              <h3 className="font-semibold text-gray-200">{skill.name}</h3>
              <span className="text-sm text-indigo-400">{skill.level}%</span>
            </div>
            <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: 0.1 }}
                className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Skills