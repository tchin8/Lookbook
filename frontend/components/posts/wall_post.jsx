import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class WallPost extends React.Component {

  render() {
    const { currentUser, user, openModal, closeModal } = this.props;
    const defaultpfp = window.defaultpfp;
    const me = window.me;

    let pic, postBtn, icons;
    if (currentUser.id === 1) {
      pic = me;
    } else {
      pic = defaultpfp;
    }

    // if (!user) {
    //   return null;
    // }

    if (currentUser === user) {
      postBtn = <button className="wall-post dark"
        onClick={() => openModal('Create Post')}>
        <span>What's on your mind?</span>
        </button> 
      
      icons = (
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
          <img src={pic} alt="" className="thumbnail" />
          {postBtn}

        </div>

        {icons}

      </section>
    )
  }
};

export default WallPost;