import marked from 'marked'
import config from '../../config.json'
import { getReadme, getPinnedRepos } from '../scraper'
import * as Styled from '../styles/pages/Home'

import RepoList from '../components/RepoList'

export interface Repository {
  repo: string
  description: string
  language: string
}

export const getStaticProps = async () => {
  const repositories = await getPinnedRepos(config.username)
  const profile = await getReadme({
    username: config.username,
    repository: config.username,
    branch: 'master'
  })

  return {
    props: {
      profile,
      repositories
    }
  }
}

const Home = ({ profile, repositories }) => {
  return (
    <Styled.Container>
      <Styled.Picture
        src={`https://github.com/${config.username}.png`}
        alt='profile-picture'
      />
      <Styled.Profile
        dangerouslySetInnerHTML={{
          __html: marked(profile)
        }}
      />
      <Styled.ReposContainer>
        <RepoList repositories={repositories} />
      </Styled.ReposContainer>
    </Styled.Container>
  )
}

export default Home
