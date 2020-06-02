import { connect } from 'react-redux';

import Newsfeed from './newsfeed';
import { logout } from '../../actions/session_actions';

const mDTP = dispatch => ({
  logout: user => dispatch(logout(user))
});

export default connect(null, mDTP)(Newsfeed);