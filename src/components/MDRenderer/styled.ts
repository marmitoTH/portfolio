import styled from 'styled-components'

export const Markdown = styled.div`
  line-height: 1.5;
  font-size: 1.4rem;

  p {
    margin-bottom: 1.6rem;
  }

  ul {
    margin-bottom: 1.6rem;
  }

  h1, h2, h3 {
    margin: 2.4px 0 1.6rem 0;
  }

  h1, h2 {
    padding: 0.72rem;
    border-bottom: 1px solid ${props => props.theme.colors.primaryBorder};
  }

  pre {
    padding: 1.6rem;
    margin-bottom: 1.6rem;
    background: #F6F8FA;
  }

  img {
    max-width: 100%;
  }
`
