require("dotenv").config({path : "./config.env"});

const express = require('express');
const cors = require('cors');
const errorHandler = require('./controllers/error');
const connection = require('./config/db');
const app = express();

app.use(cors({
    origin: '*'
}));

app.use(express.json());

// MIDDLEWARE FOR ROUTES
app.use('/api/candidate', require('./routes/candidate'));

// To handle any kind of error that might come in the above middlewares
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
    console.log(`listening to PORT : ${PORT}`);
})