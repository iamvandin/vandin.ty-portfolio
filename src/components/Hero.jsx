export default function Hero({ name, role }) {
  return (
    <section id="top" className="mx-auto max-w-content px-6 pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div className="mb-8 inline-flex items-center gap-2 rounded-sm border border-edge bg-surface px-3 py-1.5">
        <span className="status-dot h-2 w-2 rounded-full bg-accent" />
        <span className="font-mono text-xs text-muted">available for new work</span>
      </div>

      <h1 className="text-4xl font-mono font-medium leading-tight text-ink sm:text-6xl">
        {name}
      </h1>
      <p className="mt-3 font-mono text-sm tracking-wide text-accent sm:text-base">
        IT Support <span className="text-muted">·</span> DevOps
      </p>

      <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
        I help businesses troubleshoot IT problems, automate repetitive tasks
        and deploy reliable systems.
      </p>

      <div className="mt-9 flex flex-wrap gap-4">
        <a
          href="#contact"
          className="rounded-sm bg-accent px-5 py-2.5 font-mono text-sm font-medium text-bg hover:bg-accent-dim transition-colors"
        >
          Hire Me
        </a>
        <a
          href="#projects"
          className="rounded-sm border border-edge px-5 py-2.5 font-mono text-sm text-ink hover:border-accent/60 hover:text-accent transition-colors"
        >
          View Projects
        </a>
      </div>
    </section>
  )
}
