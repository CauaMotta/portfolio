import { render, screen } from '../../../test/setup'

import Footer from '.'

describe('Footer', () => {
  beforeEach(() => {
    render(<Footer />)
  })

  test('Should render the footer', () => {
    expect(screen.getByText('Cauã Motta')).toBeInTheDocument()
  })

  test('Should render the copyright with the current year', () => {
    const year = new Date().getFullYear()

    expect(
      screen.getByText(`© ${year} Cauã Motta. Todos os direitos reservados.`)
    ).toBeInTheDocument()
  })
})
