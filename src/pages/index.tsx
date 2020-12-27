import config from '../../config.json'
import { getReadme } from '../services/scraper'
import * as Styled from '../styles/pages/Home'

import MDRenderer from '../components/MDRenderer'

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

const Home = ({ readme }) => {
  return (
    <Styled.Container>
      <Styled.Section>
        <Styled.Picture src={`https://github.com/${config.username}.png`} />
        <MDRenderer markdown={readme} />
      </Styled.Section>
      <Styled.Section>
        <h1>Projects</h1>
      </Styled.Section>
      <Styled.Section>
        <h1>Contact</h1>
      </Styled.Section>
    </Styled.Container>
  )
}

export default Home
