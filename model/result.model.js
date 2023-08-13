const mongoose = require('mongoose');

// Define the result schema
const resultSchema = mongoose.Schema({
    studentName: {
        type: String,
        required: true
    },
    group: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true
    },
    examTime : {
        type :String,
        required : true
    },
    dateOfPublication: {
        type: Date,
        required: true,
        default: Date.now
    }
});

// Create the Result model based on the schema
const Result = mongoose.model('Result', resultSchema);

module.exports = Result;
