const mongoose = require('mongoose');

const fileSchema1 = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    size: { type: Number, required: true },
  });

module.exports = mongoose.model('Cv', fileSchema1);

