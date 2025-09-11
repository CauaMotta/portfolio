import Logo from '../Logo'

import { Container } from './styles'

const Footer = () => (
  <Container>
    <div className="logo">
      <Logo width={40} height={40} />
    </div>
    <h4 className="title--small">Cauã Motta</h4>
    <p className="text--small mt-8">
      &copy; {new Date().getFullYear()} Cauã Motta. Todos os direitos
      reservados.
    </p>
  </Container>
)

export default Footer
