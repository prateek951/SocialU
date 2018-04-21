const express = require("express");
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');

// Load User Model

const User = require('../../models/User');

/*@route GET /api/users/test*/
/*@desc Test the users route*/

/*@access Public*/

router.get("/test", (req, res) => {
  res.send("Hello yusers");
});

/*@route POST /api/users/register*/
/*@desc Register the user*/

/*@access Public*/

router.post('/register',(req, res) => {
    const {name,email,password} = req.body;
    /*First check whether the user you are trying to register is already a registered one
    In that case don't allow*/
    User.findOne({email})
    .then(user => {
      if(user){
        return res.status(400).json({message: 'Email is already in use'});
      }else{
        /*Else case create new user*/
        const avatar = gravatar.url(email,{
          s: '200', //size
          r: 'pg', //rating
          d : 'mm' //default
        });
        const newUser = new User({
            name,
            email,
            avatar,
            password
        });

        /*@desc Before storing the user to the database simple hash the password
        and then store it into the database*/
        bcrypt.genSalt(10,(err,salt)=> {
          bcrypt.hash(newUser.password,salt,(err,hash) => {
              newUser.password = hash;
              newUser
                .save()
                .then(user => res.json(user))
                .catch(err => console.log(err));
          });
        });
      }
    });
});

module.exports = router;
