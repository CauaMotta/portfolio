import { render, screen } from '../../../test/setup'
import userEvent from '@testing-library/user-event'

import Card from '.'

vi.mock('../Modal', () => ({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default: ({ isOpen, title }: any) =>
    isOpen ? <div data-testid="modal">Modal is open: {title}</div> : null
}))

const projectMock: Project = {
  title: 'Test title',
  resume: 'Test description',
  image: 'test.png',
  linkRepo: 'https://github.com/test',
  published: false,
  technologies: ['React', 'Typescript']
}

const certificateMock: Certificate = {
  title: 'Test title',
  date: '01/01/2000',
  school: 'test',
  link: 'https://test.com'
}

describe('Card - Project', () => {
  beforeEach(() => {
    render(<Card type="project" content={projectMock} />)
  })

  test('Should render the project card', () => {
    expect(screen.getByAltText('Test title')).toHaveAttribute('src', 'test.png')
    expect(screen.getByText('Test title')).toBeInTheDocument()
    expect(screen.getByText('Test description')).toBeInTheDocument()
    expect(screen.getByText('Ver detalhes')).toBeInTheDocument()
  })

  test('Should open the modal when clicking on the button', async () => {
    const button = screen.getByText('Ver detalhes')
    await userEvent.click(button)

    expect(screen.getByTestId('modal')).toBeInTheDocument()
    expect(screen.getByText('Modal is open: Test title')).toBeInTheDocument()
  })

  test('Should check if the link has the correct href', () => {
    const link = screen.getByRole('link', { name: /ver no github/i })
    expect(link).toHaveAttribute('href', projectMock.linkRepo)
  })
})

describe('Card - Certificate', () => {
  beforeEach(() => {
    render(<Card type="certificate" content={certificateMock} />)
  })

  test('Should render the certificate card', () => {
    expect(screen.getByAltText('Test title')).toHaveAttribute(
      'src',
      '/assets/test-light.svg'
    )

    expect(screen.getByText('Test title')).toBeInTheDocument()
    expect(screen.getByText('01/01/2000')).toBeInTheDocument()
  })

  test('Should check if the link has the correct href', () => {
    const link = screen.getByRole('link', { name: /ver certificado/i })
    expect(link).toHaveAttribute('href', certificateMock.link)
  })
})
