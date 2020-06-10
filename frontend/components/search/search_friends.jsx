import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavBar from '../navbar/navbar';

class SearchFriends extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const { currentUser, updateUser, logout } = this.props;

    // if (!user) {
    //   return null;
    // }

    return (
      <>
        <NavBar currentUser={currentUser}
          logout={logout}/> 
        
        <section className="search-friends">
          <section className="search-sidebar">
            <div className="top">
              <span>Search Results for</span>
              {/* <span>{this.state.filter}</span> */}
            </div>

            <div className="search-div"></div>

            <div className="bottom">
              <span className="filters">Filters</span>
              <ul>
                <li className="all">
                  <div className="id-circle dark"
                    // onFocus={this.handleFocus}
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
            <section className="search-results">
              <span>People</span>
              <ul>
                <li>
                  
                </li>
              </ul>
            </section>
          </section>

        </section>
      </>
    )
  }
};

export default SearchFriends;