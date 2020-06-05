import { connect } from 'react-redux';

import Profile from './profile';
import { logout } from '../../actions/session_actions';
import { updateUser } from '../../actions/users_actions';

const mSTP = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id], 
  user: state.entities.users[ownProps.match.params.userId]
});

const mDTP = dispatch => ({
  logout: user => dispatch(logout(user)),
  updateUser: user => dispatch(updateUser(user))
});

export default connect(mSTP, mDTP)(Profile);