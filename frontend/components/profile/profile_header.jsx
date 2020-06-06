import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ProfileHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.user;
  }

  handleClick(e) {
    e.preventDefault();
    $('.bio').toggleClass("show hidden");
  }

  // count() {
  //   let chars = this.state.bio.length
  //   if (chars > 0) {
  //     const rem = 101 - chars;
  //     return `${rem} characters remaining`;
  //   }

  //   return '101 characters remaining'
  // }

  update(field) {
    return e => (
      this.setState({ [field]: e.currentTarget.value })
    )
  }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   this.props.updateUser(this.state);
  //   $('.bio').toggleClass("show hidden");
  // }

  render() {
    // debugger;
    const { user, updateUser, currentUser } = this.props;

    const defaultpfp = window.defaultpfp;
    const me = window.me;
    const myCv = window.cv;

    let pic;
    let cv;
    if (user.id === 1) {
      pic = me;
      cv = myCv;
    } else {
      pic = defaultpfp;
    }

    // debugger;


    let button;
    if (currentUser.id === user.id) {
      button = (user.bio !== undefined) ? 
        <button className="edit"
          onClick={this.handleClick}>Edit</button> : 
        <button className="add-bio"
          onClick={this.handleClick}>Add Bio</button>
    }

    return (
      <section className="p-header">
        <div className="cover-pic">
          <img src={cv} alt="" className="cover-pic" />

          <div className="pfp dark">
            <img src={pic} alt="" className="pfp" />
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

            <span className="bio dark show">
              {user.bio}

              {button}
            </span>

            <form className="bio dark hidden">
              <textarea className="text-bio dark"
                value={this.state.bio}
                placeholder="Describe who you are"
                onChange={this.update('bio')}
                />
              {/* <span>{101 - this.bio.length} characters remaining</span> */}
              <div>
                <button className="cxl-bio" 
                  onClick={this.handleClick}>Cancel</button>
                <button className="save-bio"
                  onClick={() => updateUser(this.state)}
                  disabled={!this.state.bio}>Save</button>
              </div>
            </form>

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