const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

todoSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;