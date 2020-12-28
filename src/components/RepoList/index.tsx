import * as Styled from './styles'

interface Repository {
  url: string
  repo: string
  owner: string
  description: string
}

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
          onClick={() => {
            onSelect(data)
          }}
        >
          <Styled.Title>{data.repo}</Styled.Title>
          <Styled.Description>{data.description}</Styled.Description>
        </Styled.Element>
      ))}
    </Styled.List>
  )
}

export default RepoList
