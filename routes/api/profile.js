const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

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
  .then(profile => {
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

module.exports = router;
