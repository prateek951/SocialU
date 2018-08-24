import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { clearCurrentProfile } from "../../actions/profileActions";

class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <NavLink className="nav-link" to="/feed">
            Post Feed{" "}
          </NavLink>
          <span className="sr-only">(current)</span>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/profiles">
            Developers
          </NavLink>
        </li>
        <ul className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            id="navbarDropdownMenuLink-4"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="fa fa-user" /> Your Profile{" "}
          </a>
          <div
            className="dropdown-menu dropdown-menu-right dropdown-cyan"
            aria-labelledby="navbarDropdownMenuLink-4"
          >
            <li className="nav-item dropdown-item">
              <NavLink className="nav-link" to="/dashboard">
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item dropdown-item">
              <a onClick={this.onLogoutClick.bind(this)} className="nav-link">
                <img
                  className="rounded-circle"
                  src={user.avatar}
                  alt={user.name}
                  style={{ width: "25px", marginRight: "5px" }}
                  title="You must have a Gravatar connected to your email to display an image"
                />{" "}
                Logout
              </a>
            </li>
          </div>
        </ul>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <NavLink className="nav-link" to="/profiles">
            Developers
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/register">
            Sign Up
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">
            Login
          </NavLink>
        </li>
      </ul>
    );
    
    return (
      <nav className="mb-4 navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink className="navbar-brand font-bold" to="/">
          SocialU
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent-4"
          aria-controls="navbarSupportedContent-4"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent-4">
          {isAuthenticated ? authLinks : guestLinks}
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser, clearCurrentProfile }
)(Navbar);
