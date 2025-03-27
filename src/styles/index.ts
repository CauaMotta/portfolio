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
    scroll-margin-top: 132px;
  }

  body {
    background-color: ${variables.backgroundColor};
    color: ${variables.fontColor};
    font-size: 16px;
    font-weight: 400;
  }

  .title {
    font-size: 24px;
    font-weight: bold;

    &--small {
      font-size: 18px;
      font-weight: 500;
    }

    .emphasis {
      font-size: 32px;
      font-weight: bold;
    }
  }

  .text {
    line-height: 22px;
    color: ${variables.fontColorSecondary};

    &--small {
      font-size: 14px;
      line-height: 22px;
      color: ${variables.fontColorSecondary};
    }
  }

  .social-link {
    color: ${variables.primaryColor};
    text-decoration: none;

    &:hover {
      color: ${variables.primaryColorDark};
    }
  }

  .pi-8 {
    padding-inline: 8px;
  }

  .mt-8 {
    margin-top: 8px;
  }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 256px auto;
`

export const Line = styled.hr`
  height: 2px;
  background-color: ${variables.secondaryColor};
  border: none;
  margin: 8px 0;
`

export const Button = styled.button`
  display: inline-block;
  padding: 6px 16px;

  color: ${variables.primaryColor};
  font-weight: bold;
  font-size: 16px;

  background-color: transparent;
  border: 3px solid ${variables.primaryColor};
  border-radius: 8px;

  cursor: pointer;

  &:hover {
    background-color: ${variables.primaryColor};
    color: ${variables.secondaryColor};
  }
`

export const Link = styled.a`
  display: inline-block;
  padding: 6px 16px;

  color: ${variables.secondaryColor};
  font-weight: bold;
  font-size: 16px;
  text-decoration: none;

  background-color: ${variables.primaryColor};
  border: 3px solid ${variables.primaryColor};
  border-radius: 8px;

  cursor: pointer;

  &:hover {
    background-color: ${variables.primaryColorDark};
    border-color: ${variables.primaryColorDark};
  }
`
