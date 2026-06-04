import { useLang } from '../context/I18nContext'

export default function Hero() {
  const { t } = useLang()
  const path = window.location.pathname
  const base = path === '/portfolio' || path.startsWith('/portfolio/') ? '/portfolio' : ''

  return (
    <section
      id="sobre-mi"
      className="min-h-screen flex items-center justify-center px-6 pt-16"
    >
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-accent font-mono text-sm tracking-widest mb-4">
          {t.hero.greeting}
        </p>
        <h1 className="text-4xl md:text-7xl font-bold text-primary leading-tight mb-4">
          {t.hero.name}
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold text-subtle mb-6">
          {t.hero.tagline}
        </h2>
        <p className="text-muted max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
          {t.hero.description}
        </p>
        <div className="flex items-center justify-center gap-4">
          <a href={`${base}/#proyectos`} className="btn-accent no-underline">
            {t.hero.viewProjects}
          </a>
          <a
            href={`${base}/#contacto`}
            className="border border-border text-secondary hover:text-accent hover:border-accent px-6 py-3 rounded-lg font-medium transition-colors no-underline"
          >
            {t.hero.contact}
          </a>
        </div>
        <div className="mt-16 flex items-center justify-center gap-6 text-subtle text-xl">
          <a href="https://github.com/xdlimadev" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
            <i className="fa-brands fa-github" />
          </a>
          <a href="https://www.linkedin.com/in/bruno-de-lima-melo-382697101" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
            <i className="fa-brands fa-linkedin" />
          </a>
        </div>
      </div>
    </section>
  )
}
