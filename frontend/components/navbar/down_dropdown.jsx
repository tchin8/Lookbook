import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Link
} from 'react-router-dom';

class DownDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      darkMode: true,
    }

    this.toggleLightDarkMode = this.toggleLightDarkMode.bind(this);
  }

  toggleLightDarkMode(e) {
    e.preventDefault();

    if (this.state.darkMode) {
      $('.dark').toggleClass("dark light");
      this.setState({ darkMode: false });
    } else {
      $('.light').toggleClass("dark light");
      this.setState({ darkMode: true });
    }
  }

  render () {
    const { currentUser, logout } = this.props;

    return (
      <section className="down-drop dark hidden">
          <Link to={`/users/${currentUser.id}`}
            style={{ textDecoration: 'none' }}>
        <div className="profile-link dark">
          <div>
            <img src={currentUser.pfpUrl} alt="" className="fb-pfp" />
          </div>

          <div className="text profile-link dark">
            <span className="name">{`${currentUser.fname} ${currentUser.lname}`}</span>
            <span className="see-profile">See your profile</span>
          </div>
        </div>
          </Link>

        <div className="line dark"></div>

        <div className="feedback dark">
          <div className="icon-circle dark">
            <FontAwesomeIcon icon="comment-alt"
              className="fa-comment-alt dark" />
            <FontAwesomeIcon icon="exclamation"
              className="fa-exclamation dark" />
          </div>

          <div className="text t2">
            <span>Give Feedback</span>
            <span>Help us improve the new Lookbook.</span>
          </div>
        </div>

        <div className="line dark"></div>

        <div className="cog">
          <div className="icon-circle dark">
            <FontAwesomeIcon icon="cog"
              className="fa-cog dark" />
          </div>

          <div className="text t2">
            <span className="centered">Settings & Privacy</span>
          </div>
        </div>

        <div>
          <div className="icon-circle dark">
      
            <FontAwesomeIcon icon="question-circle"
              className="fa-question-circle" />
          </div>

          <div className="text t2">
            <span className="centered">Help & Support</span>
          </div>
        </div>

        <div>
          <div className="icon-circle dark">
            <FontAwesomeIcon icon="moon"
              className="fa-moon dark" />
          </div>

          <div className="text t2"
            onClick={this.toggleLightDarkMode}>
            <span className="centered">Dark Mode</span>
          </div>
        </div>

        <div className="switch-classic">
          <div className="icon-circle dark">
            <FontAwesomeIcon icon="arrow-circle-left"
              className="fa-arrow-circle-left dark" />
          </div>

          <div className="text t2">
            <span>Switch to Classic Lookbook</span>
            <span>Go back to the previous Lookbook design at
              <br />
            <p>any time.</p>
            </span>
          </div>
        </div>

        <div onClick={logout} className="logout">
          <div className="icon-circle dark">
            <FontAwesomeIcon icon="sign-out-alt"
              className="fa-sign-out-alt dark" />
          </div>

          <div className="text">
            <span className="centered">Log Out</span>
          </div>
        </div>

        <div id="copyright">
          <span>
            Privacy · Terms · Advertising · Ad Choices · Cookies · More · tiffBook © 2020
          </span>
        </div>
      </section>
      )
    }
};

export default DownDropdown;