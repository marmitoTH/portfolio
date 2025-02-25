import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    border: 0;
    border: none;
    box-sizing: border-box;
  }

  :root {
    font-size: 50%;

    @media (min-width: 1000px) {
      font-size: 62.5%;
    }

    @media (min-width: 2500px) {
      font-size: 95%;
    }
  }

  body, input, textarea {
    font: 400 1rem 'Inter', sans-serif;
    color: ${props => props.theme.colors.primaryText};
  }

  body {
    background: ${props => props.theme.colors.primaryBackground};
  }

  a {
    color: ${props => props.theme.colors.primaryAnchor};
    text-decoration: none;
    transition: opacity 200ms;

    :hover {
      opacity: .5;
    }
  }

  button {
    cursor: pointer;
  }
`
