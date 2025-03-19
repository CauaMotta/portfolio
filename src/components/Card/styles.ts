import styled from 'styled-components'
import variables from '../../styles/variables'
import { Line } from '../../styles'

export const Container = styled.div`
  background-color: ${variables.secondaryColor};
  border-radius: 16px;

  padding: 24px 16px;
  margin-bottom: 32px;

  display: flex;
  flex-direction: column;
  gap: 8px;

  .content-container {
    display: flex;
    gap: 16px;

    .image-container {
      border-radius: 8px;
      border: 3px solid ${variables.primaryColor};
      background-color: ${variables.primaryColor};
      overflow: hidden;

      width: 160px;
      height: 120px;

      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .content {
      flex: 1;

      .title {
        font-size: 18px;
        font-weight: 500;
        padding-inline: 8px;
      }

      .resume {
        font-size: 14px;
        line-height: 22px;
        color: ${variables.fontColorSecondary};
        padding-inline: 8px;
      }

      ${Line} {
        background-color: ${variables.backgroundColor};
      }
    }
  }

  .btn-container {
    display: flex;
    justify-content: flex-end;
    gap: 16px;

    button,
    a {
      font-size: 16px;
      font-weight: bold;
      color: ${variables.secondaryColor};

      background-color: ${variables.primaryColor};
      padding: 6px 16px;
      border-radius: 8px;
      border: 3px solid ${variables.primaryColor};

      cursor: pointer;
    }

    a {
      text-decoration: none;

      &:hover {
        background-color: ${variables.primaryColorDark};
        border-color: ${variables.primaryColorDark};
      }
    }

    button {
      color: ${variables.primaryColor};
      font-family: ${variables.fontFamily};

      background-color: transparent;

      &:hover {
        background-color: ${variables.primaryColor};
        color: ${variables.secondaryColor};
      }
    }
  }

  &:hover {
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.1);
  }
`
