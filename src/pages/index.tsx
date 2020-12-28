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
        <h1>Projects</h1>
        <RepoList repositories={repos} onSelect={() => { }} />
      </Styled.Section>
      <Styled.Section>
        <h1>Contact</h1>
      </Styled.Section>
    </Styled.Container>
  )
}

export default Home
