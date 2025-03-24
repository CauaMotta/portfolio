import AboutMe from '../AboutMe'
import Card from '../Card'
import Contact from '../Contact'
import Footer from '../Footer'
import Section from '../Section'

import { Container } from './styles'

const MainContent = () => (
  <Container>
    <AboutMe />
    <Section
      id="projects"
      title="Meus projetos"
      description="Esta seção tem o objetivo de mostrar os meus principais projetos"
    >
      <>
        <Card type="project" />
        <Card type="project" />
      </>
    </Section>
    <Section
      id="certificates"
      title="Certificados"
      description="Esta seção tem o objetivo de mostrar todos os meus certificados"
    >
      <>
        <Card type="certificate" />
        <Card type="certificate" />
      </>
    </Section>
    <Contact />
    <Footer />
  </Container>
)

export default MainContent
