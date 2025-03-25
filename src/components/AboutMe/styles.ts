import styled from 'styled-components'
import variables from '../../styles/variables'

export const Container = styled.section`
  position: relative;

  padding: 40px 32px;

  background-color: ${variables.secondaryColor};
  border-radius: 16px;

  .m-top {
    margin-top: 24px;
  }

  .SectionTitle {
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
    color: ${variables.fontColorSecondary};
  }

  .contact-me {
    margin-top: 24px;

    button {
      display: inline-block;
      padding: 6px 16px;

      color: ${variables.primaryColor};
      font-weight: 600;
      font-size: 16px;

      background-color: transparent;
      border: 3px solid ${variables.primaryColor};
      border-radius: 8px;

      cursor: pointer;

      &:hover {
        background-color: ${variables.primaryColor};
        color: ${variables.secondaryColor};
      }
    }
  }

  .hashtag {
    position: absolute;
    top: 32px;
    right: 48px;

    font-size: 60px;
    opacity: 0.15;
    transform: rotate(5deg);
  }
`
