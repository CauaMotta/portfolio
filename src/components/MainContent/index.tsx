import { useEffect, useState } from 'react'

import Header from '../Header'
import AboutMe from '../AboutMe'
import Card from '../Card'
import Contact from '../Contact'
import Section from '../Section'
import Footer from '../Footer'

import { Container } from './styles'

const MainContent = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [certificates, setCertificates] = useState<Certificate[]>([])

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
            {projects
              .filter((project) => project.detach)
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
