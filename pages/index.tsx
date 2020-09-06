import { useEffect } from 'react'

import Layout from '../components/Layout'
import PostPreview from '../components/PostPreview'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import PostInterface from '../interfaces/Post'
import { useDispatch, useSelector } from 'react-redux'
import { startSetPostsList } from '../store/actions/posts'

import styled from 'styled-components'

const TopSection = styled.section`
  height: 200px;
`

const IndexPage: React.FC = () => {
  const dispatch = useDispatch()
  const posts: PostInterface[] = useSelector(
    (state: PostInterface[]) => state.posts.posts
  )
  useEffect(() => {
    dispatch(startSetPostsList())
  }, [])
  return (
    <Layout title="Latest Posts">
      <TopSection className="d-flex flex-column justify-content-center">
        <h1 className="font-weight-bold">Simple blog 🔥</h1>
        <p className="pr-5 pr-xl-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut autem
          consequatur delectus doloremque error magni quae saepe temporibus
          totam voluptatum.
        </p>
      </TopSection>
      <section>
        <h2 className="mb-3">Latest posts:</h2>
        <Row>
          {posts.map((post) => (
            <Col className="mb-3 col-12 col-lg-6 col-xl-4" key={post.id}>
              <PostPreview post={post} />
            </Col>
          ))}
        </Row>
      </section>
    </Layout>
  )
}

export default IndexPage
