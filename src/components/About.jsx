const stack = ['Linux', 'Docker', 'Bash', 'Microsoft 365', 'CI/CD', 'Networking']

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-content px-6 py-16 sm:py-20">
      <div className="grid gap-10 sm:grid-cols-3">
        <div>
          <h2 className="font-mono text-2xl text-ink">About Me</h2>
        </div>
        <div className="sm:col-span-2">
          <p className="text-muted leading-relaxed">
            IT professional with experience in technical support, troubleshooting
            and infrastructure. Currently expanding into DevOps, automation,
            Linux, containers and CI/CD.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {stack.map((item) => (
              <span
                key={item}
                className="rounded-sm border border-edge bg-surface px-3 py-1 font-mono text-xs text-ink"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
