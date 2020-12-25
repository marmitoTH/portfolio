import styled, { css } from 'styled-components'
import * as Animation from '../../styles/animations'

export const Backdrop = styled.div<{ closing: boolean }>`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  backdrop-filter: blur(10px);
  animation: ${Animation.FadeIn} 400ms backwards;

  ${({ closing }) => closing && css`
    animation: ${Animation.FadeOut} 400ms 400ms backwards;
  `}
`

export const Container = styled.div<{ closing: boolean }>`
  width: 95vw;
  height: 95vh;
  padding: 3.2rem;
  max-width: 90rem;
  background: #fff;
  position: relative;
  overflow: hidden auto;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, .2);
  animation: ${Animation.ZoomIn} 400ms 400ms backwards;

  ${({ closing }) => closing && css`
    animation: ${Animation.ZoomOut} 400ms forwards;
  `}
`

export const CloseButton = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(0, 0, 0, .2);
  font-weight: bold;
  position: absolute;
  top: 1.5rem;
  right: 2rem;
  transition: opacity 200ms;

  :hover {
    opacity: .5;
  }
`
