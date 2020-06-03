export const fetchPosts = () => (
  $.ajax({
    url: `/api/posts`
  })
);

export const fetchPost = postId => (
  $.ajax({
    url: `/api/posts/${postId}`
  })
);

export const createPost = post => (
  $.ajax({
    url: `/api/posts`,
    method: 'post',
    data: { post }
  })
);

export const updatePost = post => (
  $.ajax({
    url: `/api/posts/${post.id}`,
    method: 'patch',
    data: { post }
  })
);

export const deletePost = postId => (
  $.ajax({
    url: `/api/posts/${postId}`,
    method: 'delete'
  })
);

export const fetchUserPosts = userId => (
  $.ajax({
    url: `/api/users/${userId}/post`
  })
);
// is this needed?? see a user's wall posts... index of their wall posts...