import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;

  position: sticky;
  top: 0;
  z-index: 1;

  background-color: ${({ theme }) => theme.colors.backgroundColor};
  padding-top: 40px;

  .navContainer {
    height: 60px;

    display: flex;
    justify-content: center;
    align-items: center;

    nav {
      position: relative;

      button {
        background-color: transparent;
        border: none;

        color: ${({ theme }) => theme.colors.fontColor};
        font-size: 18px;
        font-weight: bold;

        height: 32px;

        cursor: pointer;

        &:nth-child(1) {
          width: 80px;
        }
        &:nth-child(2) {
          width: 100px;
        }
        &:nth-child(3) {
          width: 132px;
        }
        &:nth-child(4) {
          width: 100px;
        }
      }

      .line {
        position: absolute;
        bottom: 0;
        height: 3px;
        background-color: ${({ theme }) => theme.colors.primaryColor};
        border-radius: 8px;
        transition: all 0.5s;
      }

      .about {
        width: 80px;
        left: 0;
      }
      .projects {
        width: 100px;
        left: 80px;
      }
      .certificates {
        width: 132px;
        left: 180px;
      }
      .contact {
        width: 100px;
        left: 312px;
      }
    }
  }
`
