import config from '../../../config.json'
import * as Styled from './styles'

import SocialButton from '../SocialButton'

const Footer = () => {
  return (
    <Styled.Footer>
      <Styled.Buttons>
        <SocialButton type='github' href={config.social.github} />
        <SocialButton type='linkedin' href={config.social.linkedin} />
        <SocialButton type='email' href={config.social.mail} />
        <SocialButton type='youtube' href={config.social.youtube} />
      </Styled.Buttons>
      <p>
        Made with ❤️ by
        <strong> Lucas Rodrigues</strong>
      </p>
    </Styled.Footer>
  )
}

export default Footer
