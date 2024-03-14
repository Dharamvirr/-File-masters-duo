
// configDotenv.config();
const express = require('express');
const app = express();


// const database= require("./config/db");
// const dotenv=require('dotenv')

// dotenv.config();


const PORT = process.env.PORT || 3000;

// Define routes

database.connect();
app.listen(PORT, ()=>
{console.log(`Listening on port ${PORT}.`);})
// Routes 
// app.use('/api/files', require('./routes/files'));
// app.use('/files', require('./routes/show'));
// app.use('/files/download', require('./routes/download'));
