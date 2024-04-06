const express = require('express');
const mysql = require('mysql');
const server = express();

const cors = require('cors');
const helmet = reuire('helmet');
require('dontenv').config();

server.use(helmet());
server.use(express.json());
server.use(cors());

// create connection to the database using the 

