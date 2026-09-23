const services = [
  {
    name: 'IT Support',
    detail: 'Diagnosing hardware, software and network issues, and getting people back to work fast.',
  },
  {
    name: 'Microsoft 365',
    detail: 'Tenant setup, user administration, security policies, and mailbox and Teams management.',
  },
  {
    name: 'Linux Administration',
    detail: 'Server hardening, user and permission management, package upgrades and cron-based maintenance.',
  },
  {
    name: 'Automation',
    detail: 'Replacing manual, repetitive tasks with scripts and scheduled jobs that just run.',
  },
  {
    name: 'Docker',
    detail: 'Containerizing applications and writing Compose setups that are easy to reproduce and ship.',
  },
  {
    name: 'CI/CD',
    detail: 'Building pipelines that test and deploy code automatically, so releases stop being risky.',
  },
]

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-content px-6 py-16 sm:py-20">
      <h2 className="font-mono text-2xl text-ink">Services</h2>
      <p className="mt-2 max-w-xl text-muted">
        Where I spend most of my time, from day-to-day support to the systems behind it.
      </p>

      <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-edge bg-edge sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div key={service.name} className="bg-surface p-6">
            <div className="flex items-center gap-2">
              <span className="status-dot h-1.5 w-1.5 rounded-full bg-accent" />
              <h3 className="font-mono text-sm text-ink">{service.name}</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted">{service.detail}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
