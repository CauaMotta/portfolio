import styled from 'styled-components'
import variables from '../../styles/variables'

export const Container = styled.section`
  margin-top: 40px;

  .header-container {
    margin-bottom: 32px;
  }

  .pi-title {
    padding-inline: 16px;
  }

  .pi-text {
    padding-inline: 32px;
  }

  @media (max-width: ${variables.breakpoints.mobile}) {
    margin-top: 32px;

    .header-container {
      margin-bottom: 24px;
    }

    .pi-title {
      padding-inline: 8px;
    }

    .pi-text {
      padding-inline: 16px;
    }
  }
`
