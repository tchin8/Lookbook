import React from 'react';
import NavBar from '../navbar/navbar';
import ProfileHeader from './profile_header';
import ProfileMain from './profile_main';

class Profile extends React.Component {
  componentDidUpdate() {
    // this.props.fetchUsers();
    this.props.fetchUserPosts(this.props.match.params.userId);
  }
  componentDidMount() {
    this.props.fetchUsers();
    // this.props.fetchUserPosts(this.props.match.params.userId);
  }

  render() {
    const { user, currentUser, updateUser, logout, openModal } = this.props;
    return (
      <div>
        <NavBar currentUser={currentUser} logout={logout} />

        <ProfileHeader currentUser={currentUser} 
          user={user}
          updateUser={updateUser} 
          openModal={openModal} />
          
        <ProfileMain currentUser={currentUser} 
          user={user}/>
      </div>
    )
  }
};

export default Profile;