import React from 'react'
import { cleanup, render } from '@testing-library/react'
import { afterEach, vi } from 'vitest'
import { ThemeProvider } from 'styled-components'
import { darkTheme } from '../src/themes'
import '@testing-library/jest-dom'

afterEach(() => {
  cleanup()
  vi.clearAllMocks()
})

// eslint-disable-next-line react-refresh/only-export-components
const AllProviders = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>
)

const customRender = (ui: React.ReactElement, options = {}) =>
  render(ui, { wrapper: AllProviders, ...options })

// eslint-disable-next-line react-refresh/only-export-components
export * from '@testing-library/react'
export { customRender as render }
