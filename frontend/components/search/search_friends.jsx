import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavBar from '../navbar/navbar';
import {
  Route,
  Redirect,
  Switch,
  Link
} from 'react-router-dom';

class SearchFriends extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      friends: JSON.parse(localStorage.getItem('searchFriends')),
      filter: localStorage.getItem('filter'),
      requester_id: props.currentUser.id,
      requestee_id: '',
      status: false,
    }
  }

  componentDidUpdate(prevProps) {
    // if requestee_id updates, then send request
  }

  handleClick(e) {
    // change icon 
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchUsers();
  }

  render() {
    const { currentUser, updateUser, logout } = this.props;

    const { filter, friends } = this.state;

    let searched = [];
    let searchedFriends, icon;
    if (friends.length === 0) {
      searchedFriends = (
        <section className="search-results">
          <span>People</span>
          <span>0 results</span>
        </section>
      )
    } else {
      for (let i = 0; i < friends.length; i++) {
        let friend = friends[i];

        if (currentUser.friends.includes(friend.id)) {
          icon = (
            <div className="add-friend-circle">
              <FontAwesomeIcon icon={['fab', 'facebook-messenger']}
                className="fa-facebook-messenger dark" />
            </div>
          )
        } else if (currentUser.id === friend.id) {
          icon = null;
        } else if (currentUser.sentFriendRequests.includes(friend.id)) {
          icon = (
            <div className="add-friend-circle">
            <FontAwesomeIcon icon="user-times"
              className="fa-user-times dark" 
              // onClick={this.handleClick}
              />
            </div>
          )
        } else {
          icon = (
            <div className="add-friend-circle">
              <FontAwesomeIcon icon="user-plus"
                className="fa-user-plus dark"
                onClick={this.handleClick} />
            </div>
          )
        }

        let ele = (
          <li className="search-friend" key={i}>
            <Link to={`/users/${friend.id}`}
              style={{ textDecoration: 'none' }}>
            <img src={friend.pfpUrl} alt="" 
              className="pfp" />
            <span className="name">{friend.fname} {friend.lname}</span>
            </Link>

            {icon}
          </li>
        )
        searched.push(ele);
      }

      searchedFriends = (
        <section className="search-results">
          <span>People</span>
          <ul>
            {searched}
          </ul>
        </section>
      )
    }

    return (
      <>
        <NavBar currentUser={currentUser}
          logout={logout}/> 
        
        <section className="search-friends">
          <section className="search-sidebar">
            <div className="top">
              <span>Search Results for</span>
              <span className="filter">{filter}</span>
            </div>

            <div className="search-div"></div>

            <div className="bottom">
              <span className="filters">Filters</span>
              <ul>
                <li className="all">
                  <div className="id-circle dark"
                    >
                    <FontAwesomeIcon icon="id-card"
                      className="fa-id-card dark" />
                  </div>

                  <span>All</span>
                </li>

                {/* keep for now!! */}
                {/* <li>
                </li>
                <li>
                </li> */}
              </ul>
            </div>
          </section>

          <section className="search-main">
            {searchedFriends}
          </section>

        </section>
      </>
    )
  }
};

export default SearchFriends;