import { connect } from 'react-redux';

import PostsIndex from './posts_index';
// import { logout } from '../../actions/session_actions';

// const mSTP = (state, ownProps) => ({
//   user: state.entities.users[ownProps.match.params.userId]
// })

// const mDTP = dispatch => ({
//   logout: user => dispatch(logout(user))
// });

export default connect(null, null)(PostsIndex);