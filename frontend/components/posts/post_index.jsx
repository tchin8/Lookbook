import React from 'react';
import PostIndexItemContainer from './post_index_item_container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class PostIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.postsState;

    if (localStorage.getItem('mode') === 'dark') {
      $('.light').toggleClass("dark light");
    } else if (localStorage.getItem('mode') === 'light') {
      $('.dark').toggleClass("dark light");
    }
  }

  componentDidMount() {
    if (localStorage.getItem('mode') === 'dark') {
      $('.light').toggleClass("dark light");
    } else if (localStorage.getItem('mode') === 'light') {
      $('.dark').toggleClass("dark light");
    }
  }


  render() {
    const { posts, deletePost, updatePost, fetchPost, openModal, currentUser } = this.props;

    let postIds = posts.map(post => (post.id));
    const sorted = postIds.sort(function (a, b) { return a - b }); 
    
    return (
      <ul className="wall-posts">

        {posts.map(post => (
          <PostIndexItemContainer 
            post={post} 
            fetchPost={fetchPost}
            updatePost={updatePost}
            deletePost={deletePost} 
            openModal={openModal}
            currentUser={currentUser}
            key={post.id}
            rerender={this.rerender}/>
        ))}
      </ul>
    )
  }
};

export default PostIndex;