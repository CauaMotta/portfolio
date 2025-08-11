import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTheme } from 'styled-components'

import Header from '../../components/Header'
import AboutMe from '../../components/AboutMe'
import Card from '../../components/Card'
import Contact from '../../components/Contact'
import Section from '../../components/Section'
import Footer from '../../components/Footer'

import { Certificate, Project } from '../../types'
import { useFetchData } from '../../hooks'
import { filterValidate, getBreakpoint, ProjectType } from '../../utils'

import { Container, NavButton } from './styles'
import { FilterBtn, StyledClipLoader } from '../../styles'

const Home = () => {
  const {
    data: projects,
    loading: projectsLoading,
    error: projectsError
  } = useFetchData<Project>('projects')
  const {
    data: certificates,
    loading: certificatesLoading,
    error: certificatesError
  } = useFetchData<Certificate>('certificates')
  const [breakpoint, setBreakpoint] = useState(() =>
    getBreakpoint(window.innerWidth)
  )
  const [mainKey, setMainKey] = useState(0)
  const [filter, setFilter] = useState<string>('')
  const theme = useTheme()
  const navigate = useNavigate()

  useEffect(() => {
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
            {!projectsLoading && !projectsError && (
              <div data-testid="filters" className="btnGroup">
                <FilterBtn
                  onClick={() => setFilter('')}
                  className={`${filter === '' ? 'active' : ''}`}
                >
                  Todos
                </FilterBtn>
                <FilterBtn
                  onClick={() => setFilter(ProjectType.FRONTEND)}
                  className={`${
                    filter === ProjectType.FRONTEND ? 'active' : ''
                  }`}
                >
                  Front-end
                </FilterBtn>
                <FilterBtn
                  onClick={() => setFilter(ProjectType.BACKEND)}
                  className={`${
                    filter === ProjectType.BACKEND ? 'active' : ''
                  }`}
                >
                  Back-end
                </FilterBtn>
              </div>
            )}
            {projectsLoading && (
              <div className="containerIsLoading">
                <StyledClipLoader color={theme.colors.primaryColor} />
              </div>
            )}
            {projectsError && (
              <div className="containerIsError">
                <i className="fa-solid fa-file-circle-xmark"></i>
                <p className="text">
                  Ops! Houve um erro ao carregar os projetos...
                </p>
              </div>
            )}
            {projects
              .filter(
                (project) =>
                  project.detach && filterValidate(filter, project.type)
              )
              .slice(0, 3)
              .map((project) => (
                <Card key={project.title} content={project} type="project" />
              ))}
            {!projectsLoading && !projectsError && (
              <NavButton onClick={() => navigate('/projects')}>
                Ver todos os projetos{' '}
                <i className="fa-solid fa-arrow-right"></i>
              </NavButton>
            )}
          </>
        </Section>
        <Section
          id="certificates"
          title="Certificados"
          description="Esta seção tem o objetivo de mostrar todos os meus certificados"
        >
          <>
            {certificatesLoading && (
              <div className="containerIsLoading">
                <StyledClipLoader color={theme.colors.primaryColor} />
              </div>
            )}
            {certificatesError && (
              <div className="containerIsError">
                <i className="fa-solid fa-file-circle-xmark"></i>
                <p className="text">
                  Ops! Houve um erro ao carregar os certificados...
                </p>
              </div>
            )}
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
