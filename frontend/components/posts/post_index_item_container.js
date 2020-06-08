import { connect } from 'react-redux';

import PostIndexItem from './post_index_item';
import { createComment } from '../../actions/comment_actions';
import { fetchUserPosts } from '../../actions/post_actions';
import { fetchComments } from '../../actions/comment_actions';

const mSTP = (state) => ({
  users: state.entities.users,
});

const mDTP = dispatch => ({
  createComment: comment => dispatch(createComment(comment)),
  fetchUserPosts: userId => dispatch(fetchUserPosts(userId)),
  fetchComments: postId => dispatch(fetchComments(postId)),
})

export default connect(mSTP, mDTP)(PostIndexItem);