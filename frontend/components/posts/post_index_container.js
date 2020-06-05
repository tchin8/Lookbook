import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchPost, fetchPosts, deletePost, updatePost } from '../../actions/post_actions';
import { openModal } from '../../actions/modal_actions';

const mSTP = state => ({
  posts: Object.values(state.posts).reverse(),
});

const mDTP = dispatch => ({
  fetchPost: postId => dispatch(fetchPost(postId)),
  fetchPosts: () => dispatch(fetchPosts()),
  deletePost: postId => dispatch(deletePost(postId)),
  updatePost: post => dispatch(updatePost(post)),
  openModal: modal => dispatch(openModal(modal)),
});

export default connect(mSTP, mDTP)(PostIndex);