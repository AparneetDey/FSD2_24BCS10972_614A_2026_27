import React from 'react'

const links = [
  { label: 'GitHub', href: 'https://github.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Email', href: 'mailto:aparneet@example.com' },
]

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="w-full px-24 py-8 border-t border-gray-400 mt-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <p className="font-semibold">Aparneet Dey</p>
          <p className="text-sm text-gray-600">Full-stack Developer</p>
        </div>

        <ul className="flex gap-6">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium hover:underline"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <p className="text-sm text-gray-500 mt-6">
        © {year} Aparneet Dey. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
