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
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.1);
`

export const Profile = styled.article`
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

export const ReposContainer = styled.div`
  @media (min-width: 1600px) {
    right: 5rem;
    position: absolute;
  }
`
