import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  line-height: 1.6;
  font-size: 1.6rem;
`

export const Section = styled.section`
  margin: auto;
  padding: 4rem;
  display: flex;
  padding-top: 10rem;
  max-width: 105rem;
  min-height: 100vh;
  flex-direction: column;

  h1 {
    font-size: 3.6rem;
  }
`

export const Picture = styled.img`
  width: 27rem;
  height: 27rem;
  border-radius: 50%;
  margin-bottom: 2rem;
  align-self: center;
  display: none;

  @media (min-width: 1000px) {
    display: initial;
  }
`

export const Title = styled.h1`
  margin-bottom: 1rem;
`

export const Subtitle = styled.p`
  margin: 2rem 0;
`
