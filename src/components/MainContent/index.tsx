import AboutMe from '../AboutMe'
import Card from '../Card'
import Section from '../Section'
import { Container } from './styles'

const MainContent = () => (
  <Container>
    <AboutMe />
    <Section
      title="Meus projetos"
      description="Esta seção tem o objetivo de mostrar os meus principais projetos"
    >
      <>
        <Card />
        <Card />
      </>
    </Section>
  </Container>
)

export default MainContent
