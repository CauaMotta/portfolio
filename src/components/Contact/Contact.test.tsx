import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'
import { ThemeProvider } from 'styled-components'
import emailjs from '@emailjs/browser'

import Contact from '.'

import { darkTheme } from '../../themes'

vi.mock('@emailjs/browser', () => ({
  default: {
    send: vi.fn()
  }
}))

Object.assign(navigator, {
  clipboard: {
    writeText: vi.fn()
  }
})

const renderContact = () => {
  return render(
    <ThemeProvider theme={darkTheme}>
      <Contact />
    </ThemeProvider>
  )
}

describe('Contact', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  test('Should copy the email on button click', async () => {
    renderContact()

    const copyBtn = screen.getByRole('button', { name: /clique para copiar/i })
    await userEvent.click(copyBtn)

    await waitFor(() => {
      expect(navigator.clipboard.writeText).toHaveBeenCalledWith(
        'ocauamotta@gmail.com'
      )
      expect(screen.getByText(/copiado!/i)).toBeInTheDocument()
    })
  })

  test('Should render the contact form', () => {
    renderContact()

    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Nome/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Assunto/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Mensagem/i)).toBeInTheDocument()
  })

  test('Should check the form input', async () => {
    renderContact()

    await userEvent.click(screen.getByRole('button', { name: /Enviar/i }))

    await waitFor(() => {
      expect(
        screen.getByText(/O campo de email é obrigatório/i)
      ).toBeInTheDocument()
      expect(
        screen.getByText(/O campo de nome é obrigatório/i)
      ).toBeInTheDocument()
      expect(
        screen.getByText(/O campo de assunto é obrigatório/i)
      ).toBeInTheDocument()
      expect(
        screen.getByText(/O campo de mensagem é obrigatório/i)
      ).toBeInTheDocument()
    })
  })

  test('Should check the form sent successfully', async () => {
    vi.mocked(emailjs.send).mockResolvedValue({ status: 200, text: 'OK' })
    const { rerender } = renderContact()

    await userEvent.type(screen.getByLabelText(/Email/i), 'teste@email.com')
    await userEvent.type(screen.getByLabelText(/Nome/i), 'Nome Teste')
    await userEvent.type(screen.getByLabelText(/Assunto/i), 'Teste')
    await userEvent.type(screen.getByLabelText(/Mensagem/i), 'Mensagem teste')

    await userEvent.click(screen.getByRole('button', { name: /Enviar/i }))

    rerender(
      <ThemeProvider theme={darkTheme}>
        <Contact />
      </ThemeProvider>
    )

    expect(
      screen.getByText('Seu email foi enviado com sucesso!')
    ).toBeInTheDocument()
  })

  test('Should check the failed request form', async () => {
    vi.mocked(emailjs.send).mockRejectedValue({ status: 400, text: 'ERROR' })

    const { rerender } = renderContact()

    await userEvent.type(screen.getByLabelText(/Email/i), 'teste@email.com')
    await userEvent.type(screen.getByLabelText(/Nome/i), 'Nome Teste')
    await userEvent.type(screen.getByLabelText(/Assunto/i), 'Teste')
    await userEvent.type(screen.getByLabelText(/Mensagem/i), 'Mensagem teste')

    await userEvent.click(screen.getByRole('button', { name: /Enviar/i }))

    rerender(
      <ThemeProvider theme={darkTheme}>
        <Contact />
      </ThemeProvider>
    )

    expect(
      screen.getByText('Ocorreu um erro ao enviar o email. Tente novamente.')
    ).toBeInTheDocument()
  })

  test('Should render the social links', () => {
    renderContact()

    expect(screen.getByRole('link', { name: /GitHub/i })).toHaveAttribute(
      'href',
      'https://github.com/CauaMotta'
    )
    expect(screen.getByRole('link', { name: /LinkedIn/i })).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/ocauamotta/'
    )
    expect(screen.getByRole('link', { name: /Instagram/i })).toHaveAttribute(
      'href',
      'https://www.instagram.com/ocauamotta/'
    )
  })
})
