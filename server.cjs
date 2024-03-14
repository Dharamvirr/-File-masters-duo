require ('dotenv').config();
const express = require('express');

const app = express();

//dotenv.config();

const PORT = process.env.PORT || 3000;

// Define routes
const connectDB = require('./config/db.cjs');
connectDB();
app.use(express.json());


// Routes 
app.use('/api/files', require('./routes/files.cjs'));
//app.use('/files', require('./routes/show'));
//app.use('/files/download', require('./routes/download'));
app.listen(PORT, ()=>
{console.log(`Listening on port ${PORT}.`);})