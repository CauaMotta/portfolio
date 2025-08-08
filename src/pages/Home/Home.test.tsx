import userEvent from '@testing-library/user-event'
import { act, render, screen, within } from '../../../test/setup'
import { vi } from 'vitest'

import Home from '.'

import { ProjectType } from '../../utils'

const mockNavigate = vi.fn()

vi.mock('../../components/Header', () => ({
  default: () => <div data-testid="Header" />
}))
vi.mock('../../components/AboutMe', () => ({
  default: () => <div data-testid="AboutMe" />
}))
vi.mock('../../components/Section', () => ({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default: ({ title, children }: any) => (
    <div data-testid={`Section-${title}`}>{children}</div>
  )
}))
vi.mock('../../components/Card', () => ({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default: ({ content }: any) => <div data-testid={`Card-${content.id}`} />
}))
vi.mock('../../components/Contact', () => ({
  default: () => <div data-testid="Contact" />
}))
vi.mock('../../components/Footer', () => ({
  default: () => <div data-testid="Footer" />
}))
vi.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate
}))

describe('Home', () => {
  const mockProjects = [
    { id: 1, title: 'Projeto 1', detach: true, type: ProjectType.FRONTEND },
    { id: 2, title: 'Projeto 2', detach: true, type: ProjectType.BACKEND },
    { id: 3, title: 'Projeto 3', detach: true, type: ProjectType.BACKEND }
  ]
  const mockCertificates = [{ id: 4, title: 'Certificado 1' }]

  beforeEach(() => {
    global.fetch = vi.fn((url: RequestInfo) => {
      if (url === '/projects.json') {
        return Promise.resolve({
          json: () => Promise.resolve(mockProjects)
        } as Response)
      }
      if (url === '/certificates.json') {
        return Promise.resolve({
          json: () => Promise.resolve(mockCertificates)
        } as Response)
      }
      return Promise.reject(new Error('Unknown URL'))
    }) as typeof fetch
  })

  afterEach(() => {
    vi.resetAllMocks()
  })

  test('Should render the component and data', async () => {
    await act(async () => {
      render(<Home />)
    })

    expect(screen.getByTestId('Header')).toBeInTheDocument()
    expect(screen.getByTestId('AboutMe')).toBeInTheDocument()
    expect(screen.getByTestId('Contact')).toBeInTheDocument()
    expect(screen.getByTestId('Footer')).toBeInTheDocument()
    expect(screen.getByTestId('Card-1')).toBeInTheDocument()
    expect(screen.getByTestId('Card-2')).toBeInTheDocument()
    expect(screen.getByTestId('Card-3')).toBeInTheDocument()
    expect(screen.getByTestId('Card-4')).toBeInTheDocument()
  })

  test('Should filter projects when clicking filter buttons', async () => {
    await act(async () => {
      render(<Home />)
    })

    const filters = screen.getByTestId('filters')
    const btnAll = within(filters).getByRole('button', { name: /Todos/i })
    const btnFrontend = within(filters).getByRole('button', {
      name: /Front-end/i
    })
    const btnBackend = within(filters).getByRole('button', {
      name: /Back-end/i
    })

    expect(btnAll).toBeInTheDocument()
    expect(btnFrontend).toBeInTheDocument()
    expect(btnBackend).toBeInTheDocument()

    await userEvent.click(btnBackend)

    expect(btnBackend.classList.contains('active')).toBe(true)
    expect(btnAll.classList.contains('active')).toBe(false)

    expect(screen.queryByTestId('Card-1')).not.toBeInTheDocument()
    expect(screen.getByTestId('Card-2')).toBeInTheDocument()
    expect(screen.getByTestId('Card-3')).toBeInTheDocument()
  })

  test('Should redirect to the projects page', async () => {
    await act(async () => {
      render(<Home />)
    })

    const btnHome = screen.getByRole('button', {
      name: /Ver todos os projetos/i
    })

    expect(btnHome).toBeInTheDocument()

    await userEvent.click(btnHome)

    expect(mockNavigate).toHaveBeenCalledWith('/projects')
  })
})
