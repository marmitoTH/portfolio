import { Repository } from '../../pages/index'
import * as Styled from './styles'

import Button from '../Button'
import AnchorButton from '../AchorButton'

interface Props {
  repositories: Repository[]
}

const RepoList: React.FC<Props> = ({ repositories }) => {
  return (
    <Styled.List>
      {repositories.map((data, index) => (
        <Styled.Element key={index}>
          <Styled.Title>{data.repo}</Styled.Title>
          <Styled.Description>{data.description}</Styled.Description>
          <Styled.Buttons>
            <Button>
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
