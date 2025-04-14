import { useState } from 'react'
import { useTheme } from 'styled-components'

import { mobileBreakpoint } from '../../utils'

import Modal from '../Modal'

import { Button, Line, Link } from '../../styles'
import { Container, Grid, Image } from './styles'

type Props = {
  type: 'project' | 'certificate'
  content: Project | Certificate
}

const Card = ({ type, content }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const theme = useTheme()

  if (type === 'project') {
    const project = content as Project
    return (
      <>
        <Container type="project">
          <div className="content-container">
            <div className="image-container">
              <Image src={project.image} alt={project.title} />
            </div>
            <div className="content">
              <h3 className="title--small pi-8">{project.title}</h3>
              <Line />
              <p className="resume text--small pi-8">{project.resume}</p>
            </div>
          </div>
          <div className="btn-container">
            <Button onClick={() => setIsModalOpen(true)}>Ver detalhes</Button>
            <Link href={project.linkRepo} target="_blank">
              <i className="fa-brands fa-github"></i> Ver no Github
            </Link>
          </div>
        </Container>

        <Modal
          onClose={() => setIsModalOpen(false)}
          isOpen={isModalOpen}
          title={project.title}
        >
          <Grid>
            <div className="grid-item-1">
              <div className="image-container">
                <Image src={project.image} alt={project.title} />
              </div>
            </div>
            <div className="grid-item-2">
              {mobileBreakpoint() && (
                <>
                  <h2 className="title--small">{project.title}</h2>
                  <Line />
                </>
              )}
              <p className="text">{project.resume}</p>

              <div className="section">
                <h4 className="title--small">&#x1F6E0;&#xFE0F; Tecnologias</h4>
                <ul>
                  {project.technologies.map((technology) => (
                    <li className="text" key={technology}>
                      {technology}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="section">
                <h4 className="title--small">&#128279; Links</h4>
                <div className="links-container">
                  {project.published && (
                    <Link href={project.linkDeploy} target="_blank">
                      <i className="fa-solid fa-globe"></i> Ver projeto
                      publicado
                    </Link>
                  )}
                  <Link href={project.linkRepo} target="_blank">
                    <i className="fa-brands fa-github"></i> Ver no Github
                  </Link>
                </div>
              </div>
            </div>
          </Grid>
        </Modal>
      </>
    )
  }

  const certificate = content as Certificate
  return (
    <Container type="certificate">
      <div className="content-container">
        <div className="image-container">
          <Image
            src={`/assets/${certificate.school}-${
              theme.name === 'dark' ? 'light' : 'dark'
            }.svg`}
            alt={certificate.title}
          />
        </div>
        <div className="content">
          <h3 className="title--small pi-8">{certificate.title}</h3>
          <Line />
          <p className="text--small pi-8">{certificate.date}</p>
        </div>
        <div className="btn-container">
          <a
            className="certificate-link"
            href={certificate.link}
            target="_blank"
          >
            Ver certificado{' '}
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>
      </div>
    </Container>
  )
}
export default Card
