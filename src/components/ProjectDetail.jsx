import { useParams, Link } from 'react-router-dom'
import { useLang } from '../context/I18nContext'
import projects from '../projects'

export default function ProjectDetail() {
  const { slug } = useParams()
  const { t } = useLang()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col gap-4 px-6">
        <h1 className="text-4xl font-bold text-primary">
          {t.detail.notFound}
        </h1>
        <Link to="/" className="btn-accent no-underline">
          {t.detail.backHome}
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-dvh pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/#proyectos"
          className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors mb-8 no-underline"
        >
          <i className="fa-solid fa-arrow-left" />
          {t.detail.back}
        </Link>

        <div
          className={`w-full h-56 md:h-72 bg-surface bg-gradient-to-br ${project.gradient} rounded-xl mb-8 flex items-center justify-center ${project.iconColor} text-6xl`}
        >
          <i className={`fa-solid ${project.icon}`} />
        </div>

        <h1 className="text-3xl md:text-5xl font-bold text-primary mb-4">
          {project.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-sm text-subtle mb-6">
          <span className="flex items-center gap-1">
            <i className="fa-regular fa-building" />
            {project.client}
          </span>
          <span className="flex items-center gap-1">
            <i className="fa-regular fa-calendar" />
            {project.year}
          </span>
        </div>

        <p className="text-secondary text-lg leading-relaxed mb-8">
          {project.fullDesc}
        </p>

        <div className="flex flex-wrap gap-2 mb-10">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-sm bg-surface-alt text-secondary px-3 py-1.5 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        <h2 className="text-2xl font-semibold text-primary mb-4">
          {t.detail.features}
        </h2>
        <ul className="space-y-3 mb-10">
          {project.features.map((f) => (
            <li key={f} className="flex items-start gap-3 text-secondary">
              <i className="fa-solid fa-check text-accent mt-1" />
              {f}
            </li>
          ))}
        </ul>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 btn-accent no-underline"
        >
          <i className="fa-brands fa-github" />
          {t.detail.github}
        </a>
      </div>
    </div>
  )
}
