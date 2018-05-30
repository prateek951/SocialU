/*@desc
Root App Component which holds the Header,LandingPage,Footer of the application
Header and footer is same throughout all the pages.
*/ 
import React, { Component } from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Footer from './components/layout/Footer';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

import './App.css';
class App extends Component {
  render() {
    return (
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