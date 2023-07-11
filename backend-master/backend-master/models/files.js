const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    size: { type: Number, required: true },
    url: { type: String, required: true },
    uploadedBy:{type: String ,required: true},
    purpose:{type: String ,required: true},
  });

module.exports = mongoose.model('File', fileSchema);

