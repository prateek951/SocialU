/*@desc
Root App Component which holds the Header,LandingPage,Footer of the application
Header and footer is same throughout all the pages.
*/ 

import React, { Component } from 'react'
import Header from './components/Header';
import Landing from './components/Landing';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Landing/>
        <Footer/>
      </div>
    )
  }
}
export default App