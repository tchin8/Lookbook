import React from 'react';
import { connect } from 'react-redux';
import PostForm from './post_form';
import { fetchPost, updatePost } from '../../actions/post_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
// import { fetchPosts } from '../../util/post_api_util';

class EditPostForm extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   // debugger;
  //   // this.props.fetchPost(this.props.match.params.postId);
  // }

  render() {
    const { action, formType, post, currentUser, closeModal} = this.props;
    // debugger;

    if (!post) return null;
    return (
      <PostForm
        action={action}
        formType={formType}
        post={post} 
        currentUser={currentUser}
        closeModal={closeModal}/>
    );
  }
}

const mSTP = (state, ownProps) => {
  // debugger;
  return {
    currentUser: state.entities.users[state.session.id], 
    // post: state.posts[ownProps.match.params.postId],
    post: JSON.parse(localStorage.getItem('editPost')),
    formType: 'Edit Post'
    // formType: 'Update Post'
  }
};

const mDTP = dispatch => ({
  fetchPost: postId => dispatch(fetchPost(postId)),
  action: post => dispatch(updatePost(post)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(EditPostForm);