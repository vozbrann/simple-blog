import Link from 'next/link'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

const PostPreview: React.FC = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Link href="/" passHref>
          <Navbar.Brand className="font-weight-bold">
            Simple blog 🔥
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link href="/" passHref>
              <Nav.Link>Latest Posts</Nav.Link>
            </Link>
            <Link href="/posts/new" passHref>
              <Nav.Link>Create post</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default PostPreview
