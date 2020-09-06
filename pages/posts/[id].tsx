import { useRouter } from 'next/router'

import Layout from '../../components/Layout'
import PostInterface from '../../interfaces/PostDetailed'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { useEffect, useState } from 'react'
import { startAddComment, startSetPost } from '../../store/actions/posts'

import { wrapper } from '../../store/configureStore'

import { useDispatch, useSelector } from 'react-redux'

const IndexPage: React.FC = () => {
  const router = useRouter()
  const { id } = router.query
  const [comment, setComment] = useState({ postId: id.toString(), body: '' })
  const dispatch = useDispatch()
  const post: PostInterface = useSelector(
    (state: PostInterface) => state.posts.post
  )

  useEffect(() => {
    dispatch(startSetPost(id))
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setComment({
      ...comment,
      [e.currentTarget.name]: e.currentTarget.value,
    })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(startAddComment(comment))
    setComment({ postId: id.toString(), body: '' })
  }

  return (
    <Layout title="Latest Posts">
      {post && (
        <>
          <section className="mb-5">
            <h1 className="mb-3">{post.title}</h1>
            <p>{post.body}</p>
          </section>
          <section>
            <h2 className="d-flex align-items-start h3">
              <span className="material-icons-outlined h2 mb-0 mr-2">
                comment
              </span>
              Discussion
            </h2>
            <Form onSubmit={handleSubmit} className="mb-4">
              <Form.Group className="mb-2">
                <Form.Control
                  value={comment.body}
                  onChange={handleInputChange}
                  name="body"
                  placeholder="Write a comment:"
                  as="textarea"
                  rows="3"
                />
              </Form.Group>
              <Button className="" variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            {post.comments && (
              <div>
                {post.comments.map((comment) => (
                  <div key={comment.id} className="border rounded-lg mb-3">
                    <p className="mb-0 p-3">{comment.body}</p>
                  </div>
                ))}
              </div>
            )}
          </section>
        </>
      )}
    </Layout>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  ({ store, params }) => {
    store.dispatch(startSetPost(params.id))
  }
)

export default IndexPage
