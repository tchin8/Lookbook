import {
  RECEIVE_ALL_POSTS,
  RECEIVE_POST,
  REMOVE_POST,
} from '../actions/post_actions';

import {
  RECEIVE_COMMENT,
} from '../actions/comment_actions';
import merge from 'lodash/merge';


function postsReducer(state = {}, action) {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ALL_POSTS:
      return Object.assign({}, action.posts);
    case RECEIVE_POST:
      newState[action.post.id] = action.post;
      return newState;

    case RECEIVE_COMMENT: 
      newState[action.comment.post_id]["comments"] = newState[action.comment.post_id]["comments"] || {};
      // newState[action.comment.post_id]["comments"][action.comment.id] = newState[action.comment.post_id]["comments"][action.comment.id] || {};
      newState[action.comment.post_id]["comments"][action.comment.id] =  action.comment;
      return newState;
    case REMOVE_POST:
      delete newState[action.postId];
      return newState;
    default:
      return state;
  }
};

export default postsReducer;