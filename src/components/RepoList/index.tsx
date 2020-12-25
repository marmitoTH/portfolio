import { Repository } from '../../pages/index'
import * as Styled from './styles'

import Button from '../Button'
import AnchorButton from '../AchorButton'

export interface Props {
  repositories: Repository[]
  onSelect(repository: Repository): void
}

const RepoList: React.FC<Props> = ({ repositories, onSelect }) => {
  return (
    <Styled.List>
      {repositories.map((data, index) => (
        <Styled.Element
          key={index}
          fadeDelay={index * 100}
        >
          <Styled.Title>{data.repo}</Styled.Title>
          <Styled.Description>{data.description}</Styled.Description>
          <Styled.Buttons>
            <Button
              onClick={() => {
                onSelect(data)
              }}
            >
              Details
            </Button>
            <AnchorButton
              href={data.url}
              target='__blank'
            >
              Source
            </AnchorButton>
          </Styled.Buttons>
        </Styled.Element>
      ))}
    </Styled.List>
  )
}

export default RepoList
