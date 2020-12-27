import config from '../../config.json'
import { getPinnedRepos } from '../services/scraper'
import * as Styled from '../styles/pages/Projects'

export interface Props {
  repos: {
    owner: string
    repo: string
    language: string
    description: string
    url: string
  }[]
}

export const getStaticProps = async () => {
  const repos = await getPinnedRepos(config.username)

  return {
    props: {
      repos
    }
  }
}

const Projects: React.FC<Props> = ({ repos }) => {
  return (
    <Styled.Container>
      <Styled.Title>Projects</Styled.Title>
      <Styled.List>
        {repos.map((data, index) => (
          <Styled.Project key={index}>
            <h2>{data.repo}</h2>
            <p>{data.description}</p>
          </Styled.Project>
        ))}
      </Styled.List>
    </Styled.Container>
  )
}

export default Projects
