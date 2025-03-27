import MainContent from './components/MainContent'
import Sidebar from './components/Sidebar'

import { Container, GlobalStyle } from './styles'

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Sidebar />
      <MainContent />
    </Container>
  )
}

export default App
