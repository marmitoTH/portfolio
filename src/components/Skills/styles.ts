import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-radius: 8px;
  background: linear-gradient(45deg, rgba(0, 0, 0, .1), #fff);
`

export const Section = styled.section`
  padding: 4rem;
  text-align: center;

  h1 {
    margin-bottom: 3rem;
  }

  p {
    font-weight: 500;
    margin-bottom: .5rem;
  }

  ul {
    padding-left: 0;
    margin-bottom: 3rem;
  }

  li {
    list-style: none;
  }

  & + & {
    border-left: 1px solid ${props => props.theme.colors.primaryBorder};
  }

  .icon {
    font-size: 4rem;
    margin-bottom: 4rem;
  }
`
