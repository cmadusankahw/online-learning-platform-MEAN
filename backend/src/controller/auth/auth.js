//model imports
const AuthUser = require("../../model/auth/authUser.model");
const Student = require("../../model/auth/student.model");
const checkAuth = require("../../middleware/auth-check");

//dependency imports
const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require ("bcrypt");
const jwt = require("jsonwebtoken");
const multer = require ("multer");
var path = require('path');

//express app declaration
const auth = express();


// multer setup for image upload
const MIME_TYPE_MAP = {
  'image/png' : 'png',
  'image/jpeg' : 'jpg',
  'image/jpg' : 'jpg',
  'image/gif' : 'gif'
};
const storage = multer.diskStorage({
  destination: (req, file, cb) =>{
    const isValid = MIME_TYPE_MAP[file.mimetype];
    let error= new Error("Invalid Image");
    if(isValid){
      error=null;
    }
    cb(error,path.join(__dirname,'..', '..', '..', "images/user"));
  },
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(' ').join('-');
    const ext = MIME_TYPE_MAP[file.mimetype];
    cb(null, name + '-' + Date.now() + '.' + ext);
  }
});

//middleware
auth.use(bodyParser.json());
auth.use(bodyParser.urlencoded({ extended: false }));


//functions here

// signup user
auth.post('/signup', (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
    .then( hash => {
      const authUser = new AuthUser ({
        user_id: req.body.user.userId,
        email: req.body.user.userEmail,
        user_type: req.body.user.userType,
        password: hash,
        state: req.body.user.status
      });
    console.log(authUser); // test
    authUser.save()
      .then( () => {
        const user = new Student (req.body.user);
        user.save()
        .then(() => {
          res.status(200).json({
            message: 'signed up successfully!',
          });
        })
      })
        .catch( err => {
          console.log(err);
          res.status(500).json({
            message: 'Your signup was not successfull! Please try again!'
          });
        });
    });
});

//get last user ID
auth.get('/last-id', (req, res, next) => {
  AuthUser.find(function (err, users) {
    var lastid;
    if(users.length){
      lastid = users[users.length-1].user_id;
      var eId = +(lastid.slice(1));
      lastid = ('U' + (++eId).toString());
    } else {
      lastid= 'U0';
    }
    if (err) return handleError(err);
    res.status(200).json(
      {
        lastid: lastid
      }
    );
  });
});

//login user
auth.post('/signin', (req, res, next) => {
  let fetchedUser;
  AuthUser.findOne({ email: req.body.email })
  .then( user => {
    if (!user){
      res.status(401).json(
        {
          message: 'Invalid username or password!',
        });
    }
    fetchedUser = user;
    console.log(user);
    return bcrypt.compare(req.body.password, user.password);
  })
  .then( result => {
    if (!result) {
      res.status(401).json(
        {
          message: 'Invalid username or password!',
        });
    }
    // json web token here
    const token = jwt.sign({
      email:fetchedUser.email,
      user_id: fetchedUser.user_id,
      user_type: fetchedUser.user_type
    },
    'secret_long_text_asdvBBGH##$$sdddgfg567$33',
    {expiresIn:"1h"});
    res.status(200).json({
      message: 'user authentication successfull!',
      token:token,
      expiersIn: 1500000,
      user_type: fetchedUser.user_type,
    });
  })
  .catch(err => {
    console.log(err);
    res.status(401).json(
      {
        message: 'Invalid username or password!',
      });
  });
});



// add profile pic for user
auth.post('/student/image',checkAuth, multer({storage:storage}).array("images[]"), (req, res, next) => {
  const url = req.protocol + '://' + req.get("host");
  imagePath = url+ "/images/user/" +  req.files[0].filename;
  res.status(200).json({
    profile_pic: imagePath
  });
});


//update user
auth.post('/student/one',checkAuth, (req, res, next) => {
  Student.updateOne({ studentId: req.userData.user_id}, {
    studentName: req.body.studentName,
    profilePic: req.body.profilePic,
    email: req.body.email,
    contactno: req.body.contactno,
    gender: req.body.gender,
    location: req.body.location,
    class: req.body.class,
    stream: req.body.stream,
    subjects: req.body.subjects
  })
  .then((result) => {
    console.log(result);
    res.status(200).json({
      message: 'user profile updated successfully!',
    });
  })
  .catch(err=>{
    console.log(err);
    res.status(500).json({
      message: 'Profile Details update failed! Please Try Again!'
    });
  });
});

//update user
auth.post('/student/selected',checkAuth, (req, res, next) => {
  Student.updateOne({ studentId: req.body.studentId}, {
    // code here
  })
  .then((result) => {
    console.log(result);
    res.status(200).json({
      message: 'details updated successfully!',
    });
  })
  .catch(err=>{
    console.log(err);
    res.status(500).json({
      message: 'details update failed! Please Try Again!'
    });
  });
});



// get auth user
auth.get('/student/current',checkAuth, (req, res, next) => {
  Student.findOne({ studentId: req.userData.user_id}, function (err,user) {
    if (err) return handleError(err => {
      console.log(err);
      res.status(500).json(
        {
          message: 'Couldn\'t recieve Student Details! Please retry'
        });
    });
    res.status(200).json(
      {
        message: 'Student recieved successfully!',
        user: user
      }
    );
  });
});

// for ADMIN
// get all users except current user(admin)
auth.get('/student/all',checkAuth, (req, res, next) => {

  Student.find({studentId: {$ne: req.userData.user_id}}, function (err,users) {
    if (err) return handleError(err => {
      console.log(err);
      res.status(500).json(
        {
          message: 'Couldn\'t recieve student Details! Please retry'
        });
    });
    res.status(200).json(
      {
        message: 'student recieved successfully!',
        users: users
      }
    );
  });
});



// delete a user
auth.delete('/student/one/:id',checkAuth, (req, res, next) => {

  var removeUserQuery =  Student.deleteOne({studentId: req.params.id});
  var removeAuthUserQuery = AuthUser.delete({user_id: req.params.id});

  removeUserQuery.exec().then( () => {
    removeAuthUserQuery.exec().then( () => {
        res.status(200).json(
          {
            message: 'Student removed successfully!',
          }
        );
    })
  }).catch( (err) => {
    console.log(err);
    res.status(500).json(
      {
        message: 'Couldn\'t remove Student! Please retry!'
      });
  });
});


// get header details
auth.get('/header',checkAuth, (req, res, next) => {
      User.findOne({ userId: req.userData.user_id }, function (err,user) {
        if (err) return handleError(err => {
          console.log(err);
          res.status(500).json(
            {
              message: 'Couldn\'t recieve Header Details! Please retry'
            });
        });
        res.status(200).json(
          {
            user_type: req.userData.user_type,
            user_name: user.userName,
            profile_pic: user.profilePic
          }
        );
      });
});



module.exports = auth;
