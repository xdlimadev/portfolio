import { createContext, useContext, useState } from 'react'

const translations = {
  es: {
    header: {
      about: 'Sobre mí',
      projects: 'Proyectos',
      skills: 'Habilidades',
      contact: 'Contacto',
    },
    hero: {
      greeting: 'HOLA, MI NOMBRE ES',
      name: 'Bruno De Lima Melo',
      tagline: 'Desarrollador frontend especializado en React',
      description:
        'Especializado en React y el ecosistema frontend moderno. He desarrollado aplicaciones web completas — desde tableros Kanban hasta plataformas sociales. Busco mi primera oportunidad profesional en un equipo donde pueda aportar y seguir aprendiendo.',
      viewProjects: 'Ver proyectos',
      contact: 'Contactar',
    },
    projects: {
      badge: 'PROYECTOS',
      title: 'Trabajos destacados',
    },
    skills: {
      badge: 'STACK TÉCNICO',
      title: 'Tecnologías que uso',
      subtitle: 'Herramientas y lenguajes con los que trabajo día a día.',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend',
        tools: 'Herramientas',
      },
    },
    contact: {
      badge: 'CONTACTO',
      title: 'Hablemos',
      description:
        '¿Tienes un proyecto en mente o simplemente quieres saludar? Estoy abierto a nuevas oportunidades. Escríbeme.',
      email: 'dlima.id@gmail.com',
      location: 'Málaga, España',
      name: 'Nombre',
      emailField: 'Email',
      subject: 'Asunto',
      message: 'Mensaje',
      send: 'Enviar mensaje',
      footer: 'Hecho con',
    },
    detail: {
      back: 'Volver a proyectos',
      notFound: 'Proyecto no encontrado',
      backHome: 'Volver al inicio',
      features: 'Características principales',
      github: 'Ver en GitHub',
    },
    theme: {
      light: 'Modo claro',
      dark: 'Modo oscuro',
    },
    lang: {
      en: 'EN',
      es: 'ES',
    },
  },
  en: {
    header: {
      about: 'About me',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact',
    },
    hero: {
      greeting: "HELLO, I'M",
      name: 'Bruno De Lima Melo',
      tagline: 'Frontend developer specialized in React',
      description:
        'Specialized in React and the modern frontend ecosystem. I have built complete web applications — from Kanban boards to social platforms. I am looking for my first professional opportunity in a team where I can contribute and keep learning.',
      viewProjects: 'View projects',
      contact: 'Get in touch',
    },
    projects: {
      badge: 'PROJECTS',
      title: 'Featured work',
    },
    skills: {
      badge: 'TECH STACK',
      title: 'Technologies I use',
      subtitle: 'Tools and languages I work with every day.',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend',
        tools: 'Tools',
      },
    },
    contact: {
      badge: 'CONTACT',
      title: "Let's talk",
      description:
        "Have a project in mind or just want to say hi? I'm open to new opportunities. Drop me a message.",
      email: 'dlima.id@gmail.com',
      location: 'Málaga, Spain',
      name: 'Name',
      emailField: 'Email',
      subject: 'Subject',
      message: 'Message',
      send: 'Send message',
      footer: 'Made with',
    },
    detail: {
      back: 'Back to projects',
      notFound: 'Project not found',
      backHome: 'Back to home',
      features: 'Key features',
      github: 'View on GitHub',
    },
    theme: {
      light: 'Light mode',
      dark: 'Dark mode',
    },
    lang: {
      en: 'EN',
      es: 'ES',
    },
  },
}

const I18nContext = createContext()

export function I18nProvider({ children }) {
  const [lang, setLang] = useState('es')
  const t = translations[lang]

  const toggleLang = () => setLang((l) => (l === 'es' ? 'en' : 'es'))

  return (
    <I18nContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useLang must be used within I18nProvider')
  return ctx
}
