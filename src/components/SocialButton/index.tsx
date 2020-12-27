import {
  FaGithubSquare,
  FaLinkedin,
  FaYoutubeSquare,
  FaEnvelopeSquare
} from 'react-icons/fa'

export interface Props {
  href: string
  type: 'linkedin' | 'github' | 'email' | 'youtube'
}

const SocialButton: React.FC<Props> = ({ type, href }) => (
  <a href={href} target='__blank' style={{ color: 'inherit' }}>
    {(() => {
      switch (type) {
        case 'email':
          return <FaEnvelopeSquare />
        case 'github':
          return <FaGithubSquare />
        case 'linkedin':
          return <FaLinkedin />
        case 'youtube':
          return <FaYoutubeSquare />
      }
    })()}
  </a>
)

export default SocialButton
