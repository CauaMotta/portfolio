import styled from 'styled-components'
import variables from '../../styles/variables'

export const Container = styled.section`
  margin-top: 60px;
  padding: 40px 32px;
  background-color: ${variables.secondaryColor};
  border-radius: 16px;

  position: relative;

  .title {
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 24px;

    span {
      font-size: 32px;
      font-weight: bold;
    }
  }

  .text {
    line-height: 22px;
    margin-bottom: 4px;
    color: ${variables.fontColorSecondary};
  }

  .emailBtn {
    width: 100%;

    display: flex;
    justify-content: space-between;

    background: transparent;
    border: none;
    border-bottom: 2px solid ${variables.backgroundColor};

    color: ${variables.fontColor};
    font-size: 16px;

    padding-inline: 8px;
    padding-bottom: 4px;
    margin-bottom: 24px;

    cursor: pointer;

    span {
      color: ${variables.fontColorSecondary};
    }

    &:hover {
      border-color: ${variables.primaryColor};
      span {
        color: ${variables.fontColor};
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
      border-bottom: 2px solid ${variables.backgroundColor};

      outline: none;

      font-size: 16px;
      color: ${variables.fontColor};

      padding: 4px 8px;

      &:hover {
        border-color: ${variables.primaryColor};
      }

      &:focus {
        border-color: ${variables.primaryColor};
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

      background-color: ${variables.primaryColor};
      border: none;
      border-radius: 8px;

      color: ${variables.secondaryColor};
      font-size: 16px;
      font-weight: bold;

      cursor: pointer;

      &:hover {
        background-color: ${variables.primaryColorDark};
      }
    }
  }

  .socialMedia {
    margin-top: 24px;

    p {
      font-size: 18px;
      font-weight: bold;
    }

    ul {
      margin-top: 16px;
      margin-left: 24px;
    }

    a {
      text-decoration: none;
      color: ${variables.primaryColor};

      &:hover {
        color: ${variables.primaryColorDark};
      }
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

  .modalMessage {
    color: ${variables.fontColorSecondary};
  }
`
