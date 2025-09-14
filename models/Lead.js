const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    message: String
}, { timestamps: true });

const Lead = mongoose.model('Lead', leadSchema);

module.exports = Lead;