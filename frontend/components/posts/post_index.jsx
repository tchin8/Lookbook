import React from 'react';
import PostIndexItem from './post_index_item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class PostIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidUpdate() {
  //   this.props.fetchPosts();
  // }

  // componentDidMount() {
  //   this.props.fetchUserPosts(this.props.match.params.userId);
  // }

  render() {
    const { posts, deletePost, updatePost, fetchPost, openModal, currentUser } = this.props;

    let postIds = posts.map(post => (post.id));
    // console.log(postIds);
    const sorted = postIds.sort(function (a, b) { return a - b });
    // console.log(sorted);
    
    
    
    return (
      <ul className="wall-posts">

        {posts.map(post => (
          <PostIndexItem 
            key={post.id}
            post={post} 
            fetchPost={fetchPost}
            updatePost={updatePost}
            deletePost={deletePost} 
            openModal={openModal}
            currentUser={currentUser}/>
        ))}
      </ul>
    )
  }
};

export default PostIndex;