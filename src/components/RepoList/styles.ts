import styled from 'styled-components'
import * as Animation from '../../styles/animations'

export const List = styled.ul`
  display: grid;
  grid-gap: 2rem;
  padding-left: 0;

  @media (min-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
`

export const Element = styled.li<{ fadeDelay: number }>`
  padding: 2rem;
  margin-top: 0;
  list-style: none;
  border-radius: 8px;
  background: linear-gradient(45deg, rgba(0, 0, 0, .1), #fff);
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
