import styled from 'styled-components'

import variables from '../../styles/variables'

export const Container = styled.div`
  padding: 0 16px;
  overflow-y: scroll;

  .title {
    text-align: center;

    margin-block: 16px;
  }

  .btnGroup {
    margin-top: 16px;
    margin-bottom: 32px;

    display: flex;
    gap: 8px;
  }

  @media (max-width: ${variables.breakpoints.tablet}) {
    overflow-y: visible;

    .title {
      margin-block: 12px;
    }

    .btnGroup {
      margin-top: 14px;
      margin-bottom: 24px;
    }
  }
`

export const NavButton = styled.button`
  margin-top: 40px;
  padding: 16px 0;

  color: ${({ theme }) => theme.colors.fontColorSecondary};
  font-weight: bold;
  font-size: 16px;

  background-color: transparent;
  border: none;

  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryColor};
  }

  @media (max-width: ${variables.breakpoints.tablet}) {
    margin: 0;

    padding: 14px 0;

    font-size: 14px;
  }
`
