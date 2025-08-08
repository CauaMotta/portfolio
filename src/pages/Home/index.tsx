import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Header from '../../components/Header'
import AboutMe from '../../components/AboutMe'
import Card from '../../components/Card'
import Contact from '../../components/Contact'
import Section from '../../components/Section'
import Footer from '../../components/Footer'

import { Certificate, Project } from '../../types'
import { getBreakpoint, ProjectType } from '../../utils'

import { Container, NavButton } from './styles'
import { FilterBtn } from '../../styles'

const Home = () => {
  const [breakpoint, setBreakpoint] = useState(() =>
    getBreakpoint(window.innerWidth)
  )
  const [mainKey, setMainKey] = useState(0)
  const [projects, setProjects] = useState<Project[]>([])
  const [certificates, setCertificates] = useState<Certificate[]>([])
  const [filter, setFilter] = useState<string>('')
  const navigate = useNavigate()

  const filterValidate = (type: ProjectType) => {
    if (filter === '') return true
    if (type === filter) return true
    return false
  }

  useEffect(() => {
    fetch('/projects.json')
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error('Erro ao carregar projetos:', error))

    fetch('/certificates.json')
      .then((response) => response.json())
      .then((data) => setCertificates(data))
      .catch((error) =>
        console.error('Erro ao carregar os certificados:', error)
      )

    const handleResize = () => {
      const newBreakpoint = getBreakpoint(window.innerWidth)

      if (newBreakpoint !== breakpoint) {
        setBreakpoint(newBreakpoint)
        setMainKey(mainKey + 1)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [breakpoint, mainKey])

  return (
    <Container key={mainKey} id="main-content">
      <Header />
      <main>
        <AboutMe />
        <Section
          id="projects"
          title="Meus projetos"
          description="Esta seção tem o objetivo de mostrar os meus principais projetos"
        >
          <>
            <div data-testid="filters" className="btnGroup">
              <FilterBtn
                onClick={() => setFilter('')}
                className={`${filter === '' ? 'active' : ''}`}
              >
                Todos
              </FilterBtn>
              <FilterBtn
                onClick={() => setFilter(ProjectType.FRONTEND)}
                className={`${filter === ProjectType.FRONTEND ? 'active' : ''}`}
              >
                Front-end
              </FilterBtn>
              <FilterBtn
                onClick={() => setFilter(ProjectType.BACKEND)}
                className={`${filter === ProjectType.BACKEND ? 'active' : ''}`}
              >
                Back-end
              </FilterBtn>
            </div>
            {projects
              .filter(
                (project) => project.detach && filterValidate(project.type)
              )
              .slice(0, 3)
              .map((project) => (
                <Card key={project.title} content={project} type="project" />
              ))}
            <NavButton onClick={() => navigate('/projects')}>
              Ver todos os projetos <i className="fa-solid fa-arrow-right"></i>
            </NavButton>
          </>
        </Section>
        <Section
          id="certificates"
          title="Certificados"
          description="Esta seção tem o objetivo de mostrar todos os meus certificados"
        >
          <>
            {certificates.map((certificate) => (
              <Card
                key={certificate.title}
                content={certificate}
                type="certificate"
              />
            ))}
          </>
        </Section>
        <Contact />
      </main>
      <Footer />
    </Container>
  )
}

export default Home
