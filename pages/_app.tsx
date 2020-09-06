import { AppProps } from 'next/app'
import { wrapper } from '../store/configureStore'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { createGlobalStyle } from 'styled-components'

import '../BootstrapCustom.scss'

const theme = {}

const GlobalStyle = createGlobalStyle`
  body {
    
  }
`

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default wrapper.withRedux(MyApp)
