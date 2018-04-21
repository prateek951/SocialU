const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data){

    let errors = {};
    data.name = !isEmpty(data.name)? data.name : '';
    data.email = !isEmpty(data.email)? data.email : '';
    data.password = !isEmpty(data.password)? data.password: '';
    data.password2 = !isEmpty(data.password2)? data.password2 : '';

    /*Validate the length of the name*/ 
    if(!Validator.isLength(data.name,{min:2,max:30})){
        errors.name = 'Name must be between 2 and 30 characters';
    }
    /*Validate whether the name field exists or is empty*/
    if(Validator.isEmpty(data.name)){
        errors.name = 'Name field is required';
    } 
    /*Validate whether the email field exists or is empty*/
    if(Validator.isEmpty(data.email)){
        errors.email = 'Email field is required';
    }
    /*Validate whether the user did entered valid email*/
    if(!Validator.isEmail(data.email)){
        errors.email = 'Email is invalid';
    }  
    /*Valid whether the password field exists or is empty*/
    if(Validator.isEmpty(data.password)){
        errors.password = 'Password field is required';
    } 
    /*Validate whether the password is within the desired range*/
    if(Validator.isLength(data.password,{min:6,max:30})){
        errors.password = 'Password must be atleast 6 characters long';
    } 
    /*Validate whether the confirm password exists or is empty*/
    if(Validator.isEmpty(data.password2)){
        errors.password2 = 'Confirm Password Field is required';
    } 
    /*Validate whether the passwords match or not*/
    if(!Validator.equals(data.password,data.password2)){
        errors.password2 = 'Passwords do not match';
    } 

    return {
        errors,
        isValid : isEmpty(errors)
    }


}