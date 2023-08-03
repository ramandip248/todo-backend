const express = require('express');
const dotenv = require('dotenv');
const db = require('./config/mongoose');
const taskRoutes = require('./routes/taskRoutes');
const cors = require('cors');


dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());



// Register task routes
app.use('/api/tasks', taskRoutes);


// Start the serve
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});