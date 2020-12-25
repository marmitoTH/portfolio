import styled from 'styled-components'
import * as Animation from '../../styles/animations'

export const List = styled.ul`
  width: 100%;
  padding-left: 0;
  list-style-type: none;
`

export const Element = styled.li<{ fadeDelay: number }>`
  padding: 2rem;
  border-radius: 6px;
  border: 1px solid ${props => props.theme.colors.primaryBorder};
  background: ${props => props.theme.colors.primaryBackground};
  animation: ${Animation.ZoomIn} 200ms ${({ fadeDelay }) => fadeDelay}ms backwards;

  & + & {
    margin-top: 1.5rem;
  }
`

export const Buttons = styled.div`
  display: flex;
  margin-top: 1rem;

  button {
    margin-right: 1rem;
  }
`

export const Title = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: .5rem;
`

export const Description = styled.p`
  font-size: 1.2rem;
`
