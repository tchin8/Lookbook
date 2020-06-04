import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class PostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      author_id: this.props.currentUser,
      user_id: this.props.wall,
      body: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => (
      this.setState({ [field]: e.currentTarget.value })
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    // other stuff here
  }

  render() {
    return (
    <div className="create-post-form-container">
      <div className="header">
        <span className="create">Create Post</span>
        <button className="close-form"
          onClick={this.props.closeModal}>
          <div className="x-circle dark"
            onFocus={this.handleFocus}>
              <FontAwesomeIcon icon="times" 
                className="fa-times dark"/>
            {/* <span className="x">+</span> */}
          </div>
        </button>
      </div>

      <form onSubmit={this.handleSubmit}
        className="create-post-form">
        <textarea onChange={this.update('title')} 
          placeholder="What's on your mind?"></textarea>
        
        <button>Post</button>
      </form>
    </div>
    )
  }
};

export default PostForm;