import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    border: 0;
    box-sizing: border-box;
  }

  body {
    color: ${props => props.theme.colors.text};
    background: ${props => props.theme.colors.background};
  }
`
