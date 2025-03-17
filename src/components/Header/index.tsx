import { Container } from './styles'

const Header = () => (
  <Container>
    <nav>
      <ul className="navList">
        <li>
          <a href="#">Início</a>
        </li>
        <li>
          <a href="#">Projetos</a>
        </li>
        <li>
          <a href="#">Certificados</a>
        </li>
        <li>
          <a href="#">Contato</a>
        </li>
      </ul>
    </nav>
  </Container>
)

export default Header
