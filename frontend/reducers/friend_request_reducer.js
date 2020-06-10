import {
  RECEIVE_REQUEST,
  REMOVE_REQUEST,
} from '../actions/friend_request_actions';

function friendRequestReducer(state = {}, action) {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_REQUEST:
      newState[action.request] = action.request;
      return newState;

    case REMOVE_REQUEST:
      // might need to change this later!!!
      delete newState[action.requestId];
      return newState;
    default:
      return state;
  }
};

export default friendRequestReducer;