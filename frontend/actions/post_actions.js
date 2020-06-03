import * as PostApiUtil from '../util/post_api_util';

export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';
// export const RECEIVE_USER_POSTS = 'RECEIVE_USER_POSTS'

const receivePosts = posts => ({
  type: RECEIVE_ALL_POSTS,
  posts
});

const receivePost = post => ({
  type: RECEIVE_POST,
  post
});

const removePost = postId => ({
  type: REMOVE_POST,
  postId
});

// const receiveUserPosts = userId => ({
//   type: RECEIVE_USER_POSTS,
//   userId
// })

export const fetchPosts = () => dispatch => (
  PostApiUtil.fetchPosts()
    .then(posts => dispatch(receivePosts(posts)))
);

export const fetchPost = postId => dispatch => (
  PostApiUtil.fetchPost(postId)
    .then(post => dispatch(receivePost(post)))
);

export const createPost = post => dispatch => (
  PostApiUtil.createPost(post)
    .then(post => dispatch(receivePost(post)))
);

export const updatePost = post => dispatch => (
  PostApiUtil.updatePost(post)
    .then(post => dispatch(receivePost(post)))
);

export const deletePost = postId => dispatch => (
  PostApiUtil.deletePost(postId)
    .then(post => dispatch(removePost(post.id)))
);

export const fetchUserPosts = userId => dispatch => (
  PostApiUtil.fetchUserPosts(userId)
    .then(posts => dispatch(receivePosts(posts)))
);