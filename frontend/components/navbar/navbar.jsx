import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Route,
  Redirect,
  Switch,
  Link
} from 'react-router-dom';
import { withRouter } from 'react-router-dom'; 


import DownDropdown from './down_dropdown';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    if (props.users) {
      this.state = {
        filter: "",
        users: Object.values(props.users),
        redirect: false,
      }
    }

    this.handleSubmit = this.handleSubmit.bind(this);

    if (localStorage.getItem('mode') === 'dark') {
      $('.light').toggleClass("dark light");
    } else if (localStorage.getItem('mode') === 'light') {
      $('.dark').toggleClass("dark light");
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.users !== this.props.users) {
      return this.setState({ users: this.props.users });
    }
  }

  componentDidMount() {
    if (localStorage.getItem('mode') === 'dark') {
      $('.light').toggleClass("dark light");
    } else if (localStorage.getItem('mode') === 'light') {
      $('.dark').toggleClass("dark light");
    }
  }

  handleFocus(e) {
    let classN = '';
    if (e.currentTarget.classList.contains('down-arrow-circle')) {
      classN += 'down-drop';
    } else if (e.currentTarget.classList.contains('plus-circle')) {
      classN += 'plus-drop';
    }

    $(`section.${classN}`).toggleClass('hidden');
    e.currentTarget.classList.toggle('blue');
  }

  handleBlur(e) {
    let classN = '';

    if (e.relatedTarget !== e.target && !e.currentTarget.contains(e.relatedTarget)) {
      if (e.currentTarget.classList.contains('down-arrow-circle')) {
        classN += 'down-drop';
      } else if (e.currentTarget.classList.contains('plus-circle')) {
        classN += 'plus-drop';
      }
  
      $(`section.${classN}`).addClass('hidden');
      e.currentTarget.classList.toggle('blue');
    }
  }

  update(field) {
    return e => (
      this.setState({ "filter": e.target.value })
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!window.location.href.includes("/search")) {
      this.props.history.push('/search');
    } else {
      let searchUsers = [];
      if (this.state && this.state.filter && this.state.users) {
        const search = this.state.filter.toLowerCase();
        const numUsers = Object.keys(this.state.users).length;
        const usersArr = Object.values(this.state.users);
        for (let i = 0; i < numUsers; i++) {
          const user = usersArr[i];
          const keys = Object.keys(user);

          for (let i = 0; i < keys.length; i++) {
            let key = keys[i];
            if (key === 'fname' || key === 'lname') {
              if (user[key].toLowerCase().includes(search) && !searchUsers.includes(user)) {
                searchUsers.push(user);
              }
            }
          }
        }
        localStorage.setItem('filter', this.state.filter);
      }

      localStorage.setItem('searchFriends', JSON.stringify(searchUsers));
    }
  }

  
  render () {
    const fblogo = window.fblogo;

    const { currentUser } = this.props;
    let searchUsers = [];
    if (this.state && this.state.filter && this.state.users) {
      const search = this.state.filter.toLowerCase();
      const numUsers = Object.keys(this.state.users).length;
      const usersArr = Object.values(this.state.users);
      for (let i = 0; i < numUsers; i++) {
        const user = usersArr[i];
        const keys = Object.keys(user);
  
        for (let i = 0; i < keys.length; i++) {
          let key = keys[i];
          if (key === 'fname' || key === 'lname') {
            if (user[key].toLowerCase().includes(search) && !searchUsers.includes(user)) {
              searchUsers.push(user);
            }
          }
        }
      }
      localStorage.setItem('filter', this.state.filter);
    }

    localStorage.setItem('searchFriends', JSON.stringify(searchUsers));
    
    if (window.location.href.includes(`/users/${currentUser.id}`)) {
      $(`.profile.dark`).addClass('blue');
      $(`.profile.light`).addClass('blue');
    } else {
      $(`.profile.dark`).removeClass('blue');
      $(`.profile.light`).removeClass('blue');
    }

    if (window.location.href.includes(`/users`) || window.location.href.includes(`/search`)) {
      $(`.house-div`).removeClass('blue');
    } else {
      $(`.house-div`).addClass('blue');
    }

    if (currentUser.pfpUrl === undefined) {
      return null;
    }
    
    return (
      <section className="whole-nav dark">
        <section className="navbar dark">
          <section className="left-navbar">
            <Link to="/">
            <img src={fblogo} alt="" className="fb-logo" />
            </Link>
              <div>
                <form onSubmit={this.handleSubmit}>
                  <input type="text" className="search dark" placeholder="Search Lookbook" 
                  onChange={this.update('filter')}/> 
                  <button className="hidden"></button>
                </form>
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
              <div className="profile dark">
                <img src={currentUser.pfpUrl} alt="" className="pfp" />

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
              <div className="msg-circle dark"
                onFocus={this.handleFocus}>
                <FontAwesomeIcon icon={['fab','facebook-messenger']} 
                  className="fa-facebook-messenger dark" />
              </div>
            </div>

            <div className="right-navbar">
              <div className="bell-circle dark"
                onFocus={this.handleFocus}>
                <FontAwesomeIcon icon="bell" 
                  className="fa-bell dark" />
              </div>
            </div>

            <div className="right-navbar" >
              <button className="down-arrow-circle dark"
                onClick={this.handleFocus}
                onBlur={this.handleBlur}>
                <FontAwesomeIcon icon="sort-down" 
                  className="fa-sort-down dark" />

                <DownDropdown currentUser={currentUser} logout={this.props.logout} />
              </button>
              
            </div>
          </section>
        </section>
      </section>
  )}
};

export default withRouter(NavBar);