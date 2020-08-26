import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import { fetchUsers, fetchUser } from "../../actions/users_actions";
import { createFriendRequest, deleteFriendRequest } from '../../actions/friend_request_actions';

import SearchFriends from './search_friends';

const mSTP = state => ({
  currentUser: state.entities.users[state.session.id], 
  users: state.entities.users,
});

const mDTP = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  logout: (user) => dispatch(logout(user)),
  createFriendRequest: (request) => dispatch(createFriendRequest(request)),
  deleteFriendRequest: (requestId) => dispatch(deleteFriendRequest(requestId)),
});

export default connect(mSTP, mDTP)(SearchFriends);