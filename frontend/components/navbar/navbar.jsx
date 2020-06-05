import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Link
} from 'react-router-dom';

import DownDropdown from './down_dropdown';

class NavBar extends React.Component {


  // handleClick(e) {
  //   //redirect to profile component
  //   // no need, already added link
  // }


  handleFocus(e) {
    console.log('on click/focus');
    let classN = '';
    // e.currentTarget.focus();
    if (e.currentTarget.classList.contains('down-arrow-circle')) {
      classN += 'down-drop';
    } else if (e.currentTarget.classList.contains('plus-circle')) {
      classN += 'plus-drop';
    }
    console.log(classN);

    $(`section.${classN}`).toggleClass('hidden');
    // shouldn't toggle, will need to add class hidden if clicking outside 
  }

  handleBlur(e) {
    console.log('on blue');
    let classN = '';
    // e.currentTarget.focus();
    if (e.currentTarget.classList.contains('down-arrow-circle')) {
      classN += 'down-drop';
    } else if (e.currentTarget.classList.contains('plus-circle')) {
      classN += 'plus-drop';
    }
    console.log(classN);

    $(`section.down-down`).addClass('hidden');
    $(`section.plus-drop`).addClass('hidden');
  }

  render () {
    const fblogo = window.fblogo;
    const defaultpfp = window.defaultpfp;
    const { currentUser } = this.props;

    return (
      <section className="whole-nav">
        <section className="navbar-dark">
          <section className="left-navbar">
            <Link to="/">
            <img src={fblogo} alt="" className="fb-logo" />
            </Link>
              <div>
                <input type="text" className="search dark" placeholder="Search Lookbook" /> 
              </div>
          </section>

          <section className="center-nav">
            <Link to="/">
            <div>
              <div className="house-div dark">
                <FontAwesomeIcon icon="home"
                  className="fa-house dark" />
              </div>
            </div>
            </Link>

            <div>
              <div className="tv-div dark">
                <FontAwesomeIcon icon="tv"
                  className="fa-tv dark" />
                
                <FontAwesomeIcon icon="play"
                  className="fa-play dark" />

              </div>
            </div>

            <div>
              <div className="store-div dark">
                <FontAwesomeIcon icon="store-alt"
                  className="fa-store-alt dark" />
              </div>
            </div>

            <div>
              <div className="users-div dark">
                <div className="users-circle dark">
                  <FontAwesomeIcon icon="users"
                    className="fa-users dark" />
                </div>
              </div>
            </div>

            <div>
              <div className="game-div dark">
                <div className="game dark">
                  <FontAwesomeIcon icon={['fab', 'delicious']}
                    className="fa-delicious dark" />
                </div>
              </div>
            </div>
          </section>

          <section className="right-navbar">
            <div className="right-navbar">
              <Link to={`/users/${currentUser.id}`} 
                style={{ textDecoration: 'none' }}>
              <div className="profile">
                {/* change to user's image_url */}
                <img src={defaultpfp} alt="" className="pfp" />
                {/* needa use current user's name!! */}
                <span>{currentUser.fname}</span>
              </div>
              </Link>
            </div>

            <div className="right-navbar">
              <div className="plus-circle dark"
                onFocus={this.handleFocus}>
                <span className="plus dark">+</span>
              </div>
            </div>

            <div className="right-navbar">
              <div className="msg-circle dark">
                <FontAwesomeIcon icon={['fab','facebook-messenger']} 
                  className="fa-facebook-messenger dark" />
              </div>
            </div>

            <div className="right-navbar">
              <div className="bell-circle dark">
                <FontAwesomeIcon icon="bell" 
                  className="fa-bell dark" />
              </div>
            </div>

            <div className="right-navbar" >
              <div className="down-arrow-circle dark"
                onClick={this.handleFocus}
                onBlur={this.handleBlur}>
                <FontAwesomeIcon icon="sort-down" 
                  className="fa-sort-down dark" />
              </div>
              
              <DownDropdown currentUser={currentUser} logout={this.props.logout} />
            </div>
          </section>
        </section>
      </section>
  )}
};

export default NavBar;