import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import { Link } from "react-router-dom";
import FormInlineMessage from "./FormInlineMessage";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
    this.bindEvents();
  }
  bindEvents() {
    this.handleStringChange = this.handleStringChange.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  handleStringChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleRegister(e) {
    e.preventDefault();
    const { name, email, password, password2 } = this.state;
    const newUser = { name, email, password, password2 };
    this.props.registerUser(newUser, this.props.history);
  }

  render() {
    const { errors, name, email, password, password2 } = this.state;

    return (
      <form className="ui form" onSubmit={this.handleRegister}>
        <div className="ui grid">
          <div className="three wide column">{/* Empty Space */}</div>
          <div className="ten wide column">
            <h1>Register</h1>
            <br />
            <div className={errors.name ? "field error" : "field"}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Full Name"
                value={name}
                onChange={this.handleStringChange}
              />
              <br />
              <FormInlineMessage content={errors.name} type="error" />
            </div>
            <div className={errors.email ? "field error" : "field"}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email Address"
                //   ref={input => this.name = input}
                value={email}
                onChange={this.handleStringChange}
              />
              <br />
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
              <br />
              <FormInlineMessage content={errors.password} type="error" />
            </div>
            <div className={errors.password2 ? "field error" : "field"}>
              <label htmlFor="password2">Confirm Password</label>
              <input
                type="password"
                name="password2"
                id="password2"
                placeholder="Make it secure"
                value={password2}
                onChange={this.handleStringChange}
              />
              <br />
              <FormInlineMessage content={errors.password2} type="error" />
            </div>
            <br />
            <div className="ui fluid buttons">
              <button className="ui primary button" type="submit">
                Sign Up
              </button>
              <div className="or" />
              <Link to="/" className="ui button">
                Cancel
              </Link>
            </div>
          </div>
          <div className="three wide column">{/* Empty Space */}</div>
        </div>
      </form>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
