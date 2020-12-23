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
  }

  body {
    font: 400 1rem Ubuntu, sans-serif;
    color: ${props => props.theme.colors.text};
    background: ${props => props.theme.colors.background};
  }

  a {
    text-decoration: none;
  }

  @media (min-width: 1000px) {
    :root {
      font-size: 62.5%;
    }
  }
`
