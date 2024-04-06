// const knex = require("knex");
 
// const config = require("../knexfile");
 
// const dbEnv = 'production';
 
// module.exports = knex(config[dbEnv]);

require('dotenv').config(); // Load environment variables from .env file

const dbConfig = {
  host: process.env.DB_HOST || 'localhost', // Hostname of the database server
  user: process.env.DB_USER || 'root', // Username for the database connection
  password: process.env.DB_PASSWORD || '', // Password for the database connection
  database: process.env.DB_NAME || 'my_database', // Name of the database
  port: process.env.DB_PORT || 3306 // Port number of the database server
};

module.exports = dbConfig;
