const mongoose = require('mongoose');

const footballersSchema = new mongoose.Schema({
name : { type:  String, description: "Required Field", required: true },
});

module.exports = mongoose.model('footballers', footballersSchema);