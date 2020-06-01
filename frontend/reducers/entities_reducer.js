import { combineReducers } from 'redux';

// import posts from './posts_reducer';
// import comments from './comments_reducer';
// friends??

import usersReducer from "./users_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer
});

export default entitiesReducer;