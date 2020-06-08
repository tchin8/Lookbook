import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ProfileHeader extends React.Component {
  constructor(props) {
    super(props);

    const { user } = this.props;

    // this.state = this.props.user;
    // debugger;
    this.state = {
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
    this.handleUploadCoverPhoto = this.handleUploadCoverPhoto.bind(this);
    // this.handleFile = this.handleFile.bind(this);

    if (this.state.bio === null) {
      this.state.count = 101;
    } else {
      this.state.count = 101 - this.state.bio.length;
    }

    // console.log(this.state.count);
  }

  // componentDidUpdate(){
  //   if (this.state.bio !== localStorage.getItem('bio') && localStorage.getItem('bio') !== undefined) {
  //     this.setState({ "bio": localStorage.getItem('bio') });
  //   }
  //   // $('.bio').removeClass("show");
  //   // $('.bio').addClass("hidden");
  // }

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
    // debugger;
    e.preventDefault();
    this.setState({
        bio: this.state.prevState.bio,
    });
    // debugger;
    $('.bio-span').toggleClass("show hidden");
    $('.bio-form').toggleClass("show hidden");
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
    // $('.bio').toggleClass("show hidden");
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
    // localStorage.setItem('bio', this.state.bio)
    // debugger;
    this.props.updateUser(this.state);
    // this.props.fetchUsers();

    // console.log(this.state);
    // debugger;
    // this.forceUpdate();
  }

  handleFileClick() {
    $(".upload-pfp").click();
    debugger;
  }

  // handleFile(e) {
  //   // this.setState({ pfpUrl: e.currentTarget.files[0] });
  //   // this.handleUploadPfp(e);
  //   // debugger;
  // }

  handleUploadPfp(e) {
    // e.preventDefault();
    this.setState({ pfpUrl: e.currentTarget.files[0]});

    const formData = new FormData();
    debugger;
    // if (this.state.photoFile) {
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
      formData.append('user[pfp]', e.currentTarget.files[0]);
      // formData.append('user[pfpUrl]', this.state.pfpUrl);
      // formData.append('user[cover_photo]', this.state.coverPhotoUrl);
    // }

    debugger;
    $.ajax({
      url: `/api/users/${this.state.id}`,
      method: 'patch',
      data: formData,
      contentType: false,
      processData: false
    });
  }

  handleFileClickCoverPhoto() {
    $(".upload-cv").click();
    debugger;
  }

  handleUploadCoverPhoto(e) {
    // e.preventDefault();
    this.setState({ pfpUrl: e.currentTarget.files[0]});

    const formData = new FormData();
    debugger;
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
    formData.append('user[cover_photo]', e.currentTarget.files[0]);

    debugger;
    $.ajax({
      url: `/api/users/${this.state.id}`,
      method: 'patch',
      data: formData,
      contentType: false,
      processData: false
    });
  }

  render() {
    // debugger;
    const { user, updateUser, currentUser, openModal } = this.props;

    const defaultpfp = window.defaultpfp;
    const me = window.me;
    const myCv = window.cv;

    let pic;
    let cv;

    // if (!user) {
    //   return null;
    // }

    if (user.id === 1) {
      pic = me;
      cv = myCv;
    } else {
      pic = defaultpfp;
    }

    // debugger;
    let bioButton, cameraButton, editCvButton, archive, editProBtn, bio;
    if (currentUser.id === user.id) {
      if (user.bio !== undefined && user.bio !== null) {
        bioButton = <button className="edit"
          onClick={this.handleClick}>Edit</button> 
      } else {
        bioButton = <button className="add-bio"
          onClick={this.handleClick}>Add Bio</button>
      }

      bio = this.state.bio;

      cameraButton = (
        <div className="cam-circle dark"
          onClick={this.handleFileClick}
          >
          <FontAwesomeIcon icon="camera"
            className="fa-camera dark" />
            <input className="upload-pfp"
              type="file"
              id="file"
              // onChange={this.handleFile}
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
              // onChange={this.handleFile}
              onChange={this.handleUploadCoverPhoto}
            />
            Edit Cover Photo
          </button>
        
      archive = <span>Archive</span>

      editProBtn = (
        <div onClick={() => openModal('Edit Profile')}>
          <button className="edit-profile">
            <FontAwesomeIcon icon="pencil-alt"
              className="fa-pencil-alt dark" 
              />Edit Profile
          </button>
        </div>
      )
    } else {
      bio = user.bio;

      archive = (<span>Check-Ins</span>)

      editProBtn = (
        <div>
          <button className="msg-user">
            <FontAwesomeIcon icon={['fab', 'facebook-messenger']}
              className="fa-facebook-edit dark" />
              <span>
              Message
              </span>
          </button>
        </div>
      )
    }

    if (currentUser.pfpUrl === undefined) {
      return null;
    }

    return (
      <section className="p-header">
        <div className="cover-pic">
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
                <button className="cxl-bio" 
                  onClick={this.handleCancel}>Cancel</button>
                <button className="save-bio"
                  onClick={this.handleSubmit}
                  disabled={this.state.bio === this.state.prevState.bio}>Save</button>
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
                {archive}
              </div>

              <div>
                <span className="more">More

                  <FontAwesomeIcon icon="sort-down"
                    className="pi-sort-down dark" />
                </span>
              </div>
            </div>



            <div className="right-nav dark">
              {editProBtn}

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