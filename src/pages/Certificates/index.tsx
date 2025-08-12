import { useNavigate } from 'react-router-dom'

import Footer from '../../components/Footer'

import { useFetchData } from '../../hooks'

import { Line, NavButton, StyledClipLoader } from '../../styles'
import { Container } from './styles'
import { useTheme } from 'styled-components'
import { Certificate } from '../../types'
import Card from '../../components/Card'

const Certificates = () => {
  const { data, loading, error } = useFetchData<Certificate>('certificates')
  const navigate = useNavigate()
  const theme = useTheme()

  return (
    <Container>
      <NavButton onClick={() => navigate('/')}>
        <i className="fa-solid fa-arrow-left"></i> Voltar para a página inicial
      </NavButton>
      <h2 className="title">Todos os Certificados</h2>
      <Line />
      <div className="certificates-box">
        {loading && (
          <div className="containerIsLoading">
            <StyledClipLoader color={theme.colors.primaryColor} />
          </div>
        )}
        {error && (
          <div className="containerIsError">
            <i className="fa-solid fa-file-circle-xmark"></i>
            <p className="text">
              Ops! Houve um erro ao carregar os certificados...
            </p>
          </div>
        )}
        {data.map((certificate) => (
          <Card
            key={certificate.title}
            content={certificate}
            type="certificate"
          />
        ))}
      </div>
      <Footer />
    </Container>
  )
}

export default Certificates
