import { connect } from 'react-redux';

import LoginForm from './login_form';
import { login } from '../../actions/session_actions';

const mSTP = state => ({
  errors: Object.values(state.errors.session)
});

const mDTP = dispatch => ({
  login: user => dispatch(login(user))
});

export default connect(mSTP, mDTP)(LoginForm);