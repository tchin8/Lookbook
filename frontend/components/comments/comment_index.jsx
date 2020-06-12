import React from 'react';
import CommentIndexItem from './comment_index_item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);

    if (localStorage.getItem('mode') === 'dark') {
      $('.light').toggleClass("dark light");
    } else if (localStorage.getItem('mode') === 'light') {
      $('.dark').toggleClass("dark light");
    }
  }

  render() {
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