import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react'
import * as Styled from './styles'

type Props = DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>

const AnchorButton: React.FC<Props> = ({ children, ...rest }) => (
  <Styled.Button>
    <a {...rest}>{children}</a>
  </Styled.Button>
)

export default AnchorButton
