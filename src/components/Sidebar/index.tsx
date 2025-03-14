import { Container } from './styles'

const Sidebar = () => (
  <Container>
    <div className="avatar">
      <img
        src="https://github.com/CauaMotta.png"
        alt="Foto de perfil do GitHub"
      />
    </div>
    <div className="info">
      <h1>Cauã Motta</h1>
      <span>@CauaMotta</span>
      <p>Full-Stack Engineer</p>
    </div>
    <div className="social">
      <h2>
        <i className="fa-solid fa-hashtag"></i> Social
      </h2>
      <ul>
        <li>
          <a href="https://github.com/CauaMotta" target="_blank">
            <i className="fa-brands fa-github"></i> GitHub
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/ocauamotta/" target="_blank">
            <i className="fa-brands fa-linkedin"></i> LinkedIn
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/ocauamotta/" target="_blank">
            <i className="fa-brands fa-instagram"></i> Instagram
          </a>
        </li>
      </ul>
    </div>
  </Container>
)

export default Sidebar
