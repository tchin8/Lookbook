import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class PostForm extends React.Component {
  constructor(props) {
    super(props);

    if (this.props.formType === 'Edit Post') {
      this.state = this.props.post;
    } else {
      // debugger;
      if (props.user === undefined) {
        this.state = {
          author_id: props.currentUser.id,
          user_id: props.currentUser.id,
          body: ''
        };
      } else {
        this.state = {
          author_id: props.currentUser.id,
          user_id: props.user.id ,
          body: ''
        };
      }
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => (
      this.setState({ [field]: e.currentTarget.value })
    );
  }

  handleSubmit(e) {
    // debugger;
    e.preventDefault();
    this.props.closeModal();
    this.props.action(this.state);
    localStorage.removeItem('editPost');
  }

  render() {
    const { currentUser, user, action, closeModal, formType } = this.props;
    // const defaultpfp = window.defaultpfp;
    // const me = window.me;

    // let thumbnail;
    // if (currentUser.id === 1) {
    //   thumbnail = me;
    // } else {
    //   thumbnail = defaultpfp;
    // }

    // debugger;
    return (
    <div className="create-post-form-container">
      <div className="header">
        <span className="create">{formType}</span>
        <button className="close-form"
          onClick={closeModal}>
          <div className="x-circle dark"
            onFocus={this.handleFocus}>
              <FontAwesomeIcon icon="times" 
                className="fa-times dark"/>
            {/* <span className="x">+</span> */}
          </div>
        </button>
      </div>

      <div className="me">
        {/* currentUser.image?? */}
        <img src={currentUser.pfpUrl} alt="" className="thumbnail" />

        <div>
          <span className="pname">{currentUser.fname} {currentUser.lname}</span>

          <div>
            <FontAwesomeIcon icon="user-friends"
              className="fa-user-friends dark" />
            <span className="friends">Friends</span>
            <FontAwesomeIcon icon="sort-down"
                className="fa-sort-down dark" />
          </div>
        </div>
      </div>

      <form
        className="create-post-form">
        <textarea value={this.state.body}
          onChange={this.update('body')} 
          placeholder="What's on your mind?"></textarea>
        
        <div className="add-to-post">
          <div>
            <span>Add to Your Post</span>
          </div>

          <div className="icons">
            <div className="hover-circle dark">
                <FontAwesomeIcon icon="video"
                  className="fa-video" />
            </div>

            <div className="hover-circle dark">
                <FontAwesomeIcon icon="images"
                  className="fa-images" />
            </div>

            <div className="hover-circle dark">
                <FontAwesomeIcon icon="user-tag"
                  className="fa-user-tag" />
            </div>

            <div className="hover-circle dark">
                <FontAwesomeIcon icon="map-marker-alt"
                  className="fa-map-marker-alt" />
            </div>

            <div className="hover-circle dark">
                <FontAwesomeIcon icon="ellipsis-h"
                  className="fa-ellipsis-h" />
            </div>
          </div>
        </div>

          <button onClick={this.handleSubmit}
          className="create-post" 
          disabled={!this.state.body}>Post</button>
      </form>
    </div>
    )
  }
};

export default PostForm;