import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NewsfeedPostIndex from './newsfeed_post_index';

class NewsfeedMain extends React.Component {

  render() {
    const { currentUser, openModal, posts, deletePost, updatePost} = this.props;

    return (
      <section className="newsfeed-main">
        <section className="col-2-3">
          <section className="newsfeed-post-container dark">
            <div className="top dark">
              <img src={currentUser.pfpUrl} alt="" className="thumbnail" />
              <button className="newsfeed-post dark"
                onClick={() => openModal('Create Post')}>
                <span>{`What's on your mind, ${currentUser.fname}?`}</span>
              </button> 

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
                <FontAwesomeIcon icon="laugh"
                  className="fa-laugh dark" />
                <span>Life Event</span>
              </div>
            </div>

          </section>

          <NewsfeedPostIndex posts={posts}
            currentUser={currentUser}
            deletePost={deletePost}
            updatePost={updatePost}
            openModal={openModal}/>
          
        </section>
      </section>
    )
  }
};

export default NewsfeedMain;