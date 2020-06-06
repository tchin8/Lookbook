import React from 'react';
import NavBar from '../navbar/navbar';
import NewsfeedMain from './newsfeed_main';

class Newsfeed extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const { currentUser, logout, fetchUsers, fetchPosts } = this.props;
    
    return (
      <div>
        <NavBar currentUser={currentUser} logout={logout}/>
        <NewsfeedMain logout={logout}/>
      </div>
    )
  }
};

export default Newsfeed;