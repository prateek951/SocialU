import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import FormInlineMessage from "./FormInlineMessage";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
    this.bindEvents();
  }
  bindEvents() {
    this.handleStringChange = this.handleStringChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  handleLogin(e) {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  }

  handleStringChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors, email, password  } = this.state;

    return (
      <form className="ui form" onSubmit={this.handleLogin}>
        <div className="ui grid">
          <div className="three wide column" />
          <div className="ten wide column">
            <h1>Login</h1>
            <br/>
            <div className={errors.email ? "field error" : "field"}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email Address"
                value={email}
                onChange={this.handleStringChange}
              />
              <br/>
              <FormInlineMessage content={errors.email} type="error" />
            </div>
            <div className={errors.password ? "field error" : "field"}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Make it secure"
                value={password}
                onChange={this.handleStringChange}
              />
              <br/>
              <FormInlineMessage content={errors.password} type="error" />
            </div>
            <br/>
            <div className="ui fluid buttons">
              <button className="ui primary button" type="submit">
                Login
              </button>
              <div className="or" />
              <Link to="/" className="ui button">
                Cancel
              </Link>
            </div>
          </div>
        </div>
        <div className="three wide column" />
      </form>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
