import { useState } from 'react'

import Layout from '../../components/Layout'
import Router from 'next/router'

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import { useDispatch } from 'react-redux'
import { startAddPost } from '../../store/actions/posts'

const IndexPage: React.FC = () => {
  const [post, setPost] = useState({ title: '', body: '' })
  const dispatch = useDispatch()

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setPost({
      ...post,
      [e.currentTarget.name]: e.currentTarget.value,
    })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(startAddPost(post, Router))
  }

  return (
    <Layout title="Latest Posts">
      <h1 className="mb-4">
        Create post <span className="mb-0 h2">✏</span>
      </h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            value={post.title}
            type="text"
            name="title"
            onChange={handleInputChange}
            placeholder="Enter title"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Body</Form.Label>
          <Form.Control
            value={post.body}
            as="textarea"
            name="body"
            onChange={handleInputChange}
            rows="6"
          />
        </Form.Group>
        <Button type="submit" className="text-right">
          Save changes
        </Button>
      </Form>
    </Layout>
  )
}

export default IndexPage
