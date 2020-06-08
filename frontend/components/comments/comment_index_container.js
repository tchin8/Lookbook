import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { fetchPost } from '../../actions/post_actions';
import { fetchComments } from '../../actions/comment_actions';

const mSTP = state => ({
  newComment: state.comments,
});

const mDTP = dispatch => ({
  fetchPost: postId => dispatch(fetchPost(postId)),
  fetchComments: postId => dispatch(fetchComments(postId)),
});

export default connect(mSTP, mDTP)(CommentIndex);