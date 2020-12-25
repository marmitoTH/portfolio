import marked from 'marked'
import { Markdown } from './styled'

export interface Props {
  markdown: string
}

const MDRenderer: React.FC<Props> = ({ markdown }) => (
  <Markdown dangerouslySetInnerHTML={{ __html: marked(markdown) }} />
)

export default MDRenderer
