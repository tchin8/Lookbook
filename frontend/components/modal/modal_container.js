import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';

import Modal from './modal';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  user: state.entities.users[ownProps.match.params.userId],
  modal: state.ui.modal, 
});

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
