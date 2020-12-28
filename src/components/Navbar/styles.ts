import styled, { css } from 'styled-components'

export const Header = styled.header<{ background: boolean }>`
  width: 100%;
  height: 8rem;
  z-index: 1;
  position: fixed;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  transition: background 400ms;

  ${({ background }) => background && css`
    background: rgba(200, 200, 200, .2);
  `}
`

export const Link = styled.a`
  width: 12rem;
  color: ${props => props.theme.colors.primaryText};
  font-weight: 500;
  transition: transform 200ms;
  text-align: center;

  :hover {
    transform: scale(1.1);
  }
`
