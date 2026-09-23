import { ArrowIcon } from "./icons.jsx";

const projects = [
  {
    name: "Linux Server Monitoring, Alerting & Recovery Tool",
    description:
      "Developed a Bash-based Linux monitoring system that tracks CPU, memory, and disk usage and classifies system health into OK, WARNING, and CRITICAL states. The tool runs automatically through Cron, records monitoring activity, generates alerts when resource states change, tracks previous states to prevent repeated alerts, and detects recovery when a resource returns to a healthy state.",
    tags: ["Linux", "Bash", "Cron", "Git", "Shell Scripting"],
    href: "https://github.com/iamvandin/freelance-portfolio",
  },
  {
    name: "Linux Server Monitoring",
    description:
      "A lightweight monitoring setup that tracks CPU, memory, disk and service uptime across a fleet of Linux servers, with alerts on threshold breaches.",
    tags: ["Linux", "Bash", "Cron", "Alerting"],
    href: "https://github.com/iamvandin/freelance-portfolio",
  },
  {
    name: "Docker Deployment",
    description:
      "Containerized a multi-service application with Docker Compose, cutting environment setup time from hours to a single command.",
    tags: ["Docker", "Compose", "Nginx"],
    href: "https://github.com/iamvandin/freelance-portfolio",
  },
  {
    name: "CI/CD Pipeline",
    description:
      "An automated build, test and deploy pipeline that ships code to staging and production on every merge, with rollback on failure.",
    tags: ["CI/CD", "GitHub Actions", "Automation"],
    href: "https://github.com/iamvandin/freelance-portfolio",
  },
  {
    name: "IT Troubleshooting KB",
    description:
      "A searchable knowledge base of common IT issues and fixes, built to cut repeat-ticket resolution time for a support team.",
    tags: ["Documentation", "IT Support", "Process"],
    href: "https://github.com/iamvandin/freelance-portfolio",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-content px-6 py-16 sm:py-20"
    >
      <h2 className="font-mono text-2xl text-ink">Projects</h2>
      <p className="mt-2 max-w-xl text-muted">
        A few things I&apos;ve built and deployed.
      </p>

      <div className="mt-10 divide-y divide-edge border-y border-edge">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.href}
            className="group flex flex-col gap-3 py-6 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="max-w-2xl">
              <h3 className="font-mono text-base text-ink group-hover:text-accent transition-colors">
                {project.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {project.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-sm border border-edge px-2 py-0.5 font-mono text-xs text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <ArrowIcon className="h-5 w-5 shrink-0 text-muted group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
          </a>
        ))}
      </div>
    </section>
  );
}
