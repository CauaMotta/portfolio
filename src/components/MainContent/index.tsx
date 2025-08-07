import { useEffect, useState } from 'react'

import Header from '../Header'
import AboutMe from '../AboutMe'
import Card from '../Card'
import Contact from '../Contact'
import Section from '../Section'
import Footer from '../Footer'
import { Certificate, Project } from '../../types'

import { Container, FilterBtn } from './styles'
import { ProjectType } from '../../utils'

const MainContent = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [certificates, setCertificates] = useState<Certificate[]>([])
  const [filter, setFilter] = useState<string>('')

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
  }, [])

  const filterValidate = (type: ProjectType) => {
    if (filter === '') return true
    if (type === filter) return true
    return false
  }

  return (
    <Container id="main-content">
      <Header />
      <main>
        <AboutMe />
        <Section
          id="projects"
          title="Meus projetos"
          description="Esta seção tem o objetivo de mostrar os meus principais projetos"
        >
          <>
            <div className="btnGroup">
              <FilterBtn
                onClick={() => setFilter('')}
                className={`${filter === '' ? 'active' : ''}`}
              >
                Todos
              </FilterBtn>
              <FilterBtn
                onClick={() => setFilter(ProjectType.FRONTEND)}
                className={`${filter === 'F' ? 'active' : ''}`}
              >
                Front-end
              </FilterBtn>
              <FilterBtn
                onClick={() => setFilter(ProjectType.BACKEND)}
                className={`${filter === 'B' ? 'active' : ''}`}
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

export default MainContent
