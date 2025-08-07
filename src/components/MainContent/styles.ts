import styled from 'styled-components'
import variables from '../../styles/variables'

export const Container = styled.div`
  padding: 0 16px;

  overflow-y: scroll;

  .btnGroup {
    margin-top: -16px;
    margin-bottom: 32px;

    display: flex;
    gap: 8px;
  }

  @media (max-width: ${variables.breakpoints.tablet}) {
    overflow-y: visible;

    .btnGroup {
      margin-top: -12px;
      margin-bottom: 24px;
    }
  }
`

export const FilterBtn = styled.button`
  display: inline-block;
  padding: 4px 12px;
  border-radius: 8px;

  color: ${({ theme }) => theme.colors.fontColorSecondary};
  font-weight: 500;
  font-size: 16px;

  background-color: ${({ theme }) => theme.colors.secondaryColor};
  border: 2px solid ${({ theme }) => theme.colors.secondaryColor};
  border-radius: 16px;

  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryColor};
  }

  &.active {
    color: ${({ theme }) => theme.colors.backgroundColor};

    background-color: ${({ theme }) => theme.colors.primaryColor};
    border: 2px solid ${({ theme }) => theme.colors.primaryColor};

    &:hover {
      background-color: ${({ theme }) => theme.colors.primaryColorDark};
      border: 2px solid ${({ theme }) => theme.colors.primaryColorDark};
    }
  }

  @media (max-width: ${variables.breakpoints.tablet}) {
    font-size: 14px;
  }
`
