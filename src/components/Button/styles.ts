import styled from 'styled-components'

export const Button = styled.div`
  button {
    color: #fff;
    font-size: 1.2rem;
    padding: .5rem 1rem;
    border-radius: 6px;
    background: ${props => props.theme.colors.primaryButton};
  }
`
