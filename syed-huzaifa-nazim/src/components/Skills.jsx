export default function Skills() {
  const skills = [
    { category: 'Frontend', techs: ['React', 'Vue', 'Tailwind CSS', 'JavaScript'] },
    { category: 'Backend', techs: ['Node.js', 'Express', 'Python', 'Django'] },
    { category: 'Database', techs: ['MongoDB', 'PostgreSQL', 'Firebase', 'Redis'] },
    { category: 'DevOps', techs: ['Docker', 'AWS', 'CI/CD', 'Kubernetes'] }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">
          Technical Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">
                {skill.category}
              </h3>
              <div className="space-y-3">
                {skill.techs.map((tech, i) => (
                  <div key={i} className="flex items-center">
                    <div className="w-full bg-gray-200 dark:bg-gray-600 h-2 rounded-full">
                      <div 
                        className="bg-indigo-600 h-2 rounded-full" 
                        style={{ width: `${Math.floor(Math.random() * 40) + 60}%` }}
                      ></div>
                    </div>
                    <span className="ml-3 dark:text-gray-300">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}