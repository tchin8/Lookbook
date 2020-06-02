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

const App = () => (
  <div>
    <ProtectedRoute exact path="/" component={NewsfeedContainer} /> 
    {/* <ProtectedRoute exact path="/users/:userId" component={ProfileContainer} />  */}
    <AuthRoute path="/login" component={FrontpageContainer} />
  </div>
);

export default App;