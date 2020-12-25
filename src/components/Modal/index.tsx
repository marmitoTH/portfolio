import * as Styled from './styles'

export interface Props {
  open: boolean
  onClosePressed(): void
}

const Modal: React.FC<Props> = ({ children, open, onClosePressed }) => {
  if (!open) {
    return <></>
  }

  return (
    <Styled.Backdrop>
      <Styled.Container>
        {children}
        <Styled.CloseButton
          type='button'
          onClick={() => onClosePressed()}
        >
          X
        </Styled.CloseButton>
      </Styled.Container>
    </Styled.Backdrop>
  )
}

export default Modal
