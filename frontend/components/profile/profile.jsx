import React from 'react';
import NavBar from '../navbar/navbar';
import ProfileHeader from './profile_header';
import ProfileMain from './profile_main';

class Profile extends React.Component {

  render() {
    const { user, logout } = this.props;
    return (
      <div>
        <NavBar user={user} logout={logout} />
        {/* {user.fname}'s Profile Page */}
        <ProfileHeader user={user} />
        <ProfileMain user={user} />
      </div>
    )
  }
};

export default Profile;