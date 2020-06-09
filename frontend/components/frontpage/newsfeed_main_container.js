import { connect } from 'react-redux';

import { updateUser, fetchUsers } from '../../actions/users_actions';
import { fetchUserPosts, deletePost, updatePost } from '../../actions/post_actions';
import { openModal } from '../../actions/modal_actions';
import { fetchComments } from '../../actions/comment_actions';

import NewsfeedMain from './newsfeed_main';

const mSTP = state => ({
  users: state.entities.users,
  posts: Object.values(state.posts).reverse(),
});

const mDTP = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  fetchComments: postId => dispatch(fetchComments(postId)),
  deletePost: postId => dispatch(deletePost(postId)),
  updatePost: post => dispatch(updatePost(post)),
});

export default connect(mSTP, mDTP)(NewsfeedMain);