import { useEffect, useState } from 'react'
import * as Styled from './styles'

export interface Props {
  open: boolean
  onClosePressed(): void
}

const Modal: React.FC<Props> = ({ children, open, onClosePressed }) => {
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

  if (!opened) {
    return <></>
  }

  return (
    <Styled.Backdrop closing={closing}>
      <Styled.Container closing={closing}>
        {children}
        <Styled.CloseButton
          type='button'
          disabled={closing}
          onClick={() => onClosePressed()}
        >
          X
        </Styled.CloseButton>
      </Styled.Container>
    </Styled.Backdrop>
  )
}

export default Modal
