import { connect } from 'react-redux';

import Profile from './profile';
import { logout } from '../../actions/session_actions';
import { updateUser, fetchUsers, fetchUser } from '../../actions/users_actions';
import { fetchUserPosts, fetchPosts } from '../../actions/post_actions';
import { openModal } from '../../actions/modal_actions';
import { fetchComments } from '../../actions/comment_actions';
import { createFriendRequest, deleteFriendRequest } from '../../actions/friend_request_actions';


const mSTP = (state, ownProps) => {
  // debugger;
  return {
    posts: Object.values(state.posts),
    postsState: state.posts,
    users: state.entities.users,
    pfpUrl: state.entities.users[state.session.id].pfpUrl,
    coverPhotoUrl: state.entities.users[state.session.id].coverPhotoUrl,
    currentUser: state.entities.users[state.session.id], 
    user: state.entities.users[ownProps.match.params.userId]
  }
};

const mDTP = dispatch => ({
  fetchUserPosts: userId => dispatch(fetchUserPosts(userId)),
  fetchPosts: () => dispatch(fetchPosts()),
  fetchUsers: () => dispatch(fetchUsers()),
  fetchUser: userId => dispatch(fetchUser(userId)),
  logout: user => dispatch(logout(user)),
  updateUser: user => dispatch(updateUser(user)),
  openModal: modal => dispatch(openModal(modal)),
  fetchComments: postId => dispatch(fetchComments(postId)),
  createFriendRequest: request => dispatch(createFriendRequest(request)),
  deleteFriendRequest: requestId => dispatch(deleteFriendRequest(requestId)),
});

export default connect(mSTP, mDTP)(Profile);