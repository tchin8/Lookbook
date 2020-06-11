import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class PostForm extends React.Component {
  constructor(props) {
    super(props);

    if (this.props.formType === 'Edit Post') {
      this.state = this.props.post;
    } else {
      if (props.user === undefined) {
        this.state = {
          author_id: props.currentUser.id,
          user_id: props.currentUser.id,
          body: '',
          postPhoto: null,
          postPhotoUrl: null,
        };
      } else {
        this.state = {
          author_id: props.currentUser.id,
          user_id: props.user.id ,
          body: '', 
          postPhoto: null,
          postPhotoUrl: null,
        };
      }
    }
    // debugger;
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleUploadPic = this.handleUploadPic.bind(this);
    this.handleUploadPicClick = this.handleUploadPicClick.bind(this);
    this.handlePreview = this.handlePreview.bind(this);
  }

  update(field) {
    return (e) => (
      this.setState({ [field]: e.currentTarget.value })
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.closeModal();
    if (this.state.postPhoto) {
      const formData = new FormData();

      formData.append('post[author_id]', this.state.author_id);
      formData.append('post[user_id]', this.state.user_id);
      formData.append('post[body]', this.state.body);
      formData.append('post[post_photo]', this.state.postPhoto);

      this.props.createPostPhoto(formData);

    } else {
      this.props.action(this.state);
      localStorage.removeItem('editPost');
    }
  }

  handleUploadPicClick() {
    // debugger;
    $(".post-pic").click();
  }


  handlePreview(e) {
    // debugger;
    const file = e.currentTarget.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      this.setState({ 
        postPhotoUrl: reader.result, 
        postPhoto: file 
      });
    };

    if (file) {
      // debugger;
      reader.readAsDataURL(file);
    } 
  }

  render() {
    const { currentUser, user, action, closeModal, formType } = this.props;

    let preview, textarea;
    if (this.state.postPhotoUrl) {
      textarea = (
        <textarea value={this.state.body}
          onChange={this.update('body')}
          placeholder="What's on your mind?"
          className="small">
        </textarea>
      )
      preview = (
        <img src={this.state.postPhotoUrl} alt=""
          className="preview"/>
      );
    } else {
      textarea = (
        <textarea value={this.state.body}
          onChange={this.update('body')}
          placeholder="What's on your mind?"
          className="big">
        </textarea>
      )
    }

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
          </div>
        </button>
      </div>

      <div className="me">
        <img src={currentUser.pfpUrl} alt="" 
          className="thumbnail" />

        <div>
          <span className="pname">
            {currentUser.fname} {currentUser.lname}
          </span>

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
          
        <div className="pic-text-container">
          {textarea}

          {preview}
        </div>
        
        <div className="add-to-post">
          <div>
            <span>Add to Your Post</span>
          </div>

          <div className="icons">
            <div className="hover-circle dark">
                <FontAwesomeIcon icon="video"
                  className="fa-video" />
            </div>

            <div className="hover-circle dark"
              onClick={this.handleUploadPicClick} >
                <FontAwesomeIcon icon="images"
                  className="fa-images" />
                <input type="file"
                  className="post-pic"
                  id="file"
                  onChange={this.handlePreview} />
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
        <div className="btn-div">
        <button onClick={this.handleSubmit}
        className="create-post" 
        disabled={!this.state.body}>Post</button>
        </div>
      </form>
    </div>
    )
  }
};

export default PostForm;