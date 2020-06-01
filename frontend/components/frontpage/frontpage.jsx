import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import LoginFormContainer from '../session/login_form_container';
import SignupForm from '../session/signup_form';

const Frontpage = () => (
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

          <SignupForm />

        </section>
      </section>
    </section>
  </div>
);

export default Frontpage;