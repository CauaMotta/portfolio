import styled from 'styled-components'
import variables from '../../styles/variables'

export const Container = styled.footer`
  margin-top: 64px;
  padding: 40px 32px;

  color: ${variables.secondaryColor};

  background-color: ${variables.primaryColor};
  border-radius: 16px;

  .title {
    font-size: 18px;
    font-weight: bold;
    text-align: center;
  }

  .text {
    font-size: 14px;
    text-align: center;
    margin-top: 8px;
  }
`
