// Importing Modules
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// importing files
const routes = express();

//Define Global Variables
const app = express();
const log = console.log;
const PORT = 8080;

mongoose.connect('', {
    useNewUrlParser: true
});

//Configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false});
app.use('/', routes);

app.listen(PORT, () => {
    log(`Server is starting at PORT: ${PORT}`)
});