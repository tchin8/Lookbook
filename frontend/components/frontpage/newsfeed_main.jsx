import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Link
} from 'react-router-dom';
import NewsfeedPostIndex from './newsfeed_post_index';

class NewsfeedMain extends React.Component {
  constructor(props) {
    super(props);

    if (localStorage.getItem('mode') === 'dark') {
      $('.light').toggleClass("dark light");
    } else if (localStorage.getItem('mode') === 'light') {
      $('.dark').toggleClass("dark light");
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    if (localStorage.getItem('mode') === 'dark') {
      $('.light').toggleClass("dark light");
    } else if (localStorage.getItem('mode') === 'light') {
      $('.dark').toggleClass("dark light");
    }
  }

  render() {
    const { currentUser, openModal, posts, deletePost, updatePost, users, fetchUsers } = this.props;
    
    if (!users[1] || !users[2]) {
      return null;
    }

    let contacts;
    if (currentUser.friends !== undefined) {
      contacts = currentUser.friends.map(id => {
        const friend = users[id];
  
        return (
          <Link to={`/users/${id}`}
            style={{ textDecoration: 'none' }}
            key={id} >
            <li className="contact-friend">
              <img src={friend.pfpUrl}
                alt=""
                className="thumbnail" />
              <span className="friend-name">{friend.fname} {friend.lname}</span>
            </li>
          </Link>
        )
      })
    }

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

            <a href="https://www.linkedin.com/in/tiffany-chin-86a402199/">
            <li className="linkedin">
              <FontAwesomeIcon icon={['fab', 'linkedin-in']}
                className="fa-linkedin dark" />
              <span>LinkedIn</span>
            </li>
            </a>

            <a href="https://github.com/tchin8">
            <li className="git">
              <FontAwesomeIcon icon={['fab', 'github']}
                className="fa-github dark" />
              <span>Github</span>
            </li>
            </a>

            <a href="https://angel.co/u/tiffany-chin-7">
            <li className="git">
              <FontAwesomeIcon icon={['fab', 'angellist']}
                className="fa-github dark" />
              <span>AngelList</span>
            </li>
            </a>

            <a href="https://tchin8.github.io/">
            <li className="git">
              <FontAwesomeIcon icon={['far', 'user-circle']}
                className="fa-github dark" />
              <span>Portfolio</span>
            </li>
            </a>

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

        <section className="col-3-3 dark">
          <div>
            <span className="contacts">Contacts</span>
          </div>

          <ul className="contacts">
            {contacts}
          </ul>

        </section>
      </section>
    )
  }
};

export default NewsfeedMain;