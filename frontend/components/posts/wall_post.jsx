import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class WallPost extends React.Component {

  render() {
    const fblogo = window.fblogo;

    return (
      <section className="wall-post-container dark">
        <div className="top dark">
          {/* change to user's img */}
          <img src={fblogo} alt="" className="thumbnail" />
          {/* <input type="text" 
            className="wall-search dark" placeholder="What's on your mind?" /> */}

          <button className="wall-post dark">What's on your mind?</button> 
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