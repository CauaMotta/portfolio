import { useEffect, useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Certificates from './pages/Certificates'

import { Container, GlobalStyle } from './styles'
import { darkTheme, lightTheme } from './themes'

function App() {
  const [theme, setTheme] = useState(() => {
    const theme = localStorage.getItem('theme')
    return theme ? JSON.parse(theme) : 'dark'
  })

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/projects',
      element: <Projects />
    },
    {
      path: '/certificates',
      element: <Certificates />
    }
  ])

  const setThemeHandler = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme))
  }, [theme])

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <Container>
        <GlobalStyle />
        <Sidebar changeTheme={setThemeHandler} />
        <RouterProvider router={routes} />
      </Container>
    </ThemeProvider>
  )
}

export default App
