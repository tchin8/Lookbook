import React from 'react';
import NavBar from '../navbar/navbar';
import NewsfeedMainContainer from './newsfeed_main_container';

class Newsfeed extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
    this.props.fetchPosts();
  }

  render() {
    const { currentUser, logout, fetchUsers, fetchPosts } = this.props;
    
    return (
      <div>
        <NavBar 
          currentUser={currentUser} 
          logout={logout}/>
        <NewsfeedMainContainer 
          logout={logout}
          currentUser={currentUser}
          fetchUsers={fetchUsers}
          />
      </div>
    )
  }
};

export default Newsfeed;