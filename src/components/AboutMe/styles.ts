import styled from 'styled-components'

export const Container = styled.section`
  position: relative;

  padding: 40px 32px;
  margin-top: 40px;

  background-color: ${({ theme }) => theme.colors.secondaryColor};
  border-radius: 16px;

  .m-top {
    margin-top: 24px;
  }

  .title {
    font-weight: 400;
    margin-bottom: 24px;
  }

  .hashtag {
    position: absolute;
    top: 32px;
    right: 48px;

    font-size: 60px;
    opacity: 0.15;
    transform: rotate(5deg);
  }
`
