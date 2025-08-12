import styled from 'styled-components'
import variables from '../../styles/variables'

export const Container = styled.div`
  padding: 0 16px;
  overflow-y: scroll;

  .title {
    text-align: center;

    margin-block: 16px;
  }

  .certificates-box {
    margin-top: 32px;
  }

  @media (max-width: ${variables.breakpoints.tablet}) {
    overflow-y: visible;

    .title {
      margin-block: 12px;
    }
  }
`
