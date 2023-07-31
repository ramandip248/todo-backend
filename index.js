const express = require('express');
const dotenv = require('dotenv');
const db = require('./config/mongoose');
const taskRoutes = require('./routes/taskRoutes');
const cors = require('cors');
const path = require('path');


dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

// // static files
app.use(express.static(path.join(__dirname,'../frontend/todo_frontend_app/build')));

app.get('*',function(req,res){
  res.sendFile(path.join(__dirname, '../frontend/todo_frontend_app/build/index.html'));
})

// Register task routes
app.use('/api/tasks', taskRoutes);



// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});