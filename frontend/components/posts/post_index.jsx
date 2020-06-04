import React from 'react';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const { posts, deletePost } = this.props;
    
    return (
      <ul className="wall-posts">
        {posts.map(post => (
          <PostIndexItem 
            key={post.id}
            post={post} 
            deletePost={deletePost} />
        ))}
      </ul>
    )
  }
};

export default PostIndex;