import { createGlobalStyle } from 'styled-components'
import variables from './variables'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${variables.backgroundColor};
    font-family: ${variables.fontFamily};
    color: ${variables.fontColor};
    font-size: 16px;
    font-weight: 400;
  }
`
