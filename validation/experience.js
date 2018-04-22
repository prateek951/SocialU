const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateExperienceInput(data){
    let errors = {};

    data.title = isEmpty(data.title) ? '' : data.title;
    data.company = isEmpty(data.company)? '' : data.company;
    data.from = isEmpty(data.from) ? '': data.from;

    /*Validate whether the title field exists or not*/
    if(Validator.isEmpty(data.title)){
        errors.title = 'Title field is required';
    } 
    /*Validate whether the company field exists or not*/
    if(Validator.isEmpty(data.company)){
        errors.company = 'Company field is required';
    } 
    /*Validate whether from field eixsts or not*/
    if(Validator.isEmpty(data.from)){
        errors.from = 'From date field is required';
    }
    return {
        errors,
        isValid : isEmpty(errors)
    };
};