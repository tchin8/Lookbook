import React from 'react';
import NavBar from '../navbar/navbar';
import ProfileHeader from './profile_header';
import ProfileMain from './profile_main';

class Profile extends React.Component {
  componentDidUpdate() {
    // this.props.fetchUsers();
    this.props.fetchUserPosts(this.props.match.params.userId);
    // debugger;
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // debugger;
    this.props.fetchUsers();
    // this.props.fetchUserPosts(this.props.match.params.userId);
  }


  render() {
    // debugger;

    const { user, currentUser, updateUser, logout, openModal, fetchUsers, fetchUserPosts } = this.props;

    if (!user) {
      return null;
    }
    // debugger;

    return (
      <div>
        <NavBar currentUser={currentUser} logout={logout} />

        <ProfileHeader currentUser={currentUser} 
          user={user}
          updateUser={updateUser} 
          openModal={openModal} 
          fetchUsers={fetchUsers}/>
          
        <ProfileMain currentUser={currentUser} 
          user={user}
          openModal={openModal} 
          fetchUserPosts={fetchUserPosts}/>
      </div>
    )
  }
};

export default Profile;