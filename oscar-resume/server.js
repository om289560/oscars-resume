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
const PORT = process.env.PORT || 8080; // Step 1

// Step 2
mongoose.connect( process.env.MONGODB_URI || 'mongodb://localhost/my_resume', {
    useNewUrlParser: true
});

//Configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use('/', routes);

// Step 3

if (process.env.NODE_ENV === 'production') {

}

app.listen(PORT, () => {
    log(`Server is starting at PORT: ${PORT}`)
});