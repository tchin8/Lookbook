import React from 'react';
import NavBar from '../navbar/navbar';
import ProfileHeader from './profile_header';
import ProfileMain from './profile_main';

class Profile extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.user !== undefined && prevProps.user !== undefined) {
      if (this.props.user.id !== prevProps.user.id) {
        this.props.fetchUserPosts(this.props.match.params.userId);
      }
    }
  }

  componentDidMount() {
    this.props.fetchUsers();
    // this.props.fetchPosts();
    // window.scrollTo(0, 0);
    this.props.fetchUserPosts(this.props.match.params.userId);
  }

  render() {
    const { user, currentUser, updateUser, logout, openModal, fetchUsers, fetchUserPosts, users, createFriendRequest, deleteFriendRequest, posts, postsState, fetchUser } = this.props;

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
          deleteFriendRequest={deleteFriendRequest}
          fetchUser={fetchUser}/>
          
        <ProfileMain currentUser={currentUser} 
          user={user}
          openModal={openModal} 
          fetchUserPosts={fetchUserPosts}
          users={users}
          posts={posts}
          postsState={postsState}/>
      </div>
    )
  }
};

export default Profile;