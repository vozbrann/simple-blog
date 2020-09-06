import React, { ReactNode } from 'react'
import Head from 'next/head'
import Container from 'react-bootstrap/Container'
import AppBar from './AppBar'

type LayoutProps = {
  children?: ReactNode
  title?: string
}

const Layout: React.FC<LayoutProps> = ({
  children,
  title = 'This is the default title',
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <AppBar />
    </header>
    <Container className="py-4">{children}</Container>
  </div>
)

export default Layout
