import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.post;

    this.postedTimeAgo = this.postedTimeAgo.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleDeletePost = this.handleDeletePost.bind(this);
  }

  // componentDidMount() {
  //   this.props.fetchPost(this.state.id);
  // }

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
    
    // debugger;
    const hour = then.getHours() % 12;
    const min = then.getMinutes() < 10 ? `0${then.getMinutes()}` : then.getMinutes();
    if (secs >= 86400 && secs < 172800) {
      return `Yesterday at ${hour}:${min} ${amOrPm}`
    }
    
    month = months[then.getMonth()];
    day = then.getDate();
    return `${month} ${day} at ${hour}:${min} ${amOrPm}`;
  }

  handleFocus(e) {
    // debugger;
    let classN;
    if (e.currentTarget.classList.contains('ellipsis-container')) {
      classN = 'post-dropdown';
    } 

    // debugger;

    // $(`div.${classN}`).toggleClass('hidden');
    $(`#dd-${this.state.id}`).toggleClass('hidden');
    // shouldn't toggle, will need to add class hidden if clicking outside 
  }

  handleDeletePost(e) {
    e.preventDefault();
    this.props.deletePost(this.state.id);
  }

  render() {
    const { post, deletePost, updatePost } = this.props;
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
                onClick={this.handleFocus}>
                <FontAwesomeIcon icon="ellipsis-h"
                  className="fa-ellipsis-h dark" />
              </div>
            </div>

            {/* MOVE BACK TO INDEXITEM LATER */}
            <div className="post-dropdown dark hidden" 
              id={`dd-${post.id}`} >
              <div className="pdd-1-3 dark">

                <div className="save-post">
                  <FontAwesomeIcon icon={['far', 'bookmark']}
                    className="fa-bookmark dark" />

                  <div className="pdd-text">
                    <span>Save post</span>
                    <span className="pdd-t2">Add this to your save items</span>
                  </div>
                </div>

                <div className="pdd-divider"></div>

                <div className="edit-post"
                  onClick={() => updatePost(post)}>
                  <FontAwesomeIcon icon={['far', 'edit']}
                    className="fa-edit dark" />

                  <div className="pdd-text">
                    <span>Edit post</span>
                  </div>
                </div>


                <div className="edit-audience">
                  <FontAwesomeIcon icon={['far', 'user-circle']}
                    className="fa-user-circle dark" />

                  <div className="pdd-text">
                    <span>Edit audience</span>
                  </div>
                </div>


                <div className="delete-post"
                  onClick={this.handleDeletePost}>
                  <FontAwesomeIcon icon={['far', 'trash-alt']}
                    className="fa-trash-alt dark" />

                  <div className="pdd-text">
                    <span>Delete post</span>
                  </div>
                </div>

                <div className="turn-off-nots">
                  <FontAwesomeIcon icon={['far', 'bell-slash']}
                    className="fa-bell-slash dark" />

                  <div className="pdd-text">
                    <span>Turn off notifications for this post</span>
                  </div>
                </div>

                <div className="change-date">
                  <FontAwesomeIcon icon={['far', 'calendar-alt']}
                    className="fa-calendar-alt dark" />

                  <div className="pdd-text">
                    <span>Change date</span>
                  </div>
                </div>

                <div className="pdd-divider"></div>

                <div className="hide-timeline">
                  <FontAwesomeIcon icon={['far', 'times-circle']}
                    className="fa-times-circle dark" />

                  <div className="pdd-text2">
                    <span>Hide from timeline</span>
                    <span className="pdd-t2">This post may still appear in other places.</span>
                  </div>
                </div>
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