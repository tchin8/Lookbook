import React from 'react';
import NavBar from '../navbar/navbar';
import NewsfeedMain from './newsfeed_main';

class Newsfeed extends React.Component {
  render() {
    return (
      <div>
        <NavBar user={this.props.user} logout={this.props.logout}/>
        <NewsfeedMain logout={this.props.logout}/>
      </div>
    )
  }
};

export default Newsfeed;