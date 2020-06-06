import { connect } from 'react-redux';

import Profile from './profile';
import { logout } from '../../actions/session_actions';
import { updateUser, fetchUsers } from '../../actions/users_actions';
import { fetchUserPosts } from '../../actions/post_actions';

const mSTP = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id], 
  user: state.entities.users[ownProps.match.params.userId]
});

const mDTP = dispatch => ({
  fetchUserPosts: userId => dispatch(fetchUserPosts(userId)),
  fetchUsers: () => dispatch(fetchUsers()),
  logout: user => dispatch(logout(user)),
  updateUser: user => dispatch(updateUser(user))
});

export default connect(mSTP, mDTP)(Profile);