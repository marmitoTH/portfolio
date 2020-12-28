import { useEffect, useState } from 'react'
import * as Styled from './styles'

export interface Props {
  links: {
    url: string
    title: string
  }[]
}

const Navbar: React.FC<Props> = ({ links }) => {
  const [background, setBackground] = useState<boolean>()

  const handleScroll = () => setBackground(scrollY > 10)

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
    window.addEventListener('scroll', handleScroll, true)
    return window.removeEventListener('onscroll', handleScroll)
  }, [])

  return (
    <Styled.Header background={background}>
      {links.map((link, index) => (
        <Styled.Link
          key={index}
          href={link.url}
        >
          {link.title}
        </Styled.Link>
      ))}
    </Styled.Header>
  )
}

export default Navbar
