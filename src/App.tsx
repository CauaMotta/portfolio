import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'

import MainContent from './components/MainContent'
import Sidebar from './components/Sidebar'

import { getBreakpoint } from './utils'

import { Container, GlobalStyle } from './styles'
import { darkTheme, lightTheme } from './themes'

function App() {
  const [theme, setTheme] = useState(() => {
    const theme = localStorage.getItem('theme')
    return theme ? JSON.parse(theme) : 'dark'
  })
  const [breakpoint, setBreakpoint] = useState(() =>
    getBreakpoint(window.innerWidth)
  )
  const [mainKey, setMainKey] = useState(0)

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme))

    const handleResize = () => {
      const newBreakpoint = getBreakpoint(window.innerWidth)

      if (newBreakpoint !== breakpoint) {
        setBreakpoint(newBreakpoint)
        setMainKey(mainKey + 1)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [theme, breakpoint, mainKey])

  const setThemeHandler = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <Container>
        <GlobalStyle />
        <Sidebar changeTheme={setThemeHandler} />
        <MainContent key={mainKey} />
      </Container>
    </ThemeProvider>
  )
}

export default App
