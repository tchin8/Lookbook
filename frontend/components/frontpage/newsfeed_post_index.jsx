import React from 'react';
import PostIndexItemContainer from '../posts/post_index_item_container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class NewsfeedPostIndex extends React.Component {
  constructor(props) {
    super(props);


    if (localStorage.getItem('mode') === 'dark') {
      $('.light').toggleClass("dark light");
    } else if (localStorage.getItem('mode') === 'light') {
      $('.dark').toggleClass("dark light");
    }
  }

  render() {
    const { posts, deletePost, updatePost, fetchPost, openModal, currentUser, users } = this.props;

    if (currentUser.friends === undefined) {
      return null;
    }

    let friendPosts = [];
    posts.forEach(post => {
      if (currentUser.friends.includes(post.author_id) || 
        currentUser.friends.includes(post.user_id) || 
        currentUser.id === post.author_id || 
        currentUser.id === post.user_id) {
        if (!friendPosts.includes(post)) {
          friendPosts.push(post);
        }
      }
    });


    return (
      <ul className="newsfeed-posts">

        {friendPosts.map(post => (
          <PostIndexItemContainer
            post={post}
            fetchPost={fetchPost}
            updatePost={updatePost}
            deletePost={deletePost}
            openModal={openModal}
            currentUser={currentUser}
            key={post.id}
            />
        ))}
      </ul>
    )
  }
};

export default NewsfeedPostIndex;