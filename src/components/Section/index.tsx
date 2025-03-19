import { JSX } from 'react'

import { Line } from '../../styles'
import { Container } from './styles'

type Props = {
  title: string
  description: string
  children: JSX.Element
}

const Section = ({ title, description, children }: Props) => (
  <Container>
    <div className="header-container">
      <h2 className="title">{title}</h2>
      <Line />
      <p className="description">{description}</p>
    </div>
    {children}
  </Container>
)

export default Section
