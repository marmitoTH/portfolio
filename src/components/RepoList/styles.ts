import styled from 'styled-components'
import * as Animation from '../../styles/animations'

export const List = styled.div`
  display: grid;
  grid-gap: 3rem;

  @media (min-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
`

export const Element = styled.button<{ fadeDelay: number }>`
  padding: 4rem;
  font-size: inherit;
  text-align: inherit;
  line-height: inherit;
  border-radius: 8px;
  background: linear-gradient(45deg, rgba(0, 0, 0, .1), #fff);
  transition: transform 200ms;

  :hover {
    transform: scale(1.05);
  }
`

export const Buttons = styled.div`
  display: flex;
`

export const Title = styled.h2`
  margin-bottom: 1rem;
`

export const Description = styled.p`
  margin-bottom: 1rem;
`
