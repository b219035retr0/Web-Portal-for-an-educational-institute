const mongoose = require('mongoose');



const classSchema2 = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    files: [{ type: mongoose.Schema.Types.ObjectId, ref: 'File' }],

});


module.exports = mongoose.model('Class', classSchema2);
