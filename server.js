const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

// Set up express app
const app = express();

require('./mongoDB');

// const contacts = require('../')

// Middleware
app.use(bodyParser.json());
app.use(cors());


// Route middlewares
const booksRoute = require('./routes/book');
app.use('/books', booksRoute);

// Listen for requests
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));