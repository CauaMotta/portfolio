import styled from 'styled-components'
import variables from '../../styles/variables'

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

      .active {
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

  @media (max-width: ${variables.breakpoints.mobile}) {
    padding: 0 16px;

    top: 70px;

    .navContainer {
      height: auto;

      nav {
        display: flex;
        flex-direction: column;
        align-items: center;

        width: 100%;

        button {
          display: block;

          font-size: 16px;

          &.selected {
            color: ${({ theme }) => theme.colors.primaryColor};
          }

          &.animate {
            height: 0;
            opacity: 0;
            visibility: hidden;
            transition: height 0.5s ease 0.1s, opacity 0.4s,
              visibility 0s linear 0.4s;

            &.open {
              height: 32px;
              opacity: 1;
              visibility: visible;
              transition: height 0.5s, opacity 0.5s ease 0.1s,
                visibility 0s linear;
            }
          }
        }

        .active {
          position: static;

          display: flex;
          justify-content: center;
          align-items: center;

          width: 100%;
          height: 32px;

          background-color: transparent;
          color: ${({ theme }) => theme.colors.primaryColor};
          font-size: 16px;
          font-weight: bold;

          cursor: pointer;

          opacity: 1;

          visibility: visible;

          transition: height 0.5s, opacity 0.8s, visibility 0s linear 0.2s;

          &.open {
            visibility: hidden;
            height: 0;
            opacity: 0;
            transition: height 0.5s, opacity 0.5s, visibility 0s linear;
          }
        }

        .menuBtn {
          width: 32px;
          height: 32px;

          position: absolute;
          right: 0;
          bottom: 0;

          color: ${({ theme }) => theme.colors.primaryColor};

          transition: all 0.5s;

          &.open {
            transform: rotate(180deg);
          }
        }
      }
    }
  }
`
