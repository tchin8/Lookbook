import React from 'react';
import NavBar from '../navbar/navbar';
import ProfileHeader from './profile_header';
import ProfileMain from './profile_main';

class Profile extends React.Component {
  // componentDidUpdate() {
  //   // this.props.fetchUsers();
  //   this.props.fetchUserPosts(this.props.match.params.userId);
  //   // debugger;
  //   // this.handleSubmit = this.handleSubmit.bind(this);
  // }

  componentDidMount() {
    // debugger;
    this.props.fetchUsers();
    // window.scrollTo(0, 0);
    this.props.fetchUserPosts(this.props.match.params.userId);
  }


  render() {
    const { user, currentUser, updateUser, logout, openModal, fetchUsers, fetchUserPosts, users, createFriendRequest, deleteFriendRequest, posts } = this.props;

    if (!user) {
      return null;
    }
    
    return (
      <div>
        <NavBar currentUser={currentUser} logout={logout} />

        <ProfileHeader currentUser={currentUser} 
          user={user}
          updateUser={updateUser} 
          openModal={openModal} 
          fetchUsers={fetchUsers}
          createFriendRequest={createFriendRequest}
          deleteFriendRequest={deleteFriendRequest}/>
          
        <ProfileMain currentUser={currentUser} 
          user={user}
          openModal={openModal} 
          fetchUserPosts={fetchUserPosts}
          users={users}
          posts={posts}/>
      </div>
    )
  }
};

export default Profile;