import { useLang } from '../context/I18nContext'

const categories = [
  {
    key: 'frontend',
    icon: 'fa-code',
    items: [
      { label: 'React', icon: 'fa-brands fa-react', color: 'text-accent' },
      {
        label: 'JavaScript',
        icon: 'fa-brands fa-js',
        color: 'text-yellow-400',
      },
      { label: 'HTML5', icon: 'fa-brands fa-html5', color: 'text-orange-400' },
      { label: 'CSS3', icon: 'fa-brands fa-css3-alt', color: 'text-blue-400' },
      { label: 'Tailwind', icon: null, color: 'text-accent', textIcon: 'TW' },
    ],
  },
  {
    key: 'backend',
    icon: 'fa-server',
    items: [
      { label: 'Node.js', icon: 'fa-brands fa-node', color: 'text-green-400' },
      { label: 'SQL', icon: 'fa-solid fa-database', color: 'text-amber-400' },
    ],
  },
  {
    key: 'tools',
    icon: 'fa-toolbox',
    items: [
      {
        label: 'Git',
        icon: 'fa-brands fa-git-alt',
        color: 'text-orange-400',
      },
      { label: 'Docker', icon: 'fa-brands fa-docker', color: 'text-blue-400' },
      {
        label: 'Linux',
        icon: 'fa-solid fa-terminal',
        color: 'text-green-400',
      },
      {
        label: 'GitHub',
        icon: 'fa-brands fa-github',
        color: 'text-primary',
      },
      {
        label: 'AI-assisted dev',
        icon: 'fa-solid fa-wand-magic-sparkles',
        color: 'text-purple-400',
      },
    ],
  },
]

export default function Skills() {
  const { t } = useLang()

  return (
    <section id="habilidades" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-accent font-mono text-sm tracking-widest mb-2">
          {t.skills.badge}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          {t.skills.title}
        </h2>
        <p className="text-muted mb-12">{t.skills.subtitle}</p>

        <div className="grid md:grid-cols-3 gap-10">
          {categories.map((cat) => (
            <div key={cat.key}>
              <h3 className="text-primary font-semibold mb-4 flex items-center gap-2">
                <i className={`fa-solid ${cat.icon} text-accent`} />{' '}
                {t.skills.categories[cat.key]}
              </h3>
              <div className="flex flex-wrap gap-3">
                {cat.items.map((item) => (
                  <span key={item.label} className="skill-tag">
                    {item.icon ? (
                      <i className={`${item.icon} ${item.color}`} />
                    ) : (
                      <span className={`${item.color} font-bold text-xs`}>
                        {item.textIcon}
                      </span>
                    )}
                    {item.label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
