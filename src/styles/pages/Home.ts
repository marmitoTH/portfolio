import { CSSProperties } from 'react'
import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Picture = styled.img`
  width: 30rem;
  border-radius: 50%;
  margin-bottom: 2.8rem;
`

export const Content = styled.article`
  font-size: 1.4rem;

  h1, h2 {
    margin-bottom: 1.2rem;
  }

  p {
    margin-bottom: 1rem;
  }

  ul {
    margin-bottom: 1.4rem;

    li + li {
      margin-top: 1rem;
    }
  }

  @media (max-width: 540px) {
    ul {
      padding-left: 0;
      list-style-type: none;

      li {
        text-align: center;
      }
    }

    img {
      display: none;
    }
  }
`

export const Title = styled.h1`
  line-height: 2;
  font-size: 3.5rem;
  font-weight: normal;
`

export const Subtitle = styled.h2`
  font-size: 1.8rem;
  font-weight: normal;
`

export const Contact = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;

  a {
    color: ${props => props.theme.colors.text};

    & + a {
      margin-left: 1rem;
    }
  }
`

export const Icon: CSSProperties = {
  fontSize: '3rem'
}
