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

describe('Sidebar - Render infos', () => {
  test('Should render profile picture', () => {
    expect(screen.getByAltText('Foto de perfil do GitHub')).toBeInTheDocument()
  })

  test('Should render user info', () => {
    expect(screen.getByText('Cauã Motta')).toBeInTheDocument()
    expect(screen.getByText('@CauaMotta')).toBeInTheDocument()
    expect(screen.getByText('Engenheiro Full-Stack')).toBeInTheDocument()
  })
})

describe('Sidebar - Social links', () => {
  test('Should render social links', () => {
    expect(screen.getByText('GitHub')).toBeInTheDocument()
    expect(screen.getByText('LinkedIn')).toBeInTheDocument()
    expect(screen.getByText('Instagram')).toBeInTheDocument()
  })

  test('Should check the correct href in the links', () => {
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

describe('Sidebar - Theme button', () => {
  test('Should render theme button', () => {
    expect(screen.getByText('Mudar tema')).toBeInTheDocument()
  })

  test('Should call the function on the button is clicked', async () => {
    const button = screen.getByText('Mudar tema')
    await userEvent.click(button)

    expect(mockChangeTheme).toHaveBeenCalled()
  })
})
