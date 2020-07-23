import React from 'react';
import NavBar from '../navbar/navbar';
import NewsfeedMainContainer from './newsfeed_main_container';

class Newsfeed extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: props.users,
    }

    if (localStorage.getItem('mode') === 'dark') {
      $('.light').toggleClass("dark light");
    } else if (localStorage.getItem('mode') === 'light') {
      $('.dark').toggleClass("dark light");
    }

  }

  componentDidUpdate(prevProps) {
    if (prevProps.users !== this.props.users) {
      return this.setState({ users: this.props.users });
    }
  }

  componentDidMount() {
    this.props.fetchUsers().then(() => this.props.fetchPosts());
  }

  render() {
    const { currentUser, logout, fetchUsers, fetchPosts} = this.props;

    return (
      <div>
        <NavBar 
          users={this.state.users}
          currentUser={currentUser} 
          logout={logout}/>
        <NewsfeedMainContainer 
          logout={logout}
          currentUser={currentUser}
          fetchUsers={fetchUsers}
          fetchPosts={fetchPosts}
          />
      </div>
    )
  }
};

export default Newsfeed;