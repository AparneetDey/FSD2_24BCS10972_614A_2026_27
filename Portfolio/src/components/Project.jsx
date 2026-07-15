import React from 'react'

const projects = [
  {
    title: 'Todo App',
    description: 'A simple task manager with add, complete, and delete functionality.',
    tech: ['React', 'Tailwind CSS'],
    github: '#',
    live: '#',
  },
  {
    title: 'Portfolio Site',
    description: 'Personal portfolio showcasing projects, skills, and experience.',
    tech: ['React', 'Vite', 'Tailwind CSS'],
    github: '#',
    live: '#',
  },
  {
    title: 'Weather Dashboard',
    description: 'Search cities and view current weather with a clean UI.',
    tech: ['JavaScript', 'API', 'CSS'],
    github: '#',
    live: '#',
  },
]

const Project = () => {
  return (
    <section id="projects" className="w-full px-24 py-12">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <article
            key={project.title}
            className="border border-gray-200 rounded-xl p-5 flex flex-col gap-3 hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-700 flex-1">{project.description}</p>

            <ul className="flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <li
                  key={item}
                  className="px-3 py-1 rounded-full bg-gray-100 text-sm font-medium"
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex gap-4 pt-2">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold hover:underline"
              >
                GitHub
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold hover:underline"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Project
