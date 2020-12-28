import config from '../../config.json'
import { getReadme, getPinnedRepos } from '../services/scraper'
import * as Styled from '../styles/pages/Home'

import MDRenderer from '../components/MDRenderer'
import RepoList from '../components/RepoList'

export const getStaticProps = async () => {
  const readme = await getReadme({
    username: config.username,
    repository: config.username,
    branch: 'master'
  })

  const repos = await getPinnedRepos(config.username)

  return {
    props: {
      readme,
      repos
    }
  }
}

const Home = ({ readme, repos }) => {
  return (
    <Styled.Container>
      <Styled.Section>
        <Styled.Picture src={`https://github.com/${config.username}.png`} />
        <MDRenderer markdown={readme} />
      </Styled.Section>
      <Styled.Section>
        <Styled.Title>Experience</Styled.Title>
        <Styled.Subtitle>
          Some of my works, visit my <a href={`https://github.com/${config.username}?tab=repositories`} target='__blank'>GitHub</a> for a full list of projects.
        </Styled.Subtitle>
        <RepoList repositories={repos} onSelect={() => { }} />
      </Styled.Section>
      <Styled.Section>
        <Styled.Title>Contact</Styled.Title>
        <Styled.Subtitle>
          Let's get in touch! Leave me a message, you'll be answered as soon as possible.
        </Styled.Subtitle>
      </Styled.Section>
    </Styled.Container>
  )
}

export default Home
