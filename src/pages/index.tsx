import { useState } from 'react'
import config from '../../config.json'
import { getReadme, getPinnedRepos } from '../services/scraper'
import * as Styled from '../styles/pages/Home'

import Navbar from '../components/Navbar'
import MDRenderer from '../components/MDRenderer'
import RepoList from '../components/RepoList'
import Modal from '../components/Modal'
import ContactForm from '../components/ContactForm'

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
  const [openModal, setOpenModal] = useState<boolean>()
  const [modalContent, setModalContent] = useState<string>()

  const handleModalOpen = async (repo) => {
    const readme = await getReadme({
      username: repo.owner,
      repository: repo.repo,
      branch: 'master'
    })

    setOpenModal(true)
    setModalContent(readme)
    document.documentElement.style.overflow = 'hidden'
  }

  const handleModalClose = () => {
    setOpenModal(false)
    document.documentElement.style.overflow = 'auto'
  }

  return (
    <Styled.Container>
      <Navbar
        links={[{
          url: '#about',
          title: 'About'
        }, {
          url: '#experience',
          title: 'Experience'
        }, {
          url: '#contact',
          title: 'Contact'
        }]}
      />
      <Styled.Section id='about'>
        <Styled.Picture src={`https://github.com/${config.username}.png`} />
        <MDRenderer markdown={readme} />
      </Styled.Section>
      <Styled.Section id='experience'>
        <Styled.Title>Experience</Styled.Title>
        <Styled.Subtitle>
          Some of my works, visit my <a href={`https://github.com/${config.username}?tab=repositories`} target='__blank'>GitHub</a> for a full list of projects.
        </Styled.Subtitle>
        <RepoList
          repositories={repos}
          onSelect={handleModalOpen}
        />
        <Modal
          open={openModal}
          onClosePressed={handleModalClose}
        >
          <MDRenderer markdown={modalContent} />
        </Modal>
      </Styled.Section>
      <Styled.Section id='contact'>
        <Styled.Title>Contact</Styled.Title>
        <Styled.Subtitle>
          Let's get in touch! Leave me a message, you'll be answered as soon as possible.
        </Styled.Subtitle>
        <ContactForm />
      </Styled.Section>
    </Styled.Container>
  )
}

export default Home
