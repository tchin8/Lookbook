import React from 'react';
import { connect } from 'react-redux';
import PostForm from './post_form';
import { fetchPost, updatePost } from '../../actions/post_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

class EditPostForm extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { action, formType, post, currentUser, closeModal} = this.props;

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
  return {
    currentUser: state.entities.users[state.session.id], 
    post: JSON.parse(localStorage.getItem('editPost')),
    formType: 'Edit Post'
  }
};

const mDTP = dispatch => ({
  fetchPost: postId => dispatch(fetchPost(postId)),
  action: post => dispatch(updatePost(post)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(EditPostForm);