import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => (
      this.setState({ [field]: e.target.value })
    )
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="login">
        <label className="email">
          <span>Email or Phone</span>
          {/* <input type="text" /> */}
          <input type="text" 
            value={this.state.email}
            onChange={this.update('email')}/>
        </label>

        <label className="pw">
          <span>Password</span>
          {/* <input type="password" /> */}
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