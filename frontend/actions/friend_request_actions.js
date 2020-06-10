import * as FriendRequestUtil from '../util/friend_request_api_util';

export const RECEIVE_REQUEST = 'RECEIVE_REQUEST';
export const REMOVE_REQUEST = 'REMOVE_REQUEST';

const receiveRequest = request => ({
  type: RECEIVE_REQUEST,
  request
});

const removeRequest = requestId => ({
  type: REMOVE_REQUEST,
  requestId
});

export const createFriendRequest = request => dispatch => (
  FriendRequestUtil.createFriendRequest(request)
    .then(request => dispatch(receiveRequest(request)))
);

export const updateFriendRequest = request => dispatch => (
  FriendRequestUtil.updateFriendRequest(request)
    .then(request => dispatch(receiveRequest(request)))
);

export const deleteFriendRequest = requestId => dispatch => (
  FriendRequestUtil.deleteFriendRequest(requestId)
    .then(request => dispatch(removeRequest(request.id)))
);