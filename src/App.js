// App = Header+AboutUs+Footer

import React, { Component } from 'react';
import {Header} from './components/Header';
import {Footer} from './components/Footer';
import {Route,Switch} from 'react-router-dom';
import {AboutUs} from './components/AboutUs'

export default class App extends Component{
    constructor(props){
      super(props);
      this.title = 'Welcome to My First SPA';
      this.copyright = 'Copyright 2018, Brain Mentors';
      this.state = {
        title : this.title
      }
    }
    render(){
      return (
          <div>
            <Header title={title}></Header>
            <Switch>
              <Route path="/" exact render={() => (<h1>This is the Home Page</h1>)}/>
              <Route path="/aboutus/:ename" exact component={AboutUs}/>
            </Switch>
            <Footer copyright={copyright}/>
          </div>
      );
    }



}