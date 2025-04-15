import styled from 'styled-components'
import { Line } from '../../styles'
import variables from '../../styles/variables'

export const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;

  z-index: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;

  @media (max-width: ${variables.breakpoints.tablet}) {
    align-items: flex-end;
  }
`

export const ModalCard = styled.div`
  max-width: 992px;

  min-width: 320px;
  min-height: 120px;

  position: relative;
  z-index: 1;

  background-color: ${({ theme }) =>
    theme.name === 'dark'
      ? theme.colors.secondaryColor
      : theme.colors.backgroundColor};

  padding: 24px 16px;
  border-radius: 16px;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .close {
      background: transparent;
      border: none;

      color: ${({ theme }) => theme.colors.fontColorSecondary};
      font-size: 24px;

      cursor: pointer;

      &:hover {
        color: ${({ theme }) => theme.colors.fontColor};
      }
    }
  }

  ${Line} {
    background-color: ${({ theme }) =>
      theme.name === 'dark'
        ? theme.colors.backgroundColor
        : theme.colors.secondaryColor};
  }

  @media (max-width: ${variables.breakpoints.tablet}) {
    padding: 16px 16px 0 16px;

    border-radius: 16px 16px 0 0;

    .header {
      display: none;
    }

    ${Line} {
      display: none;
    }

    .drag-icon {
      width: 100%;

      display: flex;
      justify-content: center;

      padding: 16px 0;
      margin-top: -16px;

      span {
        display: block;
        width: 40px;
        height: 3px;
        background-color: ${({ theme }) => theme.colors.fontColorSecondary};
        border-radius: 10px;
      }
    }
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`
