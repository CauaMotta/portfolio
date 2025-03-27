import styled from 'styled-components'
import variables from '../../styles/variables'

export const Container = styled.footer`
  margin-top: 64px;
  margin-bottom: 32px;
  padding: 40px 32px;

  text-align: center;

  background-color: ${variables.primaryColor};
  border-radius: 16px;

  .title--small,
  .text--small {
    color: ${variables.secondaryColor};
  }
`
