export const fetchComments = postId => (
  $.ajax({
    url: `/api/posts/${postId}/comments`
  })
);

export const createComment = comment => (
  $.ajax({
    url: `/api/posts/${comment.user_id}/comments`,
    method: 'post',
    data: { comment }
  })
);

export const updateComment = comment => (
  $.ajax({
    url: `/api/comments/${comment.id}`,
    method: 'patch',
    data: { comment }
  })
);

export const deleteComment = commentId => (
  $.ajax({
    url: `/api/posts/${commentId}`,
    method: 'delete'
  })
);
