import Header from './components/Header'
import Sidebar from './components/Sidebar'
import { Container, GlobalStyle } from './styles'

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Sidebar />
      <div className="mainContent">
        <Header />
      </div>
    </Container>
  )
}

export default App
