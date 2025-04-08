import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import Footer from '.'

import { darkTheme } from '../../themes'

describe('Footer', () => {
  beforeEach(() => {
    render(
      <ThemeProvider theme={darkTheme}>
        <Footer />
      </ThemeProvider>
    )
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
