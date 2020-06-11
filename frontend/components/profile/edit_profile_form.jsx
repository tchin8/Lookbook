import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class EditProfileForm extends React.Component {
  constructor(props) {
    super(props);
    
    const { currentUser } = this.props;

    this.state = currentUser;

    this.state.prevState = {
      id: currentUser.id,
      bio: currentUser.bio,
      birthday: currentUser.birthday,
      current_city: currentUser.currentCity,
      email: currentUser.email,
      fname: currentUser.fname,
      gender: currentUser.gender,
      hometown: currentUser.hometown,
      lname: currentUser.lname,
      relationship_status: currentUser.relationshipStatus,
      school: currentUser.school,
      workplace: currentUser.workplace,
    }


    this.handleSubmitBio = this.handleSubmitBio.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleEditIntro = this.toggleEditIntro.bind(this);
    this.handleSaveIntro = this.handleSaveIntro.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleCancelIntro = this.handleCancelIntro.bind(this);
  
    this.state.count = 101 - this.state.bio.length;
  }

  // componentDidMount() {
  //   // let bio = this.state.bio;
  //   // if (this.state.bio !== localStorage.getItem('bio') && localStorage.getItem('bio') !== undefined) {
  //   //   return this.setState({ "bio": localStorage.getItem('bio') });
  //   // }
  //   localStorage.clear();
  // }

  handleCancel(e) {
    // debugger;
    e.preventDefault();
    this.setState({
      bio: this.state.prevState.bio,
    });
    // debugger;
    $('.edit-bio').toggleClass("show hidden");
  }

  handleCancelIntro(e) {
    // debugger;
    e.preventDefault();
    this.setState({
      current_city: this.state.prevState.current_city,
      // current_city: this.state.prevState.current_city,
      workplace: this.state.prevState.workplace,
      school: this.state.prevState.school,
      hometown: this.state.prevState.hometown,
      relationship_status: this.state.prevState.relationship_status,
    });
    // debugger;
    $('.intro').toggleClass("show hidden");
    $('.edit-intro').toggleClass("show hidden");
  }

  toggleEditIntro(e) {
    e.preventDefault();
    $('.intro').toggleClass("show hidden");
    $('.edit-intro').toggleClass("show hidden");
  }

  handleSaveIntro(e) {
    e.preventDefault();
    $('.intro').toggleClass("show hidden");
    $('.edit-intro').toggleClass("show hidden");
    this.props.updateUser(this.state); 
  }

  handleClick(e) {
    e.preventDefault();
    $('.edit-bio').toggleClass("show hidden");
  }

  update(field) {
    // $('.bio').toggleClass("show hidden");
    return e => (
      this.setState({ [field]: e.target.value })
    )
  }

  handleSubmitBio(e) {
    e.preventDefault();
    $('.edit-bio').toggleClass("show hidden");
    // localStorage.setItem('bio', this.state.bio)
    this.props.updateUser(this.state); 
    // this.forceUpdate();
  }

  handleSubmit(e) {
    // debugger;
    e.preventDefault();
    this.props.updateUser(this.state); 
    this.props.closeModal();
  }

  render() {
    // debugger;
    const { closeModal, currentUser, updateUser } = this.props;

    let editBioBtn;
    if (currentUser.bio !== undefined ) {
      editBioBtn = <button className="edit-bio dark"
        onClick={this.handleClick}>Edit</button>
    } else {
      editBioBtn = <button className="edit-bio dark"
        onClick={this.handleClick}>Add</button>
    }

    // debugger;

    return (
      <section className="edit-profile-modal dark">
        <div className="header">
          <span className="edit-profile">Edit Profile</span>
          <button className="close-form"
            onClick={closeModal}>
            <div className="x-circle dark"
              onFocus={this.handleFocus}>
              <FontAwesomeIcon icon="times"
                className="fa-times dark" />
            </div>
          </button>
        </div>

        <section className="main">
          <div className="pro-pic">
            <span>Profile Picture
              <label htmlFor="pfp" className="edit-pfp dark">Edit
                <input type="file" id="pfp"
                 className="hidden"/>
              </label>
            </span>
            <div className="pfp">
              <img src={currentUser.pfpUrl} alt="" className="pfp"/>
            </div>
          </div>

          <div className="cv-pic">
            <span>Cover Photo
              <label htmlFor="cv" className="edit-cv dark">Edit
                <input type="file" id="cv"
                  className="hidden" />
              </label>
            </span>
            <div className="cv">
              <img src={currentUser.coverPhotoUrl} alt="" className="cv" />
            </div>
          </div>

          <section className="edit-profile-form dark">
            <div className="bio-part">
              <span>Bio</span>
              {/* <button className="edit-bio">Edit</button> */}
              {editBioBtn}
              <div className="bio-part">
                <span className="edit-bio show">{this.state.bio}</span>

                <form className="edit-bio dark hidden">
                  <textarea className="text-bio dark"
                    value={this.state.bio}
                    placeholder="Describe who you are"
                    onChange={this.update('bio')}
                  />
                  <span className="bio-chars">
                    {this.state.count} characters remaining
                  </span>
                  
                  <div>
                    <span className="audience">
                      <FontAwesomeIcon 
                        icon="globe-americas"
                        className="fa-globe-americas dark" /> 
                          Public
                    </span>
                    <button 
                      className="cxl-bio"
                      onClick={this.handleCancel}>
                        Cancel
                    </button>

                    <button 
                      className="save-bio"
                      onClick={this.handleSubmitBio}
                      disabled={this.state.bio === this.state.prevState.bio}>
                        Save
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div  className="customize-intro">
              <span>Customize Your Intro</span>
              <button className="intro show"
                onClick={this.toggleEditIntro}>Edit</button>

              {/* <button className="edit-intro hidden"
                onClick={this.handleSaveIntro}>Save</button> */}
              
              <button
                className="edit-intro cxl hidden"
                onClick={this.handleCancelIntro}>
                Cancel
              </button>

              <button
                className="edit-intro save hidden"
                onClick={this.handleSaveIntro}>
                  Save
              </button>

              <div className="intro-list">
                <div className="current-city">
                  <span>
                    <FontAwesomeIcon 
                      icon="home"
                      className="fa-home dark" />
                      Current City
                  </span>

                  <span className="intro show">{this.state.current_city}</span>

                  <input type="text" 
                    className="edit-intro hidden"
                    value={this.state.current_city}
                    onChange={this.update('current_city')}/>
                </div>

                <div className="workplace">
                  <span>
                    <FontAwesomeIcon 
                      icon="briefcase"
                      className="fa-briefcase dark" />
                      Workplace
                  </span>

                  <span className="intro show">{this.state.workplace}</span>
                  <input type="text"
                    className="edit-intro hidden"
                    value={this.state.workplace}
                    onChange={this.update('workplace')} />
                </div>

                <div className="school">
                  <span>
                    <FontAwesomeIcon 
                      icon="graduation-cap"
                      className="fa-graduation-cap dark" />
                      School
                  </span>

                  <span className="intro show">{this.state.school}</span>
                  <input type="text"
                    className="edit-intro hidden"
                    value={this.state.school}
                    onChange={this.update('school')} />
                </div>

                <div className="hometown">
                  <span>
                    <FontAwesomeIcon 
                      icon="map-marker-alt"
                      className="fa-map-marker-alt dark" />
                      Hometown
                  </span>

                  <span className="intro show">{this.state.hometown}</span>
                  <input type="text"
                    className="edit-intro hidden"
                    value={this.state.hometown}
                    onChange={this.update('hometown')} />
                </div>

                <div className="relationship-status">
                  <span>
                    <FontAwesomeIcon 
                      icon="heartbeat"
                      className="fa-heartbeat dark" />
                      Relationship Status
                  </span>

                  <span className="intro show">{this.state.relationship_status}</span>
                  <input type="text"
                    className="edit-intro hidden"
                    value={this.state.relationship_status}
                    onChange={this.update('relationship_status')} />
                </div>
              </div>

              {/* KEEP FOR NOW!!!! */}
              {/* <div className="featured">
                <span>Featured</span>
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
              </div> */}
              
            </div>

            <button 
              className="edit-prof dark"
              onClick={this.handleSubmit}>
                Edit Your Info
            </button>
          </section>
        </section>
      </section>
    )
  }
}

export default EditProfileForm;