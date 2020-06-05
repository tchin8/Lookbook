import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.post;
  }

  postedTimeAgo(datetime) {
    if (this.props.post.created_at === undefined) {
      // debugger;
      return "Just now";
    }

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May", 
      "June",
      "July", 
      "August",
      "September",
      "October",
      "November",
      "December"
    ]
    const now = new Date();
    const then = (new Date(datetime) - 10800);

    const secs = ((now.getTime() - then) / 1000);
    // console.log(Date.now(datetime));
    // console.log(secs);
    // console.log(datetime);
    // console.log(now);
    // console.log(new Date(datetime))

    if (secs < 120) {
      return "Just now";
    } else if (secs < 3600) {
      return parseInt(secs / 60) + " mins";
    } else if (secs <= 86400) {
      if (secs >= 3600 && secs < 7200 ) {
        return "1 hr";
      } else {
        return parseInt(secs / 3600) + " hrs"
      }
    } 

    let amOrPm = "AM"; 
    if (now.getHours() > 12) {
      amOrPm = "PM";
    }
    
    debugger;
    const hour = then.getHours() % 12;
    const min = then.getMinutes() < 10 ? `0${then.getMinutes()}` : then.getMinutes();
    if (secs >= 86400 && secs < 172800) {
      return `Yesterday at ${hour}:${min} ${amOrPm}`
    }
    
    month = months[then.getMonth()];
    day = then.getDate();
    return `${month} ${day} at ${hour}:${min} ${amOrPm}`;
  }

  render() {
    const { post, deletePost } = this.props;
    const fblogo = window.fblogo;

    if (!post) {
      debugger;
      return null;
    }

    return (
      <li className="each-post dark">
        <div className="top-container dark">

          <div className="user-info">

            <img src={fblogo} alt="" className="thumbnail" />

            <div>
              <span className="pname">{currentUser.fname} {currentUser.lname}</span>

              <div>
                <span className="time">{this.postedTimeAgo(post.created_at)} ·</span>
                <FontAwesomeIcon icon="user-friends"
                  className="fa-user-friends dark" />
              </div>

              <div className="ellipsis-container dark"
                onClick={() => deletePost(post.id)}>
                <FontAwesomeIcon icon="ellipsis-h"
                  className="fa-ellipsis-h dark" />
              </div>
            </div>
          </div>

          <div className="body">
            <p>{post.body}</p>
          </div>
        </div>

        <div className="post-interaction dark">
          <div className="like dark">
            <span className="like">
            <FontAwesomeIcon icon={['far', 'thumbs-up']}
              className="fa-thumbs-up dark" />
                Like</span>
          </div>

          <div className="comment dark">
            <span className="comment">
            <FontAwesomeIcon icon={['far', 'comment']}
              className="fa-comment dark" />
              Comment</span>
          </div>

          <div className="share dark">
            <span className="share">
            <FontAwesomeIcon icon={['far', 'share-square']}
              className="fa-share-square dark" />
              
              Share</span>
          </div>
      
        </div>

        <div className="post-comment dark">
          <div className="comment">
            <img src={fblogo} alt="" className="thumbnail" />

            <form className="comment dark">
              <input className="comment"
                type="text"
                placeholder="Write a comment..."/>
              
              <div className="icons">

              </div>
            </form>
          </div>
        </div>
      </li>
    )
  }
};

export default PostIndexItem;