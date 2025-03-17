import styled from 'styled-components'
import variables from '../../styles/variables'

export const Container = styled.header`
  width: 100%;
  height: 60px;

  display: flex;
  justify-content: center;
  align-items: center;

  .navList {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;

    a {
      text-decoration: none;
      color: ${variables.fontColor};
      font-size: 18px;
      font-weight: bold;

      padding: 6px 16px;

      &:hover {
        color: ${variables.secondaryColor};
        background-color: ${variables.primaryColor};
        border-radius: 8px;
      }
    }
  }
`
