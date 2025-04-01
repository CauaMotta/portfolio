import styled from 'styled-components'
import variables from '../../styles/variables'

export const Container = styled.aside`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 48px 16px;

  .avatar {
    img {
      width: 220px;
      height: 220px;

      display: block;
      object-fit: cover;

      border-radius: 50%;
      border: 3px solid ${({ theme }) => theme.colors.primaryColor};
      background-color: ${({ theme }) => theme.colors.primaryColor};
    }
  }

  .info {
    width: 100%;

    margin-top: 16px;

    line-height: 22px;

    h1,
    span,
    p {
      display: block;
    }

    span {
      font-weight: 300;
      margin-bottom: 8px;
    }
  }

  .social {
    width: 100%;
    margin-top: 16px;

    h2 {
      font-size: 16px;
      margin-bottom: 8px;
    }
  }

  .theme {
    margin-top: 16px;

    button {
      width: 100%;
      padding: 8px 16px;

      background: transparent;
      border: none;

      font-family: ${variables.fontFamily};
      color: ${({ theme }) => theme.colors.fontColor};
      font-size: 16px;
      font-weight: 500;

      cursor: pointer;

      &:hover {
        background-color: ${({ theme }) => theme.colors.primaryColor};
        border-radius: 8px;

        color: ${({ theme }) => theme.colors.secondaryColor};
      }
    }
  }
`
