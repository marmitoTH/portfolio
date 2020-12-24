import styled from 'styled-components'

export const Button = styled.div`
  a {
    color: ${props => props.theme.colors.primaryText};
    display: inline-block;
    justify-content: center;
    padding: .5rem 1rem;
    border-radius: 6px;
    background: ${props => props.theme.colors.secondaryButton};
    font-size: 1.2rem;
  }
`
