const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

//Post model
const Post = require('../../models/Post');
//Validation
const validatePostInput = require('../../validation/post');

/*@route GET /api/posts/test*/
/*@desc Test the post route*/ 
/*@access Public*/
router.get('/test',(req, res) => {
    res.send('Hello Postss');
});

/*@route POST /api/posts*/ 
/*@desc Create Post*/ 
/*@access Private*/

router.post('/',passport.authenticate('jwt',{session:false}),(req,res) => {

    /*Validate the request body*/      
    const {errors,isValid} = validatePostInput(req.body);
    /*If the request body is invalid*/  
    if(!isValid){
        return res.status(400).json(errors);
    }

    /*If the request body is valid, create a post*/
    const {text,name,avatar,user} = req.body;
    const newpost = new Post({ text, name, avatar, user });
     /*Commit the post to the database*/
    newpost.save().then(post => res.json(post));
});

module.exports = router;