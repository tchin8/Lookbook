import { connect } from 'react-redux';

import { openModal, closeModal } from '../../actions/modal_actions';
import { createPost, createPostPhoto } from '../../actions/post_actions';
import PostForm from './post_form';

const mSTP = (state, ownProps) => ({
  formType: 'Create Post'
});

const mDTP = dispatch => ({
  action: post => dispatch(createPost(post)),
  createPostPhoto: formData => dispatch(createPostPhoto(formData)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(PostForm);