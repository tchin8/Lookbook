import { combineReducers } from 'redux';

import entitiesReducer from './entities_reducer';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import postsReducer from './posts_reducer';
import uiReducer from './ui_reducer';
import commentsReducer from './comments_reducer';
import friendRequestReducer from './friend_request_reducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer,
  posts: postsReducer,
  ui: uiReducer,
  comments: commentsReducer,
  friendRequests: friendRequestReducer,
});

export default rootReducer;