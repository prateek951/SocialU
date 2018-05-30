/*@desc
Root App Component which holds the Header,LandingPage,Footer of the application
Header and footer is same throughout all the pages.
*/ 
import React, { Component } from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import {setAuthToken} from './utils/setAuthToken';
import {setCurrentUser} from './actions/authActions';
import { Provider } from 'react-redux';
import { store } from './store';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Footer from './components/layout/Footer';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

import './App.css';
//Check for token
if(localStorage.jwtToken){
  setAuthToken(localStorage.jwtToken);
  //Decode the token and get user info and expiration
  const decoded = jwt_decode(localStorage.jwtToken);
  //Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  //Check for expired token
  const currentTime = Date.now()/1000;
  if(decoded.exp < currentTime){
    //Logout the user
    store.dispatch(logoutUser());
    //Clear current profile(TODO)
    //Redirect to login
    window.location.href = '/login';
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}/>
     <Router>
          <div className="App">
            <Navbar/>
              <Route exact path="/" component={Landing}></Route>
              <div className="container">
                  <Route exact path="/register" component={Register}/>
                  <Route exact path="/login" component={Login}/>
              </div>
            <Footer/>
          </div>
     </Router>
    );
  }
}
export default App;