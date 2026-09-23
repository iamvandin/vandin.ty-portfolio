import ThemeToggle from './ThemeToggle.jsx'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ name }) {
  return (
    <header className="sticky top-0 z-40 border-b border-edge/80 bg-bg/85 backdrop-blur">
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-sm text-ink hover:text-accent transition-colors">
          {name}
        </a>
        <ul className="hidden gap-8 sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-sm text-muted hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-sm border border-accent/40 px-3 py-1.5 font-mono text-xs text-accent hover:bg-accent/10 transition-colors sm:inline-block"
          >
            Hire Me
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
