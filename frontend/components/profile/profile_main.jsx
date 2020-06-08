import React, { Profiler } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import WallPostContainer from '../posts/wall_post_container';
import PostIndexContainer from '../posts/post_index_container';

class ProfileMain extends React.Component {
  // componentDidUpdate() {

  // }

  render() {
    const { currentUser, user, openModal, createComment } = this.props;
    

    let organizeSection, btn1, btn2;
    if (user === currentUser) {
      organizeSection = (
        <div className="settings">
          <div className="settings-top">
            <span className="posts">Posts</span>

            <div className="icons">
              <div className="sliders-h-container dark">
                <FontAwesomeIcon icon="sliders-h"
                  className="fa-sliders-h dark" />
                <span>Filters</span>
              </div>

              <div className="cog-container dark">
                <FontAwesomeIcon icon="cog"
                  className="fa-cog dark" />
                <span>Manage Posts</span>
              </div>
            </div>
          </div>

          <div className="settings-bottom">
            <div className="list dark"
            // focused={true}
            >
              <FontAwesomeIcon icon="list"
                className="fa-list dark" />
              <span>List View</span>
            </div>

            <div className="grid dark">
              <FontAwesomeIcon icon="th-large"
                className="fa-th-large dark" />
              <span>Grid View</span>
            </div>
          </div>
        </div>
      );

      btn1 = (
        <button className="edit-details"
          onClick={() => openModal('Edit Profile')}>Edit Details</button>
      )

      btn2 = (
        <button className="edit-featured"
          onClick={() => openModal('Edit Profile')}>Edit Featured</button>
      )
    }

    return (
      <section className="profile-main">
        <div className="pm-div">
          <div className="main-left">
            <div className="intro dark">
              <span>Intro</span>
              {/* <button className="edit-details"
                onClick={() => openModal('Edit Profile')}>Edit Details</button> */}
                {btn1}

              <div className="featured-pics">
                <div className="featured-row-1-3">
                  <div className="pic-1-9"></div>
                  <div className="pic-2-9"></div>
                  <div className="pic-3-9"></div>
                </div>
                <div className="featured-row-2-3">
                  <div className="pic-4-9"></div>
                  <div className="pic-5-9"></div>
                  <div className="pic-6-9"></div>
                </div>
                <div className="featured-row-3-3">
                  <div className="pic-7-9"></div>
                  <div className="pic-8-9"></div>
                  <div className="pic-9-9"></div>
                </div>
              </div>

                {btn2}
            </div>

            <div className="photos dark">
              <span>Photos</span>

              <div className="photos">
                <div className="photos-row-1-3">
                  <div className="pic-1-9"></div>
                  <div className="pic-2-9"></div>
                  <div className="pic-3-9"></div>
                </div>

                <div className="photos-row-2-3">
                  <div className="pic-4-9"></div>
                  <div className="pic-5-9"></div>
                  <div className="pic-6-9"></div>
                </div>
                <div className="photos-row-3-3">
                  <div className="pic-7-9"></div>
                  <div className="pic-8-9"></div>
                  <div className="pic-9-9"></div>
                </div>
              </div>
            </div>

            <div className="friends dark">
              <span>Friends</span>
            </div>

            <div className="life-events dark">
              <span>Life Events</span>
            </div>
          </div>

          <div className="main-right">
            <WallPostContainer currentUser={currentUser} user={user}/>

            {organizeSection}

            <PostIndexContainer 
              currentUser={currentUser}/>
          </div>
        </div>
      </section>
    )
  }
};

export default ProfileMain;