import React from 'react';
import { Redirect } from 'react-router';

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

  handleFocus(e) {
    e.preventDefault();
    $(`.lemail-error-msg`).addClass('hidden');
    $(`.lpw-error-msg`).addClass('hidden');
  }

  handleBlur(e) {
    e.preventDefault();
    $(`.lemail-error-msg`).addClass('hidden');
    $(`.lpw-error-msg`).addClass('hidden');
  }

  handleErrors() {
    const errors = Array.from(this.props.errors);
    let classN = "";

    if (errors.join(' ').includes("email")) {
      classN = "lemail";
    } else if (errors.join(' ').includes("password")) {
      classN = "lpw";
    }

    $(`.${classN}-error-msg`).removeClass('hidden');
    this.props.errors.shift();
  }

  render() {
    const errors = Array.from(this.props.errors)
    if (errors && (!errors.join(' ').includes("blank") || !errors.join(' ').includes("too"))) {
      this.handleErrors();
    }

    return (
      <form onSubmit={this.handleSubmit} className="login">
        <label className="email">
          <span>Email or Phone</span>
          <input type="text" 
            className="email"
            value={this.state.email}
            onBlur={this.handleBlur}
            onFocus={this.handleFocus}
            onChange={this.update('email')}/>

            <div className="lemail-error-msg hidden">
              <p>The email you've entered doesn't match any account.</p>
            </div>
        </label>

        <label className="pw">
          <span>Password</span>
          <input type="password" 
            className="pw"
            value={this.state.password}
            onBlur={this.handleBlur}
            onFocus={this.handleFocus}
            onChange={this.update('password')}/>
          <span className="forgotpw">Forgot account?</span>

          <div className="lpw-error-msg hidden">
            <p>The password you've entered is incorrect</p>
          </div>
        </label>

        <button>Log In</button>
      </form>
    )
  }
};

export default LoginForm;