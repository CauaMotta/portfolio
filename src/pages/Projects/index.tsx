import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Card from '../../components/Card'

import { Project } from '../../types'

import { Container, NavButton } from './styles'
import { FilterBtn, Line } from '../../styles'
import { ProjectType } from '../../utils'
import Footer from '../../components/Footer'

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [filter, setFilter] = useState<string>('')
  const navigate = useNavigate()

  useEffect(() => {
    fetch('/projects.json')
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error('Erro ao carregar projetos:', error))
  }, [])

  const filterValidate = (type: ProjectType) => {
    if (filter === '') return true
    if (type === filter) return true
    return false
  }

  return (
    <Container>
      <NavButton onClick={() => navigate('/')}>
        <i className="fa-solid fa-arrow-left"></i> Voltar para a página inicial
      </NavButton>
      <h2 className="title">Todos os Projetos</h2>
      <Line />
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
        .filter((project) => filterValidate(project.type))
        .map((project) => (
          <Card key={project.title} content={project} type="project" />
        ))}
      <Footer />
    </Container>
  )
}

export default Projects
