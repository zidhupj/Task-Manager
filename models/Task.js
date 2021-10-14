const mongoose = require('mongoose');

// Defines the mongoose schema for the data to be inserted in the mongodb database
const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must provide string'],
        trim: true,
        maxlength: [20, 'name cannot be more than 20 characters'],
    },
    completed: {
        type: Boolean,
        default: false,
    },
})

module.exports = mongoose.model('Task',TaskSchema)