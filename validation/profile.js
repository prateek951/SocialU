const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateProfileInput(data){

    let errors = {};
    data.handle = !isEmpty(data.handle)? data.handle : '';
    data.status = !isEmpty(data.status)? data.status : '';
    data.skills = !isEmpty(data.skills)? data.skills : '';

    /*Validate the length of the handle to lie in the range
    of 2 to 40*/
    if(!Validator.isLength(data.handle,{min:2,max:40})) {
        errors.handle = 'Handle needs to be between 2 and 40 characters';
    }
    /*Validate whether the handle exists or not*/
    if(Validator.isEmpty(data.handle)){
        errors.handle = 'Profile handle is required';
    } 
    /*Validate whether the skills array is populated or empty*/ 
    if(Validator.isEmpty(data.skills)){
        errors.skills = 'Skills field is required';
    }
    /*Validate whether the website is a non-empty URL*/
    if(!isEmpty(data.website)){
        if(!Validator.isURL(data.website)){
            errors.website = 'Not a valid URL';
        }
    } 
    /*Validate whether the youtube is a non-empty URL*/
    if(!isEmpty(data.youtube)){
        if(!Validator.isURL(data.youtube)){
            errors.youtube = 'Not a valid URL';
        }
    } 
    /*Validate whether the twitter is a non-empty URL*/
    if(!isEmpty(data.twitter)){
        if(!Validator.isURL(data.twitter)){
            errors.twitter = 'Not a valid URL';
        }
    } 
    /*Validate whether the facebook is a non-empty URL*/
    if(!isEmpty(data.facebook)){
        if(!Validator.isURL(data.facebook)){
            errors.facebook = 'Not a valid URL';
        }
    }
    /*Validate whether the linkedin is a non-empty URL*/
    if(!isEmpty(data.linkedin)){
        if(!Validator.isURL(data.linkedin)){
            errors.linkedin = 'Not a valid URL';
        }
    } 
    
    /*Validate whether the instagram is a non-empty URL*/
    if(!isEmpty(data.instagram)){
        if(!Validator.isURL(data.instagram)){
            errors.instagram = 'Not a valid URL';
    } 
}
    return {
        errors,isEmpty(errors);
    };
};