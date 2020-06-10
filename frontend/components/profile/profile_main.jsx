import React, { Profiler } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Link
} from 'react-router-dom';

import WallPostContainer from '../posts/wall_post_container';
import PostIndexContainer from '../posts/post_index_container';

class ProfileMain extends React.Component {
  // componentDidUpdate() {

  // }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const stick = document.getElementsByClassName("main-left")[0];
    const sticky = stick.offsetTop;
    if (window.pageYOffset > 547) {
      stick.classList.add("sticky");
    } else if (window.pageYOffset <= 547){
      stick.classList.remove("sticky");
    }
    // if (window.pageYOffset > sticky) {
    //   stick.classList.add("sticky");
    // } else if (window.pageYOffset <= sticky){
    //   stick.classList.remove("sticky");
    // }
  }

  render() {
    const { currentUser, user, users, openModal, createComment, posts } = this.props;
    
    let organizeSection, btn1, btn2, friends, allFriends, allPhotos, photos;
    // debugger;
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

    if (user.friends !== undefined) {

      let f;
      if (user.friends.length === 1) {
        f = `${user.friends.length} friend`;
      } else {
        f = `${user.friends.length} friends`;
      }

      allFriends = user.friends.slice(0, 9).map((id, i) => {
        const friend = users[id];

        return (
          <Link to={`/users/${id}`}
            style={{ textDecoration: 'none' }}
            key={id} >
          <div className={`friend-${i}-9`}>
            <img src={friend.pfpUrl}
              alt=""
              className="pfp" />
            <span className="friend-name">{friend.fname} {friend.lname}
            </span>
          </div>
          </Link>
        )
        }
      )

      friends = (
        <div className="friends dark">
          <span>Friends</span>

          <span className="num-friends">{f}</span>

          <div className="friends">
            {allFriends}
          </div>
        </div>
      )
    } else {
      friends = (
        <div className="friends dark">
          <span>Friends</span>
        </div>
      )
    }
    
    let k = 0;
    allPhotos = posts.reverse().slice(0, 9).map(post => {
      // debugger;
      if (post.postPhoto !== undefined) {
        k += 1;
        return (
          <div key={post.id}>
            <img src={post.postPhoto}
              alt=""
              className={`photos-pic pic-${k}-9`} />
          </div>
        )
      }
    })

    if (k > 3 && k < 7) {
      $('.pic-4-9').addClass('bottom-row');
      $('.pic-6-9').addClass('bottom-row');
    } else {
      $('.pic-4-9').removeClass('bottom-row');
      $('.pic-6-9').removeClass('bottom-row');
    }


    photos = (
      <div className="photos dark">
        <span>Photos</span>

        <div className="photos">
          {allPhotos}
        </div>
      </div>
    )


    return (
      <section className="profile-main">
        <div className="pm-div">
          <div className="main-left">

            {/* KEEEEEPPPP THIS!!! */}
            {/* <div className="intro dark">
              <span>Intro</span>

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

            </div> */}

            {photos}

            {friends}
            {/* KEEEP THIS TOOOOOOOO */}
            {/* <div className="life-events dark">
              <span>Life Events</span>
            </div> */}

            {/* <img src={black} alt="" className="random-blackness" /> */}

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