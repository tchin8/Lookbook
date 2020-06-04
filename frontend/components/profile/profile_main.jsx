import React, { Profiler } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import WallPostContainer from '../posts/wall_post_container';
import PostsIndexContainer from '../posts/posts_index_container';

class ProfileMain extends React.Component {
  render() {
    const { currentUser, user } = this.props;
    return (
      <section className="profile-main">
        <div className="pm-div">
          <div className="main-left">
          </div>

          <div className="main-right">
            <WallPostContainer currentUser={currentUser} user={user}/>

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

            <PostsIndexContainer />
          </div>
        </div>
      </section>
    )
  }
};

export default ProfileMain;