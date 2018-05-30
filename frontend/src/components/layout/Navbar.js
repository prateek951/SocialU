/*@desc
This is the Navbar component of the application
*/ 

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import connect from 'react-redux';
import logoutUser from '../../actions/authActions';
class Navbar extends Component {
   
    onLogoutClick(e){
        e.preventDefault();
        this.props.logoutUser();
    }
  
    render() {
      const {isAuthenticated,user} = this.props.auth;
      const authLinks = (
           <ul className="navbar-nav ml-auto">
                   
                <li className="nav-item">
                    <a href="#" onClick={this.onLogoutClick.bind(this)} className="nav-link">
                        <img 
                        className="rounded-circle"
                        src={user.avatar} 
                        alt={user.name} 
                        style={{width:'25px',marginRight:'5px'}} 
                        title="You must have a gravatar connected to your email to display image"
                        />Logout
                    </a>
                </li>
            </ul>
      );

      const guestLinks = (
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link className="nav-link" to="/register">
                    Register
                </Link>
                <Link className="nav-link" to="/login">
                    Login
                </Link>
            </li>
            
          </ul>
      )
    return (
      <div>
          {/* This is the navigation bar component of the application */}
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
                <div className="container">
                <Link className="navbar-brand" to="/">DevHub - A Portal For Developers</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="mobile-nav">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/profiles"> View Developers
                        </Link>
                    </li>
                    </ul>
                    {isAuthenticated ? authLinks: guestLinks}            
                </div>
                </div>
            </nav>
      </div>
    )
  }
}

Navbar.PropTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(mapStateToProps, { logoutUser })(Navbar);
