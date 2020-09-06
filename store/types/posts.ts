import Post from '../../interfaces/Post'

// action strings
export const SET_POSTS_LIST = 'SET_POSTS_LIST'
export const SET_POST = 'SET_POST'

export interface SetPostsListAction {
  type: typeof SET_POSTS_LIST
  posts: Post[]
}

export interface SetPostAction {
  type: typeof SET_POST
  post: Post
}

export type PostActionTypes = SetPostsListAction | SetPostAction
