import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeProvider } from 'styled-components'

import Sidebar from '.'

import { darkTheme } from '../../themes'

const mockChangeTheme = vi.fn()

beforeEach(() => {
  render(
    <ThemeProvider theme={darkTheme}>
      <Sidebar changeTheme={mockChangeTheme} />
    </ThemeProvider>
  )
})

describe('Testes para as informacoes do usuario', () => {
  test('Deve renderizar a foto de perfil', () => {
    expect(screen.getByAltText('Foto de perfil do GitHub')).toBeInTheDocument()
  })

  test('Deve renderizar as informacoes do usuario', () => {
    expect(screen.getByText('Cauã Motta')).toBeInTheDocument()
    expect(screen.getByText('@CauaMotta')).toBeInTheDocument()
    expect(screen.getByText('Engenheiro Full-Stack')).toBeInTheDocument()
  })
})

describe('Testes para os links de redes sociais', () => {
  test('Deve renderizar os links de redes sociais', () => {
    expect(screen.getByText('GitHub')).toBeInTheDocument()
    expect(screen.getByText('LinkedIn')).toBeInTheDocument()
    expect(screen.getByText('Instagram')).toBeInTheDocument()
  })

  test('links sociais pussem URLs validas', () => {
    const githubLink = screen.getByText('GitHub').closest('a')
    const linkedInLink = screen.getByText('LinkedIn').closest('a')
    const instagramLink = screen.getByText('Instagram').closest('a')

    expect(githubLink).toHaveAttribute('href', 'https://github.com/CauaMotta')
    expect(linkedInLink).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/ocauamotta/'
    )
    expect(instagramLink).toHaveAttribute(
      'href',
      'https://www.instagram.com/ocauamotta/'
    )
  })
})

describe('Testes para o botão de mudar o tema', () => {
  test('Deve renderizar o botão de mudar o tema', () => {
    expect(screen.getByText('Mudar tema')).toBeInTheDocument()
  })

  test('Deve chamar a função changeTheme quando o botão é clicado', async () => {
    const button = screen.getByText('Mudar tema')
    await userEvent.click(button)

    expect(mockChangeTheme).toHaveBeenCalled()
  })
})
