import { JSX } from 'react'

import { Line } from '../../styles'
import { Container } from './styles'

type Props = {
  id: string
  title: string
  description: string
  children: JSX.Element
}

const Section = ({ id, title, description, children }: Props) => (
  <Container id={id}>
    <div className="header-container">
      <h2 className="title pi-title">{title}</h2>
      <Line />
      <p className="text pi-text">{description}</p>
    </div>
    {children}
  </Container>
)

export default Section
