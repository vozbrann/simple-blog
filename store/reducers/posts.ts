import Post from '../../interfaces/Post'
import PostDetailed from '../../interfaces/PostDetailed'
import { PostActionTypes, SET_POST, SET_POSTS_LIST } from '../types/posts'

export interface postsReducerState {
  posts: Post[]
  post: PostDetailed
}

const postsReducerDefaultState = {
  posts: [],
  post: null,
}

const postsReducer = (
  state = postsReducerDefaultState,
  action: PostActionTypes
) => {
  switch (action.type) {
    case SET_POSTS_LIST:
      return { ...state, posts: action.posts }
    case SET_POST:
      return { ...state, post: action.post }
    default:
      return state
  }
}

export default postsReducer
