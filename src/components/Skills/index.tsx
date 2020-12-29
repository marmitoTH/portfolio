import { BiCodeBlock, BiBrush } from 'react-icons/bi'
import * as Styled from './styles'

const Skills = () => {
  return (
    <Styled.Container>
      <Styled.Section>
        <BiCodeBlock className='icon' />
        <h1>Back End</h1>
        <p>Languages</p>
        <ul>
          <li>Java Script</li>
          <li>TypeScript</li>
        </ul>
        <p>Frameworks</p>
        <ul>
          <li>NodeJS</li>
        </ul>
        <p>Tools</p>
        <ul>
          <li>Docker</li>
          <li>MySQL</li>
          <li>PostgreSQL</li>
          <li>MongoDB</li>
          <li>Insomnia</li>
        </ul>
      </Styled.Section>
      <Styled.Section>
        <BiBrush className='icon' />
        <h1>Front End</h1>
        <p>Languages</p>
        <ul>
          <li>Java Script</li>
          <li>TypeScript</li>
        </ul>
        <p>Frameworks</p>
        <ul>
          <li>ReactJS</li>
          <li>React Native</li>
          <li>Next JS</li>
        </ul>
        <p>Tools</p>
        <ul>
          <li>Expo</li>
          <li>Figma</li>
          <li>Photoshop</li>
          <li>Blender</li>
        </ul>
      </Styled.Section>
    </Styled.Container>
  )
}

export default Skills
