import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class PostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      author_id: this.props.currentUser.id,
      user_id: this.props.user.id,
      body: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => (
      this.setState({ [field]: e.currentTarget.value })
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.closeModal();
    this.props.action(this.state);
    // other stuff here
  }

  render() {
    const thumbnail = window.fblogo;
    const { currentUser, user, action, closeModal } = this.props;
    return (
    <div className="create-post-form-container">
      <div className="header">
        <span className="create">Create Post</span>
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
        <img src={fblogo} alt="" className="thumbnail" />

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