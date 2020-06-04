import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ProfileHeader extends React.Component {

  render() {

    const { user } = this.props;
    
    const buttonText = user.bio ? "Edit" : "Add Bio";

    return (
      <section className="p-header">
        <div className="cover-pic">
          <div className="pfp dark">
            <div className="cam-circle dark">
              <FontAwesomeIcon icon="camera"
                className="fa-camera dark" />
            </div>
          </div>

          <button className="dark">
            <FontAwesomeIcon icon="camera"
              className="fa-camera dark" />
            Edit Cover Photo
          </button>
        </div>

        <div className="under-cover">
          <div className="under-top">
            <span className="name dark">
              {user.fname} {user.lname}
            </span>

            <span className="bio dark">
              {user.bio}

              <button>{buttonText}</button>
            </span>
          </div>

          <div className="under-bottom dark">
            <div className="left-nav">
              <div>
                <span>Timeline</span>
              </div>

              <div>
                <span>About</span>
              </div>

              <div>
                <span>Friends</span>
              </div>
              {/* <span>Friends
                <span>{user.friends.length}</span>
              </span> */}
              <div>
                <span>Photos</span>
              </div>

              <div>
                <span>Archive</span>
              </div>

              <div>
                <span className="more">More

                  <FontAwesomeIcon icon="sort-down"
                    className="pi-sort-down dark" />
                </span>
              </div>
            </div>



            <div className="right-nav dark">
              <div>
                <button>
                  <FontAwesomeIcon icon="pencil-alt"
                    className="fa-pencil-alt dark" />

                    Edit Profile
                </button>
              </div>

              <div>
                <button>
                  <FontAwesomeIcon icon="eye"
                    className="fa-eye dark" />
                </button>
              </div>

              <div>
                <button>
                  <FontAwesomeIcon icon="search"
                    className="fa-search dark" />
                </button>
              </div>

              <div>
                <button>
                  <FontAwesomeIcon icon="ellipsis-h"
                    className="fa-ellipsis-h dark" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
};

export default ProfileHeader;