import { LinkedInIcon, GitHubIcon, MailIcon, UpworkIcon } from './icons.jsx'

const channels = [
  { label: 'LinkedIn', command: 'open linkedin.com/in/yourname', href: 'https://linkedin.com/in/yourname', Icon: LinkedInIcon },
  { label: 'GitHub', command: 'open github.com/yourname', href: 'https://github.com/yourname', Icon: GitHubIcon },
  { label: 'Email', command: 'mail you@example.com', href: 'mailto:you@example.com', Icon: MailIcon },
  { label: 'Upwork', command: 'open upwork.com/freelancers/yourname', href: 'https://upwork.com/freelancers/yourname', Icon: UpworkIcon },
]

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-content px-6 py-16 sm:py-20">
      <h2 className="font-mono text-2xl text-ink">Contact</h2>
      <p className="mt-2 max-w-xl text-muted">
        Have a problem to solve or a system to build? Reach out.
      </p>

      <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-edge bg-edge sm:grid-cols-2">
        {channels.map(({ label, command, href, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-4 bg-surface p-5 hover:bg-surface2 transition-colors"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border border-edge text-muted group-hover:border-accent/50 group-hover:text-accent transition-colors">
              <Icon className="h-4 w-4" />
            </span>
            <div>
              <p className="font-mono text-sm text-ink">{label}</p>
              <p className="font-mono text-xs text-muted">$ {command}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
