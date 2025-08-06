import { act, render, screen } from '../../../test/setup'
import { vi } from 'vitest'

import MainContent from '.'

vi.mock('../Header', () => ({
  default: () => <div data-testid="Header" />
}))
vi.mock('../AboutMe', () => ({
  default: () => <div data-testid="AboutMe" />
}))
vi.mock('../Section', () => ({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default: ({ title, children }: any) => (
    <div data-testid={`Section-${title}`}>{children}</div>
  )
}))
vi.mock('../Card', () => ({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default: ({ content }: any) => <div data-testid={`Card-${content.id}`} />
}))
vi.mock('../Contact', () => ({
  default: () => <div data-testid="Contact" />
}))
vi.mock('../Footer', () => ({
  default: () => <div data-testid="Footer" />
}))

describe('MainContent', () => {
  const mockProjects = [{ id: 1, title: 'Projeto 1', detach: true }]
  const mockCertificates = [{ id: 2, title: 'Certificado 1' }]

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
      render(<MainContent />)
    })

    expect(screen.getByTestId('Header')).toBeInTheDocument()
    expect(screen.getByTestId('AboutMe')).toBeInTheDocument()
    expect(screen.getByTestId('Contact')).toBeInTheDocument()
    expect(screen.getByTestId('Footer')).toBeInTheDocument()
    expect(screen.getByTestId('Card-1')).toBeInTheDocument()
    expect(screen.getByTestId('Card-2')).toBeInTheDocument()
  })
})
