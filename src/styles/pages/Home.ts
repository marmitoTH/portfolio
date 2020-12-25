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

  /*@media (min-width: 1000px) {
    top: -10rem;
    left: -7rem;
    position: absolute;
  }*/
`

export const Profile = styled.article`
  width: 95vw;
  padding: 2rem;
  font-size: 1.4rem;
  max-width: 75rem;
  border-radius: 6px;
  border: 1px solid ${props => props.theme.colors.primaryBorder};

  h1, h2 {
    margin-bottom: 1rem;
    padding-bottom: .5rem;
    border-bottom: 1px solid ${props => props.theme.colors.primaryBorder};
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

  .stats-images {
    img {
      height: 15rem;
    }
  }

  @media (max-width: 540px) {
    border: none;
    padding: .5rem;

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
  position: absolute;

  @media (min-width: 1300px) {
    right: 5rem;
    max-width: 35rem;
    display: initial;
  }
`
