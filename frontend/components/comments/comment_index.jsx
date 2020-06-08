import React from 'react';
import CommentIndexItem from './comment_index_item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidUpdate() {
  //   // this.props.fetchComments(this.props.post.id);
  //   this.props.fetchPost(this.props.post.id);
  // }

  // componentDidMount() {
  //   // debugger;
  //   this.props.fetchComments(this.props.post.id);
  // }

  render() {
    // debugger;
    const { post, users, fetchComments } = this.props;
    let comments;
    if (post.comments !== undefined) {
      comments = Object.values(post.comments);

      return (
        <ul className="comments-index dark">
          {comments.map(comment => (
            <CommentIndexItem 
              fetchComments={fetchComments}
              key={comment.id}
              comment={comment}
              post={post}
              users={users}/>
          ))}
        </ul>
      )
    } else {
      return null;
    }
  } 
};

export default CommentIndex;