import { useEffect, useState } from 'react'

import { scrollToSection, mobileBreakpoint } from '../../utils'

import { Container } from './styles'

const sections = ['about', 'projects', 'certificates', 'contact']

const Header = () => {
  const [activeSection, setActiveSection] = useState('about')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = ''

      sections.forEach((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()

          const topOffset = mobileBreakpoint() ? 142 : 140
          const bottomOffset = mobileBreakpoint() ? 100 : 100

          if (rect.top <= topOffset && rect.bottom >= bottomOffset) {
            currentSection = section
          }
        }
      })

      setActiveSection(currentSection)
    }

    if (mobileBreakpoint()) {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    } else {
      const mainContent = document.getElementById('main-content')
      mainContent?.addEventListener('scroll', handleScroll)
      return () => mainContent?.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const translateSection = () => {
    if (activeSection === 'about') return 'Início'
    if (activeSection === 'projects') return 'Projetos'
    if (activeSection === 'certificates') return 'Certificados'
    if (activeSection === 'contact') return 'Contato'
    return activeSection
  }

  return (
    <Container>
      <div className="navContainer">
        <nav>
          <button
            className={`animate ${
              activeSection === 'about' ? 'selected' : ''
            } ${menuOpen ? 'open' : ''}`}
            onClick={() => {
              scrollToSection('about')
              setMenuOpen(false)
            }}
          >
            Início
          </button>
          <button
            className={`animate ${
              activeSection === 'projects' ? 'selected' : ''
            } ${menuOpen ? 'open' : ''}`}
            onClick={() => {
              scrollToSection('projects')
              setMenuOpen(false)
            }}
          >
            Projetos
          </button>
          <button
            className={`animate ${
              activeSection === 'certificates' ? 'selected' : ''
            } ${menuOpen ? 'open' : ''}`}
            onClick={() => {
              scrollToSection('certificates')
              setMenuOpen(false)
            }}
          >
            Certificados
          </button>
          <button
            className={`animate ${
              activeSection === 'contact' ? 'selected' : ''
            } ${menuOpen ? 'open' : ''}`}
            onClick={() => {
              scrollToSection('contact')
              setMenuOpen(false)
            }}
          >
            Contato
          </button>
          <div
            data-testid="line"
            className={`active ${activeSection} ${menuOpen ? 'open' : ''}`}
            onClick={
              mobileBreakpoint() ? () => setMenuOpen(!menuOpen) : () => {}
            }
          >
            {mobileBreakpoint() && <p>{translateSection()}</p>}
          </div>
          {mobileBreakpoint() && (
            <button
              className={`menuBtn ${menuOpen ? 'open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span>
                <i className="fa-solid fa-angle-down"></i>
              </span>
            </button>
          )}
        </nav>
      </div>
    </Container>
  )
}

export default Header
