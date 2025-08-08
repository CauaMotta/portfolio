import { act, render, screen, within } from '../../../test/setup'
import { vi } from 'vitest'

import Projects from '.'

import { ProjectType } from '../../utils'
import userEvent from '@testing-library/user-event'

const mockNavigate = vi.fn()

vi.mock('../../components/Card', () => ({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default: ({ content }: any) => <div data-testid={`Card-${content.id}`} />
}))
vi.mock('../../components/Footer', () => ({
  default: () => <div data-testid="Footer" />
}))
vi.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate
}))

describe('Projects', () => {
  const mockProjects = [
    { id: 1, title: 'Projeto 1', detach: true, type: ProjectType.FRONTEND },
    { id: 2, title: 'Projeto 2', detach: true, type: ProjectType.FRONTEND },
    { id: 3, title: 'Projeto 3', detach: true, type: ProjectType.BACKEND },
    { id: 4, title: 'Projeto 4', detach: true, type: ProjectType.BACKEND }
  ]

  beforeEach(() => {
    global.fetch = vi.fn((url: RequestInfo) => {
      if (url === '/projects.json') {
        return Promise.resolve({
          json: () => Promise.resolve(mockProjects)
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
      render(<Projects />)
    })

    expect(screen.getByText('Todos os Projetos')).toBeInTheDocument()
    expect(screen.getByTestId('Card-1')).toBeInTheDocument()
    expect(screen.getByTestId('Card-2')).toBeInTheDocument()
    expect(screen.getByTestId('Card-3')).toBeInTheDocument()
    expect(screen.getByTestId('Card-4')).toBeInTheDocument()
    expect(screen.getByTestId('Footer')).toBeInTheDocument()
  })

  test('Should filter projects when clicking filter buttons', async () => {
    await act(async () => {
      render(<Projects />)
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

    await userEvent.click(btnFrontend)

    expect(btnFrontend.classList.contains('active')).toBe(true)
    expect(btnBackend.classList.contains('active')).toBe(false)
    expect(btnAll.classList.contains('active')).toBe(false)

    expect(screen.queryByTestId('Card-1')).toBeInTheDocument()
    expect(screen.getByTestId('Card-2')).toBeInTheDocument()
    expect(screen.queryByTestId('Card-3')).not.toBeInTheDocument()
    expect(screen.queryByTestId('Card-4')).not.toBeInTheDocument()
  })

  test('Should return to the home page when clicking the button', async () => {
    await act(async () => {
      render(<Projects />)
    })

    const btnHome = screen.getByRole('button', {
      name: /Voltar para a página inicial/i
    })

    expect(btnHome).toBeInTheDocument()

    await userEvent.click(btnHome)

    expect(mockNavigate).toHaveBeenCalledWith('/')
  })
})
