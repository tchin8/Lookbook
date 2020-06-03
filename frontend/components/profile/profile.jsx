import React from 'react';
import NavBar from '../navbar/navbar';

class Profile extends React.Component {

  render() {
    const { user } = this.props;
    return (
      <div>
        <NavBar user={user} />
        {user.fname}'s Profile Page
      </div>
    )
  }
}

export default Profile;