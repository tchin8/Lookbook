import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class CreateCommentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user_id: this.props.currentUser.id,
      post_id: this.props.post.id,
      body: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // rerender() {
  //   this.props.rerender();
  // }

  update(field) {
    // debugger;
    // this.props.rerender();
    return e => (
      this.setState({ [field]: e.target.value })
    )
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createComment(this.state);
    this.props.rerender();
    // this.rerender();
    // this.props.fetchUserPosts();
  }

  render() {
    return (
      <form className="comment dark"
        onSubmit={this.handleSubmit}>
        {/* <div></div> */}
        <input className="comment"
          type="text"
          placeholder="Write a comment..."
          value={this.state.body}
          onChange={this.update('body')} />

        <div className="icons">
          <FontAwesomeIcon icon={['far', 'smile']}
            className="fa-smile dark" />
          <FontAwesomeIcon icon={['far', 'image']}
            className="fa-image dark" />
          <FontAwesomeIcon icon="film"
            className="fa-film dark" />
          <FontAwesomeIcon icon={['fab', 'github-alt']}
            className="fa-github-alt dark" />
        </div>
      </form>
    )
  }
};

export default CreateCommentForm;