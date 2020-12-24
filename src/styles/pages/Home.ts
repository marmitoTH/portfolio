import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ProfileContent = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
`

export const Picture = styled.img`
  width: 25rem;
  border-radius: 50%;
  margin-bottom: 2.8rem;
  border: 5px solid ${props => props.theme.colors.primaryBackground};

  @media (min-width: 1000px) {
    top: -10rem;
    left: -7rem;
    position: absolute;
  }
`

export const Profile = styled.article`
  width: 100vw;
  padding: 1rem;
  font-size: 1.4rem;
  max-width: 74rem;
  border-radius: 6px;
  border: 1px solid ${props => props.theme.colors.primaryBorder};

  h1, h2 {
    line-height: 1.5;
    margin-bottom: 1rem;
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

  .tech-icons-list {
    img {
      width: 2.5rem;
      height: 2.5rem;
    }
  }

  @media (max-width: 540px) {
    border: none;

    ul {
      padding-left: 0;
      list-style-type: none;
    }

    .hide-in-mobile {
      display: none;
    }
  }
`

export const ReposContainer = styled.div`
  display: none;
  max-width: 35rem;
  position: absolute;

  @media (min-width: 1300px) {
    right: 5rem;
    display: initial;
  }
`
