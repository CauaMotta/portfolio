import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'

import MainContent from './components/MainContent'
import Sidebar from './components/Sidebar'

import { Container, GlobalStyle } from './styles'
import { darkTheme, lightTheme } from './themes'

function App() {
  const [theme, setTheme] = useState(() => {
    const theme = localStorage.getItem('theme')
    return theme ? JSON.parse(theme) : 'dark'
  })

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme))
  }, [theme])

  const setThemeHandler = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <Container>
        <GlobalStyle />
        <Sidebar changeTheme={setThemeHandler} />
        <MainContent />
      </Container>
    </ThemeProvider>
  )
}

export default App
