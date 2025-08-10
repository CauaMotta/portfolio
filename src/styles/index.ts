import styled, { createGlobalStyle, keyframes } from 'styled-components'
import { ClipLoader } from 'react-spinners'

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

  .containerIsLoading {
    display: flex;
    justify-content: center;

    margin-block: 32px;
  }

  .containerIsError {
    margin-top: 32px;

    text-align: center;
    font-size: 18px;

    i {
      color: ${({ theme }) => theme.colors.fontColorSecondary};
      font-size: 32px;

      margin-bottom: 8px;
    }
  }

  @media (max-width: ${variables.breakpoints.tablet}) {
    * {
      scrollbar-width: none;
      scroll-margin-top: 218px;

      -webkit-tap-highlight-color: transparent;
    }

    .title {
      font-size: 18px;

      &--small {
        font-size: 16px;
      }

      .emphasis {
        font-size: 24px;
      }
    }

    .text {
      font-size: 14px;
      line-height: 18px;

      &--small {
        font-size: 12px;
        line-height: 16px;
      }
    }

    .containerIsError {
    i {
      font-size: 24px;

      margin-bottom: 6px;
    }
  }
  }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 256px auto;

  @media (max-width: ${variables.breakpoints.tablet}) {
    display: flex;
    flex-direction: column;

    height: auto;
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

  @media (max-width: ${variables.breakpoints.tablet}) {
    font-size: 14px;
    border-width: 2px;

    padding-inline: 14px;
  }
`

export const Link = styled.a`
  display: inline-block;
  padding: 6px 16px;

  color: ${({ theme }) => theme.colors.secondaryColor};
  font-weight: bold;
  font-size: 16px;
  text-decoration: none;
  text-align: center;

  background-color: ${({ theme }) => theme.colors.primaryColor};
  border: 3px solid ${({ theme }) => theme.colors.primaryColor};
  border-radius: 8px;

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryColorDark};
    border-color: ${({ theme }) => theme.colors.primaryColorDark};
  }

  @media (max-width: ${variables.breakpoints.tablet}) {
    font-size: 14px;
    border-width: 2px;

    padding-inline: 14px;
  }
`

export const FilterBtn = styled.button`
  display: inline-block;
  padding: 4px 12px;
  border-radius: 8px;

  color: ${({ theme }) => theme.colors.fontColorSecondary};
  font-weight: 500;
  font-size: 16px;

  background-color: ${({ theme }) => theme.colors.secondaryColor};
  border: 2px solid ${({ theme }) => theme.colors.secondaryColor};
  border-radius: 16px;

  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryColor};
  }

  &.active {
    color: ${({ theme }) => theme.colors.backgroundColor};

    background-color: ${({ theme }) => theme.colors.primaryColor};
    border: 2px solid ${({ theme }) => theme.colors.primaryColor};

    &:hover {
      background-color: ${({ theme }) => theme.colors.primaryColorDark};
      border: 2px solid ${({ theme }) => theme.colors.primaryColorDark};
    }
  }

  @media (max-width: ${variables.breakpoints.tablet}) {
    font-size: 14px;
  }
`

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`

export const StyledClipLoader = styled(ClipLoader)`
  border-width: 4px !important;
  animation: ${spin} 1s 0s linear infinite !important;
`
