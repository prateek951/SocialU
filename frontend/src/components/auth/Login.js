import React, { Component } from 'react';

class Login extends Component {    
    constructor(){
        super();
        /*@desc Initial state of the Login Component*/
        this.state = {
            email : '',
            password : '',
            errors : {}
        };
        /*onChange events on input fields*/
        this.onChange = this.onChange.bind(this);
        /*onSubmit event on form submission*/   
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
       this.setState({[e.target.name] : e.target.value})
    }
    onSubmit(e){
        e.preventDefault();
        const newUser = {
            email : this.state.email,
            password : this.state.password
        }
        // console.log(newUser);
    }
    render(){
        return (
            <div className="login">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h1 className="display-4 text-center">Login</h1>
                        <p className="lead text-center">
                            Login to SocialU
                        </p>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input type="email"
                                 className="form-control form-control-lg"
                                 placeholder="Email"
                                 name="email"
                                 value={this.state.email}
                                 onChange={this.onChange}
                                 />
                            </div>
                            <div className="form-group">
                                <input type="password"
                                 className="form-control form-control-lg"
                                 placeholder="Password"
                                 name="password"
                                 value={this.state.password}
                                 onChange={this.onChange}
                                 />
                            </div>
                            <input type="submit" class="btn btn-primary btn-block mt-4"/>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        );
    }



}

export default Login;