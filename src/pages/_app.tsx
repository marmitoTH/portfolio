import { AppProps } from 'next/app'

import GlobalStyle from '../styles/global'

const Portfolio: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Component {...pageProps} />
    <GlobalStyle />
  </>
)

export default Portfolio
