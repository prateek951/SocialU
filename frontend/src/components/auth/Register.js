import React, { Component } from 'react';

class Register extends Component {

    constructor(){
        super(); 
        /*@desc Set the initial state for the component*/ 
        this.state = {
            name : '',
            email : '',
            password : '',
            password2 : '',
            errors : {}
        }
        
    }

    render(){
        return(
        <div>
            <h1>This is the Register Page</h1>
        </div>
        );
    }
}

export default Register;