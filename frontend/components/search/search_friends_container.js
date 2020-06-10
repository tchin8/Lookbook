import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import { fetchUsers } from '../../actions/users_actions';

import SearchFriends from './search_friends';

const mSTP = state => ({
  currentUser: state.entities.users[state.session.id], 
  users: state.entities.users,
});

const mDTP = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers()),
  logout: user => dispatch(logout(user)),
});

export default connect(mSTP, mDTP)(SearchFriends);