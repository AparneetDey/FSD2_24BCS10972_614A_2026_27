import React from 'react'

const experiences = [
  {
    role: 'Frontend Developer Intern',
    company: 'Tech Company',
    period: 'Jun 2025 – Aug 2025',
    description: [
      'Built and maintained React components for the company dashboard.',
      'Collaborated with designers to implement responsive UI layouts.',
      'Fixed bugs and improved page load performance across key flows.',
    ],
    tech: ['React', 'JavaScript', 'Tailwind CSS'],
  },
  {
    role: 'Freelance Web Developer',
    company: 'Self-employed',
    period: 'Jan 2024 – Present',
    description: [
      'Developed portfolio and business websites for small clients.',
      'Handled full project lifecycle from design feedback to deployment.',
      'Integrated contact forms, APIs, and basic backend features.',
    ],
    tech: ['React', 'Node.js', 'MongoDB'],
  },
  {
    role: 'Open Source Contributor',
    company: 'GitHub',
    period: '2023 – Present',
    description: [
      'Contributed documentation fixes and small feature improvements.',
      'Reviewed pull requests and helped triage community issues.',
      'Worked with maintainers to follow project coding standards.',
    ],
    tech: ['Git', 'JavaScript', 'Markdown'],
  },
]

const Experience = () => {
  return (
    <section id="experience" className="w-full px-24 py-12">
      <h2 className="text-3xl font-bold mb-10">Experience</h2>

      <div className="flex flex-col gap-6">
        {experiences.map((item) => (
          <article
            key={`${item.role}-${item.company}`}
            className="w-full border border-gray-200 rounded-xl p-6 flex flex-col gap-4 hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
              <div>
                <h3 className="text-xl font-semibold">{item.role}</h3>
                <p className="text-gray-600">{item.company}</p>
              </div>
              <p className="text-sm font-medium text-gray-500 shrink-0">{item.period}</p>
            </div>

            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {item.description.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            <ul className="flex flex-wrap gap-2">
              {item.tech.map((skill) => (
                <li
                  key={skill}
                  className="px-3 py-1 rounded-full bg-gray-100 text-sm font-medium"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experience
