import { useEffect, useState } from 'react'

import { Container } from './styles'

const sections = ['about', 'projects', 'certificates', 'contact']

const Header = () => {
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = ''

      sections.forEach((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 140 && rect.bottom >= 100) {
            currentSection = section
          }
        }
      })

      setActiveSection(currentSection)
    }

    const mainContent = document.querySelector('.mainContent')
    if (mainContent) {
      mainContent.addEventListener('scroll', handleScroll)
    }
    return () => mainContent?.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Container>
      <div className="navContainer">
        <nav>
          <button onClick={() => scrollToSection('about')}>Início</button>
          <button onClick={() => scrollToSection('projects')}>Projetos</button>
          <button onClick={() => scrollToSection('certificates')}>
            Certificados
          </button>
          <button onClick={() => scrollToSection('contact')}>Contato</button>
          <div className={`line ${activeSection}`}></div>
        </nav>
      </div>
    </Container>
  )
}

export default Header
