
  const mongoose = require('mongoose');

  mongoose.connect("mongodb://localhost:27017/todo-list");
  
  const db = mongoose.connection;
  
  db.on('error',console.error.bind(console,'error connecting to mongodb'));
  
  db.once('open',function(){
      console.log("connected to mongodb")
  })
  
  module.exports = db;