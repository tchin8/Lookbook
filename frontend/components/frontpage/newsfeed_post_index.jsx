import React from 'react';
import PostIndexItemContainer from '../posts/post_index_item_container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class NewsfeedPostIndex extends React.Component {
  constructor(props) {
    super(props);

    // this.state = props.posts;

    // this.rerender = this.rerender.bind(this);
  }

  // componentDidUpdate() {
  //   this.props.fetchPosts();
  // }

  // componentDidMount() {
  //   this.props.fetchUserPosts(this.props.match.params.userId);
  // }

  // static getDerivedStateFromProps(props, state) {
  //   if (props.posts !== state.posts) {
  //     return {
  //       posts: props.posts,
  //     };
  //   }
  //   return null;
  // }

  rerender() {
    // debugger;
    // this.props.fetchUserPosts(this.props.match.params.userId);

    this.forceUpdate();
  }

  render() {
    const { posts, deletePost, updatePost, fetchPost, openModal, currentUser } = this.props;

    let postIds = posts.map(post => (post.id));
    // console.log(postIds);
    const sorted = postIds.sort(function (a, b) { return a - b });
    // console.log(sorted);

    return (
      <ul className="newsfeed-posts">

        {posts.map(post => (
          <PostIndexItemContainer
            post={post}
            fetchPost={fetchPost}
            updatePost={updatePost}
            deletePost={deletePost}
            openModal={openModal}
            currentUser={currentUser}
            key={post.id}
            rerender={this.rerender} />
        ))}
      </ul>
    )
  }
};

export default NewsfeedPostIndex;