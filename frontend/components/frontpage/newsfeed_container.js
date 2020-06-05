import { connect } from 'react-redux';

import Newsfeed from './newsfeed';
import { logout } from '../../actions/session_actions';
import { fetchPosts, deletePost } from '../../actions/post_actions';

const mSTP = state => ({
  currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  logout: user => dispatch(logout(user))
});

export default connect(mSTP, mDTP)(Newsfeed);