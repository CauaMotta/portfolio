import styled, { createGlobalStyle } from 'styled-components'
import variables from './variables'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }

  body {
    background-color: ${variables.backgroundColor};
    font-family: ${variables.fontFamily};
    color: ${variables.fontColor};
    font-size: 16px;
    font-weight: 400;
  }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 256px auto;

  .mainContent {
    padding: 40px 0;
  }
`
