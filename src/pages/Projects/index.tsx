import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTheme } from 'styled-components'

import Card from '../../components/Card'
import Footer from '../../components/Footer'

import { useFetchData } from '../../hooks'
import { filterValidate, ProjectType } from '../../utils'
import { Project } from '../../types'

import { Container } from './styles'
import { FilterBtn, Line, StyledClipLoader, NavButton } from '../../styles'

const Projects = () => {
  const { data, loading, error } = useFetchData<Project>('projects')
  const [filter, setFilter] = useState<string>('')
  const navigate = useNavigate()
  const theme = useTheme()

  return (
    <Container>
      <NavButton onClick={() => navigate('/')}>
        <i className="fa-solid fa-arrow-left"></i> Voltar para a página inicial
      </NavButton>
      <h2 className="title">Todos os Projetos</h2>
      <Line />
      {!loading && !error && (
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
      )}
      {loading && (
        <div className="containerIsLoading">
          <StyledClipLoader color={theme.colors.primaryColor} />
        </div>
      )}
      {error && (
        <div className="containerIsError">
          <i className="fa-solid fa-file-circle-xmark"></i>
          <p className="text">Ops! Houve um erro ao carregar os projetos...</p>
        </div>
      )}
      {data
        .filter((project) => filterValidate(filter, project.type))
        .map((project) => (
          <Card key={project.title} content={project} type="project" />
        ))}
      <Footer />
    </Container>
  )
}

export default Projects
