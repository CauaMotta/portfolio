import Header from './components/Header'
import MainContent from './components/MainContent'
import Sidebar from './components/Sidebar'

import { Container, GlobalStyle } from './styles'

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Sidebar />
      <div className="mainContent">
        <Header />
        <MainContent />
      </div>
    </Container>
  )
}

export default App
