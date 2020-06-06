import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchPost, fetchUserPosts, deletePost, updatePost } from '../../actions/post_actions';
import { openModal } from '../../actions/modal_actions';

const mSTP = state => ({
  posts: Object.values(state.posts).reverse(),
});

const mDTP = dispatch => ({
  fetchPost: postId => dispatch(fetchPost(postId)),
  fetchUserPosts: userId => dispatch(fetchUserPosts(userId)),
  deletePost: postId => dispatch(deletePost(postId)),
  updatePost: post => dispatch(updatePost(post)),
  openModal: modal => dispatch(openModal(modal)),
});

export default connect(mSTP, mDTP)(PostIndex);