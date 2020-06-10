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
// import ProfileContainer from './frontpage/profile_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import ProfileContainer from './profile/profile_container';
import ModalContainer from './modal/modal_container';

const App = () => (
  <div>
    <Route path="/users/:userId" component={ModalContainer} />
    <Route exact path="/" component={ModalContainer} />
    {/* <ModalContainer /> */}
    <ProtectedRoute exact path="/" component={NewsfeedContainer} /> 
    <ProtectedRoute path="/users/:userId" component={ProfileContainer} /> 
    {/* <ProtectedRoute exact path="/users/:userId" component={ProfileContainer} />  */}
    <AuthRoute path="/login" component={FrontpageContainer} />
  </div>
);

export default App;