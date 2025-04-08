import styled from 'styled-components'
import variables from '../../styles/variables'

export const Container = styled.div`
  padding: 0 16px;

  overflow-y: scroll;

  @media (max-width: ${variables.breakpoints.mobile}) {
    flex: 1;
  }
`
