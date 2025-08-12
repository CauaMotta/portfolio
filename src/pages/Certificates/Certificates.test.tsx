import { act, render, screen } from '../../../test/setup'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'

import Certificates from '.'

import { useFetchData } from '../../hooks'

const mockNavigate = vi.fn()
const mockCertificates = [
  { id: 1, title: 'Certificado 1' },
  { id: 2, title: 'Certificado 2' },
  { id: 3, title: 'Certificado 3' }
]
const mockCertificatesError = 'Erro ao carregar os certificados'

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

describe('Certificates', () => {
  beforeEach(() => {
    vi.mocked(useFetchData).mockImplementation((resource: string) => {
      if (resource === 'certificates') {
        return { data: mockCertificates, loading: false, error: null }
      }
      return { data: [], loading: false, error: null }
    })
  })

  afterEach(() => {
    vi.resetAllMocks()
  })

  test('Should render the component and data', async () => {
    await act(async () => {
      render(<Certificates />)
    })

    expect(screen.getByText('Todos os Certificados')).toBeInTheDocument()
    expect(screen.getByTestId('Card-1')).toBeInTheDocument()
    expect(screen.getByTestId('Card-2')).toBeInTheDocument()
    expect(screen.getByTestId('Card-3')).toBeInTheDocument()
    expect(screen.getByTestId('Footer')).toBeInTheDocument()
  })

  test('Should return to the home page when clicking the button', async () => {
    await act(async () => {
      render(<Certificates />)
    })

    const btnHome = screen.getByRole('button', {
      name: /Voltar para a página inicial/i
    })

    expect(btnHome).toBeInTheDocument()

    await userEvent.click(btnHome)

    expect(mockNavigate).toHaveBeenCalledWith('/')
  })
})

describe('Certificates - Error', () => {
  beforeEach(() => {
    vi.mocked(useFetchData).mockImplementation((resource: string) => {
      if (resource === 'certificates') {
        return {
          data: [],
          loading: false,
          error: mockCertificatesError
        }
      }
      return { data: [], loading: false, error: null }
    })
  })

  afterEach(() => {
    vi.resetAllMocks()
  })

  test('Should render error message when certificates fail to load', async () => {
    await act(async () => {
      render(<Certificates />)
    })

    expect(screen.getByText('Todos os Certificados')).toBeInTheDocument()
    expect(
      screen.getByText(/Ops! Houve um erro ao carregar os certificados.../i)
    ).toBeInTheDocument()
    expect(screen.getByTestId('Footer')).toBeInTheDocument()
  })
})
