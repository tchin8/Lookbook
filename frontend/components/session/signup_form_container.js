import { connect } from 'react-redux';

import SignupForm from './signup_form';
import { signup } from '../../actions/session_actions';

// const mSTP = state => ({
//   user: {
//     fname: '',
//     lname: '',
//     email: '',
//     password: '',
//     birthday: '',
//     gender: ''
//   }
// });

const mDTP = dispatch => ({
  signup: user => dispatch(signup(user))
});

export default connect(null, mDTP)(SignupForm);