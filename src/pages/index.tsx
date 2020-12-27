import SocialButton from '../components/SocialButton'
import * as Styled from '../styles/pages/Home'

const Home = () => {
  return (
    <Styled.Container>
      <Styled.Title>Hi ya 👋</Styled.Title>
      <Styled.Subtitle>My name is Lucas</Styled.Subtitle>
      <Styled.Paragraph>I'm a full-stack developer!</Styled.Paragraph>
      <Styled.Icons>
        <SocialButton
          type='github'
          href='https://github.com/marmitoth'
        />
        <SocialButton
          type='linkedin'
          href='https://www.linkedin.com/in/lucas-rodrigues-985918197'
        />
        <SocialButton
          type='youtube'
          href='https://www.youtube.com/channel/UC68qKjP7l6weO5P7mmbSvPA'
        />
        <SocialButton
          type='email'
          href='mailto:marmitoth@outlook.com'
        />
      </Styled.Icons>
    </Styled.Container>
  )
}

export default Home
