import { connect } from 'react-redux';

import SignupForm from './signup_form';
import { signup } from '../../actions/session_actions';

const mSTP = state => ({
  errors: Object.values(state.errors.session)
});

const mDTP = dispatch => ({
  signup: user => dispatch(signup(user))
});

export default connect(mSTP, mDTP)(SignupForm);