const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskControllers')

// Get all tasks
router.get('/',taskController.allTask);

// Add a new task
router.post('/', taskController.newTask);

// Delete a task
router.delete('/:id',taskController.deleteTask);

// Update task status
router.put('/:id',taskController.updateTask);

module.exports = router;