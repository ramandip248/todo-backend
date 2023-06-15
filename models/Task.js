const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true 
},
  date: { 
    type: Date,
    required: true },
  done: { 
    type: Boolean, 
    default: false 
},
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;