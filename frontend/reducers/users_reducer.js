import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_ALL_USERS, RECEIVE_USER } from '../actions/users_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
    case RECEIVE_ALL_USERS: 
      // let newState = Object.assign({}, state);

      // action.users.forEach(user => {
      //   const getUser = { [user.id]: user }
      //   newState = Object.assign({}, newState, getUser);
      // });
      // return newState;
      return Object.assign({}, state, action.users );
    case RECEIVE_USER:
      let otherUser = Object.assign({}, state, { [action.user.id]: action.user });
      return Object.assign({}, state, otherUser);
    default:
      return state;
  }
};

export default usersReducer;
