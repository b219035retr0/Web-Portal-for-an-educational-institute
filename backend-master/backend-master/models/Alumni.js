const mongoose = require("mongoose");
// const { Number } = require("twilio/lib/twiml/VoiceResponse");


const alumniSchema = mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
  
    batch:{
        type: String,
        required:[true,"Batch is required"]
    },
    name: {
        type: String,
        required:[true,"Name is required"]
    },
    email: {
            type: String,
            required: [true,"Email is required"],
            unique: true,  
    },
    profession:{
        type:String,
        required:[true,"Profession is required"]
    },
    image: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Image' }],

     cv: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Cv' }],
    // // role:{
    //     type:Number,
    // }
});
module.exports = mongoose.model('Alumni',alumniSchema);
