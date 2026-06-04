import { useLang } from '../context/I18nContext'

export default function Contact() {
  const { t } = useLang()

  return (
    <footer id="contacto" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start border-t border-border pt-8">
          <div>
            <p className="text-accent font-mono text-sm tracking-widest mb-2">
              {t.contact.badge}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {t.contact.title}
            </h2>
            <p className="text-muted mb-8">{t.contact.description}</p>
            <div className="space-y-4 text-muted">
              <p className="flex items-center gap-3">
                <i className="fa-regular fa-envelope text-accent" />
                {t.contact.email}
              </p>
              <p className="flex items-center gap-3">
                <i className="fa-regular fa-location-dot text-accent" />
                {t.contact.location}
              </p>
              <div className="flex gap-4 text-xl pt-4">
                <a href="https://github.com/xdlimadev" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  <i className="fa-brands fa-github" />
                </a>
                <a href="https://www.linkedin.com/in/bruno-de-lima-melo-382697101" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  <i className="fa-brands fa-linkedin" />
                </a>
              </div>
            </div>
          </div>
          <form
            action="https://formsubmit.co/dlima.id@gmail.com"
            method="POST"
            className="space-y-5"
          >
            <input type="hidden" name="_subject" value="Nuevo mensaje desde el portfolio" />
            <input type="hidden" name="_template" value="table" />
            <input type="text" name="_honey" className="hidden" />
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder={t.contact.name}
                className="input-field"
                required
              />
              <input
                type="email"
                name="email"
                placeholder={t.contact.emailField}
                className="input-field"
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder={t.contact.subject}
              className="input-field"
            />
            <textarea
              name="message"
              rows={5}
              placeholder={t.contact.message}
              className="input-field resize-none"
              required
            />
            <button type="submit" className="btn-accent w-full sm:w-auto">
              <i className="fa-regular fa-paper-plane mr-2" />
              {t.contact.send}
            </button>
          </form>
        </div>
        <div className="mt-16 pt-8 border-t border-border text-center text-subtle text-sm">
          &copy; {new Date().getFullYear()} {t.hero.name}. {t.contact.footer}{' '}
          <span className="text-accent">&hearts;</span>
        </div>
      </div>
    </footer>
  )
}
