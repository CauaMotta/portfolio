import styled, { createGlobalStyle } from 'styled-components'
import variables from './variables'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;

    font-family: ${variables.fontFamily};

    scrollbar-width: thin;
    scrollbar-color: ${variables.primaryColorDark} ${variables.secondaryColor};
    scroll-behavior: smooth;
  }

  body {
    background-color: ${variables.backgroundColor};
    color: ${variables.fontColor};
    font-size: 16px;
    font-weight: 400;
  }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 256px auto;

  .mainContent {
    overflow-y: scroll;
  }
`

export const Line = styled.hr`
  height: 2px;
  background-color: ${variables.secondaryColor};
  border: none;
  margin: 8px 0;
`
