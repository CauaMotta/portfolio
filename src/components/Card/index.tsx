import { Line } from '../../styles'
import { Container } from './styles'

const Card = () => (
  <Container>
    <div className="content-container">
      <div className="image-container">
        <img src="https://placehold.co/160x120" alt="" />
      </div>
      <div className="content">
        <h3 className="title">Titulo</h3>
        <Line />
        <p className="resume">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam impedit
          repellat laborum nulla inventore voluptatum consectetur assumenda
          aperiam laudantium molestias quaerat ut.
        </p>
      </div>
    </div>
    <div className="btn-container">
      <button>Ver detalhes</button>
      <a href="#">
        <i className="fa-brands fa-github"></i> Ver no Github
      </a>
    </div>
  </Container>
)

export default Card
