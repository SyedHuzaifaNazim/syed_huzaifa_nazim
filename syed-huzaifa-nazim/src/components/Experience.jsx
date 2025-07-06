// src/components/Experience.jsx
const Experience = () => {
  const experiences = [
    {
      role: 'Full Stack Developer',
      company: 'Tax Filerz & Co.',
      period: '2025 - Present',
      description: 'Lead development team building enterprise applications. Implemented CI/CD pipelines and improved deployment processes.'
    },
    {
      role: 'Frontend Developer',
      company: 'Self -Employed',
      period: '2024 - 2025',
      description: 'Developed responsive websites and web applications for various clients. Collaborated with designers to implement UI/UX.'
    }
  ]

  return (
    <section id="experience" className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-8 pb-8 border-b border-card-border last:border-0 last:mb-0 last:pb-0">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <span className="text-primary">{exp.company} • {exp.period}</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience