import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'

import GlobalStyle from '../styles/global'

const Portfolio: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <Head>
      <title>Lucas Rodrigues</title>
    </Head>
    <Component {...pageProps} />
    <GlobalStyle />
  </ThemeProvider>
)

export default Portfolio
