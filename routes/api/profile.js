const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const validateProfileInput = require('../../validation/profile');

// Load the Profile Model
const Profile = require('../../models/Profile');
//Load the User Model
const User = require('../../models/User');

/*@route GET /api/profile/test*/
/*@desc Test the profile route*/
/*@access Public*/

router.get("/test", (req, res) => {
  res.send("Hello Porfile");
});

/*@route /api/profile*/ 
/*@desc Get current users profile*/
/*@access Private*/
router.get('/',passport.authenticate('jwt',{session: false}),(req,res)=>{

  const errors = {};
  Profile.findOne({user: req.user.id})
  .populate('user',['name','avatar']).then(profile => {
    /*If there is no profile*/ 
    if(!profile){
      errors.noprofile = 'There is no profile for this user';
      return res.status(404).json(errors);
    }
    /*If there is one*/
    res.json(profile); 
  })
  .catch(err => res.status(404).json(err));  

});  

/*@route GET /api/profile/all*/ 
/*@desc Get all the profiles*/ 
/*@access Public */ 
router.get('/all',(req, res) => {

    const errors = {};
    Profile.find()
    .populate('user',['name','avatar'])
    .then(profiles => {
      if(!profiles){
        errors.noprofile = 'There are no profiles';
        return res.status(404).json(errors);
      }
      res.json(profiles);
    })
    .catch(err => res.status(404).json({message : 'There are no profiles'}));
});

/*@route GET /api/profile/handle/:handle*/ 
/*@desc Get Profile by handle*/ 
/*@access Public*/ 

router.get('/handle/:handle',(req, res) => {

  const errors = {};
  const {handle} = req.params;
  Profile.findOne({handle})
  .populate('user',['name','avatar'])
  .then(profile => {
    if(!profile){
      errors.noprofile = 'There is no profile for this handle';
      res.status(404).json(errors);
    }
    res.json(profile);
  })
  .catch(err => res.status(404).json(err));

});

/*@route /api/profile/user/user_id*/ 
/*@desc Get profile by user id*/ 
/*@access Public*/

router.get('/user/:user_id',(req, res) => {

  const {id} = req.params;

  Profile.findOne({id})
  .populate('user',['name','avatar'])
  .then(profile => {
    if(!profile){
      errors.noprofile = 'There is no profile for this user';
      res.status(404).json(errors);
    }
    res.json(errors);
  })
  .catch(err => res.status(404).json({message : 'There is no profile for this user'}));

})








/*@route POST /api/profile */ 
/*@desc Create or edit user profile*/ 
/*@access Private*/

router.post('/',passport.authenticate('jwt',{session: false}),(req, res) => {
  
  const {errors,isValid} = validateProfileInput(req.body);
  //  Check for validity
  if(!isValid){
    return res.status(400).json(errors);
  }

  //Get Field values
  const profileFields = {};
  
  profileFields.user = req.user.id;
  profileFields.handle = req.body.handle || '';
  profileFields.company = req.body.company || '';
  profileFields.website = req.body.website || '';
  profileFields.location = req.body.location || '';
  profileFields.bio = req.body.bio || '';
  profileFields.status = req.body.status || '';
  profileFields.github_username = req.body.github_username || '';

  if(typeof req.body.skills !== 'undefined'){
    profileFields.skills = req.body.skills.split(',');
  }

  // Social
  profileFields.social = {};
  profileFields.social.youtube = req.body.youtube || '';
  profileFields.social.twitter = req.body.twitter || '';
  profileFields.social.facebook = req.body.facebook || '';
  profileFields.social.linkedin = req.body.linkedin || '';
  profileFields.social.instagram = req.body.instagram || '';

  /*Check for whether the profile already exists,
  if so don't allow creation of the new profile but edit can be done*/
  Profile.findOne({user : req.user.id})
  .then(profile => {
    if(profile){
      // Update
      Profile.findOneAndUpdate({user: req.user.id},{$set: profileFields},{new : true})
      .then(profile => res.json(profile));
    }
    else {
      /*No such profile exists*/
      /*Create one*/
      // Check if the handle exists
      Profile.findOne({handle : profileFields.handle}) 
      .then(profile => {
        if(profile){
          errors.handle = 'That handle already exists';
          res.status(400).json(errors);
        }
        new Profile(profileFields).save().then(profile => res.json(profile));
      });
    }
  });
});

module.exports = router;









































