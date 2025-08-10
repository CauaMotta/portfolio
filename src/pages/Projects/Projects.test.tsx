import { act, render, screen, within } from '../../../test/setup'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'

import Projects from '.'

import { useFetchData } from '../../hooks'
import { ProjectType } from '../../utils'

const mockNavigate = vi.fn()
const mockProjects = [
  { id: 1, title: 'Projeto 1', type: ProjectType.FRONTEND },
  { id: 2, title: 'Projeto 2', type: ProjectType.FRONTEND },
  { id: 3, title: 'Projeto 3', type: ProjectType.BACKEND },
  { id: 4, title: 'Projeto 4', type: ProjectType.BACKEND }
]
const mockProjectsError = 'Erro ao carregar os projetos'

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
vi.mock('../../hooks', () => ({
  useFetchData: vi.fn()
}))

describe('Projects', () => {
  beforeEach(() => {
    vi.mocked(useFetchData).mockImplementation((resource: string) => {
      if (resource === 'projects') {
        return { data: mockProjects, loading: false, error: null }
      }
      return { data: [], loading: false, error: null }
    })
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

describe('Projects - Error', () => {
  beforeEach(() => {
    vi.mocked(useFetchData).mockImplementation((resource: string) => {
      if (resource === 'projects') {
        return {
          data: [],
          loading: false,
          error: mockProjectsError
        }
      }
      return { data: [], loading: false, error: null }
    })
  })

  afterEach(() => {
    vi.resetAllMocks()
  })

  test('Should render error message when projects fail to load', async () => {
    await act(async () => {
      render(<Projects />)
    })

    expect(screen.getByText('Todos os Projetos')).toBeInTheDocument()
    expect(
      screen.getByText(/Ops! Houve um erro ao carregar os projetos.../i)
    ).toBeInTheDocument()
    expect(screen.getByTestId('Footer')).toBeInTheDocument()
  })
})
