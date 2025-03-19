import styled from 'styled-components'
import variables from '../../styles/variables'

export const Container = styled.section`
  margin-top: 40px;

  .header-container {
    margin-bottom: 32px;
  }

  .title {
    padding-inline: 16px;
    font-size: 24px;
  }

  .description {
    padding-inline: 32px;

    line-height: 22px;
    color: ${variables.fontColorSecondary};
  }
`
