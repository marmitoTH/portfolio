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
        <p>Libraries</p>
        <ul>
          <li>Express</li>
          <li>Jest</li>
          <li>JSON Web Token</li>
          <li>Bcrypt JS</li>
          <li>CSV to JSON</li>
          <li>TypeORM</li>
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
        <p>Libraries</p>
        <ul>
          <li>Axios</li>
          <li>React Router</li>
          <li>React Navigation</li>
          <li>Styled Components</li>
          <li>React Icons</li>
          <li>Context API</li>
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
