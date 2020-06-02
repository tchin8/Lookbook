import React from 'react';

class Newsfeed extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello from the Newsfeed!</h1>
        <button onClick={this.props.logout}>Logout</button>
      </div>
    )
  }
};

export default Newsfeed;