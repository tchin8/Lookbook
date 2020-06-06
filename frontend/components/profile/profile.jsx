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
    const { user, currentUser, updateUser, logout } = this.props;
    return (
      <div>
        <NavBar currentUser={currentUser} logout={logout} />
        {/* {user.fname}'s Profile Page */}
        <ProfileHeader currentUser={currentUser} 
          user={user}
          updateUser={updateUser} />
        <ProfileMain currentUser={currentUser} 
          user={user}/>
      </div>
    )
  }
};

export default Profile;