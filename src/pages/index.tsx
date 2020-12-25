import marked from 'marked'
import config from '../../config.json'
import { getReadme, getPinnedRepos } from '../scraper'
import * as Styled from '../styles/pages/Home'

import RepoList from '../components/RepoList'
import Modal from '../components/Modal'
import { useState } from 'react'

export interface Repository {
  owner: string
  repo: string
  language: string
  description: string
  url: string
  stars: number
  forks: number
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
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [repoReadme, setRepoReadme] = useState<string>('')

  return (
    <Styled.Container>
      <Styled.ProfileContent>
        <Styled.Picture
          src={`https://github.com/${config.username}.png`}
          alt='profile-picture'
        />
        <Styled.Profile
          dangerouslySetInnerHTML={{
            __html: marked(profile)
          }}
        />
      </Styled.ProfileContent>
      <Styled.ReposContainer>
        <RepoList
          repositories={repositories}
          onSelect={async repository => {
            const readme = await getReadme({
              username: repository.owner,
              repository:
                repository.repo,
              branch: 'master'
            })

            setRepoReadme(readme)
            setOpenModal(true)
          }}
        />
      </Styled.ReposContainer>
      <Modal
        open={openModal}
        onClosePressed={() => setOpenModal(false)}
      >
        <div dangerouslySetInnerHTML={{
          __html: marked(repoReadme)
        }} />
      </Modal>
    </Styled.Container>
  )
}

export default Home
