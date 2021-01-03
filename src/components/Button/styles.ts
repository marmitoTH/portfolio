import styled from 'styled-components'

export const Button = styled.a`
  height: 5rem;
  width: 25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primaryText};
  border: 3px solid ${({ theme }) => theme.colors.primaryText};
  border-radius: 8px;
  font-weight: 500;
  font-size: 2rem;
  transition: background 200ms, color 100ms;

  :hover {
    opacity: 1;
    color: ${({ theme }) => theme.colors.secondaryText};
    background: ${({ theme }) => theme.colors.primaryText};
  }
`
