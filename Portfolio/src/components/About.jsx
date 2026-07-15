import React from 'react'

const About = () => {
  return (
    <section id="about" className="w-full px-24 py-12">
      <h2 className="text-3xl font-bold mb-4">About</h2>

      <p className="text-lg text-gray-700 max-w-2xl mb-6">
        I'm a full-stack developer who enjoys building clean, functional web apps.
        I like turning ideas into real products and learning new tools along the way.
      </p>

      <div className="max-w-2xl">
        <h3 className="text-xl font-semibold mb-2">Skills</h3>
        <ul className="flex flex-wrap gap-2">
          {['React', 'JavaScript', 'Node.js', 'Tailwind CSS', 'Git'].map((skill) => (
            <li
              key={skill}
              className="px-3 py-1 rounded-full bg-gray-100 text-sm font-medium"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default About
