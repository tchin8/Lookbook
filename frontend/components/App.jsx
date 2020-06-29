import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link
} from 'react-router-dom';

import FrontpageContainer from './frontpage/frontpage_container';
import NewsfeedContainer from './frontpage/newsfeed_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import ProfileContainer from './profile/profile_container';
import ModalContainer from './modal/modal_container';
import SearchFriendsContainer from './search/search_friends_container';

const App = () => (
  <div>
    <Route path="/users/:userId" component={ModalContainer} />
    <Route exact path="/" component={ModalContainer} />
    <ProtectedRoute path="/search" component={SearchFriendsContainer} />
    <ProtectedRoute exact path="/" component={NewsfeedContainer} /> 
    <ProtectedRoute path="/users/:userId" component={ProfileContainer} /> 
    <AuthRoute path="/login" component={FrontpageContainer} />
  </div>
);

export default App;