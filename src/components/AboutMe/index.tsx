import { Container } from './styles'

const AboutMe = () => (
  <Container id="about">
    <h2 className="SectionTitle">
      Bem-vindo ao meu <br /> <span>Portfólio</span>
    </h2>
    <div>
      <p className="text">
        <span>&#x1F44B;</span> Meu nome é Cauã Motta, sou um programador focado
        em criar aplicações modernas e eficientes. Minha jornada na programação
        começou por curiosidade e logo se tornou uma paixão. Gosto de escrever
        código limpo, organizado e bem estruturado, sempre buscando boas
        práticas e performance.
      </p>
      <p className="text m-top">
        <span>&#x1F6E0;</span> Tenho experiência no desenvolvimento de
        aplicações <b>Front-end</b> e <b>Back-end</b>, adoro explorar novas
        tecnologias para melhorar meus projetos. Algumas das principais
        tecnologias que possuo experiência são:{' '}
        <b>JavaScript, TypeScript, React, VueJS, Node.JS e Java</b>
      </p>
      <p className="text m-top">
        <span>&#x1F680;</span> Estou sempre aberto a novos desafios e
        oportunidades. Se quiser trocar uma ideia ou colaborar em um projeto,
        entre em contato!
      </p>
      <div className="contact-me">
        <a href="#">Ir para contatos!</a>
      </div>
      <div className="hashtag">
        <i className="fa-regular fa-hashtag"></i>
      </div>
    </div>
  </Container>
)

export default AboutMe
