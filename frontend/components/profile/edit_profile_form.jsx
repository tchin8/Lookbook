import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class EditProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.currentUser;


    this.handleSubmitBio = this.handleSubmitBio.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  
    this.state.count = 101 - this.state.bio.length;
  }

  componentDidMount() {
    // let bio = this.state.bio;
    if (this.state.bio !== localStorage.getItem('bio') && localStorage.getItem('bio') !== undefined) {
      return this.setState({ "bio": localStorage.getItem('bio') });
    }
  }

  handleClick(e) {
    e.preventDefault();
    $('.edit-bio').toggleClass("show hidden");
  }

  update(field) {
    // $('.bio').toggleClass("show hidden");
    return e => (
      this.setState({ [field]: e.currentTarget.value })
    )
  }

  handleSubmitBio(e) {
    e.preventDefault();
    $('.edit-bio').toggleClass("show hidden");
    localStorage.setItem('bio', this.state.bio)
    this.props.updateUser(this.state); 
    // this.forceUpdate();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateUser(this.state); 
    this.props.closeModal();
  }

  render() {
    // debugger;
    const { closeModal, currentUser, updateUser } = this.props;
    const me = window.me;
    const cv = window.cv;
    const defaultpfp = window.defaultpfp;

    let pfp, cover, editBioBtn;
    if (currentUser.id === 1) {
      pfp = me;
      cover = cv;
    } else {
      pfp = defaultpfp;
    }

    if (currentUser.bio !== undefined ) {
      editBioBtn = <button className="edit-bio"
        onClick={this.handleClick}>Edit</button>
    } else {
      editBioBtn = <button className="edit-bio"
        onClick={this.handleClick}>Add</button>
    }

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
              <label for="pfp" className="edit-pfp">Edit
                <input type="file" id="pfp"
                 className="hidden"/>
              </label>
            </span>
            <div className="pfp">
              <img src={pfp} alt="" className="pfp"/>
            </div>
          </div>

          <div className="cv-pic">
            <span>Cover Photo
              <label for="cv" className="edit-cv">Edit
                <input type="file" id="cv"
                  className="hidden" />
              </label>
            </span>
            <div className="cv">
              <img src={cover} alt="" className="cv" />
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
                      onClick={this.handleClick}>
                        Cancel
                    </button>

                    <button 
                      className="save-bio"
                      onClick={this.handleSubmitBio}
                      disabled={!this.state.bio}>
                        Save
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div  className="customize-intro">
              <span>Customize Your Intro</span>
              <button className="edit-intro">Edit</button>
              <div className="intro-list">
                <div className="current-city">
                  <span>
                    <FontAwesomeIcon 
                      icon="home"
                      className="fa-home dark" />
                      Current City
                  </span>

                  <span>{this.state.current_city}</span>
                </div>

                <div className="workplace">
                  <span>
                    <FontAwesomeIcon 
                      icon="briefcase"
                      className="fa-briefcase dark" />
                      Workplace
                  </span>

                  <span>{this.state.workplace}</span>
                </div>

                <div className="school">
                  <span>
                    <FontAwesomeIcon 
                      icon="graduation-cap"
                      className="fa-graduation-cap dark" />
                      School
                  </span>

                  <span>{this.state.school}</span>
                </div>

                <div className="hometown">
                  <span>
                    <FontAwesomeIcon 
                      icon="map-marker-alt"
                      className="fa-map-marker-alt dark" />
                      Hometown
                  </span>

                  <span>{this.state.hometown}</span>
                </div>

                <div className="relationship-status">
                  <span>
                    <FontAwesomeIcon 
                      icon="heartbeat"
                      className="fa-heartbeat dark" />
                      Relationship Status
                  </span>

                  <span>{this.state.relationship_status}</span>
                </div>
              </div>

              <div className="featured">
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
              </div>
              
            </div>

            {/* <div className="btn"> */}
              <button 
                className="edit-prof"
                onClick={this.handleSubmit}>
                  Edit Your Info
              </button>
            {/* </div> */}
          </section>
        </section>
      </section>
    )
  }
}

export default EditProfileForm;