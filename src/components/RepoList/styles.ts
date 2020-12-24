import styled from 'styled-components'

export const List = styled.ul`
  width: 100%;
  padding-left: 0;
  list-style-type: none;
`

export const Element = styled.li`
  padding: 2rem;
  border-radius: 6px;
  border: 1px solid ${props => props.theme.colors.primaryBorder};
  background: ${props => props.theme.colors.primaryBackground};

  & + & {
    margin-top: 1.5rem;
  }
`

export const Title = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 1.2rem;
`

export const Description = styled.p`
  font-size: 1.2rem;
`
