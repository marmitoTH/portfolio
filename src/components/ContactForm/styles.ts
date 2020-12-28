import styled, { css } from 'styled-components'
import { shade } from 'polished'

export const Form = styled.form`
  label {
    display: block;
    font-weight: 500;
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }

  input, textarea {
    width: 100%;
    resize: none;
    padding: 2rem;
    display: block;
    font-size: inherit;
    margin-bottom: 1rem;
    border-radius: 8px;
    background: #eee;
    border: 2px solid ${props => props.theme.colors.primaryBorder};
  }
`

export const Button = styled.button<{ disabled: boolean }>`
  width: 100%;
  padding: 2rem;
  border-radius: 8px;
  font-size: 1.8rem;
  font-weight: 500;
  margin-top: 1rem;
  color: #fff;
  background: ${props => props.theme.colors.primaryButton};
  transition: all 200ms;

  ${({ disabled }) => disabled && css`
    opacity: .5;
    cursor: default;
  ` || css`
    :hover {
      background: ${props => shade(.25, props.theme.colors.primaryButton)};
    }
  `}
`

export const Feedback = styled.p<{ type: 'error' | 'success' }>`
  color: ${({ type }) => {
    switch (type) {
      default:
      case 'error':
        return 'red'
      case 'success':
        return 'green'
    }
  }};

  margin: 1rem 0;
`
