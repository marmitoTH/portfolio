import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 4rem;
`

export const Picture = styled.img`
  width: 25rem;
  height: 25rem;
  align-self: center;
  margin-bottom: 4rem;
  border-radius: 50%;
`

export const Title = styled.h1`
  font-size: 5rem;
  font-weight: 500;
  margin-bottom: 2rem;
`

export const Subtitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 500;
  margin-bottom: 2rem;
`

export const Paragraph = styled.p`
  font-size: 2rem;
  margin-bottom: 5rem;
`

export const Icons = styled.div`
  font-size: 4rem;
  align-self: center;

  svg + svg {
    margin-left: .5rem;
  }
`
