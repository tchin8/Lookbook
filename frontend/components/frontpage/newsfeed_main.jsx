import React from 'react';

class NewsfeedMain extends React.Component {

  render() {
    return (
      <section className="newsfeed-main">
        <button onClick={this.props.logout}>Logout</button>
        <p>Hello from the Newsfeed!</p>
      </section>
    )
  }
};

export default NewsfeedMain;