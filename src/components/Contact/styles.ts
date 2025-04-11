import styled from 'styled-components'
import variables from '../../styles/variables'

export const Container = styled.section`
  margin-top: 40px;
  padding: 40px 32px;
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  border-radius: 16px;

  position: relative;

  .title {
    font-weight: 400;
    margin-bottom: 24px;
  }

  .text {
    margin-bottom: 4px;
  }

  .emailBtn {
    width: 100%;

    display: flex;
    justify-content: space-between;

    background: transparent;
    border: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors.backgroundColor};

    color: ${({ theme }) => theme.colors.fontColor};
    font-size: 16px;

    padding-inline: 8px;
    padding-bottom: 4px;
    margin-bottom: 24px;

    cursor: pointer;

    span {
      color: ${({ theme }) => theme.colors.fontColorSecondary};
    }

    &:hover {
      border-color: ${({ theme }) => theme.colors.primaryColor};
      span {
        color: ${({ theme }) => theme.colors.fontColor};
      }
    }
  }

  .inputGroup {
    display: flex;
    flex-direction: column;

    margin-bottom: 16px;

    small {
      color: darkred;
    }

    .error {
      border-color: darkred;
    }

    input,
    textarea {
      width: 100%;

      background: transparent;

      border: none;
      border-bottom: 2px solid ${({ theme }) => theme.colors.backgroundColor};

      outline: none;

      font-size: 16px;
      color: ${({ theme }) => theme.colors.fontColor};

      padding: 4px 8px;

      &:hover {
        border-color: ${({ theme }) => theme.colors.primaryColor};
      }

      &:focus {
        border-color: ${({ theme }) => theme.colors.primaryColor};
      }
    }

    textarea {
      resize: none;
    }
  }

  .submitBtnContainer {
    display: flex;
    justify-content: flex-end;

    .submitBtn {
      align-self: flex-end;
      padding: 6px 16px;

      background-color: ${({ theme }) => theme.colors.primaryColor};
      border: none;
      border-radius: 8px;

      color: ${({ theme }) => theme.colors.secondaryColor};
      font-size: 16px;
      font-weight: bold;

      cursor: pointer;

      &:hover {
        background-color: ${({ theme }) => theme.colors.primaryColorDark};
      }
    }
  }

  .socialMedia {
    margin-top: 24px;

    ul {
      margin-top: 16px;
      margin-left: 24px;
    }
  }

  .sectionIcon {
    position: absolute;
    top: 32px;
    right: 48px;

    font-size: 64px;
    opacity: 0.15;
    transform: rotate(5deg);
  }

  @media (max-width: ${variables.breakpoints.mobile}) {
    margin-top: 32px;
    padding: 32px 24px;

    .emailBtn {
      font-size: 14px;

      padding-inline: 6px;
      margin-bottom: 16px;
    }

    .inputGroup {
      margin-bottom: 8px;

      label {
        margin: 0;
      }

      input {
        padding: 4px 6px;
      }
    }

    .socialMedia {
      ul {
        margin-top: 8px;
        margin-left: 16px;
      }
    }

    .sectionIcon {
      font-size: 48px;

      top: 32px;
      right: 32px;
    }
  }
`
