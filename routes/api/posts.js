const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

//Post model
const Post = require('../../models/Post');
//Profile Model
const Profile = require('../../models/Profile');

//Validation
const validatePostInput = require('../../validation/post');

/*@route GET /api/posts/test*/
/*@desc Test the post route*/ 
/*@access Public*/
router.get('/test',(req, res) => {
    res.send('Hello Postss');
});

/*@route GET /api/posts*/ 
/*@desc Get posts*/ 
/*@access Public*/

router.get('/',(req, res) => {

    /*Find all the posts and sort them from latest to 
    old posts order*/ 
    Post.find()
    .sort({data : -1})
    .then(posts => res.json(posts))
    .catch(err => res.status(404).json({message : 'No posts found'}));

});

/*@route* GET /api/posts/:id/ 
/*@desc* GET a single post by its id/ 
/*@access Public*/

router.get('/:id',(req, res) => {
    Post.findById(req.params.id)
    .then(post => res.json(post))
    .catch(err => res.status(404).json({message : 'Post not found'}));
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

/*@route DELETE /api/posts/:id*/ 
/*@desc Delete post by its id*/ 
/*@access Private*/ 
router.delete('/:id',passport.authenticate('jwt',{session:false}),(req,res) => {

    /*Search the profile of the user, then target all his posts and
    find the one to be deleted*/
    Profile.findOne({user : req.user.id})
    .then(profile => {
        Post.findById(req.params.id).then(post => {

            // Check for post owner
            if(post.user.toString() !== req.user.id){
                return res.status(401).json({message: 'User not authorized to do so!'});
            }
            post.remove().then(() => res.status(200).json({success : true,message : 'Post got deleted successfully'}));
        })
        .catch(err => res.status(404).json({message : 'No post found'}));
    });
});


module.exports = router;