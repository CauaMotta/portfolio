import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import Section from '.'

import { darkTheme } from '../../themes'

describe('Section', () => {
  beforeEach(() => {
    render(
      <ThemeProvider theme={darkTheme}>
        <Section id="test" title="title" description="description">
          <div>
            <p>child</p>
          </div>
        </Section>
      </ThemeProvider>
    )
  })

  test('Should render title, description and children', () => {
    expect(screen.getByText('title')).toBeInTheDocument()
    expect(screen.getByText('description')).toBeInTheDocument()
    expect(screen.getByText('child')).toBeInTheDocument()
  })

  test('Should check section id', () => {
    const section = screen.getByText(/title/i).closest('section')
    expect(section).toHaveAttribute('id', 'test')
  })
})
