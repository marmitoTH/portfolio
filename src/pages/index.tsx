import config from '../../config.json'
import { getReadme } from '../scraper'
import { FaGithubSquare, FaLinkedin, FaYoutubeSquare } from 'react-icons/fa'
import * as Styled from '../styles/pages/Home'
//import MDRenderer from '../components/MDRenderer'

export const getStaticProps = async () => {
  const readme = await getReadme({
    username: config.username,
    repository: config.username,
    branch: 'master'
  })

  return {
    props: {
      readme
    }
  }
}

const Home = () => {
  return (
    <Styled.Container>
      <Styled.Picture src={`https://github.com/${config.username}.png`} />
      <Styled.Title>Hi ya 👋</Styled.Title>
      <Styled.Subtitle>My name is Lucas</Styled.Subtitle>
      <Styled.Paragraph>I'm a full-stack developer!</Styled.Paragraph>
      <Styled.Icons>
        <FaGithubSquare />
        <FaLinkedin />
        <FaYoutubeSquare />
      </Styled.Icons>
    </Styled.Container>
  )
}

export default Home
