
  const mongoose = require('mongoose');
  const dotenv = require('dotenv');
  dotenv.config();

  mongoose.connect(process.env.MONGO_LOCAL_URI);
  
  const db = mongoose.connection;
  
  db.on('error',console.error.bind(console,'error connecting to mongodb'));
  
  db.once('open',function(){
      console.log("connected to mongodb")
  })
  
  module.exports = db;