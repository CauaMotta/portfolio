import styled from 'styled-components'
import variables from '../../styles/variables'

export const Container = styled.aside`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 48px 8px;

  .avatar {
    img {
      width: 220px;
      height: 220px;

      display: block;
      object-fit: cover;

      border-radius: 50%;
      border: 3px solid ${variables.primaryColor};
      background-color: ${variables.primaryColor};
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
      font-size: 14px;
      font-weight: 300;
      color: ${variables.fontColorSecondary};
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
    a {
      color: ${variables.primaryColor};
      text-decoration: none;

      &:hover {
        /* opacity: 0.8; */
        color: ${variables.primaryColorDark};
      }
    }
  }
`
