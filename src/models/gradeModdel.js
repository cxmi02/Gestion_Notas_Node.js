const mongoose = require('mongoose');

const gradeSchema = new mongoose.Schema({
    name: String,
    grade: Number,
    id: Number
});

const Grade = mongoose.model('Grade', gradeSchema);

module.exports = Grade;