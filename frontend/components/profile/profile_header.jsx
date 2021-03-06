import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ProfileHeader extends React.Component {
  constructor(props) {
    super(props);

    const { user, currentUser } = props;

    this.state = {
      id: user.id,
      bio: user.bio === 'null' ? "" : user.bio,
      birthday: user.birthday,
      current_city: user.current_city === 'null' ? "" : user.current_city,
      email: user.email,
      fname: user.fname,
      gender: user.gender,
      hometown: user.hometown === 'null' ? "" : user.hometown,
      lname: user.lname,
      relationship_status: user.relationship_status === 'null' ? "" : user.relationship_status,
      school: user.school === 'null' ? "" : user.school,
      workplace: user.workplace === 'null' ? "" : user.workplace,
      pfpUrl: user.pfpUrl,
      coverPhotoUrl: user.coverPhotoUrl
    }

    this.state.prevState = {
      id: user.id,
      bio: user.bio,
      birthday: user.birthday,
      current_city: user.current_city,
      email: user.email,
      fname: user.fname,
      gender: user.gender,
      hometown: user.hometown,
      lname: user.lname,
      relationship_status: user.relationship_status,
      school: user.school,
      workplace: user.workplace,
      pfpUrl: user.pfpUrl,
      coverPhotoUrl: user.coverPhotoUrl
    }

    if (currentUser !== user) {
      this.friendRequest = {
        requester_id: currentUser.id,
        requestee_id: user.id,
        status: false,
      }
    }

    $('.bio-span').addClass("show");
    $('.bio-span').removeClass("hidden");
    $('.bio-form').addClass("hidden");
    $('.bio-form').removeClass("show");

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.update = this.update.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleFileClick = this.handleFileClick.bind(this);
    this.handleUploadPfp = this.handleUploadPfp.bind(this);
    this.handleFileClickCoverPhoto = this.handleFileClickCoverPhoto.bind(this);
    this.handleFriendRequest = this.handleFriendRequest.bind(this);

    if (this.state.bio === null) {
      this.state.count = 101;
    } else {
      this.state.count = 101 - this.state.bio.length;
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentDidUpdate(prevProps){
    if (prevProps.user !== this.props.user) {
      window.scrollTo(0, 0);
    }
  }

  disabled() {
    if (this.state.bio === this.state.prevState.bio) {
      return true;
    } else {
      return false;
    }
  }

  handleClick(e) {
    e.preventDefault();
    $('.bio-span').toggleClass("show hidden");
    $('.bio-form').toggleClass("show hidden");
  }

  handleCancel(e) {
    e.preventDefault();
    this.setState({
        bio: this.state.prevState.bio,
    });

    $('.bio-span').toggleClass("show hidden");
    $('.bio-form').toggleClass("show hidden");
  }

  update(field) {
    return e => {
      return this.setState({ 
        [field]: e.target.value, 
        count: (101 - e.target.value.length)
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    $('.bio-span').addClass("show");
    $('.bio-span').removeClass("hidden");
    $('.bio-form').addClass("hidden");
    $('.bio-form').removeClass("show");

    this.props.updateUser(this.state);
  }

  handleFileClick() {
    $(".upload-pfp").click();
  }

  handleUploadPfp(e) {
    const formData = new FormData();
    if (e.currentTarget.classList.value.includes('pfp')) {
      this.setState({ pfpUrl: e.currentTarget.files[0]});
      formData.append('user[pfp]', e.currentTarget.files[0]);
    } else {
      this.setState({ coverPhotoUrl: e.currentTarget.files[0] });
      formData.append('user[cover_photo]', e.currentTarget.files[0]);
    }
    formData.append('user[id]', this.state.id);
    formData.append('user[bio]', this.state.bio);
    formData.append('user[birthday]', this.state.birthday);
    formData.append('user[current_city]', this.state.current_city);
    formData.append('user[email]', this.state.email);
    formData.append('user[fname]', this.state.fname);
    formData.append('user[gender]', this.state.gender);
    formData.append('user[hometown]', this.state.hometown);
    formData.append('user[lname]', this.state.lname);
    formData.append('user[relationship_status]', this.state.relationship_status);
    formData.append('user[school]', this.state.school);
    formData.append('user[workplace]', this.state.workplace);

    $.ajax({
      url: `/api/users/${this.state.id}`,
      method: 'patch',
      data: formData,
      contentType: false,
      processData: false
    }).then(() => this.props.fetchUser(this.props.currentUser.id));
  }

  handleFileClickCoverPhoto() {
    $(".upload-cv").click();
  }

  handleFriendRequest(e) {
    e.preventDefault();
    if (e.currentTarget.classList.value.includes("add")) {
      this.props.createFriendRequest(this.friendRequest)
        .then(() => this.props.fetchUser(this.props.user.id));
    } else {
      this.props
        .deleteFriendRequest(
          this.props.user.receivedFriendRequests[currentUser.id].id
        )
        .then(() => this.props.fetchUser(this.props.user.id));
    }
  }

  render() {
    const { user, updateUser, currentUser, openModal, deleteFriendRequest } = this.props;
    let bioButton, cameraButton, editCvButton, archive, rightNavBtns, bio, friendBtn;

    if (currentUser.id === user.id) {
      if (user.bio !== undefined && user.bio !== null && user.bio !== 'null' && user.bio.length > 0) {
        bioButton = <button className="edit"
          onClick={this.handleClick}>Edit</button> 
        bio = this.state.bio;
      } else {
        bioButton = <button className="add-bio"
          onClick={this.handleClick}>Add Bio</button>
        bio = null;
      }

      cameraButton = (
        <div className="cam-circle dark"
          onClick={this.handleFileClick}
          >
          <FontAwesomeIcon icon="camera"
            className="fa-camera dark" />
            <input className="upload-pfp"
              type="file"
              id="file"
              onChange={this.handleUploadPfp}
              />
        </div>
      )

      editCvButton = <button className="dark"
        onClick={this.handleFileClickCoverPhoto}>
        <FontAwesomeIcon icon="camera"
          className="fa-camera dark" />
            <input className="upload-cv"
              type="file"
              id="file"
          onChange={this.handleUploadPfp}
            />
            Edit Cover Photo
          </button>
        
      archive = <span>Archive</span>

      rightNavBtns = (

        <div className="right-nav dark">
          <div onClick={() => openModal('Edit Profile')}>
            <button className="edit-profile">
              <FontAwesomeIcon icon="pencil-alt"
                className="fa-pencil-alt dark" 
                />Edit Profile
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


      )
    } else if (currentUser.friends.includes(user.id)) {
      bio = user.bio;

      archive = (<span>Check-Ins</span>)

      rightNavBtns = (

        <div className="right-nav dark">
          <div>
            <button className="msg-user">
              <FontAwesomeIcon icon={['fab', 'facebook-messenger']}
                className="fa-facebook-edit dark" />
                <span>
                Message
                </span>
            </button>
          </div>
          
          <div>
            <button>
              <FontAwesomeIcon icon="phone-alt"
                className="fa-eye dark" />
            </button>
          </div>

          <div>
            <button>
              <FontAwesomeIcon icon="user-check"
                className="fa-user-check dark" />
            </button>
          </div>

          <div>
            <button>
              <FontAwesomeIcon icon="ellipsis-h"
                className="fa-ellipsis-h dark" />
            </button>
          </div>
        </div>
      )
    } else if (user.receivedFriendRequests) {
      if (Object.keys(user.receivedFriendRequests).includes(`${currentUser.id}`)) {
        archive = (<span>Check-Ins</span>)
  
        rightNavBtns = (
          <div className="right-nav dark">
            <div>
              <button className="cxl-friend"
                onClick={this.handleFriendRequest}>
                <FontAwesomeIcon icon="user-times"
                  className="fa-user-times dark" />
                <span>
                  Cancel Request
                  </span>
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
        )
      }
    } else {
      archive = (<span>Check-Ins</span>)
      rightNavBtns = (

        <div className="right-nav dark">
          <div>
            <button className="add-friend"
              onClick={this.handleFriendRequest}>
              <FontAwesomeIcon icon="user-plus"
                className="fa-user-plus dark" />
              <span>
                Add Friend
              </span>
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
      )
    }

    if (currentUser.pfpUrl === undefined) {
      return null;
    }

    let friends;
    if (user.friends !== undefined) {

      friends = (
        <div>Friends
          <span className="num-friends">{user.friends.length}</span>
        </div>
      )
    } else {
      friends = <div>Friends</div>
    }

    return (
      <section className="p-header dark">
        <div className="cover-pic dark">
          <img src={user.coverPhotoUrl} alt="" className="cover-pic" />

          <div className="pfp dark">
            <img src={user.pfpUrl} alt="" className="pfp" />

            {cameraButton}
          </div>

          {editCvButton}
        </div>

        <div className="under-cover">
          <div className="under-top">
            <span className="name dark">
              {user.fname} {user.lname}
            </span>

            <span className="bio-span dark show">
              {bio}

              {bioButton}
            </span>

            <form className="bio-form dark hidden">
              <textarea className="text-bio dark"
                value={this.state.bio ? this.state.bio : ""}
                placeholder="Describe who you are"
                onChange={this.update('bio')}
                />
              <span className="bio-chars">{this.state.count} characters remaining</span>
              <div>
                <span className="audience">
                  <FontAwesomeIcon icon="globe-americas"
                    className="fa-globe-americas dark" /> Public
                </span>
                <button className="cxl-bio dark" 
                  onClick={this.handleCancel}>Cancel</button>
                <button className="save-bio dark"
                  onClick={this.handleSubmit}
                  disabled={this.state.bio === this.state.prevState.bio}>Save</button>
              </div>
            </form>

          </div>

          <div className="under-bottom dark">
            <div className="left-nav">
              <div className="timeline">
                <span>Timeline</span>
              </div>

              <div>
                <span>About</span>
              </div>
              
              {friends}

              <div>
                <span>Photos</span>
              </div>

              <div>
                {archive}
              </div>

              <div>
                <span className="more">More

                  <FontAwesomeIcon icon="sort-down"
                    className="pi-sort-down dark" />
                </span>
              </div>
            </div>

            {rightNavBtns}

          </div>
        </div>
      </section>
    )
  }
};

export default ProfileHeader;