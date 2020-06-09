import { connect } from 'react-redux';

import { updateUser, fetchUsers } from '../../actions/users_actions';
import { fetchUserPosts } from '../../actions/post_actions';
import { openModal } from '../../actions/modal_actions';
import { fetchComments } from '../../actions/comment_actions';

import NewsfeedMain from './newsfeed_main';

const mSTP = state => ({
  posts: Object.values(state.posts).reverse(),
});

const mDTP = dispatch => ({
  fetchUserPosts: userId => dispatch(fetchUserPosts(userId)),
  fetchUsers: () => dispatch(fetchUsers()),
  updateUser: user => dispatch(updateUser(user)),
  openModal: modal => dispatch(openModal(modal)),
  fetchComments: postId => dispatch(fetchComments(postId)),
});

export default connect(mSTP, mDTP)(NewsfeedMain);