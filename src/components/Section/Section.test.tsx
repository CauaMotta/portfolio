import { render, screen } from '../../../test/setup'

import Section from '.'

describe('Section', () => {
  beforeEach(() => {
    render(
      <Section id="test" title="title" description="description">
        <div>
          <p>child</p>
        </div>
      </Section>
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
