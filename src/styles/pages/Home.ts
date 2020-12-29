import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  line-height: 1.6;
  font-size: 1.6rem;
`

export const Section = styled.section`
  margin: auto;
  padding: 4rem;
  padding-top: 8rem;
  display: flex;
  max-width: 100rem;
  flex-direction: column;
`

export const Picture = styled.img`
  width: 27rem;
  height: 27rem;
  border-radius: 50%;
  margin: 4rem 0;
  align-self: center;

  @media (min-width: 1000px) {
    display: initial;
  }
`

export const SocialButtons = styled.div`
  font-size: 4rem;
  align-self: center;
  margin-top: 2rem;

  a + a {
    margin-left: 2rem;
  }
`

export const Title = styled.h1`
  margin-bottom: 2rem;
`

export const Subtitle = styled.p`
  margin-bottom: 2rem;
`
