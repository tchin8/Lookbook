import React from 'react';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidUpdate() {
  //   this.props.fetchPosts();
  // }

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const { posts, deletePost } = this.props;

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
            deletePost={deletePost} />
        ))}
      </ul>
    )
  }
};

export default PostIndex;