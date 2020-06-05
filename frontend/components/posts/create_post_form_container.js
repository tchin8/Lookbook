import { connect } from 'react-redux';

import { openModal, closeModal } from '../../actions/modal_actions';
import { createPost } from '../../actions/post_actions';
import PostForm from './post_form';

const mSTP = (state, ownProps) => ({
  // currentUser: Object.values(state.session)[0],
  // currentUser: state.entities.users[state.session.id],
  // wall: ownProps.match.params.userId,
  formType: 'create post'
  // formType: 'Create Post'
});

const mDTP = dispatch => ({
  action: post => dispatch(createPost(post)),
  closeModal: () => dispatch(closeModal())
  // action: post => dispatch(createPost(post))
});

export default connect(mSTP, mDTP)(PostForm);