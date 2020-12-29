import { useEffect, useRef, useState } from 'react'
import { MdClose } from 'react-icons/md'
import * as Styled from './styles'

export interface Props {
  open: boolean
  onClosePressed(): void
}

const Modal: React.FC<Props> = ({ children, open, onClosePressed }) => {
  const containerRef = useRef<HTMLDivElement>()
  const [opened, setOpened] = useState<boolean>()
  const [closing, setClosing] = useState<boolean>()

  useEffect(() => {
    if (!open) {
      setClosing(true)

      setTimeout(() => {
        setOpened(false)
      }, 800);
    } else {
      setOpened(true)
      setClosing(false)
    }
  }, [open])

  useEffect(() => {
    const handleClick = (event: Event) => {
      if (containerRef.current &&
        !containerRef.current.contains(event.target as Node)) {
        onClosePressed()
      }
    }

    document.addEventListener('mousedown', handleClick)
    return document.addEventListener('mousedown', handleClick)
  }, [])

  if (!opened) {
    return <></>
  }

  return (
    <Styled.Backdrop closing={closing}>
      <Styled.Container
        ref={containerRef}
        closing={closing}
      >
        {children}
        <Styled.CloseButton
          type='button'
          disabled={closing}
          onClick={() => onClosePressed()}
        >
          <MdClose />
        </Styled.CloseButton>
      </Styled.Container>
    </Styled.Backdrop>
  )
}

export default Modal
