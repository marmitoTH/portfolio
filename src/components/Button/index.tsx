import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import * as Styled from './styles'

type Props = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

const Button: React.FC<Props> = ({ children, ...rest }) => (
  <Styled.Button>
    <button {...rest}>{children}</button>
  </Styled.Button>
)

export default Button
