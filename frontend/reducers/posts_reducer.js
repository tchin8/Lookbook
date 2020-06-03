import {
  RECEIVE_ALL_POSTS,
  RECEIVE_POST,
  REMOVE_POST,
} from '../actions/post_actions';
import merge from 'lodash/merge';


function PostsReducer(state = {}, action) {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ALL_POSTS:
      return Object.assign({}, action.posts);
    case RECEIVE_POST:
      return Object.assign({}, state, { [action.post.id]: action.post });
    case REMOVE_POST:
      delete newState[action.postId];
      return newState;
    default:
      return state;
  }
};

export default PostsReducer;