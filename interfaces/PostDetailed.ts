export default interface PostDetailed {
  id: any
  title: string
  body: string
  comments: [
    {
      id: any
      postId: any
      body: string
    }
  ]
}
