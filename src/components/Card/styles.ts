import styled from 'styled-components'
import variables from '../../styles/variables'
import { Line } from '../../styles'

import { Props } from '.'

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

      .title {
        font-size: 18px;
        font-weight: 500;
        padding-inline: 8px;
      }

      .resume {
        font-size: 14px;
        line-height: 22px;
        color: ${variables.fontColorSecondary};
        padding-inline: 8px;
      }

      ${Line} {
        background-color: ${variables.backgroundColor};
      }
    }
  }

  .btn-container {
    display: flex;
    justify-content: flex-end;
    gap: 16px;

    button,
    a {
      font-size: 16px;
      font-weight: bold;
      color: ${({ type }: Props) =>
        type === 'project' ? variables.secondaryColor : variables.fontColor};

      background-color: ${({ type }: Props) =>
        type === 'project' ? variables.primaryColor : 'transparent'};
      padding: 6px 16px;
      border-radius: 8px;
      border: ${({ type }: Props) =>
        type === 'project' ? `3px solid ${variables.primaryColor}` : 'none'};

      cursor: pointer;
    }

    a {
      text-decoration: none;

      &:hover {
        background-color: ${({ type }: Props) =>
          type === 'project' ? variables.primaryColorDark : 'transparent'};
        border-color: ${({ type }: Props) =>
          type === 'project' && variables.primaryColorDark};
        color: ${({ type }: Props) =>
          type !== 'project' && variables.fontColorSecondary};
      }
    }

    button {
      color: ${variables.primaryColor};
      font-family: ${variables.fontFamily};

      background-color: transparent;

      &:hover {
        background-color: ${variables.primaryColor};
        color: ${variables.secondaryColor};
      }
    }
  }

  &:hover {
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.1);
  }
`
