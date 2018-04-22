/*@desc
Root App Component which holds the Header,LandingPage,Footer of the application
Header and footer is same throughout all the pages.
*/ 
import React, { Component } from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Header from './components/Header';
import Landing from './components/Landing';
import Footer from './components/Footer';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

import './App.css';
import { LOADIPHLPAPI } from 'dns';

class App extends Component {
  render() {
    return <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </div>
          <Footer />
        </div>
      </Router>;
  }
}
export default App