import { connect } from 'react-redux';

import Newsfeed from './newsfeed';
import { logout } from '../../actions/session_actions';
import { fetchPosts, deletePost } from '../../actions/post_actions';
import { fetchUsers } from '../../actions/users_actions';

const mSTP = state => {
  return {
  currentUser: state.entities.users[state.session.id],
  users: state.entities.users,
}};

const mDTP = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers()),
  fetchPosts: () => dispatch(fetchPosts()),
  logout: user => dispatch(logout(user))
});

export default connect(mSTP, mDTP)(Newsfeed);