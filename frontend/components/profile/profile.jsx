import React from 'react';
import NavBar from '../navbar/navbar';
import ProfileHeader from './profile_header';

class Profile extends React.Component {

  render() {
    const { user } = this.props;
    return (
      <div>
        <NavBar user={user} />
        {user.fname}'s Profile Page
        <ProfileHeader user={user}/>
      </div>
    )
  }
};

export default Profile;