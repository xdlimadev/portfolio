import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLang } from '../context/I18nContext'

const links = [
  { key: 'about', href: '#sobre-mi' },
  { key: 'projects', href: '#proyectos' },
  { key: 'skills', href: '#habilidades' },
  { key: 'contact', href: '#contacto' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'
  const { t } = useLang()

  return (
    <header className="glass fixed top-0 left-0 w-full z-50">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="text-xl font-bold tracking-tight text-primary no-underline"
        >
          <span className="text-accent">&lt;/&gt;</span> xdlimadev
        </Link>

        <div className="flex items-center gap-4">
          {isHome && (
            <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
              {links.map((l) => (
                <li key={l.key}>
                  <a href={l.href} className="nav-link">
                    {t.header[l.key]}
                  </a>
                </li>
              ))}
            </ul>
          )}

          {isHome && (
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-muted text-xl"
              aria-label="Toggle menu"
            >
              <i className={`fa-solid ${open ? 'fa-xmark' : 'fa-bars'}`} />
            </button>
          )}
        </div>
      </nav>

      {isHome && open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3 text-sm font-medium">
          {links.map((l) => (
            <a
              key={l.key}
              href={l.href}
              className="nav-link"
              onClick={() => setOpen(false)}
            >
              {t.header[l.key]}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
