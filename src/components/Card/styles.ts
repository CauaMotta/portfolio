import styled from 'styled-components'
import variables from '../../styles/variables'
import { Line } from '../../styles'

type Props = {
  type: 'project' | 'certificate'
}

export const Container = styled.div<Props>`
  background-color: ${variables.secondaryColor};
  border-radius: 16px;

  padding: 24px 16px;
  margin-bottom: 32px;

  display: flex;
  flex-direction: column;
  gap: 8px;

  .content-container {
    display: flex;
    align-items: center;
    gap: 16px;

    .image-container {
      border-radius: 8px;
      border: ${({ type }: Props) =>
        type === 'project' ? `2px solid ${variables.primaryColor}` : 'none'};
      background-color: ${({ type }: Props) =>
        type === 'project' ? variables.primaryColor : 'transparent'};
      overflow: hidden;

      width: ${({ type }: Props) => (type === 'project' ? '160px' : '64px')};
      height: ${({ type }: Props) => (type === 'project' ? '120px' : '64px')};

      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .content {
      flex: 1;

      ${Line} {
        background-color: ${variables.backgroundColor};
      }
    }
  }

  .btn-container {
    display: flex;
    justify-content: flex-end;
    gap: 16px;

    .certificate-link {
      padding: 6px 16px;

      color: ${variables.fontColor};
      font-weight: bold;
      text-decoration: none;

      &:hover {
        color: ${variables.fontColorSecondary};
      }
    }
  }

  &:hover {
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.1);
  }
`

export const Grid = styled.div`
  width: 100%;

  margin-top: 24px;

  display: grid;
  grid-template-columns: 256px auto;
  gap: 24px;

  .grid-item-1 {
    .image-container {
      background-color: ${variables.primaryColor};
      border: 3px solid ${variables.primaryColor};
      border-radius: 16px;

      overflow: hidden;

      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .grid-item-2 {
    .section {
      margin-top: 16px;

      .title--small {
        margin-bottom: 8px;
      }

      ul {
        padding-left: 16px;
        display: grid;
        grid-auto-rows: 24px;
        grid-template-columns: 1fr;

        &:has(li:nth-child(6)) {
          grid-template-columns: 1fr 1fr;
          grid-template-rows: repeat(5, 24px);
          grid-auto-flow: column;
        }

        li {
          height: 24px;
        }
      }

      .links-container {
        padding-left: 16px;

        display: flex;
        gap: 8px;
      }
    }
  }
`
