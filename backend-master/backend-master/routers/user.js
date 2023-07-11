var express = require('express');
const router = express.Router();

const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

const {
  
  getUserById,
  getUser,
  updateUser,
  getAllusers,
  
} = require('../controlers/user');
const { isAuthenticated, isSignedIn } = require('../controlers/auth');



router.param('emailId', getUserById);
router.get('/alluser', getAllusers);
router.get('/:emailId',isSignedIn, isAuthenticated, getUser);
router.put('/:emailId',isSignedIn, isAuthenticated, updateUser);
// router.post('/upload',upload.single('file'), async (req, res) => {
//   const file = new File({
//     name: req.file.originalname,
//     type: req.file.mimetype,
//     size: req.file.size,
//     class: req.body.classId,
//   });

//   try {
//     await file.save();
//     res.send({ success: true, message: 'File uploaded successfully' });
//   } catch (error) {
//     res.status(500).send({ success: false, message: 'Error uploading file' });
//   }
// });



module.exports = router;