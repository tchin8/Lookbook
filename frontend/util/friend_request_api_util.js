export const createFriendRequest = request => (
  $.ajax({
    url: '/api/friend_requests',
    method: 'post',
    data: { friend_request: request }
  })
);

export const updateFriendRequest = request => (
  $.ajax({
    url: `/api/friend_requests/${request.id}`,
    method: 'patch',
    data: { friend_request: request }
  })
);

export const deleteFriendRequest = requestId => (
  $.ajax({
    url: `/api/friend_requests/${requestId}`,
    method: 'delete'
  })
);