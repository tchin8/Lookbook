import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Link
} from 'react-router-dom';

import CreateCommentForm from '../comments/create_comment_form';
import CommentIndexContainer from '../comments/comment_index_container';

class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.post || props.post;

    this.postedTimeAgo = this.postedTimeAgo.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleDeletePost = this.handleDeletePost.bind(this);
    this.handleEditModal = this.handleEditModal.bind(this);

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
  
  postedTimeAgo(datetime) {
    if (this.props.post.created_at === undefined) {
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

    let amOrPm = "AM"; 
    if (t.getHours() > 12) {
      amOrPm = "PM";
    }
    
    const hour = t.getHours() % 12 === 0 ? 12 : t.getHours() % 12;
    const min = t.getMinutes() < 10 ? `0${t.getMinutes()}` : t.getMinutes();
    if (secs <= 86400) {
      return `Yesterday at ${hour}:${min} ${amOrPm}`
    }


    let month = months[t.getMonth()];
    let day = t.getDate();
    return `${month} ${day} at ${hour}:${min} ${amOrPm}`;
  }


  handleFocus(e) {
    let classN;
    if (e.currentTarget.classList.contains('ellipsis-container')) {
      classN = 'post-dropdown';
    } 

    $(`#dd-${this.state.id}`).toggleClass('show hidden');
  }

  handleDeletePost(e) {
    e.preventDefault();
    this.props.deletePost(this.state.id);
    $(`.show`).toggleClass('show hidden');
  }

  handleEditModal(e) {
    e.preventDefault();
    localStorage.setItem('editPost', JSON.stringify(this.state))
    this.props.openModal('Edit Post');
    $(`.show`).toggleClass('show hidden');
  }

  handleBlur(e) {
    if (e.relatedTarget !== e.target && !e.currentTarget.contains(e.relatedTarget)) {
      $(`div.post-dropdown`).addClass('hidden');
    }
  }

  update(field) {
    return e => (
      this.setState({ [field]: e.target.value})
    )
  }

  render() {
    const { post, deletePost, updatePost, openModal, currentUser, users, createComment, fetchPost } = this.props;
    const defaultpfp = window.defaultpfp;
    const me = window.me;
    
    if (!post) {
      return null;
    }
    
    const author = users[post.author_id] || users[Object.values(post)[0].author_id];
    const wall = users[post.user_id] || users[Object.values(post)[0].user_id];
    
    if (currentUser.pfpUrl === undefined) {
      return null;
    }

    let posterPostee;
    if (window.location.href.includes("/users")) {

      posterPostee = (
        <Link to={`/users/${author.id}`}
          style={{ textDecoration: 'none' }}>
          <span className="pname">{author.fname} {author.lname}</span>
        </Link>
      )
    } else {

      let postee;
      if (author.id !== wall.id) {
        postee = (
          <>
          <FontAwesomeIcon icon="caret-right"
            className="fa-caret-right dark" />

          <Link to={`/users/${wall.id}`}
            style={{ textDecoration: 'none' }}>
            <span className="pname">{wall.fname} {wall.lname}</span>
          </Link>
          </>
        )
      } else {
        postee = null;
      }

      posterPostee = (
        <span>
          <Link to={`/users/${author.id}`}
            style={{ textDecoration: 'none' }}>
            <span className="pname">{author.fname} {author.lname}</span>
          </Link>

          {postee}

        </span>
      )
    }

    let postPhoto;
    if (post.postPhoto) {
      if (window.location.href.includes("/users")) {
        postPhoto = (
          <div className="post-photo-div">
            <img src={post.postPhoto} alt=""
              className="post-photo" />
          </div>
        )
      } else {
        postPhoto = (
          <div className="post-photo-div">
            <img src={post.postPhoto} alt=""
              className="newsfeed-photo" />
          </div>
        )
      }
    }

    return (
      <li className="each-post dark">
        <div className="top-container dark">
          <div className="user-info">
            <Link to={`/users/${author.id}`}
              style={{ textDecoration: 'none' }}>
            <img src={author.pfpUrl} alt="" className="thumbnail" />
            </Link>
            <div>

              {posterPostee}

              <div className="post-time">
                <span className="time">{this.postedTimeAgo(post.created_at)} ·</span>
                <FontAwesomeIcon icon="user-friends"
                  className="fa-user-friends dark" />
              </div>

              <button className="ellipsis-container dark"
                onClick={this.handleFocus}
                onBlur={this.handleBlur}
                >
                <FontAwesomeIcon icon="ellipsis-h"
                  className="fa-ellipsis-h dark" />
                  
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
              </button>
            </div>

          </div>

          <div className="body">
            <p>{post.body}</p>
          </div>

          {postPhoto}

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

          <CommentIndexContainer post={post}
            users={users}
            fetchPost={fetchPost}/>

          <div className="comment">

            <img src={currentUser.pfpUrl} 
              alt="" className="thumbnail" />

            <CreateCommentForm 
              currentUser={currentUser}
              createComment={createComment}
              post={post}
              fetchPost={fetchPost}/>
          </div>
        </div>
      </li>
    )
  }
};

export default PostIndexItem;