import React, { Profiler } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import PostFormContainer from '../posts/post_form_container';
import PostsIndexContainer from '../posts/posts_index_container';

class ProfileMain extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <section className="profile-main">
        <div className="pm-div">
          <div className="main-left">

          </div>

          <div className="main-right">
            <PostFormContainer />

            <PostsIndexContainer />
          </div>
        </div>
      </section>
    )
  }
};

export default ProfileMain;