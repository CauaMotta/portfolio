import { Line } from '../../styles'
import { Container } from './styles'

export type Props = {
  type: 'project' | 'certificate'
}

const Card = ({ type }: Props) => {
  if (type === 'project') {
    return (
      <Container type="project">
        <div className="content-container">
          <div className="image-container">
            <img src="https://placehold.co/160x120" alt="" />
          </div>
          <div className="content">
            <h3 className="title">Titulo</h3>
            <Line />
            <p className="resume">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
              impedit repellat laborum nulla inventore voluptatum consectetur
              assumenda aperiam laudantium molestias quaerat ut.
            </p>
          </div>
        </div>
        <div className="btn-container">
          <button>Ver detalhes</button>
          <a href="#" target="_blank">
            <i className="fa-brands fa-github"></i> Ver no Github
          </a>
        </div>
      </Container>
    )
  }
  return (
    <Container type="certificate">
      <div className="content-container">
        <div className="image-container">
          <img src="https://placehold.co/64x64" alt="" />
        </div>
        <div className="content">
          <h3 className="title">Titulo</h3>
          <Line />
          <p className="resume">03/2025</p>
        </div>
        <div className="btn-container">
          <a href="#" target="_blank">
            Ver certificado{' '}
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>
      </div>
    </Container>
  )
}

export default Card
