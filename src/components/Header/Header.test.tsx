import { act, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeProvider } from 'styled-components'
import { vi } from 'vitest'

import Header from '.'

import { darkTheme } from '../../themes'
import { scrollToSection } from '../../utils'

vi.mock('../../utils', () => ({
  scrollToSection: vi.fn()
}))

describe('Header - Render component', () => {
  beforeEach(() => {
    render(
      <ThemeProvider theme={darkTheme}>
        <Header />
      </ThemeProvider>
    )
  })

  test('Should render all navigation buttons', () => {
    expect(screen.getByText('Início')).toBeInTheDocument()
    expect(screen.getByText('Projetos')).toBeInTheDocument()
    expect(screen.getByText('Certificados')).toBeInTheDocument()
    expect(screen.getByText('Contato')).toBeInTheDocument()
  })
})

describe('Header - Button click', () => {
  beforeEach(() => {
    render(
      <ThemeProvider theme={darkTheme}>
        <Header />
      </ThemeProvider>
    )
  })

  test('Should call scrollToSection when buttons are clicked', async () => {
    await userEvent.click(screen.getByText('Início'))
    expect(scrollToSection).toHaveBeenCalledWith('about')

    await userEvent.click(screen.getByText('Projetos'))
    expect(scrollToSection).toHaveBeenCalledWith('projects')

    await userEvent.click(screen.getByText('Certificados'))
    expect(scrollToSection).toHaveBeenCalledWith('certificates')

    await userEvent.click(screen.getByText('Contato'))
    expect(scrollToSection).toHaveBeenCalledWith('contact')
  })
})

describe('Header - Active section', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
  })

  test('Should change active section on scroll', async () => {
    const sectionMocks: Record<string, HTMLElement> = {}

    const sectionRects: Record<string, DOMRect> = {
      about: {
        top: 200,
        bottom: 300,
        left: 0,
        right: 0,
        x: 0,
        y: 0,
        width: 0,
        height: 100,
        toJSON: () => ''
      },
      projects: {
        top: 120,
        bottom: 200,
        left: 0,
        right: 0,
        x: 0,
        y: 0,
        width: 0,
        height: 80,
        toJSON: () => ''
      },
      certificates: {
        top: 500,
        bottom: 600,
        left: 0,
        right: 0,
        x: 0,
        y: 0,
        width: 0,
        height: 100,
        toJSON: () => ''
      },
      contact: {
        top: 800,
        bottom: 900,
        left: 0,
        right: 0,
        x: 0,
        y: 0,
        width: 0,
        height: 100,
        toJSON: () => ''
      }
    }

    Object.keys(sectionRects).forEach((id) => {
      const el = document.createElement('div')
      el.id = id
      el.getBoundingClientRect = () => sectionRects[id]
      sectionMocks[id] = el
    })

    const mainContent = document.createElement('div')
    mainContent.id = 'main-content'
    document.body.appendChild(mainContent)
    sectionMocks['main-content'] = mainContent

    vi.spyOn(document, 'getElementById').mockImplementation((id: string) => {
      return sectionMocks[id] || null
    })

    render(
      <ThemeProvider theme={darkTheme}>
        <Header />
      </ThemeProvider>
    )

    act(() => {
      mainContent.dispatchEvent(new Event('scroll'))
    })

    await waitFor(() => {
      const line = screen.getByTestId('line')
      expect(line.className).toContain('projects')
    })
  })
})
