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

    @media (min-width: 1500px) {
      font-size: 62.5%;
    }

    @media (min-width: 2000px) {
      font-size: 80%;
    }

    @media (min-width: 2600px) {
      font-size: 100%;
    }
  }

  body {
    font: 400 1rem Ubuntu, sans-serif;
    color: ${props => props.theme.colors.primaryText};
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
