import { connect } from 'react-redux';

import EditProfileForm from './edit_profile_form';
import { updateUser } from '../../actions/users_actions';
import { closeModal } from '../../actions/modal_actions';

const mSTP = state => ({
  currentUser: state.entities.users[state.session.id],
  // user: state.entities.users[ownProps.match.params.userId]
});

const mDTP = dispatch => ({
  updateUser: user => dispatch(updateUser(user)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(EditProfileForm);