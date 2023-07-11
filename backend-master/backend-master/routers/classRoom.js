const express = require('express');
const router = express.Router();
const Class = require('../models/classrooms');
const File = require('../models/files');
const multer  = require('multer')
const path = require('path');
const fs = require('fs');
const { default: mongoose } = require('mongoose');
const { isAuthenticated, isSignedIn } = require('../controlers/auth');
const User = require('../models/user');


const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    const dir = `./uploads/${req.params.classId}`;
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

router.param('classId', (req, res, next, classId) => {
 
    Class.findById(classId).exec((err, class1) => {
        if (err || !class1) {
            return res.status(400).json({error: 'Class not found '});
        }
        req.class = class1;
        next();
    });
});

router.post('/createClass', (req, res) => {
    const { name } = req.body;
    console.log(name);
    var class1 = {name:name};
  
    try {
      new Class(class1).save().then((classroom)=>{
        res.json(classroom);
      });
  
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Unable to create classroom' });
    }
});
  
router.get('/classrooms', async (req, res) => {
  try {
    const classrooms = await Class.find();
    res.json(classrooms);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch classrooms' });
  }
});


// GET /api/classrooms/:classroomId/files/:filename
router.get('/:classId/files/:filename', (req, res) => {
  const file = path.join(__dirname, `../uploads/${req.params.classId}/${req.params.filename}`);
  res.sendFile(file, (err) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
});


// router.get('/:classId/files/:filename', async (req, res) => {
//   try {
//     const file = await File.findOne({ classId: req.params.classId, name: req.params.filename });
//     if (!file) {
//       return res.status(404).json({ message: 'File not found' });
//     }
//     const filePath = path.join(__dirname, '..', 'uploads', req.params.classId, req.params.filename);
//     res.sendFile(filePath);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

// router.get('/download/:fileId', async (req, res) => {
//     console.log(req.params.filename)
//     const file = await File.findOne({ _id: req.params.fileId });
  
//     if (!file) {
//       return res.status(404).send('File not found');
//     }
  
//     res.set('Content-Type', file.contentType);
//     res.send(file.data);
//   });
  

  router.post('/:name/:classId/files', upload.single('file'), async (req, res) => {
    const { filename, mimetype, size } = req.file;
    

  
    
    console.log(`http://localhost:3001/uploads/${req.params.classId}/${filename}`)
    const newFile =  new File({
      name: filename,
      url: `http://localhost:3001/uploads/${req.params.classId}/${filename}`,
      type: mimetype,
      size: size,
      uploadedBy:req.params.name,
      purpose:req.body.purpose
 
    });

    await newFile.save();
    
    try {
      const classroom = await Class.findByIdAndUpdate(
        mongoose.Types.ObjectId( req.params.classId), 
        { $push: { files: newFile._id } },
        { new: true }
      );
      res.json({filename: filename, classroom: classroom});

    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
router.get('/:classId/files', async (req, res) => {
  const classId = req.params.classId;

  try {
    // find the classroom by ID
    const classroom = await Class.findById(classId);

    // populate the files array of the classroom with the file documents
    const files = await File.find({ _id: { $in: classroom.files } });

    res.status(200).json(files);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
  });
  


module.exports = router;
