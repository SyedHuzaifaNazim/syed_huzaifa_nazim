import ProjectCard from './ProjectCard';

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-featured online store with payment integration",
      tags: ["React", "Node.js", "Stripe", "MongoDB"],
      github: "#"
    },
    {
      title: "Task Management App",
      description: "Real-time collaborative task board with drag & drop",
      tags: ["Vue", "Firebase", "Tailwind CSS"],
      github: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Live weather forecasts with location detection",
      tags: ["JavaScript", "API Integration", "Geolocation"],
      github: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 dark:text-white">Projects</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-12 max-w-3xl">
          Here are some of my recent works. Each project includes live demos and source code.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}