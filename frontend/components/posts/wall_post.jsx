import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class WallPost extends React.Component {

  render() {
    const { currentUser, user, openModal, closeModal } = this.props;
    const defaultpfp = window.defaultpfp;
    const me = window.me;

    let pic, postBtn;
    if (currentUser.id === 1) {
      pic = me;
    } else {
      pic = defaultpfp;
    }

    if (currentUser === user) {
      postBtn = <button className="wall-post dark"
        onClick={() => openModal('Create Post')}>
        <span>What's on your mind?</span>
        </button> 
    } else {
      postBtn = <button className="wall-post dark"
        onClick={() => openModal('Create Post')}>
          <span>{`Write something to ${user.fname}...`}</span>
          </button> 
    }


    console.log(currentUser);

    return (
      <section className="wall-post-container dark">
        <div className="top dark">
          {/* change to user's img */}
          <img src={pic} alt="" className="thumbnail" />
          {postBtn}
          {/* <button className="wall-post dark"
            onClick={() => openModal('Create Post')}>What's on your mind?</button>  */}
        </div>

        <div className="bottom dark">
          <div className="live-vid-div dark">
            <FontAwesomeIcon icon="video"
              className="fa-video dark" />
            <span>Live Video</span>
          </div>

          <div className="photo-vid-div dark">
            <FontAwesomeIcon icon="images"
              className="fa-images dark" />
            <span>Photo/Video</span>
          </div>

          <div className="feeling-div dark">
            <FontAwesomeIcon icon={['fab', 'font-awesome-flag']}
              className="fa-font-awesome-flag dark" />
            <span>Life Event</span>
          </div>
        </div>
      </section>
    )
  }
};

export default WallPost;