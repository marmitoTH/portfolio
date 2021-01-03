import { CSSProperties } from 'react'
import { Button as Btn } from './styles'

export interface Props {
  href: string
  target?: string
  style?: CSSProperties
}

const Button: React.FC<Props> = ({
  children,
  href,
  style = undefined,
  target = '__blank'
}) => (
  <Btn
    href={href}
    target={target}
    style={style}
  >
    {children}
  </Btn>
)

export default Button
