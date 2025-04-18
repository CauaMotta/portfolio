import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { PulseLoader } from 'react-spinners'

import { mobileBreakpoint } from '../../utils'

import Modal from '../Modal'

import { Container } from './styles'
import { useTheme } from 'styled-components'

const Contact = () => {
  const [copy, setCopy] = useState(false)
  const [copyError, setCopyError] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalMessage, setModalMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const theme = useTheme()

  const copyToClipboard = async () => {
    try {
      const email = 'ocauamotta@gmail.com'
      await navigator.clipboard.writeText(email)
      setCopy(true)
      setTimeout(() => setCopy(false), 3000)
    } catch (err) {
      setCopyError('Ocorreu um erro ao copiar.')
      setTimeout(() => setCopyError(''), 3000)
      console.error('Erro ao copiar:', err)
    }
  }

  const form = useFormik({
    initialValues: {
      email: '',
      name: '',
      subject: '',
      message: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('O email deve ser válido')
        .required('O campo de email é obrigatório'),
      name: Yup.string()
        .min(3, 'O nome deve ter no mínimo 3 caracteres')
        .required('O campo de nome é obrigatório'),
      subject: Yup.string()
        .min(3, 'O assunto deve ter no mínimo 3 caracteres')
        .required('O campo de assunto é obrigatório'),
      message: Yup.string()
        .min(3, 'A mensagem deve ter no mínimo 3 caracteres')
        .required('O campo de mensagem é obrigatório')
    }),
    onSubmit: (values) => {
      setIsLoading(true)
      emailjs
        .send(
          'service_18cgk0i',
          'template_u6t1g9f',
          {
            email: values.email,
            name: values.name,
            subject: values.subject,
            message: values.message
          },
          {
            publicKey: 'oqHppoPglsaXllewp'
          }
        )
        .then(
          () => {
            setModalMessage('Seu email foi enviado com sucesso!')
            setIsModalOpen(true)
            form.resetForm()
          },
          (error) => {
            console.log(error)
            setModalMessage(
              'Ocorreu um erro ao enviar o email. Tente novamente.'
            )
            setIsModalOpen(true)
          }
        )
    }
  })

  const copyMessage = () => {
    if (mobileBreakpoint()) return 'copiar'
    return 'clique para copiar'
  }

  const isError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isTouched && isInvalid) return true
    return false
  }

  return (
    <Container id="contact">
      <h2 className="title">
        Entre em <br /> <span className="emphasis">Contato!</span>
      </h2>
      <div>
        <p className="text">
          Email para contato: <small>{copyError}</small>
        </p>
        <button
          className={`emailBtn ${copyError.length > 1 ? 'error' : ''}`}
          onClick={copyToClipboard}
        >
          ocauamotta@gmail.com{' '}
          <span>
            {copy ? 'copiado!' : copyMessage()}{' '}
            <i className="fa-solid fa-copy"></i>
          </span>
        </button>
      </div>
      <form onSubmit={form.handleSubmit}>
        <p className="text">
          Ou, se preferir, entre em contato através do formulário abaixo:
        </p>
        <div className="inputGroup">
          <label className="text" htmlFor="email">
            Email{' '}
            <small>{isError('email') ? '* ' + form.errors.email : '*'}</small>
          </label>
          <input
            className={isError('email') ? 'error' : ''}
            id="email"
            type="text"
            value={form.values.email}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
        </div>
        <div className="inputGroup">
          <label className="text" htmlFor="name">
            Nome{' '}
            <small>{isError('name') ? '* ' + form.errors.name : '*'}</small>
          </label>
          <input
            className={isError('name') ? 'error' : ''}
            id="name"
            type="text"
            value={form.values.name}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
        </div>
        <div className="inputGroup">
          <label className="text" htmlFor="subject">
            Assunto{' '}
            <small>
              {isError('subject') ? '* ' + form.errors.subject : '*'}
            </small>
          </label>
          <input
            className={isError('subject') ? 'error' : ''}
            id="subject"
            type="text"
            value={form.values.subject}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
        </div>
        <div className="inputGroup">
          <label className="text" htmlFor="message">
            Mensagem{' '}
            <small>
              {isError('message') ? '* ' + form.errors.message : '*'}
            </small>
          </label>
          <textarea
            className={isError('message') ? 'error' : ''}
            id="message"
            rows={3}
            value={form.values.message}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          ></textarea>
        </div>
        <div className="submitBtnContainer">
          <button className="submitBtn" type="submit">
            {isLoading ? (
              <PulseLoader
                color={theme.colors.secondaryColor}
                size={10}
                speedMultiplier={0.75}
              />
            ) : (
              <>
                Enviar <i className="fa-solid fa-paper-plane"></i>
              </>
            )}
          </button>
        </div>
      </form>
      <Modal
        title="Formulário"
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          setIsLoading(false)
        }}
      >
        <p className="modal-text text">{modalMessage}</p>
      </Modal>
      <div className="socialMedia">
        <h3 className="title--small">
          <i className="fa-solid fa-hashtag"></i> Redes Sociais
        </h3>
        <ul>
          <li>
            <a
              className="social-link"
              href="https://github.com/CauaMotta"
              target="_blank"
            >
              <i className="fa-brands fa-github"></i> GitHub
            </a>
          </li>
          <li>
            <a
              className="social-link"
              href="https://www.linkedin.com/in/ocauamotta/"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin"></i> LinkedIn
            </a>
          </li>
          <li>
            <a
              className="social-link"
              href="https://www.instagram.com/ocauamotta/"
              target="_blank"
            >
              <i className="fa-brands fa-instagram"></i> Instagram
            </a>
          </li>
        </ul>
      </div>
      <div className="sectionIcon">
        <i className="fa-solid fa-envelope"></i>
      </div>
    </Container>
  )
}

export default Contact
