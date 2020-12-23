import marked from 'marked'
import config from '../../config.json'
import { InferGetStaticPropsType } from 'next'
import * as Styled from '../styles/pages/Home'

export const getStaticProps = async () => {
  const origin = 'https://raw.githubusercontent.com'
  const uri = `${origin}/${config.username}/${config.username}/master/README.md`
  const markdown = await fetch(uri).then(res => res.text())

  return {
    props: {
      markdown
    }
  }
}

const Home = ({ markdown }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Styled.Container>
      <Styled.Picture
        src={`https://github.com/${config.username}.png`}
        alt='profile-picture'
      />
      <Styled.Content
        dangerouslySetInnerHTML={{
          __html: marked(markdown)
        }}
      />
    </Styled.Container>
  )
}

export default Home
