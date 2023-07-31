const Task = require('../models/Task');

module.exports.allTask = async (req, res) => {
    try {
      const tasks = await Task.find();
      res.json(tasks);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch tasks' });
    }
  };

  module.exports.newTask = async (req, res) => {
    try {
      // Process the request body and save the task
      const newTask = await Task.create(req.body);
  
      // Return the newly created task in the response
      res.status(201).json(newTask);
    } catch (error) {
      // console.log('Add task error:', error);
      res.status(500).json({ message: 'Failed to add task' });
    }
  };

  module.exports.deleteTask = async (req, res) => {
    const { id } = req.params;
  
    try {
      await Task.findByIdAndDelete(id);
      res.sendStatus(204);
    } catch (error) {
      res.status(400).json({ error: 'Failed to delete task' });
    }
  };

  module.exports.updateTask = async (req, res) => {
    const { id } = req.params;
    const { done } = req.body;
  
    try {
      await Task.findByIdAndUpdate(id, { done });
      res.sendStatus(204);
    } catch (error) {
      res.status(400).json({ error: 'Failed to update task status' });
    }
  }