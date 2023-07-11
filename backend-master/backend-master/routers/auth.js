const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const router = express.Router();
const User=require('../models/user')
const { OAuth2Client } = require('google-auth-library');
const jwt = require('jsonwebtoken');

const client = new OAuth2Client('234133504708-bes61o661qvdge5qtj8268vhd401b5q7.apps.googleusercontent.com');
// /Callback route for google to redirect
function verifyToken(token) {
  return client.verifyIdToken({
    idToken: token,
    audience: '234133504708-bes61o661qvdge5qtj8268vhd401b5q7.apps.googleusercontent.com'
  });
}

router.post('/google',async (req, res) => {
  console.log("i am in backend");
  try {
    const ticket = await verifyToken(req.body.token);
    const payload = ticket.getPayload();
   
    User.findOne({email: payload.email}).then((currentUser) => {

      let x={_id:"dumbo",email:"dumb",name:"dumb"};

        if (currentUser) { // already have this user
            console.log('user is: ', currentUser);
            x=currentUser
        
        } else { // if not, create user in our db
             if(payload.email.endsWith("iiit-bh.ac.in"))
           {new User({_id: new mongoose.Types.ObjectId(), name:payload.name, email:  payload.email ,collegeId: payload.email.substring(0, payload.email.indexOf("@")),role:/\d/.test(payload.email.split("@"))?1:0}).save().then((newUser) => {
                console.log('created new user: ', newUser);
                // res.json({newUser});
                x=newUser;
            });
        }
        // else{
        //  return res.send("eroor ocured not iiit email")
        // }
        }

        console.log(`r4espoce from backen ${x}`)
   
    const payload1 = {
        email: x.email,
        name: x.name
    };

    const {
      _id, name, email,role
    } = x;

    const token = jwt.sign(payload1, "mdcmlsnjfvnfnv", {expiresIn: '1h'});
    console.log(token)
    return res.json({
      token,
      user: {
        _id, name,email,role
      },
    });
  });  
  } catch (error) {
    console.log(error);
     res.status(400).send('Invalid token');
  }
}
);

router.get('/dashboard', (req, res) => {
  
    // Render the dashboard with the user's data
     var token=req.user;
     console.log(`heya token here ${token}`)
  
     return res.json({
      token,
      user: {
        _id, email
      },
    });
  });

module.exports = router;
