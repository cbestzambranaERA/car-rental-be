const express = require('express');
const mysql = require('mysql');
const server = express();

const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

server.use(helmet());
server.use(express.json());
server.use(cors());

const PORT = process.env.PORT || 5000;

// Import routes
const carRentals = require('./data/api/routes/carRentals');
server.use('/carRentals', carRentals); // Mount the carRentals route

// Create connection to the database
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Check if the database connection is successful
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database: ', err);
    return;
  }
  console.log('Connected to database');
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
