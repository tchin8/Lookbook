import React from 'react';
import {
  Link
} from 'react-router-dom';

class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  commentedTimeAgo(datetime) {
    if (this.props.post.created_at === undefined) {
      return "1m";
    }

    const now = new Date();
    let t = new Date(datetime);
    const then = (t - 10800);
    const secs = ((now.getTime() - then) / 1000);

    if (secs < 60) {
      return "1m"
    } else if (secs < 3600) {
      return parseInt(secs / 60) + "m";
    } else if (secs < 86400) {
      return parseInt(secs / 2600) + "h";
    } else if (secs < 604800) {
      return parseInt(secs / 86400) + "d";
    } else if (secs < 31449600) {
      return parseInt(secs / 604800) + "w";
    } else {
      return parseInt(secs / 31449600) + "y";
    }
  }

  render() {
    const { comment, users } = this.props;

    let commenter = users[comment.user_id]

    return (
      <li className="each-com-container dark">
        <Link to={`/users/${comment.user_id}`}
          style={{ textDecoration: 'none' }}>
        <img src={commenter.pfpUrl}
          alt=""
          className="c-thumb" />
        </Link>
        <div className="each-com">
          <Link to={`/users/${comment.user_id}`}
            style={{ textDecoration: 'none' }}>
            <span className="commenter">
              {users[comment.user_id].fname} {users[comment.user_id].lname}
            </span>
          </Link>
          <p className="actual-com">{comment.body}</p>
          <div className="like-reply">
            <span className="like-reply">Like</span>
            <span>·</span>
            <span className="like-reply">Reply</span>
            <span>·</span>
            <span>{this.commentedTimeAgo(comment.created_at)}</span>
          </div>
        </div>
      </li>
    )
  }
};

export default CommentIndexItem;