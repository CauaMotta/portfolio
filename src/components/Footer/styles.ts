import styled from 'styled-components'

export const Container = styled.footer`
  margin-top: 64px;
  margin-bottom: 32px;
  padding: 40px 32px;

  text-align: center;

  background-color: ${({ theme }) => theme.colors.primaryColor};
  border-radius: 16px;

  .title--small,
  .text--small {
    color: ${({ theme }) => theme.colors.secondaryColor};
  }
`
