import React from 'react';
import { Redirect } from 'react-router';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }

    this.loggedIn = false;

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    debugger;
    return e => (
      this.setState({ [field]: e.target.value })
    )
  }

  handleSubmit(e) {
    e.preventDefault();
    this.loggedIn = true;
    this.props.login(this.state);
  }

  render() {
    if (this.loggedIn === true) {
      return (<Redirect to="/" />);
    }

    return (
      <form onSubmit={this.handleSubmit} className="login">
        <label className="email">
          <span>Email or Phone</span>
          <input type="text" 
            value={this.state.email}
            onChange={this.update('email')}/>
        </label>

        <label className="pw">
          <span>Password</span>
          <input type="password" 
            value={this.state.password}
            onChange={this.update('password')}/>
          <span>Forgot account?</span>
        </label>

        <button>Log In</button>
      </form>
    )
  }
};

export default LoginForm;