import { render, screen } from '../../../test/setup'
import userEvent from '@testing-library/user-event'

import AboutMe from '.'

import { scrollToSection } from '../../utils'

vi.mock('../../utils', () => ({
  scrollToSection: vi.fn()
}))

describe('AboutMe', () => {
  beforeEach(() => {
    render(<AboutMe />)
  })

  test('Should render all text', () => {
    expect(screen.getByText(/Bem-vindo ao meu/i)).toBeInTheDocument()
    expect(screen.getByText(/Meu nome é Cauã Motta/i)).toBeInTheDocument()
    expect(
      screen.getByText(/Tenho experiência no desenvolvimento/i)
    ).toBeInTheDocument()
    expect(
      screen.getByText(/Estou sempre aberto a novos desafios/i)
    ).toBeInTheDocument()
  })

  test('Should call scrollToSection when button is clicked', async () => {
    await userEvent.click(screen.getByText('Ir para contatos!'))

    expect(scrollToSection).toHaveBeenCalledWith('contact')
  })
})
