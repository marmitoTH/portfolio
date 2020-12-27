import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  margin: auto;
  max-width: 112rem;
  min-height: 100vh;
  padding: 0 4rem;
  padding-top: 4rem;
  font-size: 1.4rem;
`

export const Title = styled.h1`
  margin-bottom: 4rem;
`

export const List = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr;

  @media (min-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
`

export const Project = styled.button`
  padding: 3rem;
  line-height: 1.6;
  border-radius: 8px;
  text-align: inherit;
  font-size: inherit;
  background: linear-gradient(45deg, rgba(0, 0, 0, .1), #fff);
  transition: transform 200ms;

  h2 {
    margin-bottom: 1rem;
  }

  :hover {
    transform: scale(1.02);
  }
`
