import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { I18nProvider } from './context/I18nContext'
import Particles from './components/Particles'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import ProjectDetail from './components/ProjectDetail'
import FloatingMenu from './components/FloatingMenu'

function Home() {
  return (
    <>
      <main>
        <Hero />
        <Projects />
        <Skills />
      </main>
      <Contact />
    </>
  )
}

function ScrollToHash() {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }, [hash])

  return null
}

function App() {
  const path = window.location.pathname
  const basename = path === '/portfolio' || path.startsWith('/portfolio/')
    ? '/portfolio'
    : '/'

  return (
    <BrowserRouter basename={basename}>
      <ScrollToHash />
      <ThemeProvider>
        <I18nProvider>
          <div className="relative">
            <Particles />
            <div className="relative z-10">
              <Header />
              <FloatingMenu />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/proyecto/:slug" element={<ProjectDetail />} />
              </Routes>
            </div>
          </div>
        </I18nProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
