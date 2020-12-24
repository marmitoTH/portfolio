import styled from 'styled-components'

export const List = styled.ul`
  width: 100%;
  padding-left: 0;
  list-style-type: none;
`

export const Element = styled.li`
  padding: 2rem;
  border-radius: 6px;
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.1);

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
