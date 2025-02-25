import { useState } from 'react'
import config from '../../config.json'
import { getReadme, getPinnedRepos } from '../services/scraper'
import * as Styled from '../styles/pages/Home'

import Navbar from '../components/Navbar'
import MDRenderer from '../components/MDRenderer'
import RepoList from '../components/RepoList'
import Modal from '../components/Modal'
import Skills from '../components/Skills'
import ContactForm from '../components/ContactForm'
import SocialButton from '../components/SocialButton'
import Footer from '../components/Footer'
import Button from '../components/Button'

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
          url: '#projects',
          title: 'Projects'
        }, {
          url: '#skills',
          title: 'Skills'
        }, {
          url: '#contact',
          title: 'Contact'
        }]}
      />
      <Styled.Section id='about'>
        <Styled.Picture src={`https://github.com/${config.username}.png`} />
        <MDRenderer markdown={readme} />
        <Button
          href='/lucas_rodrigues_cv.pdf'
          style={{ alignSelf: 'center', margin: '1rem 0' }}
        >
          Download CV
        </Button>
        <Styled.SocialButtons>
          <SocialButton type='github' href={config.social.github} />
          <SocialButton type='linkedin' href={config.social.linkedin} />
          <SocialButton type='email' href={config.social.mail} />
          <SocialButton type='youtube' href={config.social.youtube} />
        </Styled.SocialButtons>
      </Styled.Section>
      <Styled.Section id='projects'>
        <Styled.Title>Projects</Styled.Title>
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
      <Styled.Section id='skills'>
        <Styled.Title>Skills</Styled.Title>
        <Styled.Subtitle>
          Some of the skills I've developed during the above projects.
        </Styled.Subtitle>
        <Skills />
      </Styled.Section>
      <Styled.Section id='contact'>
        <Styled.Title>Contact</Styled.Title>
        <Styled.Subtitle>
          Let's get in touch! Leave me a message, you'll be answered as soon as possible.
        </Styled.Subtitle>
        <ContactForm />
      </Styled.Section>
      <Footer />
    </Styled.Container>
  )
}

export default Home
