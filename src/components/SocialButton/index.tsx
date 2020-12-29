import {
  FiGithub,
  FiLinkedin,
  FiYoutube,
} from 'react-icons/fi'

import { BiEnvelope } from 'react-icons/bi'

export interface Props {
  href: string
  type: 'linkedin' | 'github' | 'email' | 'youtube'
}

const SocialButton: React.FC<Props> = ({ type, href }) => (
  <a
    href={href}
    target='__blank'
    style={{ color: 'inherit' }}
  >
    {(() => {
      switch (type) {
        case 'email':
          return <BiEnvelope />
        case 'github':
          return <FiGithub />
        case 'linkedin':
          return <FiLinkedin />
        case 'youtube':
          return <FiYoutube />
      }
    })()}
  </a>
)

export default SocialButton
