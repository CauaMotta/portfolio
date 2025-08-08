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

export const NavButton = styled.button`
  width: 100%;
  padding: 20px 0;

  color: ${({ theme }) => theme.colors.fontColorSecondary};
  font-weight: bold;
  font-size: 18px;

  background-color: ${({ theme }) => theme.colors.secondaryColor};
  border: 3px solid ${({ theme }) => theme.colors.secondaryColor};
  border-radius: 16px;

  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryColor};

    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.1);
  }

  @media (max-width: ${variables.breakpoints.tablet}) {
    font-size: 16px;
  }
`
