const express = require('express');
const router = express.Router();
const Alumni = require('../models/Alumni');
// const File = require('../models/files');
// const multer  = require('multer');
const multer = require('multer');
// const upload = multer({ dest: 'uploads/' });
const path = require('path');
const fs = require('fs');
const { default: mongoose } = require('mongoose');
const { isAuthenticated, isSignedIn } = require('../controlers/auth');
const util = require("util");
const Cv = require('../models/cv');
// const User = require('../models/user');


const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    const dir = `./uploads/${req.body.email}`;
    fs.mkdirSync(dir, { recursive: true });
    callback(null, dir);
  },
  filename: (req, file, callback) => {
    const filename = `${file.originalname}`;
    callback(null, filename);
  },
});
const upload = multer({ storage });

router.use('/uploads', express.static('uploads'));

// router.param('email', (req, res, next, email) => {
 
//     Alumni.findOne({email:email}).exec((err, class1) => {
//         if (err || !class1) {
//             return res.status(400).json({error: 'Class not found '});
//         }
//         req.alumni = class1;
//         next();
//     });
// });
router.post('/createAlumni',upload.single("file"),async (req, res) => {
  console.log("hi");
  // console.log(req.files['image'][0].originalname);
  // try {    // Create a new image record for the uploaded image file
  //   const image = new Image({      name: req.files['image'].originalname,
  //     // url: http://localhost:3001/uploads/images/${req.files['file1'][0].filename},   
  //        type: req.files['file1'][0].mimetype,
  //     size: req.files['file1'][0].size,    });
  //   await image.save();
  //   // Create a new pdf record for the uploaded pdf file
  //   const pdf = new File({      name: req.files['cv'].originalname,
  //   //  url: http://localhost:3001/uploads/pdfs/${req.files['file2'][0].filename},  
  //         type: req.files['file2'][0].mimetype,
  //     size: req.files['file2'][0].size,    });
  //   await pdf.save();
  //   // Return a success message and the uploaded files
  //   res.status(200).json({      message: 'Files uploaded successfully',
  //     files: {        image: image,
  //       pdf: pdf      }
  //   }); 
  //   const {  batch,name,email,profession} = req.body;
  //   console.log(name);
  //  var alumni1 = {batch:batch,name:name,email:email,profession:profession};
 
  //  try {
  //    new Alumni(alumni1).save().then((alumni)=>{
  //      res.json(alumni);
  //    });
 
  //  } catch (error) {
  //    console.error(error);
  //    res.status(500).json({ error: 'Unable to create Alumni' });
  //  }
  
  //       }
  //    catch (error) {
  //   console.error(error);    res.status(500).json({ message: 'Internal server error' });}
    
  })
   
  
router.get('/alumnis', async (req, res) => {
  try {
    const classrooms = await Alumni.find();
    // console.log(classrooms);
    res.json(classrooms);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch Alumnis' });
  }
});


module.exports = router;
