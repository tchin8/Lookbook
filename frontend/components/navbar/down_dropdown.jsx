import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DownDropdown = ( { user, logout } ) => {
  const fblogo = window.fblogo;
  return (
    <section className="create-drop dark">
      <div>
        <div>
          <img src={fblogo} alt="" className="fb-logo" />
        </div>

        <div className="text">
          <span className="name">{`${user.fname} ${user.lname}`}</span>
          <span className="see-profile">See your profile</span>
        </div>
      </div>

      <div className="line"></div>

      <div className="feedback">
        <div className="icon-circle dark">
          <FontAwesomeIcon icon="exclamation"
            className="fa-exclamation dark" />

          {/* <i class="fas fa-comment-alt">
            <i class="fas fa-exclamation dark"></i>
          </i> */}
        </div>

        <div className="text t2">
          <span>Give Feedback</span>
          <span>Help us improve the new Lookbook.</span>
        </div>
      </div>

      <div className="line"></div>

      <div className="cog">
        <div className="icon-circle dark">
          <i className="fas fa-cog"></i>
        </div>

        <div className="text t2">
          <span className="centered">Settings & Privacy</span>
        </div>
      </div>

      <div>
        <div className="icon-circle dark">
          {/* <i class="fas fa-question-circle"></i> */}
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
            className="fa-moon" />
          {/* <i class="fas fa-moon"></i> */}
        </div>

        <div className="text t2">
          <span className="centered">Dark Mode</span>
        </div>
      </div>

      <div>
        <div className="icon-circle dark">
          <FontAwesomeIcon icon="arrow-circle-left"
            className="fa-arrow-circle-left" />
          {/* <i class="fas fa-arrow-circle-left"></i> */}
        </div>

        <div className="text t2">
          <span>Switch to Classic Lookbook</span>
          <span>Go back to the previous Lookbook design at
            <br />
          <span>any time.</span>
          </span>
        </div>
      </div>

      <div>
        <div className="icon-circle dark">
          <FontAwesomeIcon icon="sign-out-alt"
            className="fa-sign-out-alt" />
          {/* <i class="fas fa-sign-out-alt"></i> */}
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
};

export default DownDropdown;