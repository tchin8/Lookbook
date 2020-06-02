import React from 'react'
import { Redirect } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';

class Frontpage extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.login({
      email: 'ctiff@lookbook.com',
      password: 'password'
    });
  }

  render() {
    const { login, signup } = this.props;

    return (    
      <div className="fp">
        <section className="fp-top">
          <section className="header">
            <span className="hname">lookbook</span>

            <LoginFormContainer />
          </section>
        </section>

        <section className="fp-main">
          <section className="body">
            <section className="fp-main-left">
              <p>Connect with friends and the world around you on Lookbook.</p>

              <div className="fp-icons">
                <li>
                  <FontAwesomeIcon icon={['far', 'newspaper']} className="fa-newspaper" />
                  <div className="fp-left-text">
                    <span className="bold">See photos and updates
                      <span>from friends in News Feed.</span>
                    </span>
                  </div>
                </li>

                <li>
                  <FontAwesomeIcon icon={['far', 'share-square']} className="fa-share-square" />
                  <div className="fp-left-text">
                    <span className="bold">Share what's new
                      <span>in your life on your Timeline.</span>
                    </span>
                  </div>
                </li>

                <li>
                  <FontAwesomeIcon icon="globe" className="fa-globe" />
                  <div className="fp-left-text">
                    <span className="bold">Find more
                      <span>of what you're looking for with Lookbook Search.</span>
                    </span>
                  </div>
                </li>
              </div>
            </section>

            <section className="fp-main-right">
              <section className="fplmh">
                <p>Sign Up</p>
                <p>It's quick and easy.</p>
              </section>

              <SignupFormContainer />

              <div className="demo-btn-div">
                <button onClick={this.handleClick}>Demo Login</button>
              </div>

            </section>
          </section>
        </section>

        <section className="fp-footer">
          <section className="top">
            <span>English (US)</span>
            <span className="ne">Español</span>
            <span className="ne">Français (France)</span>
            <span className="ne">中文(简体)</span>
            <span className="ne">العربية</span>
            <span className="ne">Português (Brasil)</span>
            <span className="ne">한국어</span>
            <span className="ne">Italiano</span>
            <span className="ne">Deutsch</span>
            <span className="ne">हिन्दी</span>
            <span className="ne">日本語</span>
          </section>

          <section className="bottom">
            <span>Sign Up</span>
            <span>Log In</span>
            <span>Messenger</span>
            <span>Lookbook Lite</span>
            <span>Watch</span>
            <span>People</span>
            <span>Pages</span>
            <span>Page Categories</span>
            <span>Places</span>
            <span>Games</span>
            <span>Locations</span>
            <span>Marketplac</span>
            <span>Groups</span>
            <span>Portal</span>
            <span>Instagram</span>
            <span>Local</span>
            <span>Fundraisers</span>
            <span>Services</span>
            <span>About</span>
            <span>Create Ad</span>
            <span>Create Page</span>
            <span>Developers</span>
            <span>Careers</span>
            <span>Privacy</span>
            <span>Cookies</span>
            <span>Ad Choices</span>
            <span>Terms</span>
            <span>Help</span>
          </section>

          <span className="lkc">Lookbook © 2020</span>
        </section>
      </div>
    )
  }
};

export default Frontpage;