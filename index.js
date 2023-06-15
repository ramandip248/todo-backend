const express = require('express');
const db = require('./config/mongoose');
const taskRoutes = require('./routes/taskRoutes');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());


// Register task routes
app.use('/api/tasks', taskRoutes);

// Start the server
const port = 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});