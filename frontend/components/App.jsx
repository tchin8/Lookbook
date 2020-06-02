import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link
} from 'react-router-dom';
import Frontpage from './frontpage/frontpage';
import Newsfeed from './frontpage/newsfeed';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <ProtectedRoute exact path="/" component={Newsfeed} /> 
    <Route path="/login" component={Frontpage} />
  </div>
);

export default App;