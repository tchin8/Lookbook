import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class CreateCommentForm extends React.Component {
  constructor(props) {
    super(props);

    const { currentUser, post } = this.props;

    this.state = {
      user_id: currentUser.id,
      post_id: post.id,
      body: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);

    if (localStorage.getItem('mode') === 'dark') {
      $('.light').toggleClass("dark light");
    } else if (localStorage.getItem('mode') === 'light') {
      $('.dark').toggleClass("dark light");
    }
  }


  update(field) {
    return e => (
      this.setState({ [field]: e.target.value })
    )
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createComment(this.state);
    this.setState({
      body: ""
    });

  }

  render() {
    return (
      <form className="comment dark"
        onSubmit={this.handleSubmit}>
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