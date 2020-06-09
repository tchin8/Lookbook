import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Link
} from 'react-router-dom';
import NewsfeedPostIndex from './newsfeed_post_index';

class NewsfeedMain extends React.Component {

  render() {
    const { currentUser, openModal, posts, deletePost, updatePost, users, fetchUsers } = this.props;

    return (
      <section className="newsfeed-main dark">
        <section className="col-1-3 dark">
          <ul className="personal-links">
            <Link to={`/users/${currentUser.id}`}
              style={{ textDecoration: 'none' }}>
            <li className="profile">
              <img src={currentUser.pfpUrl} alt=""
                className="thumbnail" />
              <span>{currentUser.fname} {currentUser.lname}</span>
            </li>
            </Link>

            <li className="git">
              <FontAwesomeIcon icon={['fab', 'github']}
                className="fa-github dark" />
              <span>Github</span>
            </li>

            <li className="linkedin">
              <FontAwesomeIcon icon={['fab', 'linkedin-in']}
                className="fa-linkedin dark" />
              <span>LinkedIn</span>
            </li>
          </ul>
        </section>

        <section className="col-2-3 dark">
          <section className="newsfeed-post-container dark">
            <div className="top dark">
              <img src={currentUser.pfpUrl} alt="" 
                className="thumbnail" />
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

          <NewsfeedPostIndex 
            fetchUsers={fetchUsers}
            users={users}
            posts={posts}
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