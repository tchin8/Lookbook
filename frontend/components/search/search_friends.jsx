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
      friends: JSON.parse(localStorage.getItem("searchFriends")),
      filter: localStorage.getItem("filter"),
      requester_id: props.currentUser.id,
      requestee_id: "",
      status: false,
      id: "",
    };

    this.handleSendFriendRequest = this.handleSendFriendRequest.bind(this);
    this.handleRemoveFriendRequest = this.handleRemoveFriendRequest.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchUsers().then(() => {
      let searchUsers = [];
      if (this.state && this.state.filter && this.props.users) {
        debugger
        const search = this.state.filter.toLowerCase();
        const numUsers = Object.keys(this.props.users).length;
        const usersArr = Object.values(this.props.users);
        debugger;
        for (let i = 0; i < numUsers; i++) {
          const user = usersArr[i];
          const keys = Object.keys(user);
  
          for (let i = 0; i < keys.length; i++) {
            let key = keys[i];
            if (key === "fname" || key === "lname") {
              if (
                user[key].toLowerCase().includes(search) &&
                !searchUsers.includes(user)
              ) {
                searchUsers.push(user);
              }
            }
          }
        }
      }
      this.setState({ friends: searchUsers });
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.users !== this.props.users) {
      this.forceUpdate();
    }
  }

  updateSearch() {
    this.setState({
      friends: JSON.parse(localStorage.getItem("searchFriends")),
      filter: localStorage.getItem("filter")
    });
  }

  handleSendFriendRequest(e) {
    e.preventDefault();
    this.setState(
      { id: e.currentTarget.parentNode.parentNode.getAttribute("data-user") },
      () => {
        this.props.createFriendRequest(this.state);
      }
    );
  }

  handleRemoveFriendRequest(e) {
    e.preventDefault();
    // this.setState({ id: e.currentTarget.parentNode.parentNode.getAttribute('data-user') }, () => {
    this.props.deleteFriendRequest(
      parseInt(e.currentTarget.parentNode.parentNode.getAttribute("data-user"))
    );
    // not the user, but the id
    // });
  }



  render() {
    const { currentUser, updateUser, logout, users } = this.props;

    const { filter, friends } = this.state;

    let searched = [];
    let searchedFriends, icon;
    if (friends.length === 0) {
      searchedFriends = (
        <section className="search-results">
          <span>People</span>
          <span>0 results</span>
        </section>
      );
    } else {
      for (let i = 0; i < friends.length; i++) {
        let friend = friends[i];
        debugger;
        if (currentUser.friends.includes(friend.id)) {
          debugger;
          icon = (
            <div className="add-friend-circle">
              <FontAwesomeIcon
                icon={["fab", "facebook-messenger"]}
                className="fa-facebook-messenger dark"
              />
            </div>
          );
        } else if (currentUser.id === friend.id) {
          debugger;
          icon = null;
        } else if (
          Object.keys(currentUser.sentFriendRequests).includes(`${friend.id}`)
        ) {
          debugger;
          icon = (
            <div className="add-friend-circle">
              <FontAwesomeIcon
                icon="user-times"
                className="fa-user-times dark"
                // onClick={this.handleRemoveFriendRequest}
              />
            </div>
          );
        } else {
          debugger;
          icon = (
            <div className="add-friend-circle">
              <FontAwesomeIcon
                icon="user-plus"
                className="fa-user-plus dark"
                onClick={this.handleSendFriendRequest}
              />
            </div>
          );
        }

        let ele = (
          <li className="search-friend" key={friend.id} data-user={friend.id}>
            <Link to={`/users/${friend.id}`} style={{ textDecoration: "none" }}>
              <img src={friend.pfpUrl} alt="" className="pfp" />
              <span className="name">
                {friend.fname} {friend.lname}
              </span>
            </Link>

            {icon}
          </li>
        );
        searched.push(ele);
        debugger;
      }
      debugger;

      searchedFriends = (
        <section className="search-results">
          <span>People</span>
          <ul>{searched}</ul>
        </section>
      );
    }

    return (
      <>
        <NavBar currentUser={currentUser} 
          logout={logout} 
          users={users}
          updateSearch={this.updateSearch}/>

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
                  <div className="id-circle dark">
                    <FontAwesomeIcon
                      icon="id-card"
                      className="fa-id-card dark"
                    />
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

          <section className="search-main">{searchedFriends}</section>
        </section>
      </>
    );
  }
};

export default SearchFriends;