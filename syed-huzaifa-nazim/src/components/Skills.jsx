import { useState } from 'react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  
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
      { name: 'Jest', level: 80 },
      { name: 'Webpack', level: 75 }
    ],
    soft: [
      { name: 'Problem Solving', level: 90 },
      { name: 'Team Collaboration', level: 85 },
      { name: 'Communication', level: 88 },
      { name: 'Project Management', level: 75 },
      { name: 'Creativity', level: 82 },
      { name: 'Adaptability', level: 87 }
    ]
  };

  const getProgressColor = (level) => {
    if (level >= 85) return 'bg-green-500';
    if (level >= 70) return 'bg-blue-500';
    if (level >= 60) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const getSkillIcon = (skillName) => {
    const icons = {
      'JavaScript': 'JS',
      'React': '⚛️',
      'Next.js': 'NX',
      'TypeScript': 'TS',
      'HTML/CSS': 'HTML',
      'Tailwind CSS': 'TW',
      'Node.js': 'Node',
      'Express.js': 'Exp',
      'Python': 'Py',
      'MongoDB': 'MDB',
      'MySQL': 'SQL',
      'PostgreSQL': 'PG',
      'Git': 'Git',
      'Docker': '🐳',
      'AWS': 'AWS',
      'Figma': 'Fig',
      'Jest': 'Jest',
      'Webpack': 'WP'
    };
    return icons[skillName] || skillName.substring(0, 2);
  };

  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6">
            Here's what I bring to the table
          </p>
          <div className="w-20 h-1 bg-blue-600 dark:bg-yellow-300 mx-auto"></div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {Object.keys(skillCategories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-blue-600 dark:bg-yellow-300 text-white dark:text-gray-900'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-yellow-100 dark:hover:text-gray-900'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories[activeCategory].map((skill, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-yellow-100 dark:bg-opacity-20 flex items-center justify-center mr-4">
                  <span className="text-lg font-bold text-blue-600 dark:text-yellow-300">
                    {getSkillIcon(skill.name)}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {skill.name}
                  </h3>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {skill.level}% Proficiency
                  </span>
                </div>
              </div>
              
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                <div
                  className={`h-2.5 rounded-full ${getProgressColor(skill.level)} transition-all duration-1000 ease-out`}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              
              <div className="flex justify-between mt-2">
                <span className="text-xs text-gray-500 dark:text-gray-400">Beginner</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">Expert</span>
              </div>
            </div>
          ))}
        </div>

        {/* Skill Level Legend */}
        <div className="mt-12 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
          <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white text-center">
            Proficiency Levels
          </h4>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { level: 'Beginner', range: '0-59%', color: 'bg-red-500' },
              { level: 'Intermediate', range: '60-69%', color: 'bg-yellow-500' },
              { level: 'Advanced', range: '70-84%', color: 'bg-blue-500' },
              { level: 'Expert', range: '85-100%', color: 'bg-green-500' },
            ].map((item, index) => (
              <div key={index} className="flex items-center">
                <div className={`w-4 h-4 rounded-full mr-2 ${item.color}`}></div>
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  {item.level} <span className="text-gray-500">({item.range})</span>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            Continuously learning and expanding my skill set to stay current with industry trends
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;