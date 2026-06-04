import { useState, useEffect, useRef } from 'react'
import { useTheme } from '../context/ThemeContext'
import { useLang } from '../context/I18nContext'

export default function FloatingMenu() {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const { dark, toggle: toggleTheme } = useTheme()
  const { lang, toggleLang } = useLang()

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <div ref={ref} className="fixed bottom-6 right-6 z-50 flex flex-col items-center">
      <div
        className={`flex flex-col items-center gap-1 p-2 mb-3 rounded-full bg-surface border border-border shadow-xl origin-bottom transition-all duration-300 ${open ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'}`}
      >
        <button
          onClick={() => { toggleTheme(); setOpen(false) }}
          className="w-9 h-9 rounded-full text-muted hover:text-accent hover:bg-surface-alt flex items-center justify-center text-sm transition-colors cursor-pointer border-none"
          title={dark ? 'Modo claro' : 'Modo oscuro'}
          aria-label={dark ? 'Modo claro' : 'Modo oscuro'}
        >
          <i className={`fa-solid ${dark ? 'fa-sun' : 'fa-moon'}`} />
        </button>
        <button
          onClick={() => { toggleLang(); setOpen(false) }}
          className="w-9 h-9 rounded-full text-muted hover:text-accent hover:bg-surface-alt flex items-center justify-center text-sm transition-colors cursor-pointer border-none"
          title={lang === 'es' ? 'English' : 'Español'}
          aria-label={lang === 'es' ? 'English' : 'Español'}
        >
          <i className="fa-solid fa-globe" />
        </button>
      </div>

      <button
        onClick={() => setOpen(!open)}
        className="w-12 h-12 rounded-full bg-surface border border-border text-muted hover:text-accent hover:border-accent flex items-center justify-center text-lg transition-all cursor-pointer"
        aria-label="Menu"
      >
        <i className={`fa-solid transition-transform duration-300 ${open ? 'fa-xmark' : 'fa-bolt'}`} />
      </button>
    </div>
  )
}
