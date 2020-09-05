import React, { ReactNode } from 'react'
import Head from 'next/head'
import Container from 'react-bootstrap/Container'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <span>Header</span>
    </header>
    <Container>{children}</Container>
    <footer>
      <span>Footer</span>
    </footer>
  </div>
)

export default Layout
