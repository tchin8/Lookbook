import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class EditProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.currentUser;
  }

  render() {
    // debugger;
    const { closeModal, currentUser } = this.props;
    const me = window.me;
    const cv = window.cv;
    const defaultpfp = window.defaultpfp;

    let pfp, cover;
    if (currentUser.id === 1) {
      pfp = me;
      cover = cv;
    } else {
      pfp = defaultpfp;
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
            <span>Profile Picture</span>
            <div className="pfp">
              <img src={pfp} alt="" className="pfp"/>
            </div>
          </div>

          <div className="cv-pic">
            <span>Cover Photo</span>
            <div className="cv">
              <img src={cover} alt="" className="cv" />
            </div>
          </div>

          <form className="edit-profile-form dark">
            <div className="bio">
              <span>Bio</span>
              <div className="bio">
                <span>{currentUser.bio}</span>
              </div>
            </div>

            <div  className="customize-intro">
              <span>Customize Your Intro</span>
              <div className="intro-list">
                <div className="current-city">
                  <span>
                    <FontAwesomeIcon icon="home"
                      className="fa-home dark" />
                      Current City
                  </span>
                </div>

                <div className="workplace">
                  <span>
                    <FontAwesomeIcon icon="briefcase"
                      className="fa-briefcase dark" />
                      Workplace
                  </span>
                </div>

                <div className="school">
                  <span>
                    <FontAwesomeIcon icon="graduation-cap"
                      className="fa-graduation-cap dark" />
                      School
                  </span>
                </div>

                <div className="hometown">
                  <span>
                    <FontAwesomeIcon icon="map-marker-alt"
                      className="fa-map-marker-alt dark" />
                      Hometown
                  </span>
                </div>

                <div className="relationship-status">
                  <span>
                    <FontAwesomeIcon icon="heartbeat"
                      className="fa-heartbeat dark" />
                      Relationship Status
                  </span>
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

            <button className="edit-profile">Edit Your Info</button>
          </form>
        </section>
      </section>
    )
  }
}

export default EditProfileForm;