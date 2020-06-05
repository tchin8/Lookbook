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


        {/* MOVE BACK TO INDEXITEM LATER */}
        {/* <div className="post-dropdown dark">
          <div className="pdd-1-3 dark">
            <div className="save-post">
              <FontAwesomeIcon icon={['far', 'bookmark']}
                className="fa-bookmark dark" />

              <span>Save post
                <span>Add this to your save items</span>
              </span>
            </div>

            <div className="edit-post">
              <FontAwesomeIcon icon={['far', 'edit']}
                className="fa-edit dark" />
            </div>

            <div className="edit-audience">
              <FontAwesomeIcon icon={['far', 'user-circle']}
                className="fa-user-circle dark" />
            </div>

            <div className="delete-post">
              <FontAwesomeIcon icon={['far', 'trash-alt']}
                className="fa-trash-alt dark" />
            </div>

            <div className="turn-off-nots">
              <FontAwesomeIcon icon={['far', 'bell-slash']}
                className="fa-bell-slash dark" />
            </div>

            <div className="change-date">
              <FontAwesomeIcon icon={['far', 'calendar-alt']}
                className="fa-calendar-alt dark" />
            </div>

            <div className="hide-timeline">
              <FontAwesomeIcon icon={['far', 'times-circle']}
                className="fa-times-circle dark" />
            </div>
          </div>
        </div> */}

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