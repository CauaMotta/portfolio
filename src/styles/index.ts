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
    scrollbar-color: ${({ theme }) => theme.colors.primaryColorDark} ${({
  theme
}) => theme.colors.secondaryColor};
    scroll-margin-top: 132px;

    @media (max-width: ${variables.breakpoints.mobile}) {
      scrollbar-width: none;
    }
  }

  body {
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    color: ${({ theme }) => theme.colors.fontColor};
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
    color: ${({ theme }) => theme.colors.fontColorSecondary};

    &--small {
      font-size: 14px;
      line-height: 22px;
      color: ${({ theme }) => theme.colors.fontColorSecondary};
    }
  }

  .social-link {
    color: ${({ theme }) => theme.colors.primaryColor};
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.colors.primaryColorDark};
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

  @media (max-width: ${variables.breakpoints.mobile}) {
    display: flex;
    flex-direction: column;
  }
`

export const Line = styled.hr`
  height: 2px;
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  border: none;
  margin: 8px 0;
`

export const Button = styled.button`
  display: inline-block;
  padding: 6px 16px;

  color: ${({ theme }) => theme.colors.primaryColor};
  font-weight: bold;
  font-size: 16px;

  background-color: transparent;
  border: 3px solid ${({ theme }) => theme.colors.primaryColor};
  border-radius: 8px;

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryColor};
    color: ${({ theme }) => theme.colors.secondaryColor};
  }
`

export const Link = styled.a`
  display: inline-block;
  padding: 6px 16px;

  color: ${({ theme }) => theme.colors.secondaryColor};
  font-weight: bold;
  font-size: 16px;
  text-decoration: none;

  background-color: ${({ theme }) => theme.colors.primaryColor};
  border: 3px solid ${({ theme }) => theme.colors.primaryColor};
  border-radius: 8px;

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryColorDark};
    border-color: ${({ theme }) => theme.colors.primaryColorDark};
  }
`
