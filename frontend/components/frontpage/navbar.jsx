import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class NavBar extends React.Component {

  handleClick(e) {
    //redirect to profile component
  }

  render () {
    const fblogo = window.fblogo;

    return (
      <section className="whole-nav">
        <section className="navbar-dark">
          <section className="left-navbar">
            <img src={fblogo} alt="" className="fb-logo" />
              <div>
                <input type="text" className="search dark" placeholder="Search Lookbook" /> 
              </div>
          </section>

          <section className="center-nav">
            <div>
              <div className="house-div dark">
                <FontAwesomeIcon icon="home"
                  className="fa-house dark" />
              </div>
            </div>

            <div>
              <div className="tv-div dark">
                <FontAwesomeIcon icon="tv"
                  className="fa-tv dark" />
                {/* <i className="fas fa-tv dark">
                    <i className="fas fa-play dark"></i>
                  </i> */}
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
            <div>
              <div className="profile" onClick={this.handleClick}>
                {/* change to user's image_url */}
                <img src={fblogo} alt="" className="pfp" />
                {/* needa use current user's name!! */}
                <span>Tiffany</span>
              </div>
            </div>

            <div>
              <div className="plus-circle dark">
                <span className="plus dark">+</span>
                </div>
              </div>

              <div>
                <div className="msg-circle dark">
                  <FontAwesomeIcon icon={['fab','facebook-messenger']} 
                    className="fa-facebook-messenger dark" />
                </div>
              </div>

              <div>
                <div className="bell-circle dark">
                  <FontAwesomeIcon icon="bell" 
                    className="fa-bell dark" />
                </div>
              </div>

              <div>
                <div className="down-arrow-circle dark">
                  <FontAwesomeIcon icon="sort-down" 
                    className="fa-sort-down dark" />
                </div>
              </div>
            </section>

            
          </section>
        </section>
  )}
};

export default NavBar;