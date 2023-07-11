const mongoose = require("mongoose");
const { Number } = require("twilio/lib/twiml/VoiceResponse");


const  classSchema= mongoose.Schema({
    classId:{
        type: String

    },
    className: {
        type: String
    },
});
module.exports = mongoose.model('Class', classSchema);
