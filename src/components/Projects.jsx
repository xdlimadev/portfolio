import { Link } from 'react-router-dom'
import { useLang } from '../context/I18nContext'
import projects from '../projects'

export default function Projects() {
  const { t } = useLang()

  return (
    <section id="proyectos" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-accent font-mono text-sm tracking-widest mb-2">
          {t.projects.badge}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">
          {t.projects.title}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <Link
              key={p.slug}
              to={`/proyecto/${p.slug}`}
              className="card rounded-xl p-6 block no-underline"
            >
              <div
                className={`w-full h-40 bg-gradient-to-br ${p.gradient} rounded-lg mb-4 flex items-center justify-center ${p.iconColor} text-4xl`}
              >
                <i className={`fa-solid ${p.icon}`} />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">
                {p.title}
              </h3>
              <p className="text-muted text-sm mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-surface-alt text-secondary px-2 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
