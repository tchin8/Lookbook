import React from 'react';
import { connect } from 'react-redux';
import PostForm from './post_form';
import { fetchPost, updatePost } from '../../actions/post_actions';
// import { fetchPosts } from '../../util/post_api_util';

class EditPostForm extends React.Component {

  componentDidMount() {
    // debugger;
    this.props.fetchPost(this.props.match.params.postId);
  }

  render() {
    const { action, formType, post } = this.props;

    if (!post) return null;
    return (
      <PostForm
        action={action}
        formType={formType}
        post={post} />
    );
  }
}

const mSTP = (state, ownProps) => ({
  post: state.posts[ownProps.match.params.postId],
  formType: 'update post'
  // formType: 'Update Post'
});

const mDTP = dispatch => ({
  fetchPost: postId => dispatch(fetchPost(postId)),
  updatePost: post => dispatch(updatePost(post)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(EditPostForm);