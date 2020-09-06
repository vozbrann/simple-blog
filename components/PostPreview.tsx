import Link from 'next/link'
import styled from 'styled-components'

import Card from 'react-bootstrap/Card'
import PostInterface from '../interfaces/Post'

type PostPreviewProps = {
  post: PostInterface
}

const StyledCard = styled(Card)`
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    box-shadow: 0 0 10px rgba(0, 123, 255, 0.4);
  }
`

const PostPreview: React.FC<PostPreviewProps> = ({ post }) => {
  return (
    <Link href={`posts/${post.id}`}>
      <StyledCard className="h-100">
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.body}</Card.Text>
        </Card.Body>
      </StyledCard>
    </Link>
  )
}

export default PostPreview
