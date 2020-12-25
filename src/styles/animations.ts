import { keyframes } from 'styled-components'

export const FadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

export const FadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`

export const ZoomIn = keyframes`
  from {
    opacity: 0;
    transform: scale(.95);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`

export const ZoomOut = keyframes`
  from {
    opacity: 1;
    transform: scale(1);
  }

  to {
    opacity: 0;
    transform: scale(.95);
  }
`
