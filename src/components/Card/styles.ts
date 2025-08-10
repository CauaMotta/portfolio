import styled from 'styled-components'
import { Line } from '../../styles'
import variables from '../../styles/variables'

type Props = {
  type: 'project' | 'certificate'
}

export const Container = styled.div<Props>`
  background-color: ${({ theme }) => theme.colors.secondaryColor};
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
      border: ${(props) =>
        props.type === 'project'
          ? `2px solid ${props.theme.colors.primaryColor}`
          : 'none'};
      background-color: ${({ type }: Props) =>
        type === 'project'
          ? ({ theme }) => theme.colors.primaryColor
          : 'transparent'};
      overflow: hidden;

      width: ${({ type }: Props) => (type === 'project' ? '160px' : '64px')};
      height: ${({ type }: Props) => (type === 'project' ? '120px' : '64px')};
    }

    .content {
      flex: 1;

      .title--small {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .resume {
        height: 66px;
      }

      ${Line} {
        background-color: ${({ theme }) => theme.colors.backgroundColor};
      }
    }
  }

  .btn-container {
    display: flex;
    justify-content: flex-end;
    gap: 16px;

    .certificate-link {
      padding: 6px 16px;

      color: ${({ theme }) => theme.colors.fontColor};
      font-weight: bold;
      text-decoration: none;

      &:hover {
        color: ${({ theme }) => theme.colors.fontColorSecondary};
      }
    }
  }

  &:hover {
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.1);
  }

  @media (max-width: ${variables.breakpoints.desktop_sm}) {
    .content-container {
      .content {
        .title--small {
          flex-direction: column;
          align-items: flex-start;
          gap: 0;
        }

        .resume {
          height: auto;
        }
      }
    }
  }

  @media (max-width: ${variables.breakpoints.tablet}) {
    .content-container {
      gap: 8px;

      .content {
        .title--small {
          flex-direction: row;
          align-items: center;
          gap: 4px;
          flex-wrap: wrap;
        }
      }

      .btn-container {
        .certificate-link {
          padding: 6px 12px;
        }
      }
    }
  }

  @media (max-width: ${variables.breakpoints.mobile}) {
    margin-bottom: 24px;

    gap: 12px;

    .content-container {
      flex-direction: column;
      gap: 8px;

      .image-container {
        width: ${({ type }: Props) => (type === 'project' ? '256px' : '64px')};
        height: ${({ type }: Props) => (type === 'project' ? '160px' : '64px')};
      }

      .content {
        width: 100%;

        text-align: center;

        .title--small {
          flex-direction: column;
          justify-content: center;
          gap: 0;
        }

        .resume {
          height: auto;
        }

        ${Line} {
          margin: 4px 0 8px 0;
        }
      }
    }

    .btn-container {
      flex-direction: column;
      gap: 8px;
    }
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
      width: 256px;
      height: 192px;

      background-color: ${({ theme }) => theme.colors.primaryColor};
      border: 3px solid ${({ theme }) => theme.colors.primaryColor};
      border-radius: 16px;

      overflow: hidden;
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
          grid-auto-flow: column;
          grid-template-rows: repeat(5, 24px);
          grid-template-columns: 1fr 1fr;
        }

        &:has(li:nth-child(11)) {
          grid-template-columns: 1fr 1fr;
          grid-auto-flow: row;
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

  @media (max-width: ${variables.breakpoints.tablet}) {
    margin-top: 0;

    display: flex;
    flex-direction: column;
    gap: 8px;

    padding-bottom: 32px;

    .grid-item-1 {
      margin: 0 auto;
      .image-container {
        border-width: 2px;
      }
    }

    .grid-item-2 {
      h2 {
        text-align: center;
      }

      ${Line} {
        display: block;
        margin-top: 4px;
      }

      .section {
        margin-top: 8px;

        ul {
          padding-left: 0;
          grid-auto-rows: 20px;

          &:has(li:nth-child(6)) {
            grid-template-rows: repeat(5, auto);
          }

          li {
            min-height: 20px;
            height: auto;
          }
        }

        .links-container {
          padding-left: 0;

          flex-direction: column;
        }
      }
    }
  }
`

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
`

export const SpanType = styled.span`
  display: inline-block;
  padding: 0 8px;

  color: ${({ theme }) => theme.colors.backgroundColor};
  font-size: 16px;
  font-weight: bold;

  background-color: ${({ theme }) => theme.colors.primaryColor};
  border: 3px solid ${({ theme }) => theme.colors.primaryColor};

  border-radius: 4px;

  @media (max-width: ${variables.breakpoints.tablet}) {
    padding: 0 4px;

    font-size: 12px;
  }

  @media (max-width: ${variables.breakpoints.mobile}) {
    order: -1;
  }
`
