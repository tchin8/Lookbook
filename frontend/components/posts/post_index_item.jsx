import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Link
} from 'react-router-dom';

class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.post;

    this.postedTimeAgo = this.postedTimeAgo.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleDeletePost = this.handleDeletePost.bind(this);
    this.handleEditModal = this.handleEditModal.bind(this);
  }

  // DONT NEED THIS DONT UNCOMMENT BACK
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
    let t = new Date(datetime);
    const then = (t - 10800);
    const secs = ((now.getTime() - then) / 1000);
    

    if (secs < 120) {
      return "Just now";
    } else if (secs < 3600) {
      return parseInt(secs / 60) + " mins";
    } else if (secs <= 86400 && now.getDate() === t.getDate()) {
      if (secs >= 3600 && secs < 7200 ) {
        return "1 hr";
      } else {
        return parseInt(secs / 3600) + " hrs"
      }
    } 

    // let t = new Date(datetime);
    let amOrPm = "AM"; 
    if (t.getHours() > 12) {
      amOrPm = "PM";
    }
    
    // debugger;
    const hour = t.getHours() % 12 === 0 ? 12 : t.getHours() % 12;
    const min = t.getMinutes() < 10 ? `0${t.getMinutes()}` : t.getMinutes();
    if (secs <= 86400) {
      return `Yesterday at ${hour}:${min} ${amOrPm}`
    }

    // debugger;

    let month = months[t.getMonth()];
    let day = t.getDate();
    return `${month} ${day} at ${hour}:${min} ${amOrPm}`;

    // const hour = then.getHours() % 12;
    // const min = then.getMinutes() < 10 ? `0${then.getMinutes()}` : then.getMinutes();
    // if (secs >= 86400 && secs < 172800) {
    //   return `Yesterday at ${hour}:${min} ${amOrPm}`
    // }
    
    // month = months[then.getMonth()];
    // day = then.getDate();
    // return `${month} ${day} at ${hour}:${min} ${amOrPm}`;
  }

  handleFocus(e) {
    // debugger;
    let classN;
    if (e.currentTarget.classList.contains('ellipsis-container')) {
      classN = 'post-dropdown';
    } 

    // debugger;

    // $(`div.${classN}`).toggleClass('hidden');
    $(`#dd-${this.state.id}`).toggleClass('show hidden');
    // shouldn't toggle, will need to add class hidden if clicking outside 
  }

  handleDeletePost(e) {
    e.preventDefault();
    this.props.deletePost(this.state.id);
    $(`.show`).toggleClass('show hidden');
  }

  handleEditModal(e) {
    e.preventDefault();
    debugger;
    localStorage.setItem('editPost', JSON.stringify(this.state))
    this.props.openModal('Edit Post');
    $(`.show`).toggleClass('show hidden');
  }

  render() {
    const { post, deletePost, updatePost, openModal, currentUser, users } = this.props;
    const defaultpfp = window.defaultpfp;
    const me = window.me;

    // console.log(post.comments);

    let posterPic, commenterPic, comments, commentIndex, eachCommentThumbnail, commentAuthor;
    if (post.author_id === 1) {
      posterPic = me;
    } else {
      posterPic = defaultpfp;
    }

    if (currentUser.id === 1) {
      commenterPic = me;
    } else {
      commenterPic = defaultpfp;
    }
    
    // debugger;
    if (!post) {
      // debugger;
      return null;
    }

    const author = users[post.author_id]


    if (post.comments !== undefined) {
      comments = Object.values(post.comments);
      // console.log(comments);
    
      commentIndex = comments.map(c => {
        if (c.user_id === 1) {
          eachCommentThumbnail = me;
        } else {
          eachCommentThumbnail = defaultpfp;
        }

        commentAuthor = users[c.user_id]

        return (
          <li className="each-com-container dark">
            <img src={eachCommentThumbnail} 
              alt="" 
              className="c-thumb" />
            <div className="each-com">
              <Link to={`/users/${author.id}`}
                style={{ textDecoration: 'none' }}>
                <span className="commenter">{commentAuthor.fname} {commentAuthor.lname}</span>
              </Link>
              <p className="actual-com">{c.body}</p>
              <div className="like-reply">
                <span className="like-reply">Like</span>
                <span>·</span>
                <span className="like-reply">Reply</span>
                {/* <span>·</span> */}
                {/* <span>CREATED AT</span> */}
              </div>
            </div>
          </li>
        );
      })
    }

    
    // debugger;

    return (
      <li className="each-post dark">
        <div className="top-container dark">
          <div className="user-info">
            <img src={posterPic} alt="" className="thumbnail" />
            <div>
              <Link to={`/users/${author.id}`}
                style={{ textDecoration: 'none' }}>
              <span className="pname">{author.fname} {author.lname}</span>
              </Link>

              <div className="post-time">
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
                  onClick={this.handleEditModal}>
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
          <ul className="comments-index dark">
            {commentIndex}
          </ul>

          <div className="comment">

            <img src={commenterPic} alt="" className="thumbnail" />

            <form className="comment dark">
              <input className="comment"
                type="text"
                placeholder="Write a comment..."/>
              
              <div className="icons">
                <FontAwesomeIcon icon={['far', 'smile']}
                  className="fa-smile dark" />
                <FontAwesomeIcon icon={['far', 'image']}
                  className="fa-image dark" />
                {/* <FontAwesomeIcon icon={['fab', 'searchengin']}
                  className="fa-searchengin dark" /> */}
                <FontAwesomeIcon icon="film"
                  className="fa-film dark" />
                <FontAwesomeIcon icon={['fab', 'github-alt']}
                  className="fa-github-alt dark" />
              </div>

              {/* needs an onSubmit later on for commenting */}
            </form>
          </div>
        </div>
      </li>
    )
  }
};

export default PostIndexItem;