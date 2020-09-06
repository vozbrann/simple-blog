import Post from '../../interfaces/Post'
import { PostActionTypes, SET_POST, SET_POSTS_LIST } from '../types/posts'
import api from '../../utils/api'
import { ThunkAction } from 'redux-thunk'
import { Action } from 'redux'
import { AppState } from '../configureStore'
import NewPost from '../../interfaces/NewPost'

export const setPostsList = (posts: Post[]): PostActionTypes => ({
  type: SET_POSTS_LIST,
  posts,
})

export const setPost = (post: Post): PostActionTypes => ({
  type: SET_POST,
  post,
})

export const startAddPost = (
  postData: NewPost,
  Router
): ThunkAction<void, AppState, unknown, Action<string>> => () => {
  api
    .post('/posts', postData)
    .then(() => {
      Router.push('/')
    })
    .catch((error) => {
      console.log(error)
    })
}

export const startAddComment = (commentData: {
  postId?: string
  body?: string
}): ThunkAction<void, AppState, unknown, Action<string>> => (dispatch) => {
  api
    .post('/comments', commentData)
    .then((response) => {
      dispatch(startSetPost(response.data.postId))
    })
    .catch((error) => {
      console.log(error)
    })
}

export const startSetPostsList = (): ThunkAction<
  void,
  AppState,
  unknown,
  Action<string>
> => (dispatch) => {
  api
    .get('/posts')
    .then((response) => {
      dispatch(setPostsList(response.data.reverse()))
    })
    .catch((error) => {
      console.log(error)
    })
}

export const startSetPost = (
  id: number | string
): ThunkAction<void, AppState, unknown, Action<string>> => (dispatch) => {
  api
    .get(`/posts/${id}`)
    .then((response) => {
      dispatch(setPost(response.data))
    })
    .catch((error) => {
      console.log(error)
    })
}
