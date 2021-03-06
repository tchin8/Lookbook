import { connect } from 'react-redux';


import { createPost, updatePost } from '../../actions/post_actions';
import { openModal } from '../../actions/modal_actions';
import WallPost from './wall_post';

const mapDispatchToProps = dispatch => ({
  createPost: post => dispatch(createPost(post)),
  updatePost: post => dispatch(updatePost(post)),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(
  null,
  mapDispatchToProps
)(WallPost);
