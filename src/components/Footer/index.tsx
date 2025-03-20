import { Container } from './styles'

const Footer = () => (
  <Container>
    <h4 className="title">Cauã Motta</h4>
    <p className="text">
      &copy; {new Date().getFullYear()} Cauã Motta. Todos os direitos
      reservados.
    </p>
  </Container>
)

export default Footer
