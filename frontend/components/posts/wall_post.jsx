import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class WallPost extends React.Component {
  constructor(props) {
    super(props);

    this.handleUploadPic = this.handleUploadPic.bind(this);
    this.handleUploadPicClick = this.handleUploadPicClick.bind(this);

    if (localStorage.getItem('mode') === 'dark') {
      $('.light').toggleClass("dark light");
    } else if (localStorage.getItem('mode') === 'light') {
      $('.dark').toggleClass("dark light");
    }
  }

  handleUploadPicClick() {
    $(".post-pic").click();
  }

  handleUploadPic(e) {
    localStorage.setItem("post-pic", e.currentTarget.files[0]);
    this.props.openModal('Create Post');
  }

  render() {
    const { currentUser, user, openModal, closeModal } = this.props;

    let postBtn, icons;

    if (currentUser.pfpUrl === undefined) {
      return null;
    }

    if (currentUser === user) {
      postBtn = <button className="wall-post dark"
        onClick={() => openModal('Create Post')}>
        <span>What's on your mind?</span>
        </button> 
      
      icons = (
        <div className="bottom dark">
          <div className="live-vid-div dark"
            onClick={() => openModal('Create Post')}>
            <FontAwesomeIcon icon="video"
              className="fa-video dark" />
            <span>Live Video</span>
          </div>

          <div className="photo-vid-div dark"
            // onClick={this.handleUploadPicClick}
            onClick={() => openModal('Create Post')}
            >
            <FontAwesomeIcon icon="images"
              className="fa-images dark" />
            <span>Photo/Video</span>
          </div>
          {/* <input type="file"
            className="post-pic"
            id="file"
            onChange={this.handleUploadPic}/> */}

          <div className="feeling-div dark"
            onClick={() => openModal('Create Post')}>
            <FontAwesomeIcon icon={['fab', 'font-awesome-flag']}
              className="fa-font-awesome-flag dark" />
            <span>Life Event</span>
          </div>
        </div>
      );
    } else {
      postBtn = (
        <button className="wall-post dark"
        onClick={() => openModal('Create Post')}>
          <span>{`Write something to ${user.fname}...`}</span>
        </button> 
      );

      icons =(
        <div className="bottom dark">
          <div className="photo-vid-div dark">
            <FontAwesomeIcon icon="images"
              className="fa-images dark" />
            <span>Photo/Video</span>
          </div>

          <div className="live-vid-div dark">
            <FontAwesomeIcon icon="user-tag"
              className="fa-user-tag dark" />
            <span>Tag Friends</span>
          </div>


          <div className="feeling-div dark">
            <FontAwesomeIcon icon="laugh"
              className="fa-laugh dark" />
            <span>Feeling/Activity</span>
          </div>
        </div>
      )
    }

    (currentUser);

    return (
      <section className="wall-post-container dark">
        <div className="top dark">
          {/* change to user's img */}
          <img src={currentUser.pfpUrl} alt="" className="thumbnail" />
          {postBtn}

        </div>

        {icons}

      </section>
    )
  }
};

export default WallPost;