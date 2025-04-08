import { useTheme } from 'styled-components'

import { Container } from './styles'

type Props = {
  changeTheme: () => void
}

const Sidebar = ({ changeTheme }: Props) => {
  const theme = useTheme()

  return (
    <Container>
      <div className="avatar">
        <img
          src="https://github.com/CauaMotta.png"
          alt="Foto de perfil do GitHub"
        />
      </div>
      <div className="info">
        <h1 className="title">Cauã Motta</h1>
        <span className="text--small">@CauaMotta</span>
        <p>Engenheiro Full-Stack</p>
      </div>
      <div className="social">
        <h2>
          <i className="fa-solid fa-hashtag"></i> Social
        </h2>
        <ul>
          <li>
            <a
              className="social-link"
              href="https://github.com/CauaMotta"
              target="_blank"
            >
              <i className="fa-brands fa-github"></i> GitHub
            </a>
          </li>
          <li>
            <a
              className="social-link"
              href="https://www.linkedin.com/in/ocauamotta/"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin"></i> LinkedIn
            </a>
          </li>
          <li>
            <a
              className="social-link"
              href="https://www.instagram.com/ocauamotta/"
              target="_blank"
            >
              <i className="fa-brands fa-instagram"></i> Instagram
            </a>
          </li>
        </ul>
      </div>
      <div className="theme">
        <button onClick={changeTheme}>
          {theme.name === 'dark' ? (
            <i className="fa-solid fa-sun"></i>
          ) : (
            <i className="fa-solid fa-moon"></i>
          )}{' '}
          <span>Mudar tema</span>
        </button>
      </div>
    </Container>
  )
}

export default Sidebar
