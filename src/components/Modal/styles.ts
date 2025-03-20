import styled from 'styled-components'
import variables from '../../styles/variables'
import { Line } from '../../styles'

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
`

export const ModalCard = styled.div`
  min-width: 320px;
  min-height: 120px;

  position: relative;
  z-index: 1;

  background-color: ${variables.secondaryColor};

  padding: 24px 16px;
  border-radius: 16px;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding-inline: 8px;

    h3 {
      font-size: 18px;
      font-weight: 500;
    }

    .close {
      background: transparent;
      border: none;

      color: ${variables.fontColorSecondary};
      font-size: 24px;

      cursor: pointer;

      &:hover {
        color: ${variables.fontColor};
      }
    }
  }

  .content {
    padding: 0 8px;
  }

  ${Line} {
    background-color: ${variables.backgroundColor};
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
