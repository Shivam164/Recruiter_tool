require("dotenv").config({path : "./config.env"});

const express = require('express');
const cors = require('cors');
const errorHandler = require('./controllers/error');
const connection = require('./config/db');
const mysql = require('mysql2');
const app = express();

app.use(cors({
    origin: '*'
}));

app.use(express.json());

// MIDDLEWARE FOR ROUTES
app.use('/api/candidate', require('./routes/candidate'));

// To handle any kind of error that might come in the above middlewares
app.use(errorHandler);

// simple query
connection.query('show tables', function (err, results, fields) {
  console.log("RESULT", results) // results contains rows returned by server
  console.log("FIELDS", fields) // fields contains extra metadata about results, if available
})

// Example with placeholders
connection.query('select 1 from dual where ? = ?', [1, 1], function (err, results) {
  console.log(results)
})

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
    console.log(`listening to PORT : ${PORT}`);
})