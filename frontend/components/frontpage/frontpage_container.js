import { connect } from 'react-redux';

import Frontpage from './frontpage';
import { login, signup } from '../../actions/session_actions';

const mDTP = dispatch => ({
  login: user => dispatch(login(user)),
  signup: user => dispatch(signup(user))
});

export default connect(null, mDTP)(Frontpage);