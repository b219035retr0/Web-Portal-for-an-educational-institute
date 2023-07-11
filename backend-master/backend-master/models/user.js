const mongoose = require("mongoose");
const { Number } = require("twilio/lib/twiml/VoiceResponse");


const userSchema2 = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
  
    collegeId:{
        type: String
    },
    name: {
        type: String
    },
    email: {
            type: String,
            required: true,
            unique: true,  
    },
    skill:{
        type: [String],
        default:[]
    },
    cv: [{ type: mongoose.Schema.Types.ObjectId, ref: 'File' }],
    role:{
        type:Number,
      
    }
});
module.exports = mongoose.model('User', userSchema2);
