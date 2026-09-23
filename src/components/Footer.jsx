export default function Footer({ name }) {
  return (
    <footer className="border-t border-edge">
      <div className="mx-auto flex max-w-content flex-col gap-2 px-6 py-8 font-mono text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {name}</p>
        <p>Built with React &amp; Tailwind</p>
      </div>
    </footer>
  )
}
