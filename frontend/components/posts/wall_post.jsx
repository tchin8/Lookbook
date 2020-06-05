import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class WallPost extends React.Component {

  render() {
    const { currentUser, user, openModal, closeModal } = this.props;
    const defaultpfp = window.defaultpfp;
    const me = window.me;

    let pic;
    if (user.id === 1) {
      pic = me;
    } else {
      pic = defaultpfp;
    }

    return (
      <section className="wall-post-container dark">
        <div className="top dark">
          {/* change to user's img */}
          <img src={pic} alt="" className="thumbnail" />

          <button className="wall-post dark"
            onClick={() => openModal('create post')}>What's on your mind?</button> 
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